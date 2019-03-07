import React, { Component } from "react";
import Particles from "react-particles-js";
import ParticlesConfig from "./particle.config";
import $ from "jquery";
import Typed from "typed.js";
class Header extends Component {
  state = {};
  componentDidMount() {
    const strings = [
      "UI/UX designer",
      "front-end developer",
      "react.js developer"
    ];
    const options = {
      strings,
      typeSpeed: 20,
      backSpeed: 20,
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
  }
  scrollToProjects = e => {
    let offset = $(".projects").offset().top;

    $("html,body").animate({ scrollTop: offset }, 1000);
  };
  render() {
    return (
      <header>
        <div className="header__particles-container">
          <Particles
            canvasClassName="header__particles-container"
            params={ParticlesConfig()}
          />
          />
        </div>
        <div className="header__background" />
        <div className="header__content">
          <div className="header__text-container">
            <div>
              <h1 className="header__name">
                <span id="hi">HI,</span>
                <br />
                <span id="name">I AM Mohammed Essam</span>
              </h1>
            </div>
            <h2 className="title">
              I am a <span className="typer" id="header_typer" />
            </h2>
          </div>
          <div>
            <button
              onClick={this.scrollToProjects}
              className="header__btn btn "
              id="aniamtdBtn"
            >
              Explore Projects
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
