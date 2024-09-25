"use client";
export const ToggleButton = ({ options = [], onSelect, selectedOption }) => {
  return (
    <>
      {options.map((option, index) => (
        <div key={index} className="relative w-1/2 h-full p-1 z-10 rounded-shape">
          <button
            onClick={() => onSelect(option)}
            className={`font-worksans rounded-shape border-2 border-[#6C6B70] w-full relative px-4 py-4 text-center z-10 font-semibold text-lg transition-colors duration-500 ease-in-out outline-none ${
              option === selectedOption ? 'text-white' : 'text-[#6C6B70]'
            }`}
          >
            <span className="relative z-10">{option}</span>
            <div
              className={`absolute inset-0 rounded-shape bg-gradient-to-r ${
                option === selectedOption
                  ? option === "Male"
                    ? "from-[#5F9FE7] to-[#4AE1D2]"
                    : "from-[#5F9FE7] to-[#E07DFE]"
                  : ""
              }`}
            ></div>
            <div
              className={`absolute inset-[2px] rounded-shape transition-colors duration-300 ease-in-out ${
                option === selectedOption ? "bg-[#312E52]" : ""
              }`}
            ></div>
          </button>
          <style jsx>{`
            .rounded-shape {
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
      ))}
    </>
  );
};
export default ToggleButton;
