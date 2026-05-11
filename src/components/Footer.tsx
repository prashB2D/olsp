import logo from "@/assets/logo.png";
import { socialLinks } from "./Contact";
import { motion } from "framer-motion";

const cols = [
  { title: "Quick Links", items: ["Home", "About", "Mission", "Programs"] },
  { title: "Courses", items: ["AI / ML", "Web Dev", "Data Science", "DevOps"] },
  { title: "Products", items: ["Academic ERP", "Learn Platform", "Talent Repository"] },
  { title: "Contact", items: ["support@orbitallearn.com", "+91 82776 17131", "Indore, MP"] },
];

const Footer = () => (
  <footer className="relative border-t border-border pt-20 pb-10">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-5 gap-10 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Orbital Learn" className="h-10 w-10 invert brightness-0" />
            <span className="font-display font-bold tracking-widest">ORBITAL.LEARN</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Building industry-ready talent through structured learning and real-world training.
          </p>
          <div className="flex gap-3 mt-6">
            {socialLinks.map((s) => (
              <motion.a 
                key={s.id} 
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.15, 
                  y: -4, 
                  boxShadow: `0px 0px 15px ${s.hoverColor}60`,
                  borderColor: s.hoverColor,
                  color: s.id === 'x' ? '#ffffff' : s.hoverColor
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-colors cursor-pointer"
              >
                <s.icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-semibold text-sm mb-4 tracking-wide">{c.title}</h4>
            <ul className="space-y-2">
              {c.items.map((it) => (
                <li key={it}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{it}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs font-mono text-muted-foreground">© 2026 ORBITAL LEARN PRIVATE LIMITED. All rights reserved.</p>
        <p className="text-xs font-mono text-muted-foreground tracking-widest">— BUILT IN ORBIT —</p>
      </div>
    </div>
  </footer>
);

export default Footer;
