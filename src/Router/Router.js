import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./Router.scss";
import PhotoDetail from "../PhotoDetail/PhotoDetail";
import Home from "../Home/Home";
import Search from "../Search/Search";

const Router = () => {
  const [currentQuery, setCurrentQuery] = useState("random");
  const [currentPhotoClicked, setCurrentPhotoClicked] = useState({});
  const location = useLocation();

  return (
    <div className="router-container">
      {location.pathname === "/" && <Search triggerSearch={setCurrentQuery} />}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              query={currentQuery || "random"}
              clickPhoto={setCurrentPhotoClicked}
            />
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
