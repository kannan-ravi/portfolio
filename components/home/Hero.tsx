import Image from "next/image";
import React from "react";
import { FaLocationPin } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="mt-40">
      <div className="flex gap-6 ">
        <div>
          <Image
            src="https://randomuser.me/api/portraits/men/9.jpg"
            alt="Profile Image"
            width="80"
            height="80"
            className="rounded-full border-4 border-green-500"
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-2">Kannan Ravindran</h1>
          <div className="flex items-center gap-2">
            <FaLocationPin className="text-green-600" />
            <p className="text-gray-500">Tamil nadu, India</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <p className="tracking-wide leading-6.5">
          I'm a creative software developer with five years of experience. I
          specialize in UI design and crafting engaging user experiences with
          great attention to detail.
        </p>
      </div>
    </div>
  );
};

export default Hero;
