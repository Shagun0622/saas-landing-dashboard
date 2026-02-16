import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FeatureBoxes from "./components/Featureboxes/Featureboxes";
import HeroOrbit from "./components/HeroOrbit/HeroOrbit";
import ContactPage from "./components/ContactPage/ContactPage";
import Footer from "./components/footer/Footer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

// 🔥 NEW IMPORTS
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

/* ========================= */
/* HOME PAGE CONTENT */
/* ========================= */

function Home() {
  return (
    <>
      <Hero />
      <FeatureBoxes />
      <HeroOrbit />
      <ContactPage />
    </>
  );
}

/* ========================= */
/* MAIN LAYOUT (WITH NAV + FOOTER) */
/* ========================= */

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

/* ========================= */
/* AUTH LAYOUT (NO NAV/FOOTER) */
/* ========================= */

function AuthLayout() {
  return <Outlet />;
}

/* ========================= */
/* ROUTES */
/* ========================= */

function App() {
  return (
    <Routes>

      {/* ================= MAIN SITE ================= */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* ================= AUTH ================= */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* ================= DASHBOARD (PROTECTED) ================= */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
      </Route>

    </Routes>
  );
}

export default App;
