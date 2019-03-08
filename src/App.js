import React, { Component } from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Typed from "typed.js";
class App extends Component {
  componentDidMount = () => {
    const hideLoader = hideLoaderCallback => {
      document.querySelector(".loader-container").style.display = "none";
      hideLoaderCallback();
    };
    //set headers animation start
    const setHeaderAnimations = () => {
      //this is the callback
      const strings = [
        "UI/UX designer",
        "front-end developer",
        "react.js developer"
      ];
      const options = {
        strings,
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        backDelay: 1500,
        loopCount: Infinity
      };
      const typer = document.getElementById("header_typer");
      let aniamtdBtn = document.getElementById("aniamtdBtn");
      //animations

      aniamtdBtn.classList.add("animated", "fadeInRight");
      document.getElementById("hi").classList.add("animated", "fadeInRight");
      document.getElementById("name").classList.add("animated", "fadeInRight");
      document.querySelector(".title").classList.add("animated", "fadeInRight");
      document.querySelector(".title").addEventListener("animationend", () => {
        new Typed(typer, options);
      });
    };
    //set headers animations end
    hideLoader(setHeaderAnimations);
  };

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
