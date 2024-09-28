import React from "react";

export default function ToggleButton({
  options = [],
  onSelect,
  selectedOption,
}) {
  return (
    <div className="flex justify-between w-full h-full">
      {options.map((option, index) => (
        <div key={index} className="relative w-[48%] h-full z-10">
          <button
            onClick={() => onSelect(option)}
            className={`font-worksans rounded-shape w-full relative p-4 text-center z-10 font-semibold text-lg transition-colors duration-500 ease-in-out outline-none ${
              option === selectedOption ? "text-white" : "text-[#6C6B70]"
            }`}
          >
            <span className="relative z-10">{option}</span>
            <div
              className={`absolute inset-0 rounded-custom ${
                option === selectedOption
                  ? option === "Male"
                    ? "bg-gradient-to-r from-[#5F9FE7] to-[#4AE1D2]"
                    : "bg-gradient-to-r from-[#5F9FE7] to-[#E07DFE]"
                  : "bg-transparent border-2 border-[#6C6B70]"
              }`}
            ></div>
            {option === selectedOption && (
              <div className="absolute inset-[2px] rounded-custom bg-[#312E52]"></div>
            )}
          </button>
        </div>
      ))}
      <style jsx>{`
        .rounded-custom {
          border-radius: 24px;
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
  );
}
