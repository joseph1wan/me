import Project from "./Project"
import data from "./data/projects.json"
import { projectType, projectStatus } from "./type/ProjectTypes"

export default function ProjectsTable() {
  return (

          <div className="grid grid-cols-2 gap-8" >
            {
              data.map(project => {
                if (project.status === "active") {
                  return (
                    <Project 
                      key={project.name}
                      id={project.name}
                      name={project.name}
                      description={project.description}
                      role={project.role}
                      projectType={project.type as projectType}
                      projectStatus={project.status as projectStatus}
                      url={project.url}
                      languages={project.languages}
                      frameworks={project.frameworks}
                    />
                  )}
              })
            }
          </div>
    );
}
