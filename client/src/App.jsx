// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyTest from "./pages/main.jsx";
import Galary from "./pages/newenglish/imagegallery.jsx";
import About from "./pages/about/about.jsx";
import Service from "./pages/service/service.jsx";
import "./App.css";


function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<MyTest />} />
                    <Route path="/gallery" element={<Galary />} />
                    <Route path="/gallery/:id" element={<Galary />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Service />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;