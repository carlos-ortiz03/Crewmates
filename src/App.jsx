import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CreateCrewmate from './components/CreateCrewmate';
import CrewmateGallery from './components/CrewmateGallery';
import "./App.css"

function App() {
  return (
    <div className="app">
      <Router>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/create-crewmate/create">Create a Crewmate</Link>
          <Link to="/crewmate-gallery">Crewmate Gallery</Link>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-crewmate/:action" element={<CreateCrewmate />} />
            <Route path="/crewmate-gallery" element={<CrewmateGallery />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
