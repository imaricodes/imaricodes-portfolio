import projectList from "../Lists/project-list";
import ProjectCard from "./UI/ProjectCard";

const Projects = () => {

  return projectList.map((project, index) => {
    return <div key={index}>
      <ProjectCard
        id={index}
        title={project.title}
        skill={project.skills}
        image={project.image}
        body={project.body}
        githubURL={project.githubURL}
        liveURL={project.liveURL}
      />
    </div>
  });
};

export default Projects;
