import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Brain, Code2, BarChart3, Cpu, Smartphone, Cloud, ArrowRight } from "lucide-react";
import { supabase, isSupabaseConfigured } from "@/lib/supabaseClient";
import type { CourseData } from "@/lib/demoSchemas";

const iconMap = {
  Brain,
  Code2,
  BarChart3,
  Cpu,
  Smartphone,
  Cloud,
} as const;

const resolveIcon = (icon: CourseData["icon"]): CourseData["icon"] => {
  if (typeof icon === "string") {
    return (iconMap[icon as keyof typeof iconMap] ?? Brain) as CourseData["icon"];
  }
  return icon;
};

const fallbackCourses: CourseData[] = [
  { icon: Brain, title: "AI / ML", desc: "Build intelligent systems and ship ML pipelines.", skills: ["Python", "TensorFlow", "MLOps"], duration: "12 weeks" },
  { icon: Code2, title: "Web Development", desc: "Full-stack engineering with modern frameworks.", skills: ["React", "Node.js", "PostgreSQL"], duration: "10 weeks" },
  { icon: BarChart3, title: "Data Science", desc: "Analyze, model, and tell stories with data.", skills: ["Pandas", "SQL", "Visualization"], duration: "10 weeks" },
  { icon: Cpu, title: "DevOps & Cloud", desc: "Deploy and scale on real production infrastructure.", skills: ["Docker", "AWS", "CI/CD"], duration: "8 weeks" },
  { icon: Smartphone, title: "Mobile Development", desc: "Cross-platform native experiences.", skills: ["React Native", "Flutter"], duration: "10 weeks" },
  { icon: Cloud, title: "Enterprise Solutions", desc: "Architect for scale, security, and reliability.", skills: ["Microservices", "Kafka", "K8s"], duration: "12 weeks" },
];

const Courses = () => {
  const [courses, setCourses] = useState<CourseData[]>(fallbackCourses);

  useEffect(() => {
    console.log("Supabase configured:", isSupabaseConfigured);
    console.log("Supabase URL:", import.meta.env.VITE_SUPABASE_URL);

    if (!isSupabaseConfigured) return;

    const loadCourses = async () => {
      const { data, error } = await supabase
        .from("website_courses")
        .select("id, icon, title, description, skills, duration, hook, level, tags")
        .eq("is_active", true);

      console.log("Courses fetch result:", { data, error });

      if (!error && data) {
        setCourses(
          data.map((course: any) => ({
            icon: resolveIcon(course.icon ?? "Brain"),
            title: course.title,
            desc: course.description,
            skills: course.skills ?? [],
            duration: course.duration,
            hook: course.hook ?? "",
            level: course.level ?? "",
            tags: course.tags ?? [],
          }))
        );
      }
    };

    void loadCourses();
  }, []);

  return (
    <section id="courses" className="relative py-32">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-primary mb-4">— EXPLORE COURSES —</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">Find Your Path</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {courses.map((c, i) => {
            const Icon = resolveIcon(c.icon);
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-7 rounded-2xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary/50 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground tracking-widest">{c.duration.toUpperCase()}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{c.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {c.skills.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">{s}</span>
                  ))}
                </div>
                <button className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                  View Details <ArrowRight size={14} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
