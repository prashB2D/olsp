import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft, UserCheck, BarChart2, FileText, Award, GitBranch,
  Star, CheckCircle2, Briefcase, Code2
} from "lucide-react";

const features = [
  { icon: BarChart2, title: "Skill Tracking", desc: "Visual skill maps showing proficiency levels across languages, frameworks, and tools — updated in real time through task completion." },
  { icon: GitBranch, title: "Project History", desc: "Every repository contribution, pull request, and deployment is logged and visible on the student's profile." },
  { icon: Award, title: "Badge & XP System", desc: "Achievements unlock badges that signal skill depth — viewable by mentors, peers, and recruiters." },
  { icon: FileText, title: "Profile as Resume", desc: "Each student's Orbital profile doubles as a living resume — shareable with a single link." },
  { icon: Briefcase, title: "Industry Readiness Score", desc: "An algorithmic score measuring a student's readiness for real-world roles, based on tasks, quizzes, and project output." },
  { icon: Code2, title: "1st–10th Grade Student Stories", desc: "Not just college students — Orbital tracks growth from foundational skills all the way to advanced engineering readiness." },
];

const highlights = [
  "Student data story from basics to production-level skills",
  "College student grade system — GPA, SGPA, CGPA",
  "Live quiz scores & performance history",
  "Scan-ready certification & resume QR code",
  "Mentor-assigned badges and notes",
  "Task sprint completion tracking",
  "Leaderboard rankings — public & cohort-level",
  "Downloadable PDF portfolio report",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }),
};

export default function TalentRepository() {
  return (
    <main className="space-bg min-h-screen text-foreground overflow-x-hidden">
      <div className="container mx-auto px-4 pt-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">
          <ArrowLeft size={15} /> Back to Home
        </Link>
      </div>

      <section className="relative py-28 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-orange-500/10 blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
            className="w-20 h-20 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center mx-auto mb-8">
            <UserCheck size={38} className="text-orange-400" />
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="font-mono text-xs tracking-[0.3em] text-orange-400 mb-4">— ORBITAL SOLUTIONS —</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-black mb-6"
            style={{ background: "linear-gradient(135deg,#fff,#fdba74)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
            Talent Repository
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            A living record of every student's complete journey — skills, projects, performance, certifications, and industry readiness — all in one shareable, scannable profile.
          </motion.p>
        </div>
      </section>

      {/* Student Journey Visual */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="p-8 rounded-2xl bg-card/40 border border-border backdrop-blur-sm text-center">
            <Star size={28} className="text-orange-400 mx-auto mb-4" />
            <p className="font-mono text-xs tracking-widest text-orange-400 mb-3">STUDENT GROWTH STORY</p>
            <h3 className="font-display text-2xl font-bold mb-3">From Beginner → Production-Ready</h3>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Whether a student starts at grade 1 basics or joins as a college freshman, their full journey is stored, tracked, and visible — a complete story of growth that speaks louder than any certificate.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Foundation", "Intermediate", "Advanced", "Project Work", "Internship", "Production"].map((stage, i) => (
                <motion.span key={stage} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs font-mono">
                  {stage}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-14">Repository Features</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="p-7 rounded-2xl bg-card/40 backdrop-blur-sm border border-border hover:border-orange-500/40 transition-all group">
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <f.icon size={20} className="text-orange-400" />
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
            className="font-display text-3xl md:text-4xl font-bold text-center mb-14">What's Tracked</motion.h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div key={h} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-xl bg-card/30 border border-border">
                <CheckCircle2 size={18} className="text-orange-400 mt-0.5 shrink-0" />
                <span className="text-sm leading-relaxed">{h}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl font-bold mb-4">Build Your Student's Success Story</h2>
          <p className="text-muted-foreground mb-8">Join Orbital Learn — where your profile tells your story.</p>
          <Link to="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white font-medium hover:shadow-[0_0_40px_rgba(251,146,60,0.4)] transition-all">
            Talk to Us
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
