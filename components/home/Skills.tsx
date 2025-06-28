"use client";
import { FaHtml5, FaPython } from "react-icons/fa6";
import SkillCard from "../ui/SkillCard";
import {
  SiCsswizardry,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiTypescript,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import {
  RiNextjsFill,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { skillsType } from "@/types/type";

const Skills = () => {
  const skills: skillsType[] = [
    { id: 1, name: "HTML", color: "text-orange-500", Icon: FaHtml5 },
    { id: 2, name: "CSS", color: "text-blue-600", Icon: SiCsswizardry },
    {
      id: 3,
      name: "JavaScript",
      color: "text-yellow-400",
      Icon: IoLogoJavascript,
    },
    {
      id: 4,
      name: "TypeScript",
      color: "text-blue-600",
      Icon: SiTypescript,
    },
    { id: 5, name: "React.js", color: "text-sky-400", Icon: RiReactjsLine },
    { id: 6, name: "Next.js", color: "text-black", Icon: RiNextjsFill },
    {
      id: 7,
      name: "Tailwind CSS",
      color: "text-teal-400",
      Icon: RiTailwindCssFill,
    },
    { id: 8, name: "Node.js", color: "text-green-600", Icon: RiNodejsLine },
    { id: 9, name: "MongoDB", color: "text-emerald-500", Icon: SiMongodb },
    { id: 10, name: "MySQL", color: "text-sky-700", Icon: SiMysql },
    { id: 11, name: "PHP", color: "text-indigo-500", Icon: SiPhp },
    { id: 12, name: "Python", color: "text-blue-700", Icon: FaPython },
  ];
  return (
    <div className="my-6 grid grid-cols-2 md:grid-cols-4 justify-center gap-4">
      {skills.map((skill) => (
        <SkillCard
          key={skill.id}
          name={skill.name}
          hoverColor={skill.color}
          Icon={skill.Icon}
        />
      ))}
    </div>
  );
};

export default Skills;
