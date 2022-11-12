import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Login from "./Login";

const Home = () => {
  return (
    <Box
      sx={{
        width: "50%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Button variant="contained" component={Link} to="/explore">
        Explore
      </Button>
      <Login />
    </Box>
  );
};

export default Home;
