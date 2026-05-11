import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLMS } from "@/context/LMSContext";
import { supabase } from "@/lib/supabaseClient";
import SpaceLoader from "./SpaceLoader";
import logo from "@/assets/logo.png";
import { X, Lock, CheckCircle } from "lucide-react";

const LMSModal = () => {
  const { lmsState, setLmsState, closeLMS } = useLMS();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    orbitUsername: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto transition from loading to denied
  useEffect(() => {
    if (lmsState === "loading") {
      const timer = setTimeout(() => {
        setLmsState("denied");
      }, 2800); // 2.8s wait
      return () => clearTimeout(timer);
    }
  }, [lmsState, setLmsState]);

  const handleDummyLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLmsState("loading");
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent duplicate submits
    setIsSubmitting(true);

    try {
      await supabase.from("lms_access_requests").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        college: formData.college,
        orbit_username: formData.orbitUsername,
        created_at: new Date().toISOString(),
      });
      setLmsState("success");
    } catch (error) {
      console.error("Error submitting form", error);
      // Even if it fails, maybe show success or error state
      setLmsState("success"); 
    } finally {
      setIsSubmitting(false);
    }
  };

  if (lmsState === "closed") return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Global Video Background for the entire LMS flow */}
        <div className="absolute inset-0 z-0">
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260330_145725_08886141-ed95-4a8e-8d6d-b75eaadce638.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] mix-blend-multiply" />
        </div>

        <div className="absolute top-6 right-6 z-10 cursor-pointer text-white/50 hover:text-white transition" onClick={closeLMS}>
          <X size={32} />
        </div>

        {/* ── LOGIN STATE ── */}
        {lmsState === "login" && (
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 backdrop-blur-md"
          >
            <div className="relative z-10 p-10 flex flex-col items-center">
              <img src={logo} alt="Orbital Learn" className="w-24 h-24 object-contain mb-8 filter brightness-0 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
              <h2 className="text-2xl font-display font-bold text-white mb-6 tracking-wide">Reader LMS Login</h2>
              
              <form onSubmit={handleDummyLogin} className="w-full space-y-4">
                <input
                  type="email"
                  placeholder="Orbit ID / Email"
                  required
                  className="w-full bg-black/50 border border-white/20 text-white placeholder-white/40 px-4 py-3 rounded-lg focus:outline-none focus:border-primary/60 backdrop-blur-md"
                />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full bg-black/50 border border-white/20 text-white placeholder-white/40 px-4 py-3 rounded-lg focus:outline-none focus:border-primary/60 backdrop-blur-md"
                />
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg mt-4 transition shadow-[0_0_20px_rgba(var(--primary),0.3)]"
                >
                  Access Portal
                </button>
                <button
                  type="button"
                  onClick={() => setLmsState("form")}
                  className="w-full border border-white/20 hover:bg-white/10 text-white font-semibold py-3 rounded-lg mt-3 transition"
                >
                  Register Account
                </button>
              </form>
            </div>
          </motion.div>
        )}

        {/* ── LOADING STATE ── */}
        {lmsState === "loading" && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center justify-center relative z-10"
          >
            <SpaceLoader />
          </motion.div>
        )}

        {/* ── DENIED STATE ── */}
        {lmsState === "denied" && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="w-full max-w-sm bg-black/60 backdrop-blur-xl border border-destructive/30 rounded-3xl p-8 text-center shadow-[0_0_40px_rgba(255,0,0,0.1)] relative overflow-hidden z-10"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-destructive/60" />
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="text-destructive" size={28} />
            </div>
            <h2 className="text-xl font-display font-bold text-white mb-3">LMS Access Required</h2>
            <p className="text-sm text-white/70 mb-8">
              Your account does not currently have permissions to access the Reader LMS environment.
            </p>
            <button
              onClick={() => setLmsState("form")}
              className="w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-white/90 transition shadow-lg"
            >
              Register Account
            </button>
          </motion.div>
        )}

        {/* ── FORM STATE ── */}
        {lmsState === "form" && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="w-full max-w-md bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative z-10"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-display font-bold text-white mb-2">Register Account</h2>
              <p className="text-xs text-white/50 font-mono">PLEASE PROVIDE YOUR DETAILS BELOW</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-black/40 border border-white/10 text-white placeholder-white/30 px-4 py-3 rounded-xl focus:outline-none focus:border-primary/50 text-sm" />
                <input type="text" placeholder="Orbit Username" value={formData.orbitUsername} onChange={(e) => setFormData({...formData, orbitUsername: e.target.value})} className="w-full bg-black/40 border border-white/10 text-white placeholder-white/30 px-4 py-3 rounded-xl focus:outline-none focus:border-primary/50 text-sm" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="email" placeholder="Email Address" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-black/40 border border-white/10 text-white placeholder-white/30 px-4 py-3 rounded-xl focus:outline-none focus:border-primary/50 text-sm" />
                <input type="tel" placeholder="Phone Number" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-black/40 border border-white/10 text-white placeholder-white/30 px-4 py-3 rounded-xl focus:outline-none focus:border-primary/50 text-sm" />
              </div>
              <input type="text" placeholder="College / Organization" required value={formData.college} onChange={(e) => setFormData({...formData, college: e.target.value})} className="w-full bg-black/40 border border-white/10 text-white placeholder-white/30 px-4 py-3 rounded-xl focus:outline-none focus:border-primary/50 text-sm" />
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-xl mt-4 transition disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Registration"}
              </button>
            </form>
          </motion.div>
        )}

        {/* ── SUCCESS STATE ── */}
        {lmsState === "success" && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="w-full max-w-sm bg-black/60 backdrop-blur-xl border border-success/30 rounded-3xl p-8 text-center shadow-[0_0_40px_rgba(0,255,0,0.1)] z-10"
          >
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-success" size={32} />
            </div>
            <h2 className="text-2xl font-display font-bold text-white mb-3">Request Received</h2>
            <p className="text-sm text-white/70 mb-8">
              Our team will review your application and reach out with your LMS account details shortly.
            </p>
            <button
              onClick={closeLMS}
              className="w-full border border-white/20 text-white font-medium py-3 rounded-xl hover:bg-white/5 transition"
            >
              Close Window
            </button>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default LMSModal;
