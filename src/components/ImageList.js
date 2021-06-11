import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = (props) => {
  const images = props.images
    .sort((a, b) => (a.likes > b.likes ? 1 : -1))
    .map((image) => {
      return <ImageCard key={image.id} image={image} />;
    });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
