import "./App.scss";
import Router from "./Router/Router";
import React, { useState } from "react";
import { BrowserRouter as RouterWrap } from "react-router-dom";

const App = () => {
  return (
    <RouterWrap>
      <div className="app-container">
        <Router />
      </div>
    </RouterWrap>
  );
};

export default App;
