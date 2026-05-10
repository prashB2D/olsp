import { motion } from "framer-motion";

import orbitalLogo from "../assets/logo.png";

import startupIndiaLogo from "../assets/startup-india.png";
import startupKarnatakaLogo from "../assets/startup-karnataka.png";
import isoBadgeLogo from "../assets/iso-badge.png";
import msmeLogo from "../assets/msme.png";

/* ── Logo Array ─────────────────────────────────────── */
const logos: string[] = [
  startupIndiaLogo,
  startupKarnatakaLogo,
  isoBadgeLogo,
  msmeLogo,
];

/* duplicate once for seamless infinite loop */
const marqueeLogos: string[] = [...logos, ...logos];

const Certifications: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden py-32"
      style={{
        background: "#02030A",
      }}
    >
      {/* ── Smoky Background ───────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {/* Smoke 1 */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -40, 60, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: 750,
            height: 750,
            top: "-220px",
            left: "-180px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 72%)",
            filter: "blur(120px)",
          }}
        />

        {/* Smoke 2 */}
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 50, -40, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            bottom: "-220px",
            right: "-160px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.10) 0%, transparent 75%)",
            filter: "blur(140px)",
          }}
        />
      </div>

      {/* ── Main Content ───────────────────────── */}
      <div
        className="container mx-auto px-4"
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.35em] text-center text-white/50 mb-16"
        >
          — CERTIFICATIONS & RECOGNITION —
        </motion.p>

        {/* ── Main Logo ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "8rem",
          }}
        >
          <img
            src={orbitalLogo}
            alt="Orbital Learn"
            draggable={false}
            style={{
              width: "clamp(260px, 34vw, 420px)",
              height: "auto",
              userSelect: "none",
              filter:
                "brightness(0) invert(1) drop-shadow(0 0 28px rgba(255,255,255,0.22))",
            }}
          />
        </motion.div>

        {/* ── Ultra Smooth Marquee ───────────────── */}
        <div
          style={{
            overflow: "hidden",
            width: "100%",
            position: "relative",
          }}
        >
          {/* Left Fade */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "150px",
              height: "100%",
              zIndex: 10,
              pointerEvents: "none",
              background:
                "linear-gradient(to right, #02030A 0%, transparent 100%)",
            }}
          />

          {/* Right Fade */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: "150px",
              height: "100%",
              zIndex: 10,
              pointerEvents: "none",
              background:
                "linear-gradient(to left, #02030A 0%, transparent 100%)",
            }}
          />

          {/* Marquee Track */}
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              ease: "linear",

              /* ultra smooth slow movement */
              duration: 10,

              repeat: Infinity,
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8rem",
              width: "max-content",

              /* performance optimization */
              willChange: "transform",
              transform: "translate3d(0,0,0)",
              WebkitTransform: "translate3d(0,0,0)",
            }}
          >
            {marqueeLogos.map((logo: string, index: number) => (
              <div
                key={index}
                style={{
                  flexShrink: 0,
                }}
              >
                <img
                  src={logo}
                  alt="certificate"
                  draggable={false}
                  loading="eager"
                  style={{
                    width: "220px",
                    height: "auto",
                    objectFit: "contain",
                    display: "block",

                    /* smooth rendering */
                    transform: "translateZ(0)",
                    WebkitTransform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",

                    filter:
                      "drop-shadow(0 0 20px rgba(255,255,255,0.12))",
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;