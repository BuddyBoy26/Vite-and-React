// src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
      <BrowserRouter>
        <NavBar />
        <div className="component">
          <Routes>

            <Route path="/" element={<Home />}/>

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
  );
};

export default App;
