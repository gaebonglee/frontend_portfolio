import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainHome from "../pages/MainHome";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHome />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
