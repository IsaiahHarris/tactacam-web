import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./Router.scss";
import PhotoDetail from "../PhotoDetail/PhotoDetail";
import Home from "../Home/Home";
import Search from "../Search/Search";

const Router = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentQuery, setCurrentQuery] = useState("random");
  const [currentPhotoClicked, setCurrentPhotoClicked] = useState({});
  const location = useLocation();

  return (
    <div className="router-container">
      {location.pathname === "/" && (
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          triggerSearch={setCurrentQuery}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Home query={currentQuery} clickPhoto={setCurrentPhotoClicked} />
          }
        ></Route>
        <Route
          path="/photo/:id"
          element={<PhotoDetail photo={currentPhotoClicked} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default Router;
