import { Linkedin, Instagram, Twitter, Github } from "lucide-react";
import logo from "@/assets/logo.png";

const cols = [
  { title: "Quick Links", items: ["Home", "About", "Mission", "Programs"] },
  { title: "Courses", items: ["AI / ML", "Web Dev", "Data Science", "DevOps"] },
  { title: "Products", items: ["Academic ERP", "Learn Platform", "Talent Repository"] },
  { title: "Contact", items: ["Email", "Phone", "Bengaluru, IN"] },
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
            {[Linkedin, Instagram, Twitter, Github].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Icon size={14} />
              </a>
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
