import React, { Component, lazy, Suspense } from "react";
import ImagePlaceHolder from "./ImagePlaceHolder";
import { trackWindowScroll } from "react-lazy-load-image-component";
const ProjectCard = lazy(() => import("./ProjectCard"));
class Projects extends Component {
  state = {};
  render() {
    return (
      <section className="projects">
        <div className="row text-center">
          <div className="col-12 col-md-6">
            <Suspense
              fallback={
                <div>
                  <ImagePlaceHolder />
                </div>
              }
            >
              <ProjectCard
                projectName="Instructor Social Network"
                imageSrc="/images/projects/isn.png"
                link="https://instructorscoialnetwork.herokuapp.com"
              />
            </Suspense>
          </div>
          <div className="col-12 col-md-6">
            <Suspense
              fallback={
                <div>
                  <ImagePlaceHolder />
                </div>
              }
            >
              <ProjectCard
                projectName="e-mall egypt"
                link="https://emallegy.herokuapp.com/"
                imageSrc="/images/projects/emall.png"
              />
            </Suspense>
          </div>
          <div className="col-12 col-md-6">
            <Suspense
              fallback={
                <div>
                  <ImagePlaceHolder />
                </div>
              }
            >
              <ProjectCard
                projectName="speech to code"
                imageSrc="/images/projects/speechToCode.png"
                link="https://speechtocode.herokuapp.com/"
              />
            </Suspense>
          </div>
          <div className="col-12 col-md-6">
            <Suspense
              fallback={
                <div>
                  <ImagePlaceHolder />
                </div>
              }
            >
              <ProjectCard
                projectName="chatbotsa"
                imageSrc="/images/projects/chatbotsa.png"
                link="https://chatbotsatest.herokuapp.com/"
              />
            </Suspense>
          </div>
          <div className="col-12 col-md-6">
            <Suspense
              fallback={
                <div>
                  <ImagePlaceHolder />
                </div>
              }
            >
              <ProjectCard
                link="https://womensfashion.herokuapp.com/"
                projectName="women's fashion"
                imageSrc="/images/projects/women.png"
              />
            </Suspense>
          </div>
          <div className="col-12 col-md-6">
            <Suspense
              fallback={
                <div>
                  <ImagePlaceHolder />
                </div>
              }
            >
              <ProjectCard
                link="https://dscytest.herokuapp.com/"
                projectName="Discy"
                imageSrc="/images/projects/discy.png"
              />
            </Suspense>
          </div>
        </div>
      </section>
    );
  }
}

export default trackWindowScroll(Projects);
