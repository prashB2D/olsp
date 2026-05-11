import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { GraduationCap, TrendingUp, FolderGit2, Rocket } from "lucide-react";
import ImpactRobot from "./robots/ImpactRobot";

const Counter = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toString() + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count]);

  useEffect(() => rounded.on("change", (v) => { if (ref.current) ref.current.textContent = v; }), [rounded]);

  return <span ref={ref}>0{suffix}</span>;
};

const stats = [
  { icon: GraduationCap, num: 50, suffix: "+", label: "Interns Trained", desc: "Worked in real development environments", shadow: "brutal-card-red" },
  { icon: TrendingUp, text: "Beginner → Production", label: "Skill Development", desc: "Measured through real tasks & projects", shadow: "brutal-card-green" },
  { icon: FolderGit2, num: 30, suffix: "+", label: "Active Repositories", desc: "Hands-on project-based development", shadow: "brutal-card-green" },
  { icon: Rocket, num: 10, suffix: "+", label: "Project & System Builds", desc: "ERP, LMS, AI & enterprise solutions", shadow: "brutal-card-red" },
];

const Impact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  return (
    <section id="impact" ref={sectionRef} className="relative py-32 paper-grid text-black">
      <ImpactRobot 
        anchorRef={sectionRef} 
        colors={{ bg: '#1a1a1a', accent: '#30d0de' }} 
        topOffset={-40} 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-black/60 mb-4">— BY THE NUMBERS —</p>
          <h2 className="font-display text-4xl md:text-6xl font-black text-black">OUR IMPACT</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`${s.shadow} p-6 bg-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all`}
          >
            <s.icon className="text-black mb-4" size={28} strokeWidth={2.5} />
            <div className="font-display text-4xl md:text-5xl font-black text-black mb-2">
              {s.num !== undefined ? <Counter to={s.num} suffix={s.suffix} /> : <span className="text-2xl">{s.text}</span>}
            </div>
            <p className="font-bold text-black uppercase text-sm tracking-wide">{s.label}</p>
            <p className="text-black/60 text-xs mt-1">{s.desc}</p>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Impact;
