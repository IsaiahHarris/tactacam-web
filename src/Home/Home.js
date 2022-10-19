import "./Home.scss";
import React, { useState, useEffect } from "react";
import Photo from "../Photo/Photo";
import InfiniteScroll from "react-infinite-scroll-component";
const CLIENT_ID = "bPfgiIw4vW72MUt72sWrzfIR4KSMdhe3J0brvyZqoCs";
const Home = ({ query, clickPhoto }) => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [params, setParams] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    getPhotos(1, true);
  }, [query, params.color, params.orientation]);

  const getPhotos = (page, newSearch) => {
    const colorParam = params.color && query ? `&color=${params.color}` : "";
    const orientationParam =
      params.orientation && query ? `&orientation=${params.orientation}` : "";
    fetch(
      `https://api.unsplash.com/search/photos?page=${page}&per_page=20&query=${
        query || "random"
      }${colorParam}${orientationParam}&client_id=${CLIENT_ID}`
    )
      .then((response) => {
        if (response.status === 403) {
          setError("Too many requests");
        }
        return response.json();
      })
      .then((data) => {
        if (!newSearch) {
          setPhotos([...photos, ...data.results]);
        } else {
          setPhotos([...data.results]);
        }
      });
  };

  return (
    <div className="home-container">
      <div className="select-container">
        <div className="select-dropdown">
          <select
            type="radio"
            value={params.color}
            onChange={(e) => setParams({ ...params, color: e.target.value })}
            className="select"
            defaultValue
          >
            <option disabled value>
              - Color -
            </option>
            <option value="black">black</option>
            <option value="white">white</option>
          </select>
        </div>
        <div className="select-dropdown">
          <select
            type="radio"
            value={params.orientation}
            onChange={(e) =>
              setParams({ ...params, orientation: e.target.value })
            }
            className="select"
            defaultValue
          >
            <option disabled value>
              - Orientation -
            </option>
            <option value="landscape">landscape</option>
            <option value="portrait">portrait</option>
            <option value="squarish">squarish</option>
          </select>
        </div>
      </div>
      <InfiniteScroll
        dataLength={photos.length}
        next={() => {
          getPhotos(page + 1, false);
          setPage((page) => page + 1);
        }}
        hasMore
      >
        {photos.map((photo) => {
          return (
            <Photo
              clickPhoto={clickPhoto}
              key={photo.id}
              id={photo.id}
              photo={photo}
              url={photo.urls.thumb}
            />
          );
        })}
      </InfiniteScroll>
      {error}
    </div>
  );
};

export default Home;
