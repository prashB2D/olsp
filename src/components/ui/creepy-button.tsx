import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CreepyButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  coverClassName?: string;
}
type Coords = { x: number; y: number };

export const CreepyButton = ({ children, coverClassName = "", ...props }: CreepyButtonProps) => {
  const eyesRef    = useRef<HTMLSpanElement>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveAnimOffTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const [eyeCoords, setEyeCoords]   = useState<Coords>({ x: 0, y: 0 });
  const [isHovered, setIsHovered]   = useState(false);
  // animCoords override mouse tracking during entrance sweep
  const [animCoords, setAnimCoords] = useState<Coords | null>(null);

  /* Gaze path:
     0ms   → look bottom-left (eyes are hiding there)
     180ms → sweep UP on the left side
     580ms → swing RIGHT across
     980ms → settle 2% back to left
     1200ms→ hand off to mouse tracking                */
  const playEntrance = () => {
    animTimers.current.forEach(clearTimeout);
    animTimers.current = [];

    // Phase 0: snap to bottom-left immediately
    setAnimCoords({ x: -1, y: 1 });

    // Phase 1: look UP (staying on left side)
    animTimers.current.push(setTimeout(() => setAnimCoords({ x: -0.85, y: -1 }), 180));

    // Phase 2: swing RIGHT
    animTimers.current.push(setTimeout(() => setAnimCoords({ x: 1, y: -0.2 }), 580));

    // Phase 3: settle 2% back to left
    animTimers.current.push(setTimeout(() => setAnimCoords({ x: 0.98, y: 0 }), 980));

    // Phase 4: hand off to mouse
    animTimers.current.push(setTimeout(() => setAnimCoords(null), 1300));
  };

  const updateEyes = (e: React.MouseEvent) => {
    if (animCoords !== null) return;   // don't interrupt entrance sweep
    if (!eyesRef.current) return;
    const r  = eyesRef.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width  / 2);
    const dy = e.clientY - (r.top  + r.height / 2);
    const a  = Math.atan2(-dy, dx) + Math.PI / 2;
    const d  = Math.hypot(dx, dy);
    setEyeCoords({
      x: (Math.sin(a) * Math.min(d, 80)) / 80,
      y: (Math.cos(a) * Math.min(d, 35)) / 35,
    });
  };

  const handleEnter = () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    if (leaveAnimOffTimer.current) clearTimeout(leaveAnimOffTimer.current);
    setIsHovered(true);
    playEntrance();
  };
  const handleLeave = () => {
    animTimers.current.forEach(clearTimeout);
    // Keep eye motion for a beat, then turn it off smoothly.
    leaveAnimOffTimer.current = setTimeout(() => setAnimCoords(null), 150);
    resetTimer.current = setTimeout(() => {
      setIsHovered(false);
      setEyeCoords({ x: 0, y: 0 });
    }, 700);
  };

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    if (leaveAnimOffTimer.current) clearTimeout(leaveAnimOffTimer.current);
    animTimers.current.forEach(clearTimeout);
  }, []);

  // Use animCoords during entrance, mouse coords after
  const active = animCoords ?? eyeCoords;

  const pupil = {
    transform: `translate(calc(-50% + ${active.x * 28}%), calc(-50% + ${active.y * 28}%))`,
    transition: animCoords !== null ? "transform 0.45s cubic-bezier(0.34,1.56,0.64,1)" : "none",
  };

  const Eye = ({ delay }: { delay: number }) => (
    <motion.span
      style={{
        width: "0.72em", height: "0.72em",
        borderRadius: "50%", overflow: "hidden",
        background: "white", display: "inline-block",
        position: "relative", flexShrink: 0,
      }}
      animate={isHovered ? { height: ["0.72em", "0.72em", "0em", "0.72em"] } : { height: "0.72em" }}
      transition={{ duration: 2.0, times: [0, 0.85, 0.92, 1], repeat: Infinity, delay }}
    >
      <span style={{
        position: "absolute", top: "50%", left: "50%",
        width: "0.34em", height: "0.34em",
        borderRadius: "50%", background: "#000", ...pupil,
      }} />
    </motion.span>
  );

  return (
    <a
      style={{
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        verticalAlign: "middle",
      }}
      onMouseEnter={handleEnter}
      onMouseMove={updateEyes}
      onMouseLeave={handleLeave}
      {...props}
    >
      {/* Eyes in bottom-left triangle revealed by CCW tilt */}
      <span
        ref={eyesRef}
        aria-hidden
        style={{
          position: "absolute",
          bottom: "0.15em",
          left: "70%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "0.35em",
          zIndex: 0,
          pointerEvents: "none",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      >
        <Eye delay={0} />
        <Eye delay={0.1} />
      </span>

      {/* Pill tilts CCW from bottom edge */}
      <motion.span
        className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm whitespace-nowrap ${coverClassName}`}
        style={{
          position: "relative",
          zIndex: 1,
          display: "inline-flex",
          transformOrigin: "center bottom",
          textAlign: "right",
          fontFamily: '"Space Mono", system-ui, sans-serif',
        }}
        animate={{ rotate: isHovered ? -22 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 14 }}
      >
        {children}
      </motion.span>
    </a>
  );
};

export default CreepyButton;
