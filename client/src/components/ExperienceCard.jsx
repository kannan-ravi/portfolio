const ExperienceCard = () => {
  return (
    <div className="experience-card">
      <a
        href="https://adetive.com/"
        className="mb-3 text-xl font-bold text-slate-300"
      >
        Front End Developer - Adetive Solutions
      </a>
      <p className="my-2 text-gray-400">Nov 2022 - PRESENT</p>
      <ul className="pl-5 my-4 list-disc text-slate-300">
        <li className="my-2">
          Worked on <span className="font-bold">10+ projects</span> at different stages, from initiation to
          development, showing adaptability and commitment to objectives.
        </li>
        <li className="my-2">
          <span className="font-bold">Guided</span> the full-stack intern team, providing support and mentorship.
        </li>
        <li className="my-2">
          <span className="font-bold">Taught</span> a live internship for Thassim Beevi Abdul Kader College
          students on HTML, CSS, and JavaScript.
        </li>
        <li className="my-2">
          Applied expertise in <span className="font-bold">
            HTML, CSS, JavaScript, React.js, Next.js,
            Node.js, MongoDB, Bootstrap, MUI, and Git
          </span>, contributing to projects
          that improved processes and enhanced client satisfaction.
        </li>
      </ul>
      <div className="flex flex-wrap gap-3 pt-3">
        <div className="px-3 py-0.5 text-xs font-semibold border border-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900 rounded-full w-fit text-cyan-200 duration-200 cursor-pointer">
          HTML
        </div>
        <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900 duration-200 cursor-pointer">
          CSS
        </div>
        <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900 duration-200 cursor-pointer">
          JavaScript
        </div>
        <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900  duration-200 cursor-pointer">
          React.js
        </div>
        <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900  duration-200 cursor-pointer">
          Tailwind CSS
        </div>
        <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900  duration-200 cursor-pointer">
          Bootstrap
        </div>
        <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900  duration-200 cursor-pointer">
          Material UI
        </div>
        <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900  duration-200 cursor-pointer">
          MongoDB
        </div>
        <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900  duration-200 cursor-pointer">
          Node.js
        </div>
        <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900  duration-200 cursor-pointer">
          Express.js
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
