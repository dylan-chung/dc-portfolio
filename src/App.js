import Experience from "./components/Experience";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Scrollup from "./components/Scrollup";
import React from "react";

function App() {

  return (
    <div>

      <main>

      
      <NavBar  />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      </main>
      
      <Scrollup/>
      <Footer/>
    </div>
    
  );
}

export default App;
