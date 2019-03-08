import React, { Component } from "react";
import Particles from "react-particles-js";
import ParticlesConfig from "./particle.config";
import $ from "jquery";

class Header extends Component {
  state = {};
  componentDidMount() {}
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
