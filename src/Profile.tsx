import profilePic from "./img/profile_pic.jpeg"

export default function Profile() {
  return (
    <div className="max-w-xl">
      <h2 className="text-3xl font-bold sm:text-4xl">Joseph Wan | Software Developer</h2>
      <div className="flex">
        <div className="w-1/2 mr-4 items-center">
          <div className="mt-4 text-center">
            <img className="rounded-full" src={ profilePic } alt="profile pic"/>
          </div>
        </div>

        <p className="mt-4 text-gray-300">
          Innovative Software Developer with 6+ years of experience building robust software, web applications, services, and systems with a focus on streamlining inefficient processes and enabling fast, smart, and efficient work.
        </p>
      </div>
    </div>
  );
}
