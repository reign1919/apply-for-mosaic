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
              <div className="footer-logo-tiles" style={{ margin: "0 auto" }}>
                {[...Array(9)].map((_,i) => <span key={i} className="ft" style={{"--i":i}}/>)}
              </div>
              <h3>The Mosaic Foundation</h3>
              <p>Every piece matters. Every voice counts. Together we build something beautiful.</p>
              <div className="footer-socials">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
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
