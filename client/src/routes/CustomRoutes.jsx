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
      <Route path="/" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="doctors/:id" element={<DoctorDetails />}></Route>
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
