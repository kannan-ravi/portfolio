import { useState, useEffect } from "react";

import Logo from "/logo.png";
import { Link } from "react-router-dom";
import { useGetProfileQuery } from "../../../app/services/profileApi";

const Profile = () => {
  const { data, error, isLoading } = useGetProfileQuery();

  return (
    <div className="px-10 pb-20">
      <div className="px-5 py-8 mt-24 shadow md:p-8 bg-lightblue">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid order-last grid-cols-2 mt-10 text-center md:order-first md:mt-0">
            <div>
              <p className="text-xl font-bold text-slate-200">0</p>
              <p className="text-slate-400">Likes</p>
            </div>
            <div>
              <p className="text-xl font-bold text-slate-200">0</p>
              <p className="text-slate-400">Posts</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-x-0 top-0 flex items-center justify-center mx-auto -mt-24 bg-darkblue w-44 h-44">
              <img src={Logo} alt="profile" className="w-full" />
            </div>
          </div>
          <div className="flex items-center justify-center mt-32 space-x-8 md:mt-0 md:justify-end">
            <Link
              to="/admin/profile/edit"
              className="text-white uppercase rounded bg-darkblue font-semibold transform hover:-translate-y-0.5 duration-200 text-sm h-fit px-5 py-3 tracking-wider"
            >
              Edit
            </Link>
          </div>
        </div>
        <div className="pb-12 mt-10 text-center border-b md:mt-20">
          <h1 className="text-2xl font-medium lg:text-4xl text-slate-200 md:text-3xl">
            {data?.data[0].full_name}
          </h1>
          <p className="mt-3 text-sm font-light text-slate-200 sm:text-base">
            {data?.data[0].address}
          </p>
          <p className="mt-3 text-sm font-light text-slate-200 sm:text-base">
            {data?.data[0].city}, {data?.data[0].state}, {data?.data[0].country}{" "}
            -{" "}{data?.data[0].zipcode}
          </p>
          <p className="mt-8 text-sm text-slate-200 sm:text-base">
            Email: {data?.data[0].email}
          </p>
          <p className="mt-2 text-sm text-slate-200 sm:text-base">
            {data?.data[0].headline}
          </p>
        </div>
        <div className="flex flex-col justify-center mt-12">
          <p className="mt-4 text-sm font-light text-center text-slate-200 lg:px-16 sm:text-base">
            {data?.data[0].about_me}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
