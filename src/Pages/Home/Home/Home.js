import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Projects from "../Project/Projects";
import Skills from "../skill/skills";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
};

export default Home;
