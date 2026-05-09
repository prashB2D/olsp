import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, GitBranch, Trophy, Zap, Users, Star, CheckCircle2, PlayCircle } from "lucide-react";

const features = [
  { icon: PlayCircle, title: "Live + Recorded Classes", desc: "Attend real-time sessions or rewatch recordings — structured around weekly sprints." },
  { icon: GitBranch, title: "Git & CI/CD Workflow", desc: "Every student works in real repositories with pull requests, code reviews, and pipeline deployments." },
  { icon: Trophy, title: "XP & Gamification", desc: "Level up through XP points, badges, leaderboards, and the Orbital Rewards Store." },
  { icon: Zap, title: "Live Quizzes", desc: "Weekly timed quizzes with auto-scoring, leaderboard ranking, and instant feedback." },
  { icon: Users, title: "Mentor Guidance", desc: "1:1 weekly check-ins, team stand-ups, and code reviews from industry mentors." },
  { icon: Star, title: "Certification + LOR", desc: "Course completion certificate, internship certificate, and performance-based Letter of Recommendation." },
];

const highlights = [
  "Sprint-based task delivery every week",
  "Real project repositories — not sandbox exercises",
  "Team collaboration with cross-functional roles",
  "Orbital Talent Repository — your profile is your resume",
  "Earn & redeem coins in the Orbital Store",
  "Community access + peer learning network",
  "Mock interview preparation modules",
  "Internship + placement support",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }),
};

export default function OrbitalLearnPage() {
  return (
    <main className="space-bg min-h-screen text-foreground overflow-x-hidden">
      <div className="container mx-auto px-4 pt-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">
          <ArrowLeft size={15} /> Back to Home
        </Link>
      </div>

      <section className="relative py-28 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-sky-500/10 blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
            className="w-20 h-20 rounded-2xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center mx-auto mb-8">
            <BookOpen size={38} className="text-sky-400" />
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="font-mono text-xs tracking-[0.3em] text-sky-400 mb-4">— ORBITAL SOLUTIONS —</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-black mb-6"
            style={{ background: "linear-gradient(135deg,#fff,#7dd3fc)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
            Learn Platform
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            An industry-aligned LMS built around real development workflows — not passive video watching. Students work like developers, collaborate like teammates, and grow like professionals.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-14">Platform Highlights</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="p-7 rounded-2xl bg-card/40 backdrop-blur-sm border border-border hover:border-sky-500/40 transition-all group">
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4 group-hover:bg-sky-500/20 transition-colors">
                  <f.icon size={20} className="text-sky-400" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-14">Everything You Get</motion.h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div key={h} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-xl bg-card/30 border border-border">
                <CheckCircle2 size={18} className="text-sky-400 mt-0.5 shrink-0" />
                <span className="text-sm leading-relaxed">{h}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl font-bold mb-4">Start Your Real Industry Journey</h2>
          <p className="text-muted-foreground mb-8">Join Orbital Learn and work like a developer from day one.</p>
          <Link to="/#programs"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-sky-500 text-white font-medium hover:shadow-[0_0_40px_rgba(125,211,252,0.4)] transition-all">
            Explore Programs
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
