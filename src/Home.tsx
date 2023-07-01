import Profile from "./Profile";
import ProjectsTable from "./ProjectsTable";
import Resume from "./Resume"
{/* import LearningTable from './LearningTable'; */}

export default function Home() {
  return (
    <div>
      <section className="mb-14">
        <Profile />
      </section>
      <section className="my-10">
        <Resume />
      </section>
      <section>
        <div className="grid grid-cols-6 gap-16">
          <div className="row-span-full col-span-5 mb-4 md:col-span-full">
            <h1 className="my-8 text-2xl font-bold">Projects</h1>
            <ProjectsTable />
          </div>
        </div>
      </section>

    {/* <div className="row-span-full col-start-5 col-span-2"> */}
    {/*   <LearningTable /> */}
    {/* </div> */}
  </div>
);
}
