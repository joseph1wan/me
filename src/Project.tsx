import { JSXElementConstructor } from "react"
import { projectType, projectStatus } from "./type/ProjectTypes"

interface ProjectProps {
  id: string,
  name: string,
  description: string,
  role: string,
  projectType: projectType,
  projectStatus: projectStatus,
  url: string,
  languages: Array<string>,
  frameworks: Array<string>,
}

function listFrameworks(frameworks: Array<string>) {
  if(frameworks.length > 0) {
    return <span><strong>Frameworks:</strong> { frameworks.join() }</span>
  }
}

export default function Project({ id, name, description, role, projectType, projectStatus, url, languages, frameworks }: ProjectProps) {
  return (
    <div id={id} className="mt-5">
      <div className="rounded-xl border-2 border-gray-500 bg-gray-100">
        <div className="flex justify-between p-4 sm:p-6 lg:p-8">
          <div className="w-full">
            <h3 className="font-medium sm:text-lg">
              <a href={url} target="_blank" rel="noreferrer" className="text-black hover:underline">
                {name}
              </a>
            </h3>
            <p className="mt-2 mb-1 mr-4 text-xs text-black flex">
              <span className="w-1/2"><strong>Project type:</strong> {projectType}</span>
              <span><strong>Role:</strong> {role}</span>
            </p>
            <p className="mr-4 text-xs text-black flex">
              <span className="w-1/2"><strong>Languages:</strong> {languages.join(", ")}</span>
              { listFrameworks(frameworks) }
            </p>

            <p className="mt-4 line-clamp-2 text-sm text-gray-700">
              {description}
            </p>
          </div>

          <div className="mt-2 sm:flex sm:items-center sm:gap-2">
            <strong
              className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>

              <span className="text-[10px] font-medium sm:text-xs">{projectStatus.toUpperCase()}</span>
            </strong>
          </div>
        </div>
      </div>
    </div>
  )
}
