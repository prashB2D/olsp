import { motion } from "framer-motion";
import { Check, Video, Target, BookOpen, Settings } from "lucide-react";

const groups = [
  {
    title: "In the Course",
    Icon: Target,
    items: ["Live + Recorded Classes", "Community Access", "Weekly 1:1 Support", "Mock Quizzes & Reviews", "Level & XP-Based Learning", "Course + Internship Certification", "Performance-Based LOR", "Connect with Other Learners", "Profile as Resume (Track Your Level)", "Earn & Redeem Points (Orbital Store)"],
    live: true,
  },
  {
    title: "In Every Class",
    Icon: BookOpen,
    items: ["Sprint-Based Tasks", "Live Class Session", "Quick Quiz (Weekly)", "Notes & Resources", "Doubt Solving in Every Class"],
  },
  {
    title: "Industry Workflow",
    Icon: Settings,
    items: ["Real Projects", "Team Work", "Project Mentor Guidance", "Git, CI/CD & Deployment", "Real Industry Workflow", "Practical Industry Insights"],
  },
];

const WhyOrbital = () => (
  <section className="relative py-32">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-primary mb-4">— WHY ORBITAL LEARN —</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold">Built like a real company.</h2>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group/card relative p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary/40 transition-all overflow-hidden"
          >
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
              style={{ background: "radial-gradient(400px circle at 50% 0%, hsl(var(--primary)/0.08), transparent 60%)" }} />

            {g.live && (
              <div className="absolute top-5 right-5 flex items-center gap-1.5 text-[10px] font-mono">
                <span className="w-2 h-2 rounded-full bg-destructive animate-record" />
                <span className="text-destructive font-bold tracking-wider">LIVE</span>
                <Video size={12} className="text-destructive" />
              </div>
            )}

            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center">
                <g.Icon size={18} className="text-primary" strokeWidth={1.5} />
              </span>
              <h3 className="font-display text-xl font-bold">{g.title}</h3>
            </div>

            <ul className="space-y-2 relative">
              {g.items.map((it) => (
                <li
                  key={it}
                  className="group/item flex items-start gap-3 text-sm text-muted-foreground rounded-lg px-3 py-2 -mx-3 cursor-default transition-all duration-300 hover:bg-primary/5 hover:text-foreground hover:translate-x-1 hover:shadow-[inset_2px_0_0_0_hsl(var(--primary))]"
                >
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-success/15 border border-success/40 flex items-center justify-center transition-all duration-300 group-hover/item:bg-success/30 group-hover/item:scale-110">
                    <Check size={12} className="text-success" strokeWidth={3} />
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyOrbital;
