import React from "react";
import Navbar from "./Navbar";
import { Box } from "@mui/system";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar>
        <Box>{children}</Box>
      </Navbar>
    </>
  );
};

export default Layout;
