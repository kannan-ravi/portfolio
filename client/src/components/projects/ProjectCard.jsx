import { FaCode, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <div className="space-y-6 project-card">
      <div>
        <Link to="https://cabinaqatar.com/" target="_blank">
          <h3 className="mb-4 text-xl font-bold text-slate-300">
            Cabina{" "}
            <span className="text-sm italic text-slate-300">
              (A Vanity Shop E-commerce)
            </span>
          </h3>
        </Link>
        <p className="mb-4 leading-normal">
          An e-commerce platform with 3D product visualization, real-time color
          customization, and full Arabic localization. Users can browse,
          customize, and purchase vanity products seamlessly
        </p>
        <div className="flex flex-wrap gap-3">
          <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900 duration-200 cursor-pointer">
            React.js
          </div>
          <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900 duration-200 cursor-pointer">
            Next.js
          </div>
          <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900 duration-200 cursor-pointer">
            Three.js
          </div>
          <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900 duration-200 cursor-pointer">
            i18next
          </div>
          <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900 duration-200 cursor-pointer">
            Bootstrap
          </div>
          <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900 duration-200 cursor-pointer">
            Redux
          </div>
          <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900 duration-200 cursor-pointer">
            Redux Toolkit
          </div>
          <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900 duration-200 cursor-pointer">
            Redux Persist
          </div>
        </div>
      </div>
      <div className="flex items-center mt-8 space-x-6">
        <Link
          to="https://gitlab.com/kannanravindran.work/cabina-oility"
          target="_blank"
        >
          <FaCode className="text-3xl cursor-pointer" />
        </Link>
        <Link to="https://cabinaqatar.com/" target="_blank">
          <FaEye className="text-3xl cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
