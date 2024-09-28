import React from "react";
import Border from "../Border";
const TaskList = () => {
  const tasks = [
    { platform: "X", action: "Follow @metacces", xp: "+100 XP" },
    { platform: "Instagram", action: "Follow @metacces", xp: "+100 XP" },
    { platform: "Snapchat", action: "Add @metacces", xp: "+100 XP" },
    { platform: "YouTube", action: "Subscribe @metacces", xp: "+100 XP" },
  ];

  return (
    <div className="w-full h-full p-4 bg-black text-white">
      <h2 className="text-2xl mb-4">12 TASKS</h2>
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <Border
            key={index}
            image={<span>{task.platform}</span>} // Custom image or icon can go here
            gradient="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
            backgroundColor="#111111"
            width="w-full"
            height="h-16"
            textColor="text-white"
            className="flex items-center justify-between px-4"
          >
            <span>{task.action}</span>
            <span>{task.xp}</span>
          </Border>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
