import WorkExperience from "./interfaces/WorkExperience"
import WorkCard from "./WorkCard"

interface Props {
  work: WorkExperience
  ind: number
  setWorkInd: (ind: number) => void
}

export default function ResumeStep({ind, work, setWorkInd}: Props) {
  return (
    <li className="group relative flex items-center justify-start hover:text-pink-500 sm:gap-1.5"
      onMouseEnter={() => setWorkInd(ind)}
    >
      <span className="hidden sm:inline"> {work.position} </span>

      <svg
        className="h-6 w-6 sm:h-5 sm:w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
        />
      </svg>
      <WorkCard work={work}/>
    </li>
  )
}
