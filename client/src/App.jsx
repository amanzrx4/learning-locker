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
function App() {
  const theme = useTheme();

  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <BrowserRouter>
            <h1>Learning locker</h1>
            <Login />
            <Routes>
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
