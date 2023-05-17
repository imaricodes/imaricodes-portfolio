import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, image, body, githubURL, liveURL }) => {
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

  return (
    <motion.div
      className="card card__project card__project__content-container"
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{once:true, amount: 0.5 }}
      transition={{ staggerChildren: 0.25 }}
    >
      <div className="card__project__content">
        <motion.div className=" card__project__media" variants={imageAnimate}>
          <img src={image} />
        </motion.div>
        <div className="card__project__info">
          <motion.h3 variants={titleAnimate}>{title}</motion.h3>
          <motion.div className="animation" variants={infoBodyTextAnimate}>
            <p>
              {body}
            </p>
            <span className="card__project__more ">Read More</span>
          </motion.div>
        </div>
      </div>

      <motion.div className="card__project__links" variants={linksAnimate}>
        <a href={liveURL} target="_blank" className="btn">Visit Site</a>
        <a href={githubURL} target="_blank" className="btn">Github Repo</a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
