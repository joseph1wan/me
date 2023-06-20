import './App.css';
import Profile from './Profile';
import ProjectsTable from './ProjectsTable';
import LearningTable from './LearningTable';

function App() {
  return (
    <div className="container mt-10 m-auto grid grid-cols-5 gap-16">
      <div className="col-span-1">
        <Profile />
      </div>
      <div className="row-span-full col-start-2 col-span-3">
        <ProjectsTable />
      </div>
      <div className="row-span-full col-start-5 col-span-1">
        <LearningTable />
      </div>
    </div>
  );
}

export default App;
