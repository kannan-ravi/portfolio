import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import LoadingBar from "react-top-loading-bar";

const PageLayout = () => {
  const loadingBarRef = useRef();
  const { isLoaderStart, isLoaderComplete } = useSelector(
    (state) => state.loader
  );

  useEffect(() => {
    if (isLoaderStart) {
      loadingBarRef.current.continuousStart();
    } else if (isLoaderComplete) {
      loadingBarRef.current.complete();
    }
  }, [isLoaderStart, isLoaderComplete]);

  return (
    <div className="w-full bg-darkblue">
      <LoadingBar color="#f11946" ref={loadingBarRef} />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PageLayout;
