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
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Learning locker</h1>
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          
          {" "}
           
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
       
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
