import "./Mental.css";

function Mental() {
  return (
    <div className="page">
      {/* HEADER */}
      <div className="mental-header">
        <h1>Mental Health Support</h1>
        <p>
          Pandemics can affect emotional well-being due to isolation, fear, and
          uncertainty. This section provides guidance, coping strategies, and
          support resources to help you stay mentally resilient.
        </p>
      </div>

      {/* WHY IT MATTERS */}
      <div className="mental-section">
        <h3>Why Mental Health Matters</h3>
        <p>
          Prolonged stress, social isolation, and exposure to distressing news
          can lead to anxiety, depression, and burnout. Taking care of mental
          health is just as important as physical health.
        </p>
      </div>

      {/* STRESS RELIEF */}
      <div className="mental-section">
        <h3>Stress Relief & Coping Strategies</h3>
        <ul className="mental-list">
          <li>Practice deep breathing, meditation, or mindfulness.</li>
          <li>Maintain a daily routine to create structure.</li>
          <li>Stay connected with friends and family virtually or safely.</li>
          <li>Limit exposure to distressing or negative news.</li>
          <li>Engage in hobbies, exercise, or creative activities.</li>
        </ul>
      </div>

      {/* WARNING SIGNS */}
      <div className="mental-alert">
        <h3>⚠️ When to Seek Help</h3>
        <p>You should consider professional help if you experience:</p>
        <ul>
          <li>Persistent sadness or hopelessness</li>
          <li>Severe anxiety or panic attacks</li>
          <li>Difficulty sleeping or concentrating</li>
          <li>Thoughts of self-harm or suicide</li>
        </ul>
      </div>

      {/* SELF CARE */}
      <div className="mental-section">
        <h3>Daily Self-Care Practices</h3>
        <ul className="mental-list">
          <li>Get enough sleep and eat nutritious meals.</li>
          <li>Take short breaks from work or screens.</li>
          <li>Spend time in natural light or fresh air.</li>
          <li>Practice gratitude or journaling.</li>
        </ul>
      </div>

      {/* HELPLINES */}
      <div className="mental-helplines">
        <h3>📞 Helpline & Emergency Support</h3>
        <p>If you or someone you know needs immediate support:</p>

        <div className="helpline-card">
          <p><strong>National Mental Health Helpline:</strong> 14416</p>
        </div>

        <div className="helpline-card">
          <p><strong>Suicide Prevention Helpline:</strong> 9152987821</p>
        </div>

        <div className="helpline-card">
          <p><strong>Emergency Services:</strong> 112</p>
        </div>
      </div>

      {/* FOOT NOTE */}
      <div className="mental-note">
        <p>
          Seeking help is a sign of strength. You are not alone, and support is
          available.
        </p>
      </div>
    </div>
  );
}

export default Mental;
