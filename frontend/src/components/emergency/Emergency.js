import "./Emergency.css";

function EmergencyBar() {
  return (
    <div className="emergency-bar">
      <div className="emergency-main">
        <span>🚨 Emergency?</span>
        <span>📞 112</span>
        <span className="divider">|</span>
        <span>🧠 Mental Helpline: 14416</span>
      </div>

      <div className="emergency-disclaimer">
        Emergency numbers are provided for public awareness only. Availability
        may vary by location. This platform does not claim affiliation with any
        government authority.
      </div>
    </div>
  );
}

export default EmergencyBar;
