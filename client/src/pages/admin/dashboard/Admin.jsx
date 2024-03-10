import { useState } from "react";
import AdminSidebar from "../../../components/AdminSidebar";
import SidebarHeader from "../../../components/SidebarHeader";
import {
  FaCloudDownloadAlt,
  FaEye,
  FaHeadphones,
  FaHeart,
} from "react-icons/fa";
import DashboardTable from "./DashboardTable";

const Admin = () => {
  return (
    <div>
      <div className="pt-10 pb-20">
        <div className="grid grid-cols-1 w-100 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="w-full px-6">
            <div className="flex items-center px-5 py-6 rounded-md shadow-sm bg-lightblue">
              <div className="p-3 bg-red-500 bg-opacity-75 rounded-full">
                <FaEye className="text-slate-200" />
              </div>

              <div className="mx-5">
                <h4 className="text-3xl font-semibold text-slate-200">0</h4>
                <div className="text-base text-slate-400">Total Views</div>
              </div>
            </div>
          </div>

          <div className="w-full px-6">
            <div className="flex items-center px-5 py-6 rounded-md shadow-sm bg-lightblue">
              <div className="p-3 bg-orange-500 bg-opacity-75 rounded-full">
                <FaHeart className="text-white" />
              </div>

              <div className="mx-5">
                <h4 className="text-3xl font-semibold text-slate-200">0</h4>
                <div className="text-base text-slate-400">Total Likes</div>
              </div>
            </div>
          </div>

          <div className="w-full px-6">
            <div className="flex items-center px-5 py-6 rounded-md shadow-sm bg-lightblue">
              <div className="p-3 bg-pink-500 bg-opacity-75 rounded-full">
                <FaHeadphones className="text-white" />
              </div>

              <div className="mx-5">
                <h4 className="text-3xl font-semibold text-slate-200">0</h4>
                <div className="text-base text-slate-400">Total Contact</div>
              </div>
            </div>
          </div>

          <div className="w-full px-6">
            <div className="flex items-center px-5 py-6 rounded-md shadow-sm bg-lightblue">
              <div className="p-3 bg-teal-600 bg-opacity-75 rounded-full">
                <FaCloudDownloadAlt className="text-white" />
              </div>

              <div className="mx-5">
                <h4 className="text-3xl font-semibold text-slate-200">0</h4>
                <div className="text-base text-slate-400">Resume Downloads</div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 mt-8">
          <DashboardTable />
        </div>
      </div>
    </div>
  );
};

export default Admin;
