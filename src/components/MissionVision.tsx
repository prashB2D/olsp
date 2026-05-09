import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const MissionVision = () => (
  <section id="mission" className="relative py-32 paper-grid text-black">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-black/60 mb-4">— DRIVING FORCES —</p>
        <h2 className="font-display text-4xl md:text-6xl font-black text-black">MISSION & VISION</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="brutal-card-red p-8 bg-white"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[hsl(var(--destructive))] flex items-center justify-center">
              <Target className="text-white" size={24} />
            </div>
            <h3 className="font-display text-3xl font-black text-black">MISSION</h3>
          </div>
          <p className="text-black/80 leading-relaxed mb-4">
            We provide solutions for the education industry — including LMS platforms, quiz systems, and enterprise applications.
          </p>
          <p className="text-black/80 leading-relaxed">
            We develop well-trained students and interns with strong foundations and real-world experience — capable of handling real tasks, adapting to new technologies, and contributing from day one.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="brutal-card-green p-8 bg-white"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[hsl(var(--success))] flex items-center justify-center">
              <Eye className="text-white" size={24} />
            </div>
            <h3 className="font-display text-3xl font-black text-black">VISION</h3>
          </div>
          <p className="text-black/80 leading-relaxed mb-4">
            To become a trusted provider of education and IT solutions.
          </p>
          <p className="text-black/80 leading-relaxed">
            To set a standard where our interns perform at the level of 1–2 years experienced professionals — with strong core skills, real workflow exposure, and the ability to learn and adapt quickly.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default MissionVision;
