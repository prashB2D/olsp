import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="relative py-32 overflow-hidden">
    <div className="absolute inset-0 stars opacity-30" />
    <div className="container mx-auto px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-primary mb-6">— ABOUT THE COMPANY —</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
          We're a <span className="text-primary">tech</span> + <span className="text-accent">education</span> company
        </h2>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
          Building <span className="text-foreground font-semibold underline decoration-primary decoration-2 underline-offset-4">industry-ready talent</span> through{" "}
          <span className="text-foreground font-semibold">structured learning</span> and{" "}
          <span className="text-foreground font-semibold underline decoration-accent decoration-2 underline-offset-4">real-world training</span>.
        </p>
      </motion.div>
    </div>
  </section>
);

export default About;
