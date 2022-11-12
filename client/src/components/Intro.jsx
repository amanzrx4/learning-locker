import React, { useEffect, useState } from "react";
import Departments from "../markdown/departments.md";
const Intro = () => {
  const [md, setMd] = useState(null);

  // useEffect(() => {
  //   const readmePath = import("../markdown/departments");

  //   fetch(readmePath).then((response) => {
  //     console.log(response);
  //   });
  // }, []);

  return (
    <div>
      <Departments />
    </div>
  );
};

export default Intro;
