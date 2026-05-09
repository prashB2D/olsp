import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Settings, Link2, BarChart2, ShieldCheck, Code2, CheckCircle2 } from "lucide-react";

const features = [
  { icon: Settings, title: "Custom Workflow Builder", desc: "Design and automate business processes without writing a single line of custom logic — drag, configure, deploy." },
  { icon: Link2, title: "Third-Party Integrations", desc: "Seamlessly connect with ERP, CRM, HRM, payment gateways, and government APIs." },
  { icon: BarChart2, title: "Business Intelligence", desc: "Real-time KPI dashboards, custom reports, and exportable analytics for decision makers." },
  { icon: ShieldCheck, title: "Role-Based Security", desc: "Multi-tenant architecture with audit logs, IP whitelisting, and SOC2-grade controls." },
  { icon: Code2, title: "API-First Architecture", desc: "Every feature ships with a documented REST/GraphQL API — integrate anywhere." },
  { icon: Building2, title: "Enterprise-Scale Infrastructure", desc: "Load-balanced, containerised deployments — built to scale with your organisation." },
];

const highlights = [
  "Custom HR & payroll modules",
  "Inventory & supply-chain tracking",
  "Document management & e-signature",
  "Multi-branch, multi-currency support",
  "SLA-backed uptime & dedicated support",
  "On-premise or cloud deployment options",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }),
};

export default function EnterpriseApps() {
  return (
    <main className="space-bg min-h-screen text-foreground overflow-x-hidden">
      <div className="container mx-auto px-4 pt-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">
          <ArrowLeft size={15} /> Back to Home
        </Link>
      </div>

      <section className="relative py-28 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-emerald-500/10 blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
            className="w-20 h-20 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-8">
            <Building2 size={38} className="text-emerald-400" />
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="font-mono text-xs tracking-[0.3em] text-emerald-400 mb-4">— ORBITAL SOLUTIONS —</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-black mb-6"
            style={{ background: "linear-gradient(135deg,#fff,#6ee7b7)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
            Enterprise Applications
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Custom-built enterprise software that replaces spreadsheets, paper trails, and fragmented tools — with a single, scalable platform designed around your exact workflow.
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
                className="p-7 rounded-2xl bg-card/40 backdrop-blur-sm border border-border hover:border-emerald-500/40 transition-all group">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <f.icon size={20} className="text-emerald-400" />
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
                <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-sm leading-relaxed">{h}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl font-bold mb-4">Build Your Enterprise Platform</h2>
          <p className="text-muted-foreground mb-8">Tell us your business problem. We'll architect the solution.</p>
          <Link to="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-black font-medium hover:shadow-[0_0_40px_rgba(110,231,183,0.4)] transition-all">
            Get a Free Consultation
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
