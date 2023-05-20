import React from "react";
import { motion } from "framer-motion";
import SkillsIcons from "../assets/skills-icons/SkillsIcons";

const Skills = () => {
  const imageAnimate = {
    offScreen: {
      opacity: 0,
    },
    onScreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.div
        className="skills"
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.div className="skill-container" variants={imageAnimate}>
          <div className="skill-container__icon-container">
            <img src={SkillsIcons.iconReact} alt="react-icon" />
          </div>
          <span className="skill-containter__title">React</span>
        </motion.div>

        <motion.div className="skill-container" variants={imageAnimate}>
          <div className="skill-container__icon-container">
            <img src={SkillsIcons.iconTailwindCSS} alt="tailwind-css-icon" />
          </div>
          <span className="skill-containter__title">Tailwind CSS</span>
        </motion.div>

        <motion.div className="skill-container" variants={imageAnimate}>
          <div className="skill-container__icon-container">
            <img src={SkillsIcons.iconGoogleCloud} alt="google-cloud-icon" />
          </div>
          <span className="skill-containter__title">Google Cloud</span>
        </motion.div>

        <motion.div className="skill-container" variants={imageAnimate}>
          <div className="skill-container__icon-container">
            <img src={SkillsIcons.iconApi} alt="rest-api-icon" />
          </div>
          <span className="skill-containter__title">Rest API</span>
        </motion.div>

        <motion.div className="skill-container" variants={imageAnimate}>
          <div
            className="skill-container__icon-container"
            variants={imageAnimate}
          >
            <img src={SkillsIcons.iconGit} alt="git-icon" />
          </div>
          <span className="skill-containter__title">GIT</span>
        </motion.div>

        <motion.div className="skill-container" variants={imageAnimate}>
          <div className="skill-container__icon-container">
            <img src={SkillsIcons.iconJavascript} alt="javascript-icon" />
          </div>
          <span className="skill-containter__title">Javascript</span>
        </motion.div>

        <motion.div className="skill-container" variants={imageAnimate}>
          <div className="skill-container__icon-container">
            <img src={SkillsIcons.iconCSS} alt="css-icon" />
          </div>
          <span className="skill-containter__title">CSS</span>
        </motion.div>

        <motion.div className="skill-container" variants={imageAnimate}>
          <div className="skill-container__icon-container">
            <img src={SkillsIcons.iconHTML5} alt="html5-icon" />
          </div>
          <span className="skill-containter__title">HTML5</span>
        </motion.div>

        <motion.div className="skill-container" variants={imageAnimate}>
          <div className="skill-container__icon-container">
            <img src={SkillsIcons.iconAdobe} alt="adobe-icon" />
          </div>
          <span className="skill-containter__title">Adobe Creative Suite</span>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Skills;
