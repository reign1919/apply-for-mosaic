import { ArrowDown } from "lucide-react";
import "./Hero.css";

const TILE_DATA = [
  { col: "var(--c1)",  w: 45, h: 45, x: "5%",  y: "15%", rot: "-12deg", dur: "6s",  delay: "0s" },
  { col: "var(--c3)",  w: 35, h: 35, x: "12%", y: "65%", rot: "8deg",   dur: "5s",  delay: "1s" },
  { col: "var(--c4)",  w: 55, h: 28, x: "88%", y: "25%", rot: "15deg",  dur: "7s",  delay: "0.5s" },
  { col: "var(--c5)",  w: 30, h: 50, x: "92%", y: "70%", rot: "-6deg",  dur: "5.5s",delay: "2s" },
  { col: "var(--c6)",  w: 40, h: 40, x: "78%", y: "12%", rot: "20deg",  dur: "6.5s",delay: "1.5s" },
  { col: "var(--c8)",  w: 25, h: 25, x: "45%", y: "8%",  rot: "-18deg", dur: "4.5s",delay: "0.8s" },
  { col: "var(--c9)",  w: 38, h: 38, x: "25%", y: "80%", rot: "10deg",  dur: "5.8s",delay: "1.2s" },
  { col: "var(--c10)", w: 32, h: 48, x: "65%", y: "85%", rot: "-14deg", dur: "6.2s",delay: "0.3s" },
  { col: "var(--c2)",  w: 28, h: 28, x: "50%", y: "90%", rot: "22deg",  dur: "5s",  delay: "2.5s" },
  { col: "var(--c1)",  w: 20, h: 20, x: "35%", y: "20%", rot: "-5deg",  dur: "4s",  delay: "1.8s" },
  { col: "var(--c4)",  w: 22, h: 22, x: "70%", y: "50%", rot: "16deg",  dur: "5.2s",delay: "0.6s" },
  { col: "var(--c3)",  w: 18, h: 18, x: "15%", y: "40%", rot: "-10deg", dur: "4.8s",delay: "2.2s" },
];

export default function Hero() {
  function scrollToForm() {
    document.getElementById("recruit-form")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="hero" id="hero">
      {/* Floating background tiles */}
      <div className="hero-bg">
        {TILE_DATA.map((t, i) => (
          <span key={i} className="bg-tile" style={{
            "--col": t.col,
            width: t.w, height: t.h,
            left: t.x, top: t.y,
            "--rot": t.rot,
            "--dur": t.dur,
            "--delay": t.delay,
          }} />
        ))}
      </div>

      <div className="container hero-inner">
        <span className="hero-tag-glow">Recruitment Open — 2026</span>

        <h1 className="hero-title">
          Add Your <span className="accent-word">Tile</span>
        </h1>

        <p className="hero-subtitle">
          There's a place here <span>for you.</span>
        </p>

        <div className="hero-cta">
          <button className="btn btn-primary" onClick={scrollToForm}>
            Apply Now <ArrowDown size={18} />
          </button>
        </div>

        <p className="hero-annotation handwritten">
          ↓ scroll down to join the mosaic ↓
        </p>
      </div>
    </section>
  );
}
