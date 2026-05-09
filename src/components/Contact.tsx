import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Instagram, Twitter, Send } from "lucide-react";

const Contact = () => (
  <section id="contact" className="relative py-32 overflow-hidden">
    <div className="absolute inset-0 stars opacity-30" />
    <div className="container mx-auto px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="font-mono text-xs tracking-[0.3em] text-primary mb-4">— CONNECT —</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">Let's Launch Together</h2>
          <p className="mt-4 text-muted-foreground">Reach out — we usually respond within 24 hours.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.a
            href="mailto:hello@orbitallearn.com"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary/50 transition-all group"
          >
            <Mail className="text-primary mb-4" size={28} />
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-muted-foreground text-sm">hello@orbitallearn.com</p>
            <Send size={14} className="mt-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </motion.a>
          <motion.a
            href="tel:+919999999999"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary/50 transition-all group"
          >
            <Phone className="text-primary mb-4" size={28} />
            <h3 className="font-semibold mb-1">Phone</h3>
            <p className="text-muted-foreground text-sm">+91 99999 99999</p>
            <Send size={14} className="mt-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </motion.a>
        </div>
      </div>
    </div>

    {/* Floating social rail */}
    <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
      {[
        { icon: Linkedin, href: "#" },
        { icon: Instagram, href: "#" },
        { icon: Twitter, href: "#" },
      ].map((s, i) => (
        <a key={i} href={s.href} className="w-10 h-10 rounded-full border border-border bg-background/60 backdrop-blur-md flex items-center justify-center hover:border-primary hover:text-primary transition-all">
          <s.icon size={16} />
        </a>
      ))}
    </div>
  </section>
);

export default Contact;
