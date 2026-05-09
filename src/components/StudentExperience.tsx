import { motion } from "framer-motion";
import { Code2, GitBranch, Users, Layers, LineChart } from "lucide-react";

const points = [
  { icon: Code2, title: "Real Projects & Repositories", desc: "Work on production-grade codebases, not classroom exercises." },
  { icon: GitBranch, title: "Actual Development Workflow", desc: "Task → Code → Review → Deploy. The real loop." },
  { icon: Users, title: "Team Collaboration", desc: "Handle real responsibilities inside cross-functional teams." },
  { icon: Layers, title: "Strong Fundamentals", desc: "Build from the core with hands-on practical exposure." },
  { icon: LineChart, title: "Track Your Growth", desc: "Measured progress through the Orbital Talent Repository." },
];

const StudentExperience = () => (
  <section className="relative pt-40 pb-32 overflow-hidden">
    <div className="absolute inset-0 grid-overlay opacity-10" />
    <div className="container mx-auto px-4 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-accent mb-4">— STUDENT EXPERIENCE —</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">How Students Grow</h2>
        <p className="text-lg text-muted-foreground">
          Students work inside a <span className="text-foreground font-semibold">real development environment</span> — not a classroom.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-4">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-5 p-6 rounded-2xl border border-border bg-card/30 hover:bg-card/60 hover:border-accent/40 transition-all group"
          >
            <div className="shrink-0 w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <p.icon size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
            <span className="ml-auto font-mono text-xs text-muted-foreground">0{i + 1}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-center max-w-2xl mx-auto text-muted-foreground"
      >
        Students don't just learn — they gain <span className="text-foreground font-semibold">real experience</span> and become <span className="text-primary font-semibold">confident, industry-ready developers</span>.
      </motion.p>
    </div>
  </section>
);

export default StudentExperience;
