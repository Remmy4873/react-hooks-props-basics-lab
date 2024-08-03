import React from "react";
import Links from "./Links";

function About({ bio, links }) {
  return (
    <div id="about">
      <h1>About Me</h1>
      {bio && <p>{bio}</p>}
      <Links github={links.github} linkedin={links.linkedin} />
      </div>
  );
}

export default About;
