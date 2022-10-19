import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PhotoDetail.scss";
const PhotoDetail = ({ photo }) => {
  const urls = photo && photo.urls;
  return (
    <>
      <div className="photo-detail-container">
        <div className="header">
          <Link to="/">
            <button className="green-button">Back home</button>
          </Link>
        </div>
        <div className="photo-container">
          <img className="detail-photo" src={urls.full || urls.thumb} alt="" />
          <div className="description-container">
            <div className="subtitle">
              {photo.description || "no description available"}
            </div>
            <div className="line"></div>
            <div className="subtitle">Likes: {photo.likes}</div>
            <div className="subtitle">Name: {photo.user.name}</div>
            <div className="subtitle">Username: {photo.user.username}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoDetail;
