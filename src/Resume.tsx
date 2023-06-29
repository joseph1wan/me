import { useState, useEffect } from 'react';
import ResumeStep from "./ResumeStep"
import WorkExperience from "./interfaces/WorkExperience"

interface Resume {
  basics: {
    headline: string
  }
  work: Array<WorkExperience>
}

const resume: Resume | Record<string, never> = {};

export default function Resume() {
  const [workData, setResume] = useState(resume);
  const [workInd, setWorkInd] = useState<number>(0);
  const [doneFetching, setDoneFetching] = useState(false);

  function barLengthClass(): string {
    switch(workInd) {
      case 1:
      return "w-2/5"
      case 2:
      return "w-3/4"
      case 3:
      return ""
      default:
      return "w-1/12"
    }
  }

  useEffect(() => {
    fetch("https://gitconnected.com/v1/portfolio/joseph1wan/")
      .then((response) => response.json())
      .then((workData) => {
        console.log(workData);
        setResume(workData);
        workData.work.reverse();
        setDoneFetching(true)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <h2 className="sr-only">Steps</h2>

      <div className="relative">
        <div className="overflow-hidden rounded-full bg-gray-400">
          <div className={"h-2 " + barLengthClass() + " rounded-full bg-pink-500"}></div>
        </div>

        <ol className="mt-4 grid grid-cols-3 text-sm font-medium">
          { doneFetching &&
            workData.work.map((work, ind) => {
              return (
                <ResumeStep key={ind} work={work as WorkExperience} ind={ind} setWorkInd={setWorkInd}/>
                )
            })
          }
          <li
            className="group absolute right-0 flex items-center justify-start hover:text-pink-500 sm:gap-1.5"
            onMouseEnter={() => setWorkInd(3)}
          >
            Open to work!
          </li>
        </ol>
      </div>
    </div>
  )
}
