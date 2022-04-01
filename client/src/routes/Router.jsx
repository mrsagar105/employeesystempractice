import React, { Fragment } from "react";
import Home from "../pages/Home";
import { Route, Routes, Redirect } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
// import Donate from "../pages/Donate";
// import Serve from "../pages/Serve";
// import Dashboard from "../pages/Dashboard";
// import OrderDetails from "../pages/OrderDetails";
import PrivateRoute from "./PrivateRouting";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/:userId" element="Profile page" />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* <Route
          path="/donate"
          element={
            <PrivateRoute>
              {" "}
              <Donate />
            </PrivateRoute>
          }
        /> */}
      </Routes>
    </div>
  );
}
