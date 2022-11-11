import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "@mui/material";
import Login from "./components/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Learning locker</h1>
      <Login />
    </div>
  );
}

export default App;
