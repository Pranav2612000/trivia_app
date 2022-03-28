import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Quiz from "./components/pages/Quiz";

function App() {
  return (
    <div className="App h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
