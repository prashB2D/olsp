import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap, CheckCircle2, Layers, BarChart2, Users, FileText, Shield } from "lucide-react";

const features = [
  { icon: Layers, title: "Unified Academic Dashboard", desc: "Single pane of glass for admins, faculty, and students — timetables, attendance, grades and fee records in one place." },
  { icon: BarChart2, title: "Real-Time Analytics", desc: "Live dashboards showing enrollment stats, subject-wise performance trends, and faculty utilisation rates." },
  { icon: Users, title: "Multi-Role Access Control", desc: "Fine-grained permissions for administrators, department heads, faculty, and students." },
  { icon: FileText, title: "Automated Report Generation", desc: "One-click export of progress reports, transcripts, and compliance documents in PDF or Excel." },
  { icon: Shield, title: "Secure & Compliant", desc: "Data encrypted at rest and in transit; built to meet government educational compliance standards." },
  { icon: GraduationCap, title: "Internship & Placement Tracking", desc: "Track student placement drives, offer letters, and internship durations from a central panel." },
];

const highlights = [
  "College student grade system — GPA, SGPA, CGPA auto-calculation",
  "Attendance management with leave & approval workflows",
  "Fee management with payment gateway integration",
  "Timetable builder with conflict detection",
  "Examination module: hall tickets, result publishing, re-evaluation",
  "Library management — book issue, return, fine tracking",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }),
};

export default function OrbitalERP() {
  return (
    <main className="space-bg min-h-screen text-foreground overflow-x-hidden">
      {/* Back nav */}
      <div className="container mx-auto px-4 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
        >
          <ArrowLeft size={15} /> Back to Home
        </Link>
      </div>

      {/* Hero */}
      <section className="relative py-28 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
            className="w-20 h-20 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto mb-8">
            <GraduationCap size={38} className="text-primary" />
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="font-mono text-xs tracking-[0.3em] text-primary mb-4">— ORBITAL SOLUTIONS —</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-gradient glow-text mb-6">
            Academic ERP
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            A streamlined, institution-grade ERP system built to manage every facet of academic and operational life — from enrollments to internships, all in one unified platform.
          </motion.p>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-14">
            Core Capabilities
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="p-7 rounded-2xl bg-card/40 backdrop-blur-sm border border-border hover:border-primary/40 transition-all group">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights checklist */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-14">
            What's Inside
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div key={h} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-xl bg-card/30 border border-border">
                <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm leading-relaxed">{h}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl font-bold mb-4">Ready to Modernise Your Institution?</h2>
          <p className="text-muted-foreground mb-8">Talk to our team and get a customised demo for your campus.</p>
          <Link to="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all">
            Get In Touch
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
