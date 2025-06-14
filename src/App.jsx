import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Login,
  DashboardLayout,
  Introduction,
  ProjectsLayout,
  Profile,
  Settings,
} from "./pages";
import { Instruction, CreateProject, MoreProject } from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
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
            path: "more-projects",
            element: <MoreProject />,
          },
        ],
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
