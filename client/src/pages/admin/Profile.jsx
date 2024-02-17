import { useState, useEffect } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import SidebarHeader from "../../components/SidebarHeader";
import useWindowSize from "../../hooks/useWindowSize";
import Logo from "/logo.png";
import { Link } from "react-router-dom";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { windowSize } = useWindowSize();
  return (
    <div className="relative flex gap-4 overflow-hidden bg-darkblue selection:bg-cyan-500 selection:text-black">
      <AdminSidebar isOpens={isOpen} />
      <div
        className={`transition-all duration-300 ease-in-out  ${
          isOpen && windowSize.innerWidth > 992 ? "ps-72" : "ps-0 lg:ps-8"
        }`}
      >
        <SidebarHeader setIsOpen={setIsOpen} isOpen={isOpen} />

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
                Kannan Ravindran
              </h1>
              <p className="mt-3 text-sm font-light text-slate-200 sm:text-base">
                Erode, Tamil Nadu
              </p>
              <p className="mt-8 text-sm text-slate-200 sm:text-base">
                Full Stack Developer - Adetive Solutions
              </p>
              <p className="mt-2 text-sm text-slate-200 sm:text-base">
                Karpagam Institute of Technology, Coimbatore
              </p>
            </div>
            <div className="flex flex-col justify-center mt-12">
              <p className="mt-4 text-sm font-light text-center text-slate-200 lg:px-16 sm:text-base">
                Hey there! I'm someone passionate about the world of{" "}
                <strong>Web Development</strong>. It all began with Python, but
                as I dug deeper, I found my true love for building things
                online. Starting withn
                <strong> HTML, CSS, and JavaScript</strong>, I quickly moved on
                to
                <strong> React.js</strong> and got intrigued by the backend,
                diving into
                <strong> Node.js</strong>.
              </p>
              <p className="mt-4 text-sm font-light text-center text-slate-200 lg:px-16 sm:text-base">
                My focus? <strong>Constant learning</strong>. I'm all about
                putting my skills into action, constantly working on my personal
                projects. My ultimate goal is to create efficient, user-friendly
                applications and become a versatile{" "}
                <strong> full-stack developer</strong>.
              </p>
              <p className="mt-4 text-sm font-light text-center text-slate-200 lg:px-16 sm:text-base">
                Recently, I've been eyeing a new venture: sharing my tech
                journey through a{" "}
                <strong className="duration-200 cursor-pointer hover:text-red-500">
                  YouTube channel
                </strong>
                . I want to teach and inspire others with what I've learned.
                Passionate about tech and eager to keep growing? That's me!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
