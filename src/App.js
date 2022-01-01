import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import NotFound from './pages/NotFound'
import About from './pages/About'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="a-propos" element={<About />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;