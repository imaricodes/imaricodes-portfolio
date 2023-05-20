import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, skill, image, body, githubURL, liveURL }) => {
  console.log("skittles: ", skill);
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
    <div className="card card__project card__project__content-container">
      <motion.div
        className="mb-12"
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.25 }}
      >
        <div className="card__project__content">
          <motion.div className=" card__project__media" variants={imageAnimate}>
            <img src={image} />
          </motion.div>
          <div className="card__project__info">
            <motion.h3 variants={titleAnimate}>{title}</motion.h3>
            <motion.div variants={titleAnimate} className="flex">
              <motion.div
                className="card__project__skills-container flex items-center"
                variants={titleAnimate}
              >
                <span className="font-semibold mr-2 text-orange-500">
                  Technologies
                </span>

                {skill.map((skill, index) => {
                  console.log("index: ", index);
                  return (
                    <div key={index}>
                      <img src={skill} />
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.div className="animation" variants={infoBodyTextAnimate}>
              <p>{body}</p>
              {/* <span className="card__project__more ">Read More</span> */}
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className=""
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 1 }}
        transition={{ staggerChildren: 0.25 }}
      >
      <motion.div className="card__project__links" variants={linksAnimate}>
        <a
          href={liveURL}
          target="_blank"
          className="card__project__links__button"
        >
          Visit Site
        </a>
        <a
          href={githubURL}
          target="_blank"
          className="card__project__links__button"
        >
          Github Repo
        </a>
      </motion.div>

      </motion.div>


    </div>
  );
};

export default ProjectCard;
