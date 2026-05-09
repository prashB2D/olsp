import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { supabase, isSupabaseConfigured } from "@/lib/supabaseClient";
import type { TestimonialData } from "@/lib/demoSchemas";
import gridBg from "@/assets/grid-bg.png";

const fallbackItems: TestimonialData[] = [
  { name: "Aarav Mehta", role: "Software Engineer Intern", text: "I shipped real production code in week 3. The workflow felt like an actual tech company — Git, reviews, deploys, the whole loop." },
  { name: "Priya Sharma", role: "ML Intern", text: "The mentorship and structured sprints turned theory into muscle memory. I now contribute confidently from day one." },
  { name: "Rohan Iyer", role: "Full-Stack Developer", text: "Orbital Learn doesn't teach you to pass exams — it trains you to build systems that scale." },
];

const Testimonials = () => {
  const [items, setItems] = useState<TestimonialData[]>(fallbackItems);

  useEffect(() => {
    if (!isSupabaseConfigured) return;

    const loadTestimonials = async () => {
      const { data, error } = await supabase
        .from("website_testimonials")
        .select("id, name, role, text, rating")
        .eq("is_active", true);

      console.log("Testimonials fetch result:", { data, error });

      if (!error && data) {
        setItems(
          data.map((item: any) => ({
            name: item.name,
            role: item.role,
            text: item.text,
            rating: item.rating ?? undefined,
          }))
        );
      }
    };

    void loadTestimonials();
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
    {/* Grid backdrop with glow */}
    <div className="absolute inset-0 z-0">
      <div
        className="absolute inset-0 opacity-70"
        style={{ backgroundImage: `url(${gridBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
      {/* Soft glowing orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/20 blur-[120px]" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="font-mono text-xs tracking-[0.3em] text-primary mb-4 glow-text">— TRUSTED BY MANY —</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground glow-text">Voices from Orbit</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl border border-border bg-card/70 backdrop-blur-md relative overflow-hidden hover:border-primary/50 hover:shadow-[0_0_40px_hsl(var(--primary)/0.25)] transition-all duration-500"
          >
            <Quote className="absolute top-4 right-4 text-primary/15" size={56} />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-primary text-primary" />)}
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed mb-6 relative">{t.text}</p>
            <div className="border-t border-border pt-4">
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Testimonials;
