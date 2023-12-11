import { Outlet, useLocation } from "react-router";

import Navbar from "../../../components/Navbar/Navbar";
import { ROUTES } from "../../../constants";
import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";

export const UserLayout = () => {
  const location = useLocation();
  return (
    <div className="main">
      <Navbar />
      <Sidebar />
      <div
        className={
          location.pathname == "/" ||
          location.pathname == ROUTES.NEW_FORM_BUILDER
            ? "content-wrap"
            : "content-wrap-full"
        }
      >
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
