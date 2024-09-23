import { useState } from "react";
import Image from "next/image";
const ToggleButton = () => {
  const [selectedOption, setSelectedOption] = useState("Male");

  const options = [
    { label: "Male", image: "/assets/man.png" },
    { label: "Female", image: "/assets/woman.png" },
  ];

  return (
    <div className="relative flex items-center w-full px-4 py-4 rounded-[14px] bg-[#080717 border">
      <div
        className={
          "absolute top-1 bottom-1 left-1 border-2 rounded-[12px] bg-purple-500 transition-transform duration-300 ease-in-out p-[12px]"
        }
        style={{
          transform: `translateX(${
            options.findIndex((option) => option.label === selectedOption) * 95
          }%)`,
          width: `${100 / options.length}%`,
        }}
      />

      {options.map((option, index) => (
        <button
          key={index}
          className={`w-1/2 h-full text-center z-10 font-medium transition-colors duration-300 text-white flex justify-center`}
          onClick={() => setSelectedOption(option.label)}
        >
          <Image width={25} height={30} src={option.image} alt={option.label} className="mx-2" />
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ToggleButton;
