import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <div style={{ paddingTop: "70px" }}>
        <Hero />
        <About />
        <Services />
        <Contact />
      </div>
    </>
  );
}
