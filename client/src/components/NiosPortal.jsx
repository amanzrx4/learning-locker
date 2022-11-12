import { Grid, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import { alpha, styled } from "@mui/material/styles";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import { NavLink, Outlet } from "react-router-dom";
import { StyledBox } from "./Explore";
const items = [
  {
    name: "ACADEMIC",
    route: "academic",
    desc: "Explore the NIOS curriculum",
    icon: <SchoolRoundedIcon fontSize="large" />,
  },
  {
    name: "VOCATIONAL EDUCATION",
    route: "chat",
    desc: "Learn from the videos",
    icon: <SchoolRoundedIcon fontSize="large" />,
  },
  {
    name: "ADMINISTRATION",
    route: "/nios",
    desc: "Chat with fellow learners",
    icon: <SchoolRoundedIcon fontSize="large" />,
  },
  {
    name: "EVALUATION",
    route: "/nios",
    desc: "Explore everything NIOS",
    icon: <SchoolRoundedIcon fontSize="large" />,
  },
  {
    name: "Computer Unit",
    route: "/nios",
    desc: "Explore everything NIOS",
    icon: <SchoolRoundedIcon fontSize="large" />,
  },
  {
    name: "Minority cell",
    route: "/nios",
    desc: "Explore everything NIOS",
    icon: <SchoolRoundedIcon fontSize="large" />,
  },
  {
    name: "Study Material",
    route: "/nios",
    desc: "Explore everything NIOS",
    icon: <SchoolRoundedIcon fontSize="large" />,
  },
];
const NiosPortal = () => {
  return (
    <>
      <Typography variant="h5">Departments units</Typography>
      <Grid container spacing={4} padding={4}>
        {items.map((item) => {
          const { name, route, desc, icon } = item;
          return (
            <Grid item xs={4} key={name} component={NavLink} to={route}>
              <StyledBox>
                {icon}
                <Typography
                  gutterBottom
                  sx={{
                    fontWeight: 800,
                  }}
                  variant="h4"
                >
                  {name}
                </Typography>
                <Typography variant="h6">{desc}</Typography>
              </StyledBox>
            </Grid>
          );
        })}
      </Grid>
      {/* <Outlet /> */}
    </>
  );
};

export default NiosPortal;
