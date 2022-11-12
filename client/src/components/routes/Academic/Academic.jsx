import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Box } from "@mui/system";
export const StyledBox = styled(Box)(({ theme }) => ({
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 5,
  paddingBottom: 5,
  display: "flex",
  flexDirection: "column",
  gap: 40,
}));

const Academic = () => {
  return (
    <>
      <Outlet />
      <StyledBox>
        <Typography>Academic Department</Typography>

        <Typography>Programmes and Courses</Typography>

        <p>
          The Academic Department and the Vocational Education Department can be
          said to be the two most important departments of the NIOS. These two
          departments develop education programmes and/or courses to give
          opportunity to the learners to pursue the course of learning of their
          choice. Both the departments collaborate with each other to develop
          functional and need/based courses to benefit the learners.
        </p>

        <p>
          The Academic Department takes care of academic courses which
          encompasses the entire school education continuum from primary to
          predegree level. The Academic Department is engaged in development of
          curriculum and self learning materials, revision of learning
          materials, together with research and development activities and also
          provides support in the area of evaluation of learners.
        </p>

        <p>The NIOS Academic Department has the following units.</p>

        <ul>
          <li>Open Basic Education (OBE)</li>
          <li>Secondary and Senior Secondary Education</li>
          <li>Capacity Building Cell</li>
          <li>NCOS Secretariat</li>
          <li>COMOSA Secretariat</li>
          <li>Graphic Unit</li>
          <li>Library and Documentation Services</li>
        </ul>

        <ul>
          <li>
            <NavLink to="advisory">
              Academic - Departmental Advisory Board
            </NavLink>
          </li>

          <li>
            <NavLink to="counsil"> Academic - Council</NavLink>
          </li>

          <li>
            <NavLink> Open Basic Education (OBE)</NavLink>
            <ul>
              <li>
                <NavLink to="obe/secondary">
                  Secondary Course equivalent to Class X
                </NavLink>
              </li>
              <li>
                <NavLink to="obe/seniorSecondary">
                  Senior Secondary Course equivalent to class XII
                </NavLink>
              </li>
              <li>
                <NavLink> Vocational Education</NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="training">
              {" "}
              Training Packages for ODL functionaries
            </NavLink>
          </li>
        </ul>
      </StyledBox>
    </>
  );
};

export default Academic;
