const ExperienceCard = () => {
  return (
    <div className="experience-card">
      <a
        href="https://adetive.com/"
        className="mb-3 text-xl font-bold text-slate-300"
      >
        Full Stack Developer - Adetive Solutions
      </a>
      <p className="my-2 text-gray-400">Nov 2022 - PRESENT</p>
      <ul className="pl-5 my-4 list-disc text-slate-300">
        <li className="my-3">
          Independently developed and deployed a full-stack{" "}
          <strong>Task Management PWA System</strong> using the{" "}
          <strong>MERN stack</strong>, enabling efficient task tracking,
          real-time chat functionality, and user management across devices
        </li>
        <li className="my-3">
          Built an <strong>e-commerce</strong> website using{" "}
          <strong>React.js</strong> and <strong>Next.js</strong> for a vanity
          shop, resulting in a <strong>10% increase in order placements</strong>
        </li>
        <li className="my-3">
          Adapted and enhanced <strong>Point of Sale (POS)</strong> features
          based on client feedback, leading to a 10% increase in client
          satisfaction.
        </li>
      </ul>
      <div className="flex flex-wrap pt-3 gap-x-3 gap-y-4">
        <div className="px-3 py-0.5 text-xs font-semibold border border-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900 rounded-full w-fit text-cyan-200 duration-200 cursor-pointer">
          HTML
        </div>
        <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900 duration-200 cursor-pointer">
          CSS
        </div>
        <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900 duration-200 cursor-pointer">
          JavaScript
        </div>
        <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900 duration-200 cursor-pointer">
          Figma
        </div>
        <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900  duration-200 cursor-pointer">
          React.js
        </div>
        <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900  duration-200 cursor-pointer">
          Next.js
        </div>
        <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900  duration-200 cursor-pointer">
          Redux
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
        <div className="px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900  duration-200 cursor-pointer">
          Git
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
