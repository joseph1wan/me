import profilePic from "./img/profile_pic.jpeg"
import RightArrowIcon from "./icons/RightArrowIcon"
import LinkedInIcon from "./icons/LinkedInIcon"
import GitHubIcon from "./icons/GitHubIcon"

export default function Profile() {
  return (
    <div className="">
      <div className="md:flex md:items-baseline">
        <h2 className="relative text-2xl mr-4 mb-4 font-bold sm:text-3xl">Joseph Wan | Software Developer</h2>
        <div className="flex">
          <a className="mr-4" href="https://www.linkedin.com/in/josephwan" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
          <a href="https://www.github.com/joseph1wan" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
        </div>
      </div>

      <div className="md:flex w-full md:w-2/3 my-6 items-center">
        <div className="w-1/2 md:w-1/4 mr-8 items-center">
          <div className="text-center">
            <img className="border-2 border-white rounded-full" src={ profilePic } alt="profile pic"/>
          </div>
        </div>

        <p className="mt-4 md:mt-0 md:w-1/2 mr-4">
          Innovative Software Developer with 6+ years of experience building robust software, web applications, services, and systems with a focus on streamlining inefficient processes and enabling fast, smart, and efficient work.
        </p>

        <div className="group hidden md:block">
          <a href="https://gitconnected.com/joseph1wan/resume" className="w-1/4 ml-4" target="_blank" rel="noreferrer">
            <RightArrowIcon />
          </a>
          <div className="invisible text-xs text-gray-400 text-center group-hover:visible" role="tooltip">
            Go to resume
          </div>
        </div>
      </div>
    </div>
  );
}
