import React, { useState, useEffect } from "react";
import Skill from "./skill";

const Skills = () => {
  const [skills, setSkill] = useState([]);
  useEffect(() => {
    fetch("skill.json")
      .then((req) => req.json())
      .then((data) => setSkill(data));
  }, []);
  console.log(skills);
  return (
    <div>
      <div className="mt-16 text-center">
        <h3 className="text-xl font-bold text-cyan-800 uppercase text-center">
          My Skills
        </h3>
        <h2 className="text-3xl text-center">Here are my Superpowers</h2>
      </div>
      <div className="grid gap-[34px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-7">
        {skills.length &&
          skills.map((skill) => <Skill key={skill.id} skill={skill}></Skill>)}
      </div>
    </div>
  );
};

export default Skills;
