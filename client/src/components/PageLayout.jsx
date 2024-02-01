import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const PageLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default PageLayout;
