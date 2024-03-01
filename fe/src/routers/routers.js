import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Home from "../pages/home";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </>
  );
};

export default Routers;
