import { useState } from "react";
import "./Community.css";

function Community() {
  /* =======================
     COMMUNITY HELP FORM
  ======================== */
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    help_type: "request",
    category: "food",
    urgency: "medium",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: "" });

    try {
      const res = await fetch("http://localhost:5000/api/help", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus({ loading: false, success: true, error: "" });
      setForm({
        name: "",
        phone: "",
        city: "",
        help_type: "request",
        category: "food",
        urgency: "medium",
        message: "",
      });
    } catch {
      setStatus({
        loading: false,
        success: false,
        error: "Something went wrong. Please try again.",
      });
    }
  };

  /* =======================
     STORY SUBMISSION FORM
  ======================== */
  const [story, setStory] = useState({
    name: "",
    city: "",
    message: "",
  });

  const [storyStatus, setStoryStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleStoryChange = (e) => {
    setStory({ ...story, [e.target.name]: e.target.value });
  };

  const submitStory = async (e) => {
    e.preventDefault();
    setStoryStatus({ loading: true, success: false, error: "" });

    try {
      const res = await fetch("http://localhost:5000/api/stories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(story),
      });

      if (!res.ok) throw new Error("Failed");

      setStoryStatus({ loading: false, success: true, error: "" });
      setStory({ name: "", city: "", message: "" });
    } catch {
      setStoryStatus({
        loading: false,
        success: false,
        error: "Unable to submit story right now.",
      });
    }
  };

  return (
    <div className="page">
      {/* HEADER */}
      <div className="community-header">
        <h1>Community Help & Support</h1>
        <p>
          Connect with people who need help and those willing to support during
          pandemics and emergencies.
        </p>
      </div>

      {/* INFO CARDS */}
      <div className="community-info">
        <div className="info-card">
          <h3>For Requests</h3>
          <p>
            Request essential help like food, medicine, transport, or emotional
            support.
          </p>
        </div>

        <div className="info-card">
          <h3>For Volunteers</h3>
          <p>
            Offer help to people in your locality and support the community.
          </p>
        </div>
      </div>

      {/* HELP FORM */}
      <div className="form-card">
        <h2>Submit Help Request / Offer</h2>

        <form className="community-form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <input
            name="city"
            placeholder="City / Area"
            value={form.city}
            onChange={handleChange}
            required
          />

          <select
            name="help_type"
            value={form.help_type}
            onChange={handleChange}
          >
            <option value="request">Requesting Help</option>
            <option value="volunteer">Volunteering</option>
          </select>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option value="food">Food</option>
            <option value="medicine">Medicine</option>
            <option value="medical">Medical</option>
            <option value="transport">Transport</option>
            <option value="emotional_support">Emotional Support</option>
            <option value="other">Other</option>
          </select>

          <select
            name="urgency"
            value={form.urgency}
            onChange={handleChange}
          >
            <option value="low">Low Urgency</option>
            <option value="medium">Medium Urgency</option>
            <option value="high">High Urgency</option>
          </select>

          <textarea
            name="message"
            placeholder="Describe your request or offer"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={status.loading}>
            {status.loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {status.success && (
          <div className="success-box">
            ✅ Your request has been submitted successfully.
          </div>
        )}

        {status.error && (
          <div className="error-box">❌ {status.error}</div>
        )}
      </div>

      {/* STORY FORM */}
      <div className="form-card">
        <h2>Share Your Community Experience</h2>
        <p className="form-note">
          Your experience will be reviewed before being displayed publicly.
        </p>

        <form className="community-form" onSubmit={submitStory}>
          <input
            name="name"
            placeholder="Name (optional)"
            value={story.name}
            onChange={handleStoryChange}
          />

          <input
            name="city"
            placeholder="City (optional)"
            value={story.city}
            onChange={handleStoryChange}
          />

          <textarea
            name="message"
            placeholder="Share your experience"
            rows="4"
            value={story.message}
            onChange={handleStoryChange}
            required
          />

          <button type="submit" disabled={storyStatus.loading}>
            {storyStatus.loading ? "Submitting..." : "Submit Story"}
          </button>
        </form>

        {storyStatus.success && (
          <div className="success-box">
            ✅ Thank you! Your story has been submitted for review.
          </div>
        )}

        {storyStatus.error && (
          <div className="error-box">❌ {storyStatus.error}</div>
        )}
      </div>
    </div>
  );
}

export default Community;
