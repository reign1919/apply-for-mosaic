import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import "./Navbar.css";

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        {/* Logo */}
        <button className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="logo-tiles">
            {[...Array(4)].map((_, i) => <span key={i} className="logo-tile" style={{ "--i": i }} />)}
          </span>
          <span>
            <span className="logo-name">The Mosaic</span>
            <span className="logo-sub">foundation ✦</span>
          </span>
        </button>

        {/* Right side */}
        <div className="nav-actions">
          <span className="recruit-badge">✦ Recruiting Now</span>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
