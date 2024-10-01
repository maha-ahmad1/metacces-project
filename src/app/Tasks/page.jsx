"use client";
import React from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaSnapchatGhost,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa";
import Border from "../components/Border";
const tasks = [
  {
    id: 1,
    platform: "X (Twitter)",
    action: "Follow",
    handle: "@metacces",
    xp: "+100 XP",
    icon: <FaInstagram />,
  },
  {
    id: 2,
    platform: "Instagram",
    action: "Follow",
    handle: "@metacces",
    xp: "+100 XP",
    icon: <FaInstagram />,
  },
  {
    id: 3,
    platform: "Snapchat",
    action: "Add",
    handle: "@metacces",
    xp: "+100 XP",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    platform: "YouTube",
    action: "Subscribe",
    handle: "@metacces",
    xp: "+100 XP",
    icon: <FaInstagram />,
  },
  {
    id: 5,
    platform: "YouTube",
    action: "Subscribe",
    handle: "@metacces",
    xp: "+100 XP",
    icon: <FaInstagram />,
  },
  {
    id: 6,
    platform: "YouTube",
    action: "Subscribe",
    handle: "@metacces",
    xp: "+100 XP",
    icon: <FaInstagram />,
  },
];

const TaskPage = () => {
  return (
    <div className="w-full h-screen  bg-black text-white  p-5">
      <div className=" p-4 border-2 border-[#6C6B70]">
        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="w-full rounded-full p-3 text-white ">
            <p className="font-keepcalm text-xl ">Tasks</p>
          </div>
          <Image
            src="/assets/X.png"
            alt=" close"
            className="absolute w-4 h-4 top-3 right-4 text-white"
            width={100}
            height={100}
          />
        </div>

        {/* Task Header */}
        <div
          className="text-left flex flex-col justify-start  p-4 rounded-custom mb-4 "
          style={{
            background:
              "linear-gradient(to right, #5F9FE7, #4AE1D2, #E07DFE, #FF1FCA)",
          }}
        >
          <p className="text-[12px] font-worksans rounded-custom bg-[#726CAC] w-20 text-center mb-2 p-[4px]">
            Available
          </p>
          <h2 className="text-2xl font-keepcalm">12 TASKS</h2>
        </div>

        {/* Task List */}
        <div className="space-y-4 ">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center p-4 rounded-custom border-2 border-[#6C6B70]"
            >
              <div className="flex items-center space-x-4">
                {/* Icon */}

                {/* <Border
                  padding="p-4"
                  image={
                    <Image
                      src="/assets/solid.png"
                      alt="Mic Icon"
                      className="w-8 h-8 "
                      width={100}
                      height={100}
                    />
                  }
                  backgroundColor="#080717"
                  className=""
                /> */}
                <span className="text-2xl ">{task.icon}</span>

                {/* Task Details */}
                <div>
                  <p className="font-worksans text-sm font-light text-[#FFFFFF] mb-2">
                    {task.action} {task.handle}
                  </p>
                  <p className="text-green-400 font-worksans text-sm font-light">
                    {task.xp}
                  </p>
                </div>
              </div>
              {/* Check Button */}
              <button className="border-2 border-pink-500 text-pink-500 px-4 py-2 rounded-full hover:bg-pink-500 hover:text-white font-worksans text-[12px]">
                Check
              </button>
            </div>
          ))}
        </div>
        <style jsx>{`
          .rounded-custom {
            border-radius: 35px;
            clip-path: polygon(
              4% 0,
              96% 0,
              100% 26%,
              100% 74%,
              96% 100%,
              4% 100%,
              0 74%,
              0 26%
            );
          }
        `}</style>
      </div>
    </div>
  );
};

export default TaskPage;
