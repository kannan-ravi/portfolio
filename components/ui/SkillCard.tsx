import React, { useState } from "react";

type propsTypes = {
  name: string;
  hoverColor: string;
  Icon: React.ElementType;
};
const SkillCard = ({ name, hoverColor, Icon }: propsTypes) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="flex flex-col items-center gap-1 border-2 border-gray-200 py-4 rounded-lg shadow-xs cursor-pointer w-full hover:bg-gray-100 transition duration-300 dark:border-gray-900 dark:hover:bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon
        className={`size-7 mb-2 ${isHovered ? hoverColor : "dark:text-white"} ${
          isHovered && "-translate-y-1"
        } ${
          name == "Next.js" && "text-black dark:text-white"
        } transition duration-300`}
      />
      <p className="text-xs text-gray-700 dark:text-gray-300">{name}</p>
    </div>
  );
};

export default SkillCard;
