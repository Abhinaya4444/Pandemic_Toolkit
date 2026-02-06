import { useState } from "react";
import "./Health.css";

function Health() {
  const [fever, setFever] = useState(false);
  const [cough, setCough] = useState(false);
  const [breath, setBreath] = useState(false);
  const [risk, setRisk] = useState("");
  const [message, setMessage] = useState("");

  const checkSymptoms = () => {
    if (fever && cough && breath) {
      setRisk("high");
      setMessage(
        "High risk detected. Please consult a doctor and get tested immediately."
      );
    } else if (fever && cough) {
      setRisk("medium");
      setMessage(
        "Moderate risk. Monitor your symptoms closely and avoid public contact."
      );
    } else if (fever || cough || breath) {
      setRisk("low");
      setMessage(
        "Low risk. Rest well and seek medical advice if symptoms worsen."
      );
    } else {
      setRisk("none");
      setMessage("No major symptoms detected. Stay safe and healthy!");
    }
  };

  return (
    <div className="page">
      {/* HEADER */}
      <div className="health-header">
        <h1>Healthcare Resources</h1>
        <p>
          This section provides a basic symptom checker along with practical
          guidance to help individuals understand health risks during pandemics.
          This tool does not replace professional medical advice.
        </p>
      </div>

      {/* SYMPTOM CHECKER CARD */}
      <div className="health-card">
        <h2>Symptom Checker</h2>

        <div className="symptoms">
          <label>
            <input
              type="checkbox"
              checked={fever}
              onChange={() => setFever(!fever)}
            />
            Fever
          </label>

          <label>
            <input
              type="checkbox"
              checked={cough}
              onChange={() => setCough(!cough)}
            />
            Cough
          </label>

          <label>
            <input
              type="checkbox"
              checked={breath}
              onChange={() => setBreath(!breath)}
            />
            Breathing Difficulty
          </label>
        </div>

        <button onClick={checkSymptoms}>Check Risk</button>

        {message && (
          <div className={`risk-box ${risk}`}>
            <strong>
              {risk === "high" && "🚨 High Risk"}
              {risk === "medium" && "⚠️ Medium Risk"}
              {risk === "low" && "ℹ️ Low Risk"}
              {risk === "none" && "✅ No Risk"}
            </strong>
            <p>{message}</p>
          </div>
        )}
      </div>

      {/* UNDERSTANDING RISK */}
      <div className="health-section">
        <h3>Understanding Your Risk Level</h3>
        <ul>
          <li>
            <strong>Low Risk:</strong> Mild or single symptoms. Continue
            monitoring your health and rest adequately.
          </li>
          <li>
            <strong>Medium Risk:</strong> Multiple symptoms present. Avoid public
            contact and consult a healthcare provider.
          </li>
          <li>
            <strong>High Risk:</strong> Severe symptoms including breathing
            difficulty. Seek immediate medical attention.
          </li>
        </ul>
      </div>

      {/* WHAT TO DO NEXT */}
      <div className="health-section">
        <h3>What Should You Do Next?</h3>
        <ol>
          <li>Isolate yourself if symptoms are present.</li>
          <li>Monitor your temperature and symptoms daily.</li>
          <li>Stay hydrated and get enough rest.</li>
          <li>Consult a doctor if symptoms worsen.</li>
        </ol>
      </div>

      {/* EMERGENCY WARNING */}
      <div className="health-alert">
        <h3>🚨 Emergency Warning Signs</h3>
        <p>Seek immediate medical care if you experience:</p>
        <ul>
          <li>Difficulty breathing or shortness of breath</li>
          <li>Persistent chest pain or pressure</li>
          <li>Sudden confusion or inability to stay awake</li>
          <li>Bluish lips or face</li>
        </ul>
      </div>

      {/* PREVENTION */}
      <div className="health-section">
        <h3>Prevention & Safety Measures</h3>
        <ul>
          <li>Wash hands frequently with soap or sanitizer.</li>
          <li>Wear masks in crowded or enclosed spaces.</li>
          <li>Maintain physical distancing.</li>
          <li>Ensure good ventilation indoors.</li>
          <li>Follow vaccination and booster recommendations.</li>
        </ul>
      </div>

      {/* HOME CARE */}
      <div className="health-section">
        <h3>Home Isolation & Self-Care</h3>
        <p>
          If isolating at home, stay in a well-ventilated room, avoid sharing
          personal items, monitor symptoms regularly, and maintain communication
          with healthcare providers or caregivers.
        </p>
      </div>

      {/* FOOT NOTE */}
      <div className="health-note">
        <p>
          Always consult a qualified healthcare professional for diagnosis and
          treatment. This tool is for awareness and guidance only.
        </p>
      </div>
    </div>
  );
}

export default Health;
