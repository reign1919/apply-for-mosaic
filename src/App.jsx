import { useState, useEffect, useCallback } from "react";
import MosaicIntro from "./components/MosaicIntro";
import CursorTrail from "./components/CursorTrail";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RecruitForm from "./components/RecruitForm";
import Footer from "./components/Footer";

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return (
    <>
      {/* Mosaic shatter intro — only on first load */}
      {!introDone && <MosaicIntro onDone={() => setIntroDone(true)} />}

      {/* Custom cursor + tile trail (desktop only) */}
      <CursorTrail />

      <div style={{
        opacity: introDone ? 1 : 0,
        transition: "opacity 0.6s ease 0.2s",
        visibility: introDone ? "visible" : "hidden"
      }}>
        <Navbar />

        <main className="page-enter">
          <Hero />
          <RecruitForm />
        </main>

        <Footer />
      </div>
    </>
  );
}
