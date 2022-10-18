import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./Router.scss";
import PhotoDetail from "../PhotoDetail/PhotoDetail";
import Home from "../Home/Home";
import Search from "../Search/Search";

const Router = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentQuery, setCurrentQuery] = useState("");
  return (
    <div className="router-container">
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        triggerSearch={setCurrentQuery}
      />
      <Routes>
        <Route exact path="/" element={<Home query={currentQuery} />}></Route>
        <Route exact path="/photo:id" element={<PhotoDetail />}></Route>
      </Routes>
    </div>
  );
};

export default Router;
