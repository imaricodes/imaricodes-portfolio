import React from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col relative  xl:ml-[300px]">
      <section id="projects" className=" ml-8 mr-8 pt-16">
        <div className="section__title  ">
          <h2 className="pb-5">Projects</h2>
        </div>
        <Projects />
      </section>

      <Skills />
    </div>
  );
};

export default Home;
