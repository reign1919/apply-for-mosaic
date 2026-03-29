import { Heart, Mail, Globe, MessageCircle } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Animated mosaic divider */}
      <div className="mosaic-divider">
        {[...Array(10)].map((_,i) => <span key={i}/>)}
      </div>

      <div className="footer-body">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <img src="/logo.png" alt="The Mosaic Foundation Logo" className="footer-logo-img" />
              <h3>The Mosaic Foundation</h3>
              <p>Every piece matters. Every voice counts. Together we build something beautiful.</p>
              <div className="footer-socials">
                <a href="https://www.instagram.com/themosaicfoundation_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="mailto:the.mosaicfoundation.gen@gmail.com" aria-label="Email"><Mail size={16}/></a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="mono" style={{fontSize:11}}>
              © {new Date().getFullYear()} The Mosaic Foundation · Founded &amp; managed by teens
            </p>
            <p style={{fontSize:12,color:"var(--text3)"}}>
              Made with <Heart size={11} fill="currentColor" color="var(--c1)"/> by youth, for the world
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
