import { TimelinesItem } from "@/types/type";
import React from "react";

type propsTypes = {
  datas: TimelinesItem[];
};

const TimeLine = ({ datas }: propsTypes) => {
  return (
    <div className="mt-6 border dark:border-white">
      {datas.map((data) => (
        <div className="flex items-start relative" key={data.id}>
          <span className="w-[2px] h-full bg-gray-800 absolute left-12 -z-10 dark:bg-gray-200"></span>
          <div className="p-4">
            <img
              src={data.image}
              alt="Company Logo"
              width={64}
              height={64}
              className="object-cover rounded-full max-h-16 bg-white border w-16 h-16"
            />
          </div>
          <div className="pt-5">
            {data.timelines.map((timeline) => (
              <div className="pb-4" key={timeline.id}>
                <p className="text-gray-600 text-xs dark:text-gray-400">
                  Mar 2023 - Present
                </p>
                <p className="font-semibold dark:text-white">{data.name}</p>
                <p className="text-gray-600 text-sm dark:text-gray-400">
                  {timeline.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
