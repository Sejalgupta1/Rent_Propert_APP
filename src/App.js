import "./styles.css";
import React, { useState } from "react";
import Header from "./Header";
import Home from "./Home";

export default function App() {
  return (
    <div className="App">
      <Header />

      <Home />
    </div>
  );
}
