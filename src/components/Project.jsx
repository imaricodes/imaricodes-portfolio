import React from "react";
import Card from "../UI/Card";
import projectIMGTemp from "../assets/project-img-temp.png";

const Project = () => {
  return (
    
      
      <Card>
      <div>
          <img src={projectIMGTemp} />
          <h2>Project Title</h2>
          <p>Project description</p>
          <span>Read More</span>
          <div>
            <button>Visit Site</button>
            <button>Github Repo</button>
          </div>
        </div>
      </Card>
 
  );
};

export default Project;
