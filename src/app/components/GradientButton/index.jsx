import React from "react";

const GradientButton = ({
  text = "Next",
  gradientColors,
  bgColor = "bg-[#080717]",
  onClick,
}) => {
  return (
    <div>
      <button
        className="w-full relative px-4 py-4 text-white text-lg font-semibold transition-all duration-300 ease-in-out"
        onClick={onClick}
      >
        <span className="relative z-10 font-worksans text-lg">{text}</span>
        <div className="absolute inset-0 rounded-shape "style={{ background: "linear-gradient(to right, #5F9FE7, #4AE1D2, #E07DFE, #FF1FCA)" }}></div>
        <div className="absolute inset-0 rounded-shape "style={{ background: "linear-gradient(to right, #5F9FE7, #4AE1D2, #E07DFE, #FF1FCA)" }}></div>
        <div className={`absolute inset-[2px] rounded-shape ${bgColor}`}></div>

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
  );
};

export default GradientButton;

