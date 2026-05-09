import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Phone, ArrowDown } from "lucide-react";
import Hls from "hls.js";
import CreepyButton from "@/components/ui/creepy-button";

// ── Inline video player (autoplay, muted, loop) ──────────────────────────────
const HeroVideo = ({ src }: { src: string }) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.play().catch(() => {});
    } else if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: false });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => {}));
      return () => hls.destroy();
    }
  }, [src]);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
      style={{ opacity: 0.55 }}
    />
  );
};

// ── Framer-motion variants ────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const slowPop = {
  hidden: { opacity: 0, scale: 0.92, y: 18 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ── Component ─────────────────────────────────────────────────────────────────
const REVEAL_AFTER_MS = 2600; // ms before middle content reveals

const Hero = () => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), REVEAL_AFTER_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── Video background ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <HeroVideo src="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8" />
        {/* gradient overlay — keeps text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background" />
        {/* subtle grid texture */}
        <div className="absolute inset-0 grid-overlay opacity-20" />
      </div>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-24 flex flex-col items-center">

        {/* Badge — reveals after delay */}
        <AnimatePresence>
          {revealed && (
            <motion.div
              key="badge"
              variants={slowPop}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm text-xs font-mono mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              AI • ML • LMS • Enterprise Solutions
            </motion.div>
          )}
        </AnimatePresence>

        {/* ORBITAL LEARN — always visible, first to animate in */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
          className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.9] tracking-tight"
        >
          <span className="block text-gradient glow-text">ORBITAL</span>
          <span className="block text-gradient glow-text">LEARN</span>
        </motion.h1>

        {/* Private Limited — reveals after delay */}
        <AnimatePresence>
          {revealed && (
            <motion.p
              key="pvt"
              variants={slowPop}
              initial="hidden"
              animate="visible"
              custom={0.15}
              className="mt-3 text-[10px] sm:text-xs font-mono tracking-[0.4em] text-muted-foreground"
            >
              — PRIVATE LIMITED —
            </motion.p>
          )}
        </AnimatePresence>

        {/* Sub-headline — reveals after delay */}
        <AnimatePresence>
          {revealed && (
            <motion.h2
              key="sub"
              variants={slowPop}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="mt-8 text-xl sm:text-2xl md:text-3xl font-light max-w-3xl mx-auto"
            >
              Turn Learning into{" "}
              <span className="text-gradient font-semibold">Real Industry Experience</span>
            </motion.h2>
          )}
        </AnimatePresence>

        {/* Description — reveals after delay */}
        <AnimatePresence>
          {revealed && (
            <motion.p
              key="desc"
              variants={slowPop}
              initial="hidden"
              animate="visible"
              custom={0.45}
              className="mt-6 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground leading-relaxed"
            >
              Train inside a product-driven environment with real repositories,
              CI/CD pipelines, team workflows, and live deployments — just like
              in actual tech companies.
            </motion.p>
          )}
        </AnimatePresence>

        {/* CTA Buttons — always visible, second to animate in */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* CreepyButton — same pill sizing as Connect With Us */}
          <CreepyButton
            href="#programs"
            coverClassName="bg-primary text-primary-foreground text-sm font-medium hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all"
          >
            <Rocket size={18} />
            Explore ORBIT
          </CreepyButton>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-foreground/20 text-sm font-medium backdrop-blur-sm hover:bg-foreground/5 transition-all"
          >
            <Phone size={18} />
            Connect With Us
          </a>
        </motion.div>

        {/* Scroll indicator — appears after full reveal */}
        <AnimatePresence>
          {revealed && (
            <motion.div
              key="scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
              <span className="text-[10px] font-mono tracking-widest text-muted-foreground">
                SCROLL
              </span>
              <ArrowDown size={16} className="animate-bounce text-muted-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
