import { projectType, projectStatus } from "./type/ProjectTypes"
import TableIcon from "./icons/TableIcon"
import PortfolioIcon from "./icons/PortfolioIcon"
import WrenchScrewdriverIcon from "./icons/WrenchScrewdriverIcon"
import ChartIcon from "./icons/ChartIcon"

interface ProjectProps {
  id: string,
    icon: string,
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

function pickIcon(name: string) {
  switch(name) {
    case "table":
    return <TableIcon />
    case "portfolio":
    return <PortfolioIcon />
    case "wrench-screwdriver":
    return <WrenchScrewdriverIcon />
    case "chart":
    return <ChartIcon />
  }
}

export default function Project({ icon, name, description, role, projectType, projectStatus, url, languages, frameworks }: ProjectProps) {
  return (
    <div className="mb-10 mr-10 flex items-start gap-4">
      <a
        className="w-full block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        target="_blank"
        rel="noreferrer"
        href={url}
      >
        { pickIcon(icon) }

        <h2 className="mt-4 text-xl font-bold text-white">{name}</h2>

        <p className="mt-1 text-sm text-gray-300">
          { description }
        </p>
        <p className="mt-2 mb-1 mr-4 text-xs flex">
          <span className="w-1/2"><strong>Project type:</strong> {projectType}</span>
          <span><strong>Role:</strong> {role}</span>
        </p>
        <p className="mt-2 mr-4 text-xs flex">
          <span className="w-1/2"><strong>Languages:</strong> {languages.join(", ")}</span>
          { listFrameworks(frameworks) }
        </p>
        <div className="mt-4 sm:flex sm:items-center sm:gap-2">
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
      </a>
    </div>
  )
}
