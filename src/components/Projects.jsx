import React from "react";
import Card from "../UI/Card";
import projectIMGTemp from "../assets/project-echo-reader.png";

const Projects = () => {
  return (
    <section id="projects" className=" ml-8 mr-8 pt-16">
      <div className="section-title relative mb-6 ">

      <h2 className="pb-5" >Projects</h2>
      </div>

      <div className="flex flex-col justify-center gap-40 ">
        <Card
          key={1}
          style={
            "flex justify-evenly xl:flex xl:gap-0 xl:px-3 xl:justify-between"
          }
        >
          <div className=" mb-6 xl:flex-1">
            <img src={projectIMGTemp} className=" xl:max-w-2xl" />
          </div>
          <div className="project-info xl:flex-1 xl:px-16 xl:pt-6">
            <h3 className="mb-4">Echo Reader</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <span className="inline-block w-full text-right mb-8">Read More</span>
            <div className="flex justify-evenly">
              <button className="btn">Visit Site</button>
              <button className="btn">Github Repo</button>
            </div>
          </div>
        </Card>
        {/* <Card key={2} style={"flex  "}>
          <img src={projectIMGTemp} className="w-[350px] h-[215px]" />
          <div className="project-info">
            <h2>Project Title</h2>
            <p>Project description</p>
            <span>Read More</span>
            <div className="">
              <button>Visit Site</button>
              <button>Github Repo</button>
            </div>
          </div>
        </Card> */}
      </div>
    </section>
  );
};

export default Projects;
