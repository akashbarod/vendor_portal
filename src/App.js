import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Chapter from "./Container/Chapter";
import Content from "./Container/Content";
import Portfolio from "./Container/Portfolio";
import Promo from "./Container/Promo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/package" element={<Home />} />
        <Route exact path="/chapter" element={<Chapter />} />
        <Route exact path="/content" element={<Content />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/promo" element={<Promo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
