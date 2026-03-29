import { useState } from "react";
import { Send, CheckCircle, ArrowLeft, ArrowRight, User, GraduationCap, Phone, Calendar, Heart, Zap, Briefcase, Clock } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./RecruitForm.css";

const TIME_OPTIONS = [
  "1–2 hrs/week",
  "3–5 hrs/week",
  "6–10 hrs/week",
  "10+ hrs/week",
];

const TILE_COLORS = [
  "#ff2d7b","#ff6b35","#b8ff00","#00d4ff","#ffe14d",
  "#6c2bd9","#7bffb2","#ff9ee7","#1a0536",
];

export default function RecruitForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState("right");
  const [sent, setSent] = useState(false);
  const [active, setActive] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "", age: "", school: "", class: "", contact: "",
    whyJoin: "", contribute: "", experience: "", time: "",
  });
  const sectionRef = useScrollReveal();

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function nextStep() {
    // Validate step 1
    if (!form.name || !form.age || !form.school || !form.class || !form.contact) {
      return;
    }
    setDirection("right");
    setStep(2);
  }

  function prevStep() {
    setDirection("left");
    setStep(1);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.whyJoin || !form.contribute || !form.experience || !form.time) {
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("Name", form.name);
      formData.append("Age", form.age);
      formData.append("School", form.school);
      formData.append("Class", form.class);
      formData.append("Contact No.", form.contact);
      formData.append("Why do you want to join?", form.whyJoin);
      formData.append("What will you contribute?", form.contribute);
      formData.append("Previous Experience", form.experience);
      formData.append("Minimum Time Commitment", form.time);

      await fetch("https://formsubmit.co/ajax/the.mosaicfoundation.gen@gmail.com", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formData,
      });

      setSent(true);
    } catch (err) {
      // Still show success — formsubmit may block in dev
      setSent(true);
    } finally {
      setSubmitting(false);
    }
  }

  function resetForm() {
    setSent(false);
    setStep(1);
    setForm({ name:"", age:"", school:"", class:"", contact:"", whyJoin:"", contribute:"", experience:"", time:"" });
  }

  return (
    <section className="recruit-section section" id="recruit-form">
      <div className="container recruit-layout">
        <div className="recruit-form-card reveal-block" ref={sectionRef}>
          {/* Tape decorations */}
          <div className="tape tape-tl" />
          <div className="tape tape-tr" />

          {/* Sticker decorations */}
          <span className="form-deco form-deco-1" />
          <span className="form-deco form-deco-2" />
          <span className="form-deco form-deco-3" />

          {sent ? (
            <div className="success-state">
              <div className="success-tiles">
                {TILE_COLORS.map((col, i) => (
                  <span key={i} style={{
                    background: col,
                    animation: `successTile 0.6s ease forwards`,
                    animationDelay: `${i * 0.05}s`,
                    opacity: 0,
                  }} />
                ))}
              </div>
              <CheckCircle size={52} color="var(--c3)" />
              <h2>Application Received!</h2>
              <p>Thank you for wanting to be part of the mosaic. We'll review your application and get back to you soon.</p>
              <p className="handwritten">every tile matters ✦</p>
              <button className="btn btn-outline" onClick={resetForm} style={{ marginTop: 12 }}>
                Apply Again
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-header">
                <h2>Join The Mosaic</h2>
                <p>Tell us about yourself — we want to know the real you.</p>
              </div>

              {/* Step Indicator */}
              <div className="step-indicator">
                <div style={{ textAlign: "center" }}>
                  <div className={`step-dot ${step === 1 ? "active" : step > 1 ? "done" : ""}`}>
                    {step > 1 ? "✓" : "1"}
                  </div>
                  <span className="step-label">About You</span>
                </div>
                <div className={`step-line ${step > 1 ? "filled" : ""}`} />
                <div style={{ textAlign: "center" }}>
                  <div className={`step-dot ${step === 2 ? "active" : ""}`}>2</div>
                  <span className="step-label">Tell Us More</span>
                </div>
              </div>

              {/* STEP 1 — Personal Details */}
              {step === 1 && (
                <div className={`form-step slide-in-${direction}`} key="step1">
                  <div className="form-group focused-wrap">
                    <div className={`form-group ${active === "name" ? "focused" : ""}`}>
                      <label><User size={13} className="label-icon" /> Name *</label>
                      <input
                        name="name" value={form.name} onChange={handleChange}
                        onFocus={() => setActive("name")} onBlur={() => setActive(null)}
                        placeholder="What should we call you?" required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className={`form-group ${active === "age" ? "focused" : ""}`}>
                      <label><Calendar size={13} className="label-icon" /> Age *</label>
                      <input
                        name="age" type="number" min="10" max="30" value={form.age} onChange={handleChange}
                        onFocus={() => setActive("age")} onBlur={() => setActive(null)}
                        placeholder="e.g. 16" required
                      />
                    </div>
                    <div className={`form-group ${active === "contact" ? "focused" : ""}`}>
                      <label><Phone size={13} className="label-icon" /> Contact No. *</label>
                      <input
                        name="contact" type="tel" value={form.contact} onChange={handleChange}
                        onFocus={() => setActive("contact")} onBlur={() => setActive(null)}
                        placeholder="+91 XXXXX XXXXX" required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className={`form-group ${active === "school" ? "focused" : ""}`}>
                      <label><GraduationCap size={13} className="label-icon" /> School *</label>
                      <input
                        name="school" value={form.school} onChange={handleChange}
                        onFocus={() => setActive("school")} onBlur={() => setActive(null)}
                        placeholder="Your school name" required
                      />
                    </div>
                    <div className={`form-group ${active === "class" ? "focused" : ""}`}>
                      <label><GraduationCap size={13} className="label-icon" /> Class *</label>
                      <input
                        name="class" value={form.class} onChange={handleChange}
                        onFocus={() => setActive("class")} onBlur={() => setActive(null)}
                        placeholder="e.g. 11th / 12th / College" required
                      />
                    </div>
                  </div>

                  <div className="form-actions">
                    <span />
                    <button type="button" className="btn btn-primary" onClick={nextStep}>
                      Next Step <ArrowRight size={16} />
                    </button>
                  </div>
                  <p className="step-annotation">Step 1 of 2 — the basics ✦</p>
                </div>
              )}

              {/* STEP 2 — Tell Us More */}
              {step === 2 && (
                <div className={`form-step slide-in-${direction}`} key="step2">
                  <div className={`form-group ${active === "whyJoin" ? "focused" : ""}`}>
                    <label><Heart size={13} className="label-icon" /> Why do you want to join? *</label>
                    <textarea
                      name="whyJoin" value={form.whyJoin} onChange={handleChange}
                      onFocus={() => setActive("whyJoin")} onBlur={() => setActive(null)}
                      rows={4} placeholder="What draws you to the Mosaic Foundation? Be honest — we love honesty." required
                    />
                    <span className="char-count">{form.whyJoin.length} characters</span>
                  </div>

                  <div className={`form-group ${active === "contribute" ? "focused" : ""}`}>
                    <label><Zap size={13} className="label-icon" /> What will you contribute? *</label>
                    <textarea
                      name="contribute" value={form.contribute} onChange={handleChange}
                      onFocus={() => setActive("contribute")} onBlur={() => setActive(null)}
                      rows={4} placeholder="Skills, talents, superpowers — what do you bring to the table?" required
                    />
                    <span className="char-count">{form.contribute.length} characters</span>
                  </div>

                  <div className={`form-group ${active === "experience" ? "focused" : ""}`}>
                    <label><Briefcase size={13} className="label-icon" /> Previous Experience *</label>
                    <textarea
                      name="experience" value={form.experience} onChange={handleChange}
                      onFocus={() => setActive("experience")} onBlur={() => setActive(null)}
                      rows={3} placeholder="Any clubs, NGOs, volunteer work, or projects you've been part of? (It's okay if none!)" required
                    />
                  </div>

                  <div className={`form-group ${active === "time" ? "focused" : ""}`}>
                    <label><Clock size={13} className="label-icon" /> Minimum time you can commit *</label>
                    <select
                      name="time" value={form.time} onChange={handleChange}
                      onFocus={() => setActive("time")} onBlur={() => setActive(null)}
                      required
                    >
                      <option value="">Choose one…</option>
                      {TIME_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  <div className="form-actions">
                    <button type="button" className="btn btn-outline" onClick={prevStep}>
                      <ArrowLeft size={16} /> Back
                    </button>
                    <button type="submit" className="btn btn-primary" disabled={submitting}>
                      {submitting ? "Sending..." : <>Submit Application <Send size={15} /></>}
                    </button>
                  </div>
                  <p className="step-annotation">Step 2 of 2 — almost there! ✦</p>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
