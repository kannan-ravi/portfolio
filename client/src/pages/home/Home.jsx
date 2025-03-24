import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaArrowRight,
  FaArrowAltCircleRight,
  FaCode,
  FaEye,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiMui,
  SiTypescript,
} from "react-icons/si";
import ExperienceCard from "../../components/experience/ExperienceCard";
import ProjectCard from "../../components/projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import ContactForm from "../../components/contact-attempt/ContactForm";
import { Link } from "react-router-dom";
import { useGetHomeDataQuery } from "../../app/services/homeApi";

import Resume from "../../assets/pdf/Kannan_Ravindran_Resume.pdf";

const Home = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tili = gsap.timeline();

    const elements = [
      { selector: ".name", y: 30, duration: 0.5, ease: "Elastic.inOut" },
      { selector: ".job", y: 10, duration: 0.3, ease: "Back.inOut" },
      {
        selector: ".professional-summary",
        y: 10,
        duration: 0.3,
        ease: "Back.inOut",
      },
      { selector: ".github-icon", y: 10, duration: 0.2, ease: "Back.inOut" },
      {
        selector: ".twitter-icon",
        y: 10,
        duration: 0.2,
        ease: "Elastic.inOut",
      },
      {
        selector: ".linkedin-icon",
        y: 10,
        duration: 0.2,
        ease: "Elastic.inOut",
      },
      {
        selector: ".resume-button",
        y: 10,
        duration: 0.4,
        ease: "Elastic.inOut",
      },
    ];

    elements.forEach((el) => {
      tili.fromTo(
        el.selector,
        { y: el.y, opacity: 0 },
        { y: 0, duration: el.duration, opacity: 1, ease: el.ease }
      );
    });
  });

  const scrollAnimationArray = [
    "about-me",
    "my-skills",
    "experience-heading",
    "experience-card",
    "project-heading",
    "project-card",
    "contact-heading",
    "contact-description",
    "contact-form",
  ];

  useGSAP(() => {
    scrollAnimationArray.map((ele) => {
      gsap.fromTo(
        `.${ele}`,
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "Elastic.inOut",
          scrollTrigger: {
            trigger: `.${ele}`,
            start: "center 90%",
            end: "bottom 80%",
          },
        }
      );
    });
  });

  const { data, error, isLoading } = useGetHomeDataQuery();

  return (
    <main className="scroll-smooth">
      <div className="font-sans bg-darkblue text-slate-300 selection:bg-cyan-500 selection:text-black">
        {/* HERO SECTION */}
        <div className="flex flex-col items-center justify-center h-screen px-4 py-10">
          <div className="absolute w-full h-full -translate-x-1/2 -translate-y-1/2 rounded-full max-h-64 max-w-64 sm:max-w-96 sm:max-h-96 bg-gradient-to-r from-slate-700 to-slate-900 blur-md top-1/2 left-1/2"></div>
          <h1 className="text-5xl font-bold text-center sm:text-6xl name">
            {data?.data?.profile[0].full_name}
          </h1>

          <p className="mt-5 text-xl font-medium text-center job">
            Full Stack Developer
          </p>

          <p className="mt-5 text-sm leading-normal text-center max-w-prose sm:text-base professional-summary">
            {data?.data?.profile[0].headline}
          </p>

          <div className="flex mt-8 space-x-6">
            <a href="https://github.com/kannan-ravi" target="_blank">
              <FaGithub className="text-3xl duration-200 hover:text-slate-500 github-icon" />
            </a>
            <a href="https://twitter.com/Kannan_Ravi_" target="_blank">
              <FaTwitter className="text-3xl duration-200 hover:text-slate-500 twitter-icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/kannanravindrankr/"
              target="_blank"
            >
              <FaLinkedin className="text-3xl duration-200 hover:text-slate-500 linkedin-icon" />
            </a>
          </div>

          {/* RESUME BUTTON */}
          <Link
            to={Resume}
            target="_blank"
            className="px-6 py-1 mt-8 text-xl font-light tracking-wider uppercase duration-200 border rounded cursor-pointer right-20 bg-lightblue hover:bg-slate-300 hover:text-lightblue text-slate-300 border-slate-300 resume-button"
          >
            resume
          </Link>
        </div>

        {/* ABOUT SECTION */}
        <section id="about" className="min-h-screen py-10">
          <div className="max-w-4xl px-4 mx-auto about-me">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="mt-4">
              Hey there! I'm someone passionate about the world of{" "}
              <strong>Web Development</strong>. It all began with Python, but as
              I dug deeper, I found my true love for building things online. I
              started with <strong>HTML, CSS, and JavaScript</strong> and
              quickly moved on to
              <strong>React.js</strong>. Intrigued by the backend, I dived into
              <strong>Node.js</strong> and many more.
            </p>
            <p className="mt-4">
              My focus? <strong>Constant learning</strong>. I'm all about
              putting my skills into action, constantly working on my projects.
              My ultimate goal is to create efficient, user-friendly
              applications and become a versatile{" "}
              <strong>full-stack developer</strong>.
            </p>
          </div>

          <div className="max-w-4xl px-4 mx-auto mt-7 my-skills">
            <h3 className="text-3xl font-bold">Skills</h3>
            <div className="flex flex-wrap gap-5 mt-6">
              <FaHtml5 className="text-5xl text-orange-400 duration-200 cursor-pointer hover:text-opacity-80" />
              <FaCss3Alt className="text-5xl text-blue-600 duration-200 cursor-pointer hover:text-opacity-80" />
              <FaJs className="text-5xl text-yellow-300 duration-200 cursor-pointer hover:text-opacity-80" />
              <SiTypescript className="text-5xl text-blue-400 duration-200 cursor-pointer hover:text-opacity-80" />
              <FaBootstrap className="text-5xl text-purple-600 duration-200 cursor-pointer hover:text-opacity-80" />
              <FaReact className="text-5xl text-blue-400 duration-200 cursor-pointer hover:text-opacity-80" />
              <SiTailwindcss className="text-5xl text-teal-500 duration-200 cursor-pointer hover:text-opacity-80" />
              <SiMui className="text-5xl text-blue-500 duration-200 cursor-pointer hover:text-opacity-80" />
              <FaNodeJs className="text-5xl text-green-700 duration-200 cursor-pointer hover:text-opacity-80" />
              <SiExpress className="text-5xl text-red-100 duration-200 cursor-pointer hover:text-opacity-80" />
              <SiMongodb className="text-5xl text-green-500 duration-200 cursor-pointer hover:text-opacity-80" />
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section
          id="experience"
          className="flex items-center min-h-screen py-10 bg-lightblue"
        >
          <div className="max-w-4xl px-4 mx-auto">
            <h2 className="text-4xl font-bold text-slate-300 experience-heading">
              Recent Experience
            </h2>
            <div className="mt-6 space-y-6">
              <div className="flex flex-col items-center justify-center gap-10">
                <ExperienceCard />
              </div>
              {/* <div className="flex flex-row items-center gap-2 border-b w-fit">
                <Link to="/">View More</Link>
                <FaArrowAltCircleRight className="text-sm text-slate-300" />
              </div> */}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="flex items-center min-h-screen py-10">
          <div className="max-w-4xl px-4 mx-auto">
            <h2 className="text-4xl font-bold text-slate-300 project-heading">
              Featured Projects
            </h2>
            <div className="mt-6 space-y-6">
              <div className="flex flex-col items-center justify-center gap-14">
                <ProjectCard />
                <div className="space-y-6 project-card">
                  <div>
                    <Link to="https://tms-q7ex.onrender.com/" target="_blank">
                      <h3 className="mb-4 text-xl font-bold text-slate-300">
                        TMS{" "}
                        <span className="text-sm italic text-slate-300">
                          (Task Management System (TMS) - PWA App)
                        </span>
                      </h3>
                    </Link>
                    <p className="mb-4 leading-normal">
                      A task management system with real-time group chat and
                      task assignment features. Includes user authentication,
                      role-based access, and an admin panel for seamless
                      management. Built with React.js, Node.js, Socket.io, and
                      MongoDB for a smooth and efficient workflow.
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
                      to="https://gitlab.com/kannanravindran.work/tms"
                      target="_blank"
                    >
                      <FaCode className="text-3xl cursor-pointer" />
                    </Link>
                    <Link to="https://tms-q7ex.onrender.com/" target="_blank">
                      <FaEye className="text-3xl cursor-pointer" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* <div className="flex flex-row items-center gap-2 border-b w-fit">
                <Link to="/">View More</Link>
                <FaArrowAltCircleRight className="text-sm text-slate-300" />
              </div> */}
            </div>
          </div>
        </section>

        <ContactForm />
      </div>
    </main>
  );
};

export default Home;
