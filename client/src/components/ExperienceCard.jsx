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
      <p className="mb-4">
        Converted Figma designs into top-notch code, built cross-compatible
        websites, collaborated for optimal user experiences, conducted thorough
        code reviews, and consistently met project deadlines
      </p>
      <div className="flex flex-wrap gap-3">
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
      </div>
    </div>
  );
};

export default ExperienceCard;
