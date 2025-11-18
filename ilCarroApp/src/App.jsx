import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./styles/main.css";
import "./styles/header.css";

import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      {/* Menu di navigazione */}
      <nav>
        <Link to="/"></Link>
      </nav>

      {/* Gestione delle pagine */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
