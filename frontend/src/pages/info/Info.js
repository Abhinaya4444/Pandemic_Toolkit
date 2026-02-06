import { useState } from "react";
import "./Info.css";

function Info() {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="page">
      {/* HEADER */}
      <div className="info-header">
        <h1>Information Hub</h1>
        <p>
          Stay informed with verified guidelines, myth-busting facts, and
          actionable safety practices during pandemics.
        </p>
      </div>

      {/* DO & DONT */}
      <div className="info-grid">
        <div className="info-card do">
          <h3>✅ Do’s</h3>
          <ul>
            <li>Wash hands frequently</li>
            <li>Wear masks in crowded areas</li>
            <li>Maintain physical distancing</li>
            <li>Follow vaccination guidelines</li>
          </ul>
        </div>

        <div className="info-card dont">
          <h3>❌ Don’ts</h3>
          <ul>
            <li>Do not ignore symptoms</li>
            <li>Avoid spreading misinformation</li>
            <li>Do not self-medicate</li>
            <li>Avoid unnecessary travel</li>
          </ul>
        </div>
      </div>

      {/* MYTH VS FACT */}
      <div className="section">
        <h2>🧠 Myth vs Fact</h2>

        <div className="myth-card">
          <strong>❌ Myth:</strong> Young people cannot be affected
          <br />
          <strong>✅ Fact:</strong> Anyone can be affected, though severity
          varies.
        </div>

        <div className="myth-card">
          <strong>❌ Myth:</strong> Home remedies cure pandemics
          <br />
          <strong>✅ Fact:</strong> Medical guidance is essential.
        </div>
      </div>

      {/* ACCORDION */}
      <div className="section">
        <h2>📌 Frequently Asked Questions</h2>

        {[
          {
            q: "When should I seek medical help?",
            a: "If you experience difficulty breathing, chest pain, high fever, or sudden weakness, contact healthcare services immediately.",
          },
          {
            q: "How can I protect my mental health?",
            a: "Limit exposure to distressing news, stay connected with loved ones, and seek professional help when needed.",
          },
          {
            q: "Which sources should I trust?",
            a: "Always follow official government advisories and recognized health organizations.",
          },
        ].map((item, index) => (
          <div key={index} className="accordion">
            <div className="accordion-header" onClick={() => toggle(index)}>
              <span>{item.q}</span>
              <span>{open === index ? "−" : "+"}</span>
            </div>
            {open === index && (
              <div className="accordion-body">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Info;
