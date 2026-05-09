import React from "react";
import "../styles/section-banner.css";

const Star = ({ id }: { id: string }) => (
  <div id={id}>
    <div className="curved-corner-star">
      <div id="curved-corner-bottomright" />
      <div id="curved-corner-bottomleft" />
    </div>
    <div className="curved-corner-star">
      <div id="curved-corner-topright" />
      <div id="curved-corner-topleft" />
    </div>
  </div>
);

/* Starfield generated via CSS box-shadow on a tiny element */
const STARS_CSS = `
  .earth-starfield::before {
    content: '';
    position: absolute;
    width: 2px; height: 2px;
    border-radius: 50%;
    background: transparent;
    box-shadow:
      80px  60px 0 rgba(255,255,255,0.18),
     160px 140px 0 rgba(255,255,255,0.12),
     240px  30px 0 rgba(255,255,255,0.15),
     320px 200px 0 rgba(255,255,255,0.10),
     400px  80px 0 rgba(255,255,255,0.20),
     480px 170px 0 rgba(255,255,255,0.13),
     560px  40px 0 rgba(255,255,255,0.17),
     640px 220px 0 rgba(255,255,255,0.09),
     720px 100px 0 rgba(255,255,255,0.14),
     800px  50px 0 rgba(255,255,255,0.11),
     880px 190px 0 rgba(255,255,255,0.16),
     960px  70px 0 rgba(255,255,255,0.12),
      50px 280px 0 rgba(255,255,255,0.10),
     130px 350px 0 rgba(255,255,255,0.14),
     210px 420px 0 rgba(255,255,255,0.08),
     290px 310px 0 rgba(255,255,255,0.18),
     370px 480px 0 rgba(255,255,255,0.11),
     450px 360px 0 rgba(255,255,255,0.15),
     530px 440px 0 rgba(255,255,255,0.09),
     610px 300px 0 rgba(255,255,255,0.13),
     690px 520px 0 rgba(255,255,255,0.10),
     770px 390px 0 rgba(255,255,255,0.17),
     850px 460px 0 rgba(255,255,255,0.12),
     930px 330px 0 rgba(255,255,255,0.14),
      20px 580px 0 rgba(255,255,255,0.08),
     110px 650px 0 rgba(255,255,255,0.12),
     200px 720px 0 rgba(255,255,255,0.10),
     300px 600px 0 rgba(255,255,255,0.15),
     500px 680px 0 rgba(255,255,255,0.09),
     700px 640px 0 rgba(255,255,255,0.13),
     900px 700px 0 rgba(255,255,255,0.11);
    pointer-events: none;
  }

  .earth-bg-globe {
    height: 1050px !important;
    width: 1050px !important;
    position: relative;
    background: url("/earth-texture.jpg");
    background-size: cover;
    background-position: left;
    border-radius: 50%;
    animation: earthRotate 30s linear 0s infinite;
    box-shadow:
      0px 0 80px 30px rgba(100, 200, 255, 0.18),
      0px 0 140px 60px rgba(60, 140, 255, 0.10),
      -12px 0px 20px #c3f4ff inset,
      30px 4px 90px #000 inset,
      -40px -4px 70px #c3f4ff99 inset,
      700px 0px 150px #00000077 inset,
      500px 0px 120px #000000bb inset;
    opacity: 0.6;
  }
`;

export const EarthBackground = ({ children }: { children: React.ReactNode }) => (
  <div
    className="earth-starfield"
    style={{ position: "relative", background: "#00000a", overflow: "hidden" }}
  >
    <style>{STARS_CSS}</style>

    {/* Giant earth — center at 50% of wrapper height = Solutions/Student boundary */}
    <div
      aria-hidden
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <div className="earth-bg-globe" />

      {/* UIverse twinkling 4-point stars around the globe */}
      <Star id="star-1" />
      <Star id="star-2" />
      <Star id="star-3" />
      <Star id="star-6" />
      <Star id="star-7" />
    </div>

    {/* Content sits above earth */}
    <div style={{ position: "relative", zIndex: 1 }}>
      {children}
    </div>
  </div>
);

const EarthDivider = () => null;
export default EarthDivider;
