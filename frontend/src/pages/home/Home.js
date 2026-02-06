import { Link } from "react-router-dom";
import "./Home.css";
import StoriesPopup from "../../components/popup/StoriesPopup";


function Home() {
  return (
    <div className="home">
      <StoriesPopup />
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Pandemic Response Toolkit</h1>
        <p className="hero-subtitle">
          A centralized digital platform designed to support individuals and
          communities with healthcare guidance, mental well-being resources,
          verified information, and community-driven assistance during pandemics.
        </p>

        <div className="hero-actions">
          <Link to="/health" className="primary-btn">
            Check Symptoms
          </Link>
          <Link to="/community" className="secondary-btn">
            Get Community Help
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>How This Platform Helps</h2>

        <div className="card-container">
          <Link to="/health" className="card">
            <h3>🏥 Healthcare Support</h3>
            <p>
              Assess symptoms, understand health risks, and access preventive
              healthcare guidance.
            </p>
          </Link>

          <Link to="/mental" className="card">
            <h3>🧠 Mental Well-being</h3>
            <p>
              Access stress management strategies, emotional support, and
              emergency mental health resources.
            </p>
          </Link>

          <Link to="/info" className="card">
            <h3>ℹ️ Information Hub</h3>
            <p>
              Stay informed with verified guidelines, do’s and don’ts, and
              awareness content to prevent misinformation.
            </p>
          </Link>

          <Link to="/community" className="card">
            <h3>🤝 Community Help</h3>
            <p>
              Request essential help or volunteer to support people in your local
              community.
            </p>
          </Link>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="why">
        <h2>Why Pandemic Preparedness Matters</h2>
        <p>
          Pandemics impact not only physical health but also mental well-being
          and social stability. Timely access to reliable information, healthcare
          guidance, and community support can significantly reduce risk and
          improve resilience.
        </p>
      </section>
    
    </div>
  );
}

export default Home;
