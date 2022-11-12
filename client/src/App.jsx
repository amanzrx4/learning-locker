import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, useTheme } from "@mui/material";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GoogleProviderAuthCallback from "./components/GoogleProviderAuthCallback";
import { AuthContextProvider } from "./context/authContext";
import Intro from "./components/Intro";
import Layout from "./components/Layout";
import { ThemeProvider } from "@mui/material";
import Explore from "./components/Explore";
import Home from "./components/Home";
import NiosPortal from "./components/NiosPortal.jsx";
import Academic from "./components/routes/Academic/Academic";
import { academicData } from "./components/routes/Academic/data";
import OBE from "./components/routes/Academic/OBE";
import Secondary from "./components/routes/Academic/OBE/SecondaryCourse";
import SeniorSecondary from "./components/routes/Academic/OBE/SeniorSecondary";
import DeptAdvisoryCommittee from "./components/routes/Academic/DeptAdvisoryCommittee";
import Counsil from "./components/routes/Academic/Counsil";
import Training from "./components/routes/Academic/Training";

function App() {
  const theme = useTheme();

  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <BrowserRouter>
            {/* <h1>Learning locker</h1> */}
            {/* <Login /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="nios">
                <Route index element={<NiosPortal />} />
                <Route path="academic">
                  <Route index element={<Academic />} />
                  <Route path="obe">
                    <Route index element={<OBE />} />
                    <Route path="secondary" element={<Secondary />} />
                    <Route
                      path="seniorSecondary"
                      element={<SeniorSecondary />}
                    />
                  </Route>
                  <Route path="advisory" element={<DeptAdvisoryCommittee />} />
                  <Route path="counsil" element={<Counsil />} />
                  <Route path="training" element={<Training />} />
                </Route>
              </Route>

              <Route
                path="/api/auth/google/callback"
                element={<GoogleProviderAuthCallback />}
              />
            </Routes>
          </BrowserRouter>
        </Layout>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
