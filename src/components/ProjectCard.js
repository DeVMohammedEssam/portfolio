import React from "react";
const ProgressCard = ({ projectName, imageSrc, link }) => {
  return (
    <div className="projects__card">
      <figure className="imghvr-zoom-out card-border">
        <img className="" alt="" src={imageSrc} />
        <figcaption className="project__card__content--hover">
          <div className="project__card__content">
            <h2>{projectName}</h2>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className="projects__card__link"
          >
            <button className="btn live">Live Preview</button>
          </a>
        </figcaption>
      </figure>
    </div>
  );
};

export default ProgressCard;
