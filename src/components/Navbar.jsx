import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
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
          <img src="/logo.png" alt="The Mosaic Foundation Logo" className="logo-img" />
          <span>
            <span className="logo-name">The Mosaic</span>
            <span className="logo-sub">foundation ✦</span>
          </span>
        </button>

        <div className="devreign-credit-wrapper">
          <a 
            href="https://www.instagram.com/forgd.reign/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="devreign-credit"
          >
            <span className="devreign-logo">∫</span>
            <span className="devreign-text">DEVREIGN</span>
          </a>
        </div>

        {/* Right side */}
        <div className="nav-actions">
          <span className="recruit-badge">✦ Recruiting Now</span>
        </div>
      </div>
    </nav>
  );
}
