import React, { useEffect } from "react";
import EchoReaderProject from "../assets/echo-reader-project.png";
import ChipotleModalProject from "../assets/chipotle-modal-project.png";
import { motion } from "framer-motion";
import projectList from "../Lists/project-list";
import ProjectCard from "./UI/ProjectCard";

const Projects = () => {
  const imageAnimate = {
    offScreen: {
      y: 100,
      opacity: 0,
    },
    onScreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        type: "spring",
      },
    },
  };
  const titleAnimate = {
    offScreen: {
      y: 100,
      opacity: 0,
    },
    onScreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        type: "spring",
      },
    },
  };
  const infoBodyTextAnimate = {
    offScreen: {
      y: 100,
      opacity: 0,
    },
    onScreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        type: "spring",
      },
    },
  };
  const linksAnimate = {
    offScreen: {
      x: 100,
      opacity: 0,
    },
    onScreen: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
      },
    },
  };

  // return (
  //   <section id="projects" className=" ml-8 mr-8 pt-16">
  //     <div className="section__title  ">
  //       <h2 className="pb-5">Projects</h2>
  //     </div>
  //     <div className="projects-container">
  //       <Card key={1}>
  //         <motion.div
  //           className="card-content-container"
  //           transition={{ staggerChildren: 0.25 }}
  //           initial={"offScreen"}
  //           animate={"onScreen"}
  //         >
  //           <div className="card__project__content">
  //             <motion.div
  //               className=" card__project__media"
  //               variants={imageAnimate}
  //             >
  //               <img src={EchoReaderProject} />
  //             </motion.div>
  //             <div className="card__project__info">
  //               <motion.h3 variants={titleAnimate}>Echo Reader</motion.h3>
  //               <motion.div
  //                 className="animation"
  //                 variants={infoBodyTextAnimate}
  //               >
  //                 <p>
  //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  //                   do eiusmod tempor incididunt ut labore et dolore magna
  //                   aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  //                   ullamco laboris nisi ut aliquip ex ea commodo consequat.
  //                 </p>
  //                 <span className="card__project__more ">Read More</span>
  //               </motion.div>
  //             </div>
  //           </div>

  //           <motion.div
  //             className="card__project__links"
  //             variants={linksAnimate}
  //           >
  //             <button className="btn">Visit Site</button>
  //             <button className="btn">Github Repo</button>
  //           </motion.div>
  //         </motion.div>
  //       </Card>

  //       <Card key={2}>
  //         <div className="card__project__content">
  //           <div className=" card__project__media  ">
  //             <img src={ChipotleModalProject} />
  //           </div>
  //           <div className="card__project__info">
  //             <h3 className="">Chipotle Locator Clone</h3>
  //             <p>
  //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  //               enim ad minim veniam, quis nostrud exercitation ullamco laboris
  //               nisi ut aliquip ex ea commodo consequat.
  //             </p>
  //             <span className="card__project__more ">Read More</span>
  //           </div>
  //         </div>

  //         <motion.div className="card__project__links" variants={linksAnimate}>
  //           <button className="btn">Visit Site</button>
  //           <button className="btn">Github Repo</button>
  //         </motion.div>
  //       </Card>
  //     </div>
  //   </section>
  // );

  //TEST RETURN
  console.log(projectList);
  return projectList.map((project, index) => {
    return <div key={index}>
      <ProjectCard
        id={index}
        title={project.title}
        image={project.image}
        body={project.body}
        githubURL={project.githubURL}
        liveURL={project.liveURL}
      />
    </div>
  });
};

export default Projects;
