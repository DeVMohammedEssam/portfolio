import React from "react";
const Skill = ({ logoSrc, progressVal, progressClass, title }) => (
  <div className="col-12 col-md-6">
    <div className="skill">
      <div className="skill__describtion">
        <h3>{title}</h3>
        <div className="skill__logo">
          <img src={logoSrc} alt="" />
        </div>
      </div>
      <div>
        <div className={`progress ${progressClass}`}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow={progressVal}
            aria-valuemin="0"
            aria-valuemax="100"
            data-value={progressVal}
          >
            <span className="progress__percentage" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Skill;
