import Image from "next/image";
import React from "react";

const sidebar = ({ data }) => {
  return (
    <div>
      <div>
        <Image />
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>education</p>
        <p>education 2</p>
        <div>
          <h3>Contact Me</h3>
          <a href="#"></a>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
