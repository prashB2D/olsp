import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  GraduationCap, Brain, Building2, BookOpen, UserCheck,
  ArrowRight, Layers, Cpu, Settings, PlayCircle, Star,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────────
   Inline CSS for the CSS-flip  (no framer-motion rotate on the card itself
   to avoid the "instant-jump" glitch framer causes with rotateY + preserve-3d)
───────────────────────────────────────────────────────────────────────────── */
const flipStyles = `
  .flip-card-inner {
    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
    transition: transform 0.55s cubic-bezier(0.22,1,0.36,1);
  }
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  .flip-face {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
  .flip-face-back {
    transform: rotateY(180deg);
  }
`;

interface CardData {
  icon: React.ElementType;
  accentIcon: React.ElementType;
  title: string;
  frontDesc: string;
  backDesc: string;
  bullets: string[];
  route: string;
}

const cards: CardData[] = [
  {
    icon: GraduationCap,
    accentIcon: Layers,
    title: "Orbital Academic ERP",
    frontDesc: "Streamlined system for managing academic and institutional operations.",
    backDesc: "One platform for grades, attendance, fees, timetables, library, exams — and internship tracking. Built for institutions that want clarity at scale.",
    bullets: ["College grade system — GPA/SGPA/CGPA", "Fee & attendance workflows", "Exam module & hall tickets", "Internship & placement tracking"],
    route: "/solutions/orbital-academic-erp",
  },
  {
    icon: Brain,
    accentIcon: Cpu,
    title: "AI & ML Solutions",
    frontDesc: "Intelligent systems to analyse, predict, and automate workflows.",
    backDesc: "Custom ML models, NLP pipelines, and intelligent automation built for your data — not off-the-shelf demos.",
    bullets: ["Predictive student analytics", "Automated quiz evaluation", "NLP-powered chatbots", "Edge & cloud deployment"],
    route: "/solutions/ai-ml-solutions",
  },
  {
    icon: Building2,
    accentIcon: Settings,
    title: "Enterprise Applications",
    frontDesc: "Custom-built tools for business processes and automation.",
    backDesc: "Replace spreadsheets and fragmented tools with purpose-built enterprise software — designed for your exact workflow from day one.",
    bullets: ["Custom workflow builder", "Third-party API integrations", "Multi-branch, multi-currency", "On-premise or cloud"],
    route: "/solutions/enterprise-applications",
  },
  {
    icon: BookOpen,
    accentIcon: PlayCircle,
    title: "Orbital Learn Platform",
    frontDesc: "Industry-aligned learning with integrated internship workflows.",
    backDesc: "Live + recorded classes, real Git repos, XP gamification, live quizzes, and mentorship — all in one platform that works like an actual company.",
    bullets: ["Sprint-based tasks & CI/CD", "XP, badges & leaderboards", "Live quiz with auto-scoring", "Mentor 1:1 & LOR"],
    route: "/solutions/orbital-learn",
  },
  {
    icon: UserCheck,
    accentIcon: Star,
    title: "Orbital Talent Repository",
    frontDesc: "Track student skills, project work, performance, and industry readiness.",
    backDesc: "A living student profile that tracks every project, skill, badge, and quiz score — from basics all the way to production-level work.",
    bullets: ["Profile as scannable resume", "1st–10th grade student story", "Industry readiness score", "Downloadable PDF portfolio"],
    route: "/solutions/talent-repository",
  },
];

/* ── Single flip card (B&W theme) ─────────────────────────────────────────── */
const FlipCard = ({ card, index }: { card: CardData; index: number }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="flip-card relative"
      style={{ perspective: "1000px", height: "280px" }}
    >
      <div className="flip-card-inner">

        {/* ── FRONT (black bg, white text) ─────────────────────────────── */}
        <div
          className="flip-face rounded-2xl p-7 flex flex-col justify-between overflow-hidden"
          style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {/* subtle top-right star shimmer */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)" }} />

          <div>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <card.icon size={22} color="white" />
            </div>
            <h3 className="font-display text-xl font-bold mb-3 text-white">{card.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{card.frontDesc}</p>
          </div>
          <p className="text-[10px] font-mono tracking-widest mt-4" style={{ color: "rgba(255,255,255,0.15)" }}>HOVER TO EXPLORE</p>
        </div>

        {/* ── BACK (white bg, black text) ──────────────────────────────── */}
        <div
          className="flip-face flip-face-back rounded-2xl p-7 flex flex-col justify-between overflow-hidden"
          style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}
        >
          {/* subtle corner accent */}
          <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(0,0,0,0.06) 0%, transparent 70%)" }} />

          <div>
            <card.accentIcon size={18} className="mb-3" style={{ color: "rgba(0,0,0,0.4)" }} />
            <p className="text-sm leading-relaxed text-black mb-4">{card.backDesc}</p>
            <ul className="space-y-1.5">
              {card.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-xs" style={{ color: "rgba(0,0,0,0.6)" }}>
                  <span className="w-1 h-1 rounded-full bg-black shrink-0 opacity-40" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => navigate(card.route)}
            className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium transition-all hover:scale-105"
            style={{ background: "#0a0a0a", color: "white" }}
          >
            Learn More <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Flipped Astronaut Card (transparent, no box) ──────────────────────────── */
const AstronautCard = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
    className="relative flex items-end justify-center"
    style={{ height: "280px" }}
  >
    <style>{`
      @keyframes astronaut-float {
        0%, 100% { transform: scaleX(-1) translateY(0px) rotate(-3deg); }
        50% { transform: scaleX(-1) translateY(-18px) rotate(3deg); }
      }
    `}</style>
    <img
      src="https://uiverse.io/astronaut.png"
      alt="Astronaut"
      style={{
        width: "200px",
        animation: "astronaut-float 6s ease-in-out infinite",
        filter: "drop-shadow(0 0 30px rgba(155,64,252,0.4))",
        userSelect: "none",
        pointerEvents: "none",
      }}
    />
  </motion.div>
);

/* ── Section ─────────────────────────────────────────────────────────────── */
const Solutions = () => (
  <section id="solutions" className="relative py-32" style={{ overflow: "visible" }}>
    {/* inject flip-card CSS */}
    <style>{flipStyles}</style>

    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-primary mb-4">— OUR SOLUTIONS —</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold">What We Build</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          A constellation of products powering education and enterprise.
        </p>
        <p className="mt-2 text-xs font-mono tracking-widest" style={{ color: "rgba(255,255,255,0.2)" }}>
          HOVER CARDS TO EXPLORE
        </p>
      </motion.div>

      {/* 5 flip cards + 1 astronaut = 6 cells in a 3-col grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <FlipCard key={card.title} card={card} index={i} />
        ))}
        {/* Flipped astronaut next to Talent Repository */}
        <AstronautCard />
      </div>
    </div>
  </section>
);

export default Solutions;
