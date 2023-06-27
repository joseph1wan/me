import './App.css';
import Profile from './Profile';
import ProjectsTable from './ProjectsTable';
{/* import Le arningTable from './LearningTable'; */}

function App() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="max-w-screen px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="mb-4">
            <Profile />
          </div>
          <div className="grid grid-cols-6 gap-16">
            <div className="row-span-full col-span-4 mb-4">
              <h1 className="my-8 text-2xl font-bold">Projects</h1>
              <ProjectsTable />
            </div>
            {/* <div className="row-span-full col-start-5 col-span-2"> */}
            {/*   <LearningTable /> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
