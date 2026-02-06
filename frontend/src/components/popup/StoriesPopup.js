import { useEffect, useState } from "react";
import "./StoriesPopup.css";

function StoriesPopup() {
  const [stories, setStories] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/stories")
      .then((res) => res.json())
      .then((data) => setStories(data.slice(0, 3))) // latest 3
      .catch(() => {});
  }, []);

  if (!show || stories.length === 0) return null;

  return (
    <div className="stories-popup">
      <div className="popup-header">
        <h4>💬 Community Experiences</h4>
        <button onClick={() => setShow(false)}>✕</button>
      </div>

      {stories.map((story, index) => (
        <div className="popup-story" key={index}>
          <p>“{story.message}”</p>
          <span>
            — {story.name || "Anonymous"}
            {story.city && `, ${story.city}`}
          </span>
        </div>
      ))}
    </div>
  );
}

export default StoriesPopup;
