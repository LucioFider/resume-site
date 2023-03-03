import Image from "next/image";
import React from "react";

import { Envelope, Twitter, Linkedin, Medium } from "./icons";

const sidebar = ({ data }) => {
  const { name, role, education, contactLinks } = data;
  return (
    <div>
      <div>
        <Image />
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{education[0]}</p>
        <p>education 2</p>
        <div>
          <h3>Contact Me</h3>
          <a href="#">
            <Twitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
