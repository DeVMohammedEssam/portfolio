import React, { Component } from "react";
import Skill from "./Skill";
import $ from "jquery";
class Skills extends Component {
  state = {};
  componentDidMount() {
    //progress bar animation
    const $progress = $(".progress-bar");
    const $wn = $(window);

    let scrollFlag = false;
    $wn.scroll(function() {
      if (
        $wn.scrollTop() >= $(".skills").offset().top - 100 &&
        scrollFlag === false
      ) {
        if (!scrollFlag) {
          scrollFlag = true;
        }
        $progress.each(function() {
          const value = $(this).data("value") + "%";
          $(this)
            .stop()
            .animate(
              {
                width: value
              },
              1000,
              () => {
                $(this)
                  .find(".progress__percentage")
                  .text(value);
              }
            );
        });
      }
    });
  }
  render() {
    return (
      <section className="skills">
        <div className="container">
          <div className="row justify-content-center">
            <Skill
              title="React.js"
              logoSrc="/images/logos/React-icon.svg"
              progressClass="react"
              progressVal="60"
            />
            <Skill
              title="JavaScript"
              logoSrc="/images/logos/JavaScript-logo.png"
              progressClass="js"
              progressVal="85"
            />
            <Skill
              title="HTML5"
              logoSrc="/images/logos/HTML5_logo_resized.svg"
              progressClass="html5"
              progressVal="90"
            />
            <Skill
              title="CSS3"
              logoSrc="/images/logos/CSS3_logo_and_wordmark.svg"
              progressClass="css3"
              progressVal="90"
            />
            <Skill
              title="Bootstrap4"
              logoSrc="/images/logos/Boostrap_logo.svg"
              progressClass="bootstrap4"
              progressVal="80"
            />
            <Skill
              title="JQuery"
              logoSrc="/images/logos/JQuery-Logo.svg"
              progressClass="jQuery"
              progressVal="90"
            />
            <Skill
              title="Sass"
              logoSrc="/images/logos/Sass_Logo_Color.svg"
              progressClass="sass"
              progressVal="65"
            />
            <Skill
              title="Webpack"
              logoSrc="/images/logos/webpack-seeklogo.com.svg"
              progressClass="webpack"
              progressVal="60"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
