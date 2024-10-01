"use client";
import React from "react";
import Image from "next/image";

export default function Border({
  image = "",
  gradient = "",
  backgroundColor = "",
  width = "w-full",
  height = "h-full",
  textColor = "text-white",
  className = "",
  padding = "",
  shape = "rounded-custom", 
}) {
  return (
    <div className={`relative ${width} ${height} z-10 ${className}`}>
      <div
        className={`font-worksans ${shape} w-full relative text-center z-10 font-semibold text-lg transition-colors duration-500 ease-in-out outline-none ${textColor}`}
      >
        <div className={`relative z-10 ${shape} ${padding}`}>{image}</div>
        <div
          className={`absolute inset-0 ${shape} ${gradient}`}
          style={{
            background:
              "linear-gradient(to right, #5F9FE7, #4AE1D2, #E07DFE, #FF1FCA)",
          }}
        ></div>
        <div
          className={`absolute inset-[2px] ${shape}`}
          style={{ backgroundColor }}
        ></div>
      </div>
    </div>
  );
}
