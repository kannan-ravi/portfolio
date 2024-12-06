import { FaCode, FaEye } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div className="space-y-6 project-card">
      <div>
        <a href="https://voices-ink.onrender.com/" target="_blank">
          <h3 className="mb-4 text-xl font-bold text-slate-300">Voices Ink</h3>
        </a>
        <p className="mb-4 leading-normal">
          A Blogging platform enables users to create, edit, and delete their
          blog posts. Additionally, users can register, log in, log out, and
          update their profile and photo
        </p>
        <div className="flex flex-wrap gap-3">
          <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900 duration-200 cursor-pointer">
            React.js
          </div>
          <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900 duration-200 cursor-pointer">
            Node.js
          </div>
          <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900 duration-200 cursor-pointer">
            MongoDB
          </div>
          <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900 duration-200 cursor-pointer">
            Express.js
          </div>
          <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900 duration-200 cursor-pointer">
            Tailwind CSS
          </div>
        </div>
      </div>
      <div className="flex items-center mt-8 space-x-6">
        <a href="https://github.com/kannan-ravi/mern-blog" target="_blank">
          <FaCode className="text-3xl cursor-pointer" />
        </a>
        <a href="https://voices-ink.onrender.com/" target="_blank">
          <FaEye className="text-3xl cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
