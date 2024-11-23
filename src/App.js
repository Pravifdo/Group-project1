import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./page/main_page/Home";
import Section1 from "./page/Section_page/Section1";
import Detection1 from "./page/photo_up/output";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#333", padding: "10px 20px" }}>
        <a className="navbar-brand" href="#" style={{ color: "#fff" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          My Website
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavCollapsed ? 'collapse' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: "#fff" }}>
                Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/section" element={<Section1 />} />
        <Route path="/Detection" element ={<Detection1/>}/>
      </Routes>
    </Router>
  );
}

export default App;
