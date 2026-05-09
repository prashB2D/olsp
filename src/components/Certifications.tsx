import { motion } from "framer-motion";
import orbitalLogo from "../assets/logo.png";

/* ── Inline SVG logos ──────────────────────────────────────────────────── */

/* #startupindia — saffron text + green step icon */
const StartupIndiaLogo = () => (
  <svg viewBox="0 0 220 60" width="180" height="50" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="46" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="38" fill="#FF6B00">
      #startup
    </text>
    <text x="127" y="46" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="38" fill="#1A237E">
      in
    </text>
    <text x="158" y="46" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="38" fill="#FF6B00">
      d
    </text>
    <text x="181" y="46" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="38" fill="#1A237E">
      i
    </text>
    <text x="193" y="46" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="38" fill="#FF6B00">
      a
    </text>
    {/* Green staircase step icon */}
    <polyline points="155,52 170,52 170,58 185,58" stroke="#138808" strokeWidth="4" fill="none" strokeLinecap="square" />
  </svg>
);

/* Startup Karnataka — origami bird + text */
const StartupKarnatakaLogo = () => (
  <svg viewBox="0 0 160 140" width="120" height="105" xmlns="http://www.w3.org/2000/svg">
    {/* Origami bird made of triangles */}
    <polygon points="10,70 80,30 90,55" fill="#00a2ffff" />
    <polygon points="90,55 80,30 130,25" fill="#E63012" />
    <polygon points="90,55 130,25 140,50" fill="#c02810" />
    <polygon points="10,70 90,55 60,80" fill="#c02810" />
    <polygon points="90,55 140,50 120,65" fill="#E63012" />
    {/* Beak */}
    <polygon points="140,50 155,56 140,60" fill="#E63012" />
    {/* Text */}
    <text x="80" y="110" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="16" fill="#1A237E" textAnchor="middle">STARTUP</text>
    <text x="80" y="130" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="16" fill="#1A237E" textAnchor="middle">KARNATAKA</text>
  </svg>
);

/* ISO 9001:2015 circular badge */
const IsoBadge = () => (
  <svg viewBox="0 0 120 120" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    {/* Outer ring */}
    <circle cx="60" cy="60" r="57" fill="none" stroke="#1565C0" strokeWidth="4" />
    {/* Inner filled circle */}
    <circle cx="60" cy="60" r="44" fill="#1565C0" />
    <circle cx="60" cy="60" r="47" fill="none" stroke="#1565C0" strokeWidth="1.5" />
    {/* ISO text */}
    <text x="60" y="58" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="22" fill="white" textAnchor="middle">ISO</text>
    <text x="60" y="74" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="12" fill="white" textAnchor="middle">9001:2015</text>
    {/* Arc text - CERTIFIED top */}
    <path id="topArc" d="M 15,60 A 45,45 0 0,1 105,60" fill="none" />
    <text fontFamily="Arial, sans-serif" fontWeight="800" fontSize="11" fill="#1565C0" letterSpacing="3">
      <textPath href="#topArc" startOffset="12%">CERTIFIED</textPath>
    </text>
    {/* Arc text - COMPANY bottom */}
    <path id="botArc" d="M 15,62 A 45,45 0 0,0 105,62" fill="none" />
    <text fontFamily="Arial, sans-serif" fontWeight="800" fontSize="11" fill="#1565C0" letterSpacing="3">
      <textPath href="#botArc" startOffset="12%">COMPANY</textPath>
    </text>
  </svg>
);

/* ── Card data ─────────────────────────────────────────────────────────── */
const certs = [
  {
    name: "Startup India",
    sub: "DPIIT Recognised · Govt. of India",
    Logo: StartupIndiaLogo,
    accent: "#FF6B00",
  },
  {
    name: "Startup Karnataka",
    sub: "K-Tech Innovation Hub",
    Logo: StartupKarnatakaLogo,
    accent: "#E63012",
  },
  {
    name: "ISO 9001:2015",
    sub: "Certified Company",
    Logo: IsoBadge,
    accent: "#1565C0",
  },
];

/* ── Component ─────────────────────────────────────────────────────────── */
const Certifications = () => (
  <section className="relative py-24 border-y border-border">
    <div className="container mx-auto px-4">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs tracking-[0.3em] text-muted-foreground text-center mb-14"
      >
        — CERTIFICATIONS &amp; RECOGNITION —
      </motion.p>

      {/* Featured company logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "3.5rem", gap: "1.2rem" }}
      >
        <div style={{ position: "relative" }}>
          {/* Orbital glow */}
          <div style={{
            position: "absolute", inset: "-40%",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(160,160,255,0.14) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />
          <img
            src={orbitalLogo}
            alt="Orbital Learn"
            style={{
              width: 240,
              height: "auto",
              /* Same treatment as Navbar: brightness(0) makes it black, invert(1) flips to white */
              filter: "brightness(0) invert(1)",
              opacity: 0.95,
              position: "relative",
              zIndex: 1,
              display: "block",
            }}
          />
        </div>
        {/* Brand name — matches Navbar style */}
        <p style={{
          fontFamily: "inherit",
          fontWeight: 700,
          fontSize: "1rem",
          letterSpacing: "0.25em",
          color: "#fff",
        }}>
          ORBITAL<span style={{ color: "rgba(255,255,255,0.4)" }}>.</span>LEARN
        </p>
      </motion.div>

      {/* Separator */}
      <div style={{
        textAlign: "center",
        marginBottom: "3rem",
        color: "rgba(255,255,255,0.18)",
        fontSize: "0.68rem",
        letterSpacing: "0.35em",
        fontFamily: "monospace",
      }}>
        RECOGNISED BY
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {certs.map(({ name, sub, Logo, accent }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.13, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.04, y: -4 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "2.5rem 1.5rem 2rem",
              borderRadius: "1.25rem",
              border: `1px solid ${accent}30`,
              background: "rgba(255,255,255,0.025)",
              backdropFilter: "blur(12px)",
              gap: "1.25rem",
              transition: "border-color 0.3s, box-shadow 0.3s",
              boxShadow: `0 4px 40px ${accent}10`,
            }}
          >
            {/* Logo */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              height: 110,
              filter: "drop-shadow(0 0 8px rgba(255,255,255,0.05))",
            }}>
              <Logo />
            </div>

            {/* Labels */}
            <div>
              <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "#fff", marginBottom: 4 }}>
                {name}
              </p>
              <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.04em", lineHeight: 1.5 }}>
                {sub}
              </p>
            </div>

            {/* Brand accent pip */}
            <div style={{
              width: 6, height: 6, borderRadius: "50%",
              background: accent,
              boxShadow: `0 0 10px 3px ${accent}66`,
            }} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
