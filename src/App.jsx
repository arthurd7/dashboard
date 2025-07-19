import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashboardLayout, Introduction, ProjectsLayout } from "./pages";
import {
  Instruction,
  CreateProject,
  MoreProject,
  ProjectDocument,
} from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    // these are all tabs the tabs content
    children: [
      { index: true, element: <Introduction /> },
      {
        path: "projects",
        element: <ProjectsLayout />,
        children: [
          {
            index: true,
            element: <Instruction />,
          },
          {
            path: "create-project",
            element: <CreateProject />,
          },
          {
            path: "personal-projects",
            element: <MoreProject />,
          },
          {
            path: ":projectId",
            element: <ProjectDocument />,
          },
        ],
      },
    ],
  },
  {
    basename: "/dashboard",
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
