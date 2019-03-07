import React, { Component } from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

class App extends Component {
  componentDidMount = () => {
    document.querySelector(".loader-container").style.display = "none";
  }
  
  render() {
    return (
      <div>
        <Header />
        <Skills />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
