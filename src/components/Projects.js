import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
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
              projectName="e-mall egypt"
              link="https://emallegy.herokuapp.com/"
              imageSrc="/images/projects/emall.png"
            />
          </div>
          <div className="col-12 col-md-6">
            <ProjectCard
              projectName="speech to code"
              imageSrc="/images/projects/speechToCode.png"
              link="https://speechtocode.herokuapp.com/"
            />
          </div>
          <div className="col-12 col-md-6">
            <ProjectCard
              projectName="chatbotsa"
              imageSrc="/images/projects/chatbotsa.png"
              link="https://chatbotsatest.herokuapp.com/"
            />
          </div>
          <div className="col-12 col-md-6">
            <ProjectCard
              link="https://womensfashion.herokuapp.com/"
              projectName="women's fashion"
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

export default Projects;