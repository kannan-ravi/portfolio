import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const PageLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default PageLayout;
