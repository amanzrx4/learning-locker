import { Button } from "@mui/material";
import { Box } from "@mui/system";

import React from "react";
import { STRAPI_BACKEND_URL } from "../../utils/config";

const Login = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Button
          variant="outlined"
          onClick={() =>
            (window.location = `${STRAPI_BACKEND_URL}/api/connect/google`)
          }
        >
          Login with google
        </Button>
        <Button variant="outlined" disabled>
          Guest Login
        </Button>
      </Box>
    </>
  );
};

export default Login;
