import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>Pandemic Toolkit</h2>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/health" onClick={() => setOpen(false)}>Healthcare</Link>
        <Link to="/mental" onClick={() => setOpen(false)}>Mental Health</Link>
        <Link to="/info" onClick={() => setOpen(false)}>Info</Link>
        <Link to="/community" onClick={() => setOpen(false)}>Community</Link>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
