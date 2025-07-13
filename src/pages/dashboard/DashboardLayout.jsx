import { SideNav } from "../../components";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="h-screen w-[1200px] my-0 mx-auto">
      {/* navigation menu bar */}
      <SideNav />
      {/* <div className="flex"> */}
      <Outlet />
      {/* </div> */}
    </div>
  );
};

export default DashboardLayout;
