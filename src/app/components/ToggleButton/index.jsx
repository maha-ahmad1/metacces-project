export const ToggleButton = ({ options = [], onSelect, selectedOption }) => {
  "use client";
  return (
     <>
      {options.map((option, index) => (
        <div key={index} className="relative w-1/2 h-full p-1 z-10 rounded-xl ">
          <button
            onClick={() => onSelect(option)}
            className="border-2 border-[#6C6B70] w-full relative px-4 py-4 text-center z-10 font-medium rounded-xl text-white text-lg transition-colors duration-500 ease-in-out outline-none "
          >
            <span className="relative z-10">{option}</span>
            <div
              className={`absolute inset-0 rounded-xl bg-gradient-to-r ${
                option === selectedOption
                  ? option === "Male"
                    ? "from-[#5F9FE7] via-[#4AE1D2] to-[#E07DFE]"
                    : "from-[#5F9FE7] via-[#4AE1D2] to-[#FF1FCA]"
                  : ""
              }`}
            ></div>
            <div
              className={`absolute inset-[2px] rounded-xl transition-colors duration-300 ease-in-out ${
                option === selectedOption && "bg-[#312E52]"
              }`}
            ></div>
          </button>
        </div>
      ))}
      </>
  );
};
export default ToggleButton;
