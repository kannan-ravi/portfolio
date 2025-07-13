import Image from "next/image";
import React from "react";
import { FaLocationPin } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="mt-38">
      <div className="flex gap-6">
        <div>
          <Image
            src="/images/kannan.webp"
            alt="Profile Image"
            width="80"
            height="80"
            className="rounded-full border-4 border-green-500 max-w-20 max-h-20 object-cover object-top"
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-1 dark:text-white">
            Kannan Ravindran
          </h1>
          <div className="flex items-center gap-2 text-sm">
            <FaLocationPin className="text-green-600" />
            <p className="text-gray-500 dark:text-gray-300">
              Tamil nadu, India
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <p className="leading-6.5 text-sm dark:text-white">
          I'm a creative full stack developer with over two years of experience.
          I specialize in Frontend and crafting engaging user experiences with
          great attention to detail.
        </p>
      </div>
    </div>
  );
};

export default Hero;
