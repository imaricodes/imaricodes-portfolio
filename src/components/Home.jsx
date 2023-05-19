import React from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col relative  xl:ml-[300px]">
      <section id="projects" className="ml-2 mr-2 xs:ml-7 xs:mr-7   sm:ml-8 sm:mr-8 pt-16">
        <div className="section__title  ">
          <h2 className="pb-5">Projects</h2>
        </div>
        <Projects />
      </section>
      <section id="skills" className=" ml-8 mr-8 pt-16">
        <div className="section__title  ">
          <h2 className="pb-5">Skills</h2>
        </div>
        <Skills />
      </section>
    </div>
  );
};

export default Home;
