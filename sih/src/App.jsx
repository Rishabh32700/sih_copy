import React from "react";
import Login from "./pages/Login";

import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/homepage/Home";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="app__container">
          <Routes>
            <Route path="/" element={ <Login />} />
            <Route path="/signup" element={ <Signup />} />
            <Route path="/home" element={ <Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
