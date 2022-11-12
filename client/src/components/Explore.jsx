import { Grid, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import { alpha, styled } from "@mui/material/styles";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

const items = [
  {
    name: "CURRICULUM",
    route: "chat",
    desc: "Chat room for the class",
    icon: <SchoolRoundedIcon fontSize="large" />,
  },
];

const StyledBox = styled(Box)(({ theme }) => ({
  padding: 50,
  border: 4,
  borderRadius: 10,
  cursor: "pointer",
  "&:hover": {
    borderColor: "red",
    transform: "translateY(-5px)",
  },
  borderColor: "grey",
  display: "flex",
  flexDirection: "column",
  gap: 5,
  justifyContent: "center",
  borderStyle: "solid",
  alignItems: "center",
  textAlign: "center",
  transition: "all 0.2s ease-in-out",

  //   color: theme.palette.success.main,
  //   "& .MuiSlider-thumb": {
  //     "&:hover, &.Mui-focusVisible": {
  //       boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
  //     },
  //     "&.Mui-active": {
  //       boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
  //     },
  //   },
}));

const Explore = () => {
  return (
    <Grid container spacing={4} padding={4}>
      <Grid item xs={4}>
        {items.map((item) => {
          const { name, route, desc, icon } = item;
          return (
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
          );
        })}
      </Grid>

      {/* <Grid item xs={4}>
        <StyledBox sx={{ border: 2 }}></StyledBox>
      </Grid> */}
      {/* <Grid item xs={4}>
        <Box sx={{ border: 2 }}>1</Box>
      </Grid>
      <Grid item xs={4}>
        <Box sx={{ border: 2 }}>1</Box>
      </Grid>
      <Grid item xs={4}>
        <Box sx={{ border: 2 }}>1</Box>
      </Grid>
      <Grid item xs={4}>
        <Box sx={{ border: 2 }}>1</Box>
      </Grid>
      <Grid item xs={4}>
        <Box sx={{ border: 2 }}>1</Box>
      </Grid> */}
    </Grid>
  );
};

export default Explore;
