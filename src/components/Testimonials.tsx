import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, User } from "lucide-react";
import { supabase, isSupabaseConfigured } from "@/lib/supabaseClient";
import type { TestimonialData } from "@/lib/demoSchemas";
import gridBg from "@/assets/grid-bg.png";
import "./Testimonials.css";

const fallbackItems: TestimonialData[] = [
  { name: "Aarav Mehta", role: "Software Engineer Intern", text: "I shipped real production code in week 3. The workflow felt like an actual tech company — Git, reviews, deploys, the whole loop." },
  { name: "Priya Sharma", role: "ML Intern", text: "The mentorship and structured sprints turned theory into muscle memory. I now contribute confidently from day one." },
  { name: "Rohan Iyer", role: "Full-Stack Developer", text: "Orbital Learn doesn't teach you to pass exams — it trains you to build systems that scale." },
];

const Testimonials = () => {
  const [items, setItems] = useState<TestimonialData[]>(fallbackItems);

  useEffect(() => {
    if (!isSupabaseConfigured) return;

    const loadTestimonials = async () => {
      const { data, error } = await supabase
        .from("website_testimonials")
        .select("id, name, role, text, rating")
        .eq("is_active", true);

      console.log("Testimonials fetch result:", { data, error });

      if (!error && data) {
        setItems(
          data.map((item: any) => ({
            name: item.name,
            role: item.role,
            text: item.text,
            rating: item.rating ?? undefined,
          }))
        );
      }
    };

    void loadTestimonials();
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
    {/* Grid backdrop with glow */}
    <div className="absolute inset-0 z-0">
      <div
        className="absolute inset-0 opacity-70"
        style={{ backgroundImage: `url(${gridBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
      {/* Soft glowing orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/20 blur-[120px]" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="font-mono text-xs tracking-[0.3em] text-primary mb-4 glow-text">— TRUSTED BY MANY —</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground glow-text">Voices from Orbit</h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="flex justify-center w-full"
      >
        <div className="wrap_card">
          {items.slice(0, 3).map((t, i) => (
            <div className="anim-card" key={t.name}>
              <div className="page" style={{ margin: 0, width: 'calc(100% - 8px)', height: 'calc(100% - 8px)' }}>
                <div className="margin"></div>
                <div className="page-header">
                  <div className="profile-icon">
                    <User size={20} />
                  </div>
                  <div className="author-info">
                    <p className="author-name">{t.name}</p>
                    <p className="author-role">{t.role}</p>
                  </div>
                </div>
                <div className="stars-container">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="star-gold" />
                  ))}
                </div>
                <p className="testimonial-text">{t.text}</p>
              </div>
            </div>
          ))}

          <svg style={{ visibility: "hidden", width: 0, height: 0 }}>
            <defs>
              <linearGradient id="gradient-full" x1="0%" y1="0%" x2="120%" y2="120%">
                <stop offset="0%" stopColor="#ffffff"></stop>
                <stop offset="100%" stopColor="#ffffff00"></stop>
              </linearGradient>
              <linearGradient id="gradient-half" x1="-50%" y1="-50%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff"></stop>
                <stop offset="100%" stopColor="#ffffff00"></stop>
              </linearGradient>
            </defs>
          </svg>

          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
  );
};

export default Testimonials;
