import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contacts from "../pages/Contacts";
import Services from "../pages/Services";
import DoctorDetails from "../pages/DoctorDetails";
import Doctors from "../pages/Doctors";

export default function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={Home}></Route>
      <Route path="/doctors" element={Doctors}></Route>
      <Route path="doctors/:id" element={DoctorDetails}></Route>
      <Route path="/contacts" element={Contacts}></Route>
      <Route path="/services" element={Services}></Route>
      <Route path="/login" element={Login}></Route>
      <Route path="/register" element={Signup}></Route>
      <Route path="*" element={<Navigate to="/" replace />}></Route>
    </Routes>
  );
}
