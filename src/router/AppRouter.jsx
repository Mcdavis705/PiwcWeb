import React from "react";
import MainLayout from "../components/layout/MainLayout.jsx";
import {Routes, Route} from "react-router-dom";

import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Ministries from "../pages/Ministries.jsx";
import Sermons from "../pages/Sermons.jsx";
import VisitUs from "../pages/VisitUs.jsx";
import NotFound from "../pages/NotFound.jsx";


function AppRouter() {
  return (
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="aboutus" element={<About />} />
              <Route path="ministries" element={<Ministries />} />
              <Route path="sermons" element={<Sermons />} />
              <Route path="visitus" element={<VisitUs />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
  );
}

export default AppRouter;
