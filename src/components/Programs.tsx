import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Snowflake, Wrench, Clock, ArrowRight, Lock, Sparkles } from "lucide-react";
import { supabase, isSupabaseConfigured } from "@/lib/supabaseClient";
import type { CourseData, ProgramData, WorkshopData } from "@/lib/demoSchemas";

type Course = CourseData;

type Workshop = WorkshopData;

type Program = ProgramData;

const iconMap = {
  Sun,
  Snowflake,
  Wrench,
} as const;

const resolveIcon = (icon: Program["icon"]): Program["icon"] => {
  if (typeof icon === "string") {
    return (iconMap[icon as keyof typeof iconMap] ?? Sun) as Program["icon"];
  }
  return icon;
};

const fallbackPrograms: Program[] = [
  {
    id: "summer",
    icon: Sun,
    label: "Summer Internship",
    duration: "8 Weeks",
    content: "Industry-led training with real product builds. Live cohort, mentor reviews and an industry-recognized certificate.",
    courses: [
      { title: "Complete DevOps Bootcamp", hook: "Master CI/CD, Docker, K8s & Cloud in 12 weeks.", duration: "12 WEEKS", level: "BEGINNER → MID", tags: ["Linux", "Jenkins", "AWS"] },
      { title: "Full-Stack Web Engineering", hook: "Ship production apps with React, Node & Postgres.", duration: "10 WEEKS", level: "BEGINNER → MID", tags: ["React", "Node", "SQL"] },
      { title: "Applied AI / ML", hook: "Train, deploy and monitor real ML pipelines.", duration: "12 WEEKS", level: "INTERMEDIATE", tags: ["Python", "PyTorch", "MLOps"] },
    ],
  },
  {
    id: "winter",
    icon: Snowflake,
    label: "Winter Internship",
    duration: "6 Weeks",
    content: "Compact winter cohort focused on shipping a deployable product from day one. Lineup unlocks soon.",
    startsInDays: 45,
    courses: [],
  },
  {
    id: "workshops",
    icon: Wrench,
    label: "Workshops",
    duration: "1–3 Days",
    content: "Hands-on workshops on emerging topics — pick one and register before seats close.",
    workshops: [
      { title: "AI Agents from Scratch", hook: "Build & deploy an autonomous agent in a day.", date: "JUN 15", startsInDays: 0 },
      { title: "K8s for Builders", hook: "Run real workloads on Kubernetes — hands on.", date: "JUL 02", startsInDays: 18 },
      { title: "Edge AI on Device", hook: "Ship ML to phones & micro-devices.", date: "JUL 28", startsInDays: 44 },
    ],
  },
];

const Countdown = ({ targetDays = 21, label = "NEXT BATCH IN" }: { targetDays?: number; label?: string }) => {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = Date.now() + targetDays * 86400000;
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) return;
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDays]);

  const cells = [
    { v: t.d, l: "DAYS" },
    { v: t.h, l: "HRS" },
    { v: t.m, l: "MIN" },
    { v: t.s, l: "SEC" },
  ];

  return (
    <div className="flex items-center gap-3 justify-center flex-wrap">
      <Clock size={16} className="text-primary" />
      <span className="font-mono text-xs text-muted-foreground tracking-widest mr-2">{label}</span>
      {cells.map((c) => (
        <div key={c.l} className="px-3 py-2 rounded-lg bg-card border border-primary/30 min-w-[60px] text-center">
          <div className="font-display font-bold text-xl text-primary">{String(c.v).padStart(2, "0")}</div>
          <div className="text-[9px] font-mono text-muted-foreground">{c.l}</div>
        </div>
      ))}
    </div>
  );
};

const SummerBG = () => (
  <motion.div key="summer-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}
    className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0" style={{
      background: "radial-gradient(ellipse 80% 60% at 80% 110%, hsl(35 100% 55% / 0.35), transparent 60%), radial-gradient(ellipse 60% 50% at 20% 100%, hsl(15 90% 50% / 0.25), transparent 60%), linear-gradient(180deg, transparent 50%, hsl(30 80% 25% / 0.15))"
    }} />
    <motion.div
      initial={{ y: 200, scale: 0.8 }}
      animate={{ y: 60, scale: 1 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full"
      style={{ background: "radial-gradient(circle, hsl(45 100% 65%), hsl(25 100% 55% / 0.4) 50%, transparent 70%)", filter: "blur(2px)" }}
    />
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[-100px] right-[15%] w-[500px] h-[500px] opacity-30"
      style={{
        background: "conic-gradient(from 0deg, transparent 0deg, hsl(45 100% 60% / 0.4) 10deg, transparent 20deg, transparent 40deg, hsl(45 100% 60% / 0.3) 50deg, transparent 60deg, transparent 90deg, hsl(45 100% 60% / 0.4) 100deg, transparent 110deg)"
      }}
    />
  </motion.div>
);

const WinterBG = () => (
  <motion.div key="winter-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}
    className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0" style={{
      background: "radial-gradient(ellipse 80% 60% at 50% -20%, hsl(200 90% 70% / 0.25), transparent 60%), linear-gradient(180deg, hsl(210 60% 15% / 0.4), transparent 70%)"
    }} />
    {[...Array(20)].map((_, i) => (
      <motion.span
        key={i}
        initial={{ y: -30, x: Math.random() * 100 + "%", opacity: 0 }}
        animate={{ y: "110vh", opacity: [0, 1, 1, 0] }}
        transition={{ duration: 8 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 5, ease: "linear" }}
        className="absolute text-white/60"
        style={{ left: Math.random() * 100 + "%", fontSize: 8 + Math.random() * 14 }}
      >
        ❄
      </motion.span>
    ))}
  </motion.div>
);

const WorkshopBG = () => (
  <motion.div key="workshop-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}
    className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0" style={{
      background: "radial-gradient(ellipse 60% 50% at 30% 30%, hsl(280 80% 50% / 0.25), transparent 60%), radial-gradient(ellipse 50% 40% at 70% 80%, hsl(190 90% 50% / 0.2), transparent 60%)"
    }} />
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
      <Wrench size={420} className="text-primary" strokeWidth={0.5} />
    </motion.div>
  </motion.div>
);

const CourseCard = ({ course, accent }: { course: Course; accent: string }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="group/course relative rounded-2xl border-2 border-foreground/90 bg-background overflow-hidden shadow-[6px_6px_0_0_hsl(var(--foreground))] transition-shadow"
  >
    <div className="relative h-40 overflow-hidden" style={{ background: accent }}>
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/90 text-[10px] font-mono">
        <Sparkles size={10} className="text-primary" /> HYBRID
      </div>
      <div className="absolute bottom-3 right-3 text-right">
        <div className="font-display font-bold text-xs text-foreground">{course.duration}</div>
        <div className="text-[9px] font-mono text-muted-foreground">{course.level}</div>
      </div>
      <div className="absolute bottom-3 left-3 max-w-[70%]">
        <div className="font-display font-bold text-lg leading-tight text-foreground drop-shadow">{course.title}</div>
      </div>
    </div>

    <div className="relative p-5">
      <p className="text-xs text-muted-foreground leading-relaxed transition-opacity duration-300 group-hover/course:opacity-0">
        {course.hook}
      </p>

      <div className="absolute inset-0 p-5 opacity-0 translate-y-2 group-hover/course:opacity-100 group-hover/course:translate-y-0 transition-all duration-300 bg-background flex flex-col justify-between">
        <div className="flex flex-wrap gap-1.5">
          {course.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded-md bg-secondary text-secondary-foreground">{tag}</span>
          ))}
        </div>
        <button className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:gap-3 transition-all">
          Explore <ArrowRight size={14} />
        </button>
      </div>
    </div>
  </motion.div>
);

const WorkshopCard = ({ w }: { w: Workshop }) => {
  const locked = w.startsInDays > 0;
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group/wk relative rounded-2xl border-2 border-foreground/90 bg-background overflow-hidden shadow-[6px_6px_0_0_hsl(var(--foreground))]"
    >
      <div className="relative h-40 overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(280 70% 30%), hsl(217 91% 30%))" }}>
        <div className="absolute inset-0 grid-overlay opacity-30" />
        {locked && (
          <div className="absolute inset-0 bg-background/70 backdrop-blur-sm flex flex-col items-center justify-center gap-2">
            <Lock size={28} className="text-primary" />
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground">UNLOCKS IN</span>
            <div className="font-display font-bold text-2xl text-primary">{w.startsInDays}D</div>
          </div>
        )}
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/90 text-[10px] font-mono">
          <Wrench size={10} className="text-primary" /> WORKSHOP
        </div>
        <div className="absolute bottom-3 left-3">
          <div className="font-display font-bold text-lg text-foreground drop-shadow">{w.title}</div>
          <div className="text-[10px] font-mono text-muted-foreground">{w.date}</div>
        </div>
      </div>
      <div className="relative p-5">
        <p className="text-xs text-muted-foreground leading-relaxed transition-opacity duration-300 group-hover/wk:opacity-0">
          {w.hook}
        </p>
        <div className="absolute inset-0 p-5 opacity-0 group-hover/wk:opacity-100 transition-all duration-300 bg-background flex items-end">
          {locked ? (
            <button className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg border-2 border-foreground/80 font-medium text-sm">
              <Lock size={14} /> Pre-Register
            </button>
          ) : (
            <button className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm">
              View Details <ArrowRight size={14} />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Programs = () => {
  const [active, setActive] = useState<Program["id"]>("summer");
  const [programs, setPrograms] = useState<Program[]>(fallbackPrograms);

  useEffect(() => {
    if (!isSupabaseConfigured) return;

    const loadPrograms = async () => {
      const { data, error } = await supabase
        .from("website_programs")
        .select(
          "id, icon, label, duration, content, starts_in_days, website_program_courses(*), website_program_workshops(*)"
        )
        .eq("is_active", true);

      if (!error && data) {
        const mappedPrograms: Program[] = data.map((program: any) => ({
          id: program.id,
          icon: resolveIcon(program.icon ?? "Sun"),
          label: program.label,
          duration: program.duration,
          content: program.content,
          startsInDays: program.starts_in_days ?? undefined,
          courses: program.website_program_courses?.map((course: any) => ({
            title: course.title,
            hook: course.hook,
            duration: course.duration,
            level: course.level,
            tags: course.tags ?? [],
          })) ?? [],
          workshops: program.website_program_workshops?.map((workshop: any) => ({
            title: workshop.title,
            hook: workshop.hook,
            date: workshop.date,
            startsInDays: workshop.starts_in_days ?? 0,
          })) ?? [],
        }));

        setPrograms(mappedPrograms);
        if (!mappedPrograms.some((program) => program.id === active) && mappedPrograms.length > 0) {
          setActive(mappedPrograms[0].id);
        }
      }
    };

    void loadPrograms();
  }, []);

  const cur = programs.find((p) => p.id === active) ?? programs[0];
  if (!cur) return null;

  const courseAccents = [
    "linear-gradient(135deg, hsl(35 90% 50%), hsl(15 85% 45%))",
    "linear-gradient(135deg, hsl(217 80% 45%), hsl(260 75% 45%))",
    "linear-gradient(135deg, hsl(160 70% 40%), hsl(190 80% 40%))",
  ];

  return (
    <section id="programs" className="relative py-32 overflow-hidden">
      <AnimatePresence mode="wait">
        {active === "summer" && <SummerBG />}
        {active === "winter" && <WinterBG />}
        {active === "workshops" && <WorkshopBG />}
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="font-mono text-xs tracking-[0.3em] text-primary mb-8">— PROGRAMS —</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">Choose Your Orbit</h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {programs.map((p) => {
              const ProgramIcon = resolveIcon(p.icon);
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border transition-all ${
                    active === p.id
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
                      : "border-border bg-card/30 hover:border-primary/40"
                  }`}
                >
                  <ProgramIcon size={16} />
                  {p.label}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={cur.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-border bg-card/40 backdrop-blur-md p-6 md:p-10"
            >
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-mono mb-3">
                    {(() => {
                      const CurIcon = resolveIcon(cur.icon);
                      return <CurIcon size={14} className="text-primary" />;
                    })()}
                    {cur.duration}
                  </div>
                  <h3 className="font-display text-3xl font-bold">{cur.label}</h3>
                  <p className="text-muted-foreground mt-2 max-w-xl text-sm">{cur.content}</p>
                </div>
                {cur.id === "winter" && <Countdown targetDays={cur.startsInDays || 45} label="STARTS IN" />}
              </div>

              {cur.id === "summer" && cur.courses && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cur.courses.map((c, i) => (
                    <CourseCard key={c.title} course={c} accent={courseAccents[i % courseAccents.length]} />
                  ))}
                </div>
              )}

              {cur.id === "winter" && (
                <div className="rounded-2xl border-2 border-dashed border-primary/30 p-8 text-center">
                  <Snowflake className="mx-auto mb-4 text-primary animate-pulse" size={36} />
                  <h4 className="font-display text-xl font-bold mb-2">Winter Lineup Unlocks Soon</h4>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    The course list for the winter cohort drops when the timer above hits zero. Get notified to grab early access.
                  </p>
                </div>
              )}

              {cur.id === "workshops" && cur.workshops && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cur.workshops.map((w) => <WorkshopCard key={w.title} w={w} />)}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Programs;
