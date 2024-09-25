"use client";
import { useState, useEffect, useCallback } from "react";
import Fingerprint from "../components/Fingerprint";

export default function Component() {
  const [progress, setProgress] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const startCounting = useCallback(() => {
    if (!isCompleted) {
      setIsPressed(true);
    }
  }, [isCompleted]);

  const stopCounting = useCallback(() => {
    if (!isCompleted) {
      setIsPressed(false);
      if (progress < 100) {
        setProgress(0);
      }
    }
  }, [progress, isCompleted]);

  useEffect(() => {
    let intervalId;

    if (isPressed && progress < 100) {
      intervalId = setInterval(() => { //This function will run every 50 milliseconds.
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(intervalId);
            setIsCompleted(true);
            return 100;
          }
          return prevProgress + 1; //If prevProgress is less than 100, it increments the progress by 1
        });
      }, 50);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPressed, progress]);

  return (
    <div className="h-screen bg-[#080717] flex flex-col items-center justify-between p-8">
      <div className="w-full max-w-md">
        <h1 className="font-keepcalm text-center opacity-70 text-sm mt-4 mb-8 text-[#D7D8D9] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae.
        </h1>
        <div className="bg-[#080717] rounded-full h-6 overflow-hidden border border-[#6C6B70] relative">
          <div
            className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white">{progress}%</p>
          </div>
        </div>
      </div>
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 bg-purple-500 rounded-full opacity-20 animate-pulse" />
        <div className="absolute inset-4 bg-purple-600 rounded-full opacity-40 animate-pulse animation-delay-500" />
        <div className="absolute inset-8 bg-purple-700 rounded-full opacity-60 animate-pulse animation-delay-1000" />
      </div>
      <button
        className="bg-[#080717] p-6 rounded-full "
        onMouseDown={startCounting}
        onMouseUp={stopCounting}
        onMouseLeave={stopCounting}
        onTouchStart={startCounting}
        onTouchEnd={stopCounting}
        disabled={isCompleted}
      >
        <Fingerprint className="w-12 h-12 text-white" />
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
}
