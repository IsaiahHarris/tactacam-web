import React, { useState, useEffect } from "react";
import "./Photo.scss";
import { Link } from "react-router-dom";

const Photo = ({ url, id, photo, clickPhoto }) => {
  return (
    <div className="photo-container">
      <Link to={`/photo/${id}`}>
        <img onClick={() => clickPhoto(photo)} className="photo" src={url} />
      </Link>
    </div>
  );
};

export default Photo;
