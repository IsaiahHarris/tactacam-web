import React from "react";
import "./Photo.scss";
import { Link } from "react-router-dom";

const Photo = ({ url, id, photo, clickPhoto }) => {
  return (
    <div className="photo-container">
      <Link to={`/photo/${id}`}>
        <img
          onClick={() => clickPhoto(photo)}
          alt="click to view"
          className="photo"
          src={url}
        />
      </Link>
    </div>
  );
};

export default Photo;
