import ProjectCard from "./ProjectCard"
import data from "./data/projects.json"

export default function ProjectsTable() {
  return (

  <div className="grid grid-cols-1 md:gap-8 md:grid-cols-2 lg:grid-cols-3" >
    {
      data.map(project => {
        return (
          <ProjectCard 
            key={project.name}
            id={project.name}
            icon={project.icon}
            name={project.name}
            description={project.description}
            url={project.url}
            languages={project.languages}
            frameworks={project.frameworks}
          />
          )
      })
    }
  </div>
  );
}
