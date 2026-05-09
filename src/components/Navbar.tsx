import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#solutions", label: "Solutions" },
  { href: "#mission", label: "Mission" },
  { href: "#impact", label: "Impact" },
  { href: "#programs", label: "Programs" },
  { href: "#courses", label: "Courses" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2 group">
          <img src={logo} alt="Orbital Learn" className="h-10 w-10 invert brightness-0 group-hover:rotate-12 transition-transform duration-500" />
          <span className="font-display text-sm sm:text-base font-bold tracking-widest">ORBITAL<span className="text-primary">.</span>LEARN</span>
        </a>
        <ul className="hidden lg:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative text-muted-foreground hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-px after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/40 text-sm hover:bg-primary hover:text-primary-foreground transition-all">
          Get Started
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="lg:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <ul className="container mx-auto py-6 flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">{l.label}</a></li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
