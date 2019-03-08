import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const LazyLoadedImg = ({ alt, src }) => {
  return <LazyLoadImage src={src} alt={alt} effect={"opacity"} />;
};

export default LazyLoadedImg;
