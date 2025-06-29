"use client";
import { skills } from "@/constants/skills";
import SkillCard from "../ui/SkillCard";

const Skills = () => {
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 justify-center gap-4">
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
