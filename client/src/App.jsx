import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "@mui/material";
// import Login from "./components/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import LoginHere from "./pages/LoginHere";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginHere />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
