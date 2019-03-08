import React from "react";
import LazyLoadImage from "./lazyLodedImg";
const ProgressCard = ({ projectName, imageSrc, link }) => {
  return (
    <div className="projects__card">
      <figure className="imghvr-zoom-out card-border">
        <LazyLoadImage src={imageSrc} alt="" />

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
