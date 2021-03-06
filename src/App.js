import React from "react";
import "./css/app.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Contact />
    </>
  );
}

export default App;
