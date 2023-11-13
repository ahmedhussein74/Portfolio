import html from "../images/html.png";
import css from "../images/css.png";
import bootstrap from "../images/bootstrap.png";
import tailwind from "../images/tailwind.png";
import js from "../images/js.png";
import react from "../images/react.png";
import material from "../images/material.png";
import redux from "../images/redux.png";
import node from "../images/node.png";
import mongodb from "../images/mongodb.png";
import mysql from "../images/mysql.png";
import ts from "../images/ts.png";

const Skills = () => {
  const skills = [
    html,
    css,
    bootstrap,
    js,
    react,
    tailwind,
    material,
    redux,
    node,
    mongodb,
    mysql,
    ts,
  ];
  return (
    <section id="skills" className="px-[5%] lg:px-[10%] py-[50px] bg-stone-50">
      <h1 className="w-[250px] mx-auto text-center font-bold text-[35px] lg:text-[50px] group">
        Skills
        <span className="w-[75px] mx-auto block border-b-[4px] border-b-fuchsia-800 group-hover:w-full duration-500"></span>
      </h1>
      <div className="w-full lg:w-3/4 xl:w-1/2 mx-auto mt-[30px] lg:mt-[50px] grid grid-cols-3 md:grid-cols-4 gap-[30px] lg:gap-[40px]">
        {skills.map((e, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-[15px] shadow-lg flex items-center justify-center duration-500 hover:bg-blue-950"
          >
            <img src={e} className="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
