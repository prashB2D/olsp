import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Brain, Cpu, TrendingUp, Eye, Zap, Database, CheckCircle2 } from "lucide-react";

const features = [
  { icon: Brain, title: "Predictive Analytics", desc: "Forecast student performance, dropout risks, and engagement patterns using custom ML models." },
  { icon: Eye, title: "Computer Vision", desc: "Image classification, object detection, and OCR pipelines built for real institutional use cases." },
  { icon: Zap, title: "Workflow Automation", desc: "Automate repetitive tasks — scheduling, grading, report generation — with intelligent agents." },
  { icon: Database, title: "Data Engineering", desc: "ETL pipelines, data lakes, and warehouses designed for scale and regulatory compliance." },
  { icon: TrendingUp, title: "NLP & Text Intelligence", desc: "Sentiment analysis, chatbots, and document intelligence trained on your domain data." },
  { icon: Cpu, title: "Edge Deployment", desc: "Run models on-device or on lightweight infrastructure — no cloud dependency required." },
];

const highlights = [
  "Custom model training & fine-tuning on institutional datasets",
  "API-first design — integrate into any existing system",
  "Real-time inference dashboards",
  "Student risk scoring & early-intervention alerts",
  "Automated quiz & assignment evaluation",
  "LLM-powered personalised learning paths",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }),
};

export default function AiMlSolutions() {
  return (
    <main className="space-bg min-h-screen text-foreground overflow-x-hidden">
      <div className="container mx-auto px-4 pt-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">
          <ArrowLeft size={15} /> Back to Home
        </Link>
      </div>

      <section className="relative py-28 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-accent/10 blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
            className="w-20 h-20 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-8">
            <Brain size={38} className="text-accent" />
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="font-mono text-xs tracking-[0.3em] text-accent mb-4">— ORBITAL SOLUTIONS —</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-black mb-6"
            style={{ background: "linear-gradient(135deg,#fff,hsl(280,70%,75%))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
            AI & ML Solutions
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Intelligent systems purpose-built to analyse, predict, and automate — bringing the power of machine learning to education and enterprise workflows.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-14">Core Capabilities</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="p-7 rounded-2xl bg-card/40 backdrop-blur-sm border border-border hover:border-accent/40 transition-all group">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <f.icon size={20} className="text-accent" />
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
            className="font-display text-3xl md:text-4xl font-bold text-center mb-14">What's Inside</motion.h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div key={h} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-xl bg-card/30 border border-border">
                <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-sm leading-relaxed">{h}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl font-bold mb-4">Let's Build Something Intelligent</h2>
          <p className="text-muted-foreground mb-8">Discuss your data challenges with our AI/ML team.</p>
          <Link to="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-medium hover:shadow-[0_0_40px_hsl(var(--accent)/0.5)] transition-all">
            Start a Conversation
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
