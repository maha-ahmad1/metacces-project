"use client";
import React from "react";

export default function BorderPogress({
  image = "",
  gradient = "",
  backgroundColor = "",
  width = "w-full",
  height = "h-full",
  textColor = "text-white",
  className = "",
  padding = "",
  
}) {
  return (
    <div className={`relative ${width} ${height} z-10 ${className}`}>
      <div
        className={`font-worksans rounded-progress w-full relative text-center  z-10 font-semibold text-lg transition-colors duration-500 ease-in-out outline-none ${textColor}`}
      >
        <div className={`relative z-10  rounded-full ${padding}`}>{image}</div>
        <div
          className={`absolute inset-0 rounded-progress ${gradient}`}
          style={{
            background:
              "linear-gradient(to right, #5F9FE7, #4AE1D2, #E07DFE, #FF1FCA)",
          }}
        ></div>
        <div
          className={`absolute inset-[2px] rounded-progress  `}
          style={{ backgroundColor }}
        ></div>
      </div>

     
    </div>
  );
}
