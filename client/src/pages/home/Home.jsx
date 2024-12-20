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
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiMui } from "react-icons/si";
import ExperienceCard from "../../components/experience/ExperienceCard";
import ProjectCard from "../../components/projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import ContactForm from "../../components/contact-attempt/ContactForm";
import { Link } from "react-router-dom";

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
          // delay: 0.3,
          scrollTrigger: {
            trigger: `.${ele}`,
            start: "center 90%",
            end: "bottom 80%",
          },
        }
      );
    });
  });
  return (
    <main className="scroll-smooth">
      <div className="font-sans bg-darkblue text-slate-300 selection:bg-cyan-500 selection:text-black">
        {/* HERO SECTION */}
        <div className="flex flex-col items-center justify-center h-screen px-4 py-10">
          <h1 className="text-5xl font-bold text-center sm:text-6xl name">
            Kannan Ravindran
          </h1>

          <p className="mt-5 text-xl font-medium text-center job">
            Full Stack Developer
          </p>

          <p className="mt-5 text-sm leading-normal text-center max-w-prose sm:text-base professional-summary">
            I seamlessly integrate front-end and back-end technologies to craft
            robust, scalable applications for the web and beyond.
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
          <a
            href=""
            className="px-6 py-1 mt-8 text-xl font-light tracking-wider uppercase duration-200 border rounded cursor-pointer right-20 bg-lightblue hover:bg-slate-300 hover:text-lightblue text-slate-300 border-slate-300 resume-button"
          >
            resume
          </a>
        </div>

        {/* ABOUT SECTION */}
        <section id="about" className="min-h-screen py-10">
          <div className="max-w-4xl px-4 mx-auto about-me">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="mt-4">
              Hey there! I'm someone passionate about the world of{" "}
              <strong>Web Development</strong>. It all began with Python, but as
              I dug deeper, I found my true love for building things online.
              Starting withn
              <strong> HTML, CSS, and JavaScript</strong>, I quickly moved on to
              <strong> React.js</strong> and got intrigued by the backend,
              diving into
              <strong> Node.js</strong>.
            </p>
            <p className="mt-4">
              My focus? <strong>Constant learning</strong>. I'm all about
              putting my skills into action, constantly working on my personal
              projects. My ultimate goal is to create efficient, user-friendly
              applications and become a versatile{" "}
              <strong> full-stack developer</strong>.
            </p>
            <p className="mt-4">
              Recently, I've been eyeing a new venture: sharing my tech journey
              through a{" "}
              <strong className="duration-200 cursor-pointer hover:text-red-500">
                YouTube channel
              </strong>
              . I want to teach and inspire others with what I've learned.
              Passionate about tech and eager to keep growing? That's me!
            </p>
          </div>

          <div className="max-w-4xl px-4 mx-auto mt-7 my-skills">
            <h3 className="text-3xl font-bold">Skills</h3>
            <div className="flex flex-wrap gap-5 mt-6">
              <FaHtml5 className="text-5xl text-orange-400 duration-200 cursor-pointer hover:text-opacity-80" />
              <FaCss3Alt className="text-5xl text-blue-600 duration-200 cursor-pointer hover:text-opacity-80" />
              <FaJs className="text-5xl text-yellow-300 duration-200 cursor-pointer hover:text-opacity-80" />
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
              Experience
            </h2>
            <div className="mt-6 space-y-6">
              <div className="flex flex-col items-center justify-center gap-10">
                <ExperienceCard />
              </div>
              <div className="flex flex-row items-center gap-2 border-b w-fit">
                <Link to="/">View More</Link>
                <FaArrowAltCircleRight className="text-sm text-slate-300" />
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="flex items-center min-h-screen py-10">
          <div className="max-w-4xl px-4 mx-auto">
            <h2 className="mb-6 text-4xl font-bold text-slate-300 project-heading">
              Featured Projects
            </h2>
            <div className="flex flex-col items-center justify-center gap-10">
              <ProjectCard />
            </div>
          </div>
        </section>

        <ContactForm />
      </div>
    </main>
  );
};

export default Home;
