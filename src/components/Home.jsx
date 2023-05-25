import React from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="flex flex-col relative  xl:ml-[300px]">
   
      <section id="projects" className="ml-2 mr-2 xs:ml-7 xs:mr-7   sm:ml-8 sm:mr-8 pt-8">
        <div className="section__title  ">
          <h2 className="pb-5">Projects</h2>
        </div>
        <Projects />
      </section>
      <section id="skills" className=" ml-8 mr-8 pt-8 mb-10">
        <div className="section__title  ">
          <h2 className="pb-5">Skills</h2>
        </div>
        <Skills />
      </section>
      <section id="contact" className=" ml-8 mr-8 pt-8">
        <div className="section__title mb-10">
          <h2 className="pb-5">Contact</h2>
        </div>
     <Contact />
      </section>
    </div>
  );
};

export default Home;
