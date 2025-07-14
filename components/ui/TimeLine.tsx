import { TimelinesItem } from '@/types/type'
import Image from 'next/image'
import React from 'react'

type propsTypes = {
  datas: TimelinesItem[]
}

const TimeLine = ({ datas }: propsTypes) => {
  return (
    <div className="mt-6 border dark:border-white">
      {datas.map((data) => (
        <div className="relative flex items-start" key={data.id}>
          <span className="absolute left-12 -z-10 h-full w-[2px] bg-gray-800 dark:bg-gray-200"></span>
          <div className="p-4">
            <Image
              src={data.image}
              alt="Company Logo"
              width={64}
              height={64}
              className="h-16 max-h-16 w-16 rounded-full border bg-white object-cover"
            />
          </div>
          <div className="pt-5">
            {data.timelines.map((timeline) => (
              <div className="pb-4" key={timeline.id}>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Mar 2023 - Present
                </p>
                <p className="font-semibold dark:text-white">{data.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {timeline.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TimeLine
