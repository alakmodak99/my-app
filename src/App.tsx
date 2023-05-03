import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PriceDetails from "./Pages/RedirectPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/price-details/:id" element={<PriceDetails />}></Route>
          <Route path="*" element={<>No Page Found </>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
