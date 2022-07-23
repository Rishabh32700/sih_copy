import React from "react";
import { Routes, Route } from "react-router-dom";
import "./webinars.css";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import CallPage from "./components/CallPage/CallPage";
import NoMatch from "./components/NoMatch/NoMatch";

const Webinars = () => {
  return (
    <>
      <div className="webinars">
        <div className="webinars__container">
          <Routes>
            <Route path="/:id" element={<CallPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Webinars;
