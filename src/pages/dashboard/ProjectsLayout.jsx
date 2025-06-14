import { Outlet } from "react-router-dom";
import { ProjectsNav } from "../../components";

const ProjectsLayout = () => {
  return (
    <div className="flex min-h-[calc(100vh-72px)]">
      {/* Project page left side nav bar */}
      <ProjectsNav />
      {/* right side content */}
      <Outlet />
    </div>
  );
};

export default ProjectsLayout;
