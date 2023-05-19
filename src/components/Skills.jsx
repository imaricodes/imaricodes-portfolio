import React from "react";
import { motion } from "framer-motion";
import ImagesSkills from "../assets/Images";

const Skills = () => {
  const imageAnimate = {
    offScreen: {
      y: 100,
      opacity: 0,
    },
    onScreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.25,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className=" skills"
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.25 }}
    >
      <motion.div className="skill-container" variants={imageAnimate}>
        <div className="skill-container__icon-container  w-[160px]">
          <img src={ImagesSkills.iconAdobe} alt="adobe-icon" />
        </div>
        <span className="skill-containter__title">Adobe Creative Suite</span>
      </motion.div>

      <motion.div className="skill-container" variants={imageAnimate}>
        <div className="skill-container__icon-container w-[102px]">
          <img src={ImagesSkills.iconCSS} alt="css-icon" />
        </div>
        <span className="skill-containter__title">CSS</span>
      </motion.div>

      <motion.div className="skill-container" variants={imageAnimate}>
        <div
          className="skill-container__icon-container w-[118px]"
          variants={imageAnimate}
        >
          <img src={ImagesSkills.iconGit} alt="git-icon" />
        </div>
        <span className="skill-containter__title">GIT</span>
      </motion.div>

      <motion.div className="skill-container" variants={imageAnimate}>
        <div className="skill-container__icon-container w-[145px]">
          <img src={ImagesSkills.iconGoogleCloud} alt="google-cloud-icon" />
        </div>
        <span className="skill-containter__title">Google Cloud</span>
      </motion.div>

      <motion.div className="skill-container" variants={imageAnimate}>
        <div className="skill-container__icon-container w-[106px]">
          <img src={ImagesSkills.iconHTML5} alt="html5-icon" />
        </div>
        <span className="skill-containter__title">HTML5</span>
      </motion.div>

      <motion.div className="skill-container" variants={imageAnimate}>
        <div className="skill-container__icon-container w-[120px]">
          <img src={ImagesSkills.iconJavascript} alt="javascript-icon" />
        </div>
        <span className="skill-containter__title">Javascript</span>
      </motion.div>

      <motion.div className="skill-container" variants={imageAnimate}>
        <div className="skill-container__icon-container w-[120px]">
          <img src={ImagesSkills.iconReact} alt="react-icon" />
        </div>
        <span className="skill-containter__title">React</span>
      </motion.div>

      <motion.div className="skill-container" variants={imageAnimate}>
        <div className="skill-container__icon-container w-[195px]">
          <img src={ImagesSkills.iconTailwindCSS} alt="tailwind-css-icon" />
        </div>
        <span className="skill-containter__title">Tailwind CSS</span>
      </motion.div>

      <motion.div className="skill-container" variants={imageAnimate}>
        <div className="skill-container__icon-container w-[120px]">
          <img src={ImagesSkills.iconVSCode} alt="visual-studio-code-icon" />
        </div>
        <span className="skill-containter__title">VS Code</span>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
