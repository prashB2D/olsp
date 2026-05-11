import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Instagram, Send, MapPin } from "lucide-react";

const XLogo = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const socialLinks = [
  { 
    id: "linkedin",
    icon: Linkedin, 
    href: "https://www.linkedin.com/company/orbital-learn/posts/?feedView=all",
    hoverColor: "#0A66C2"
  },
  { 
    id: "instagram",
    icon: Instagram, 
    href: "https://www.instagram.com/orbital_learn?igsh=MXhsNjNuaDlyemxwcg==",
    hoverColor: "#E1306C" // Instagram magenta glow
  },
  { 
    id: "x",
    icon: XLogo, 
    href: "https://x.com/OrbitalLearn",
    hoverColor: "#22d3ee" // Soft cyan
  },
];

const Contact = () => (
  <section id="contact" className="relative py-32 overflow-hidden">
    <div className="absolute inset-0 stars opacity-30" />
    <div className="container mx-auto px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="font-mono text-xs tracking-[0.3em] text-primary mb-4">— CONNECT —</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">Let's Launch Together</h2>
          <p className="mt-4 text-muted-foreground">Reach out — we usually respond within 24 hours.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=support@orbitallearn.com&su=Inquiry%20from%20Orbital%20Learn%20Website"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary/50 transition-all group flex flex-col cursor-pointer"
          >
            <Mail className="text-primary mb-4" size={28} />
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-muted-foreground text-sm">support@orbitallearn.com</p>
            <div className="mt-auto pt-4">
              <Send size={14} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
          </motion.a>

          <motion.a
            href="tel:8277617131"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary/50 transition-all group flex flex-col cursor-pointer"
          >
            <Phone className="text-primary mb-4" size={28} />
            <h3 className="font-semibold mb-1">Phone</h3>
            <p className="text-muted-foreground text-sm">8277617131</p>
            <div className="mt-auto pt-4">
              <Send size={14} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
          </motion.a>
        </div>
      </div>
    </div>

    {/* Floating social rail */}
    <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
      {socialLinks.map((s) => (
        <motion.a 
          key={s.id} 
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ 
            scale: 1.15, 
            y: -4, 
            boxShadow: `0px 0px 20px ${s.hoverColor}60`,
            borderColor: s.hoverColor,
            color: s.id === 'x' ? '#ffffff' : s.hoverColor
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-10 h-10 rounded-full border border-border bg-background/60 backdrop-blur-md flex items-center justify-center text-muted-foreground transition-colors cursor-pointer"
        >
          <s.icon size={16} />
        </motion.a>
      ))}
    </div>
  </section>
);

export default Contact;
