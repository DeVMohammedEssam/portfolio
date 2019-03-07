import React, { Component } from "react";

import ProjectCard from "./ProjectCard";
import { trackWindowScroll } from "react-lazy-load-image-component";

class Projects extends Component {
  state = {};
  render() {
    return (
      <section className="projects">
        <div className="row text-center">
          <div className="col-12 col-md-6">
            <ProjectCard
              projectName="Instructor Social Network"
              imageSrc="/images/projects/isn.png"
              link="https://instructorscoialnetwork.herokuapp.com"
            />
          </div>

          <div className="col-12 col-md-6">
            <ProjectCard
              projectName="E-Mall"
              imageSrc="/images/projects/isn.png"
              link="https://emallegy.herokuapp.com"
            />
          </div>
          <div className="col-12 col-md-6">
            <ProjectCard
              projectName="Speech To Code"
              imageSrc="/images/projects/speechToCode.png"
              link="https://speechtocode.herokuapp.com/"
            />
          </div>
          <div className="col-12 col-md-6">
            <ProjectCard
              projectName="Chatbotsa"
              imageSrc="/images/projects/chatbotsa.png"
              link="https://chatbotsatest.herokuapp.com/"
            />
          </div>
          <div className="col-12 col-md-6">
            <ProjectCard
              link="https://womensfashion.herokuapp.com/"
              projectName="Women's Fashion"
              imageSrc="/images/projects/women.png"
            />
          </div>
          <div className="col-12 col-md-6">
            <ProjectCard
              link="https://dscytest.herokuapp.com/"
              projectName="Discy"
              imageSrc="/images/projects/discy.png"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default trackWindowScroll(Projects);
