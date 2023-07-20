import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      {/* <div className="flex"> */}
      {/* <Sidebar /> */}
      <Outlet />
      {/* </div> */}
    </div>
  );
};

export default MainLayout;
