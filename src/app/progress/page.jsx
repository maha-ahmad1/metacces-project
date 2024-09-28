"use client";
import { useState, useEffect, useCallback } from "react";
import Fingerprint from "../components/Fingerprint";
import GradientButton from "../components/GradientButton";
import Border from "../components/Border";
import { useRouter } from "next/navigation";

export default function Component() {
  const [progress, setProgress] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const router = useRouter();

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
      intervalId = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(intervalId);
            setIsCompleted(true);
            router.push('/profile'); 
            return 100;
          }
          return prevProgress + 1; 
        });
      }, 50);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPressed, progress, router]); // Add router to dependency array

  return (
    <div className="h-screen bg-[#080717] flex flex-col items-center justify-between p-8">
      <div className="w-full max-w-md">
        <h1 className="font-keepcalm text-center opacity-70 text-sm mt-4 mb-8 text-[#D7D8D9] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae.
        </h1>

       
        <div>
          <Border
            image={
              <div className="">
                <div
                  className="absolute inset-0 rounded-shape "
                  style={{
                    width: `${progress}%`,
                    background:
                      " linear-gradient(to right, #5F9FE7, #4AE1D2, #E07DFE, #FF1FCA)",
                  }}
                ></div>
                <div className=" flex items-center justify-center absolute -inset-[2px] rounded-shape border-gradient">
                  <p className="text-white rounded-shape">{progress}%</p>
                </div>
              </div>
            }
            padding="p-4"
            backgroundColor="#080717"
            className=""
          />

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
              .border-gradient {
                background: linear-gradient(
                  to right,
                  #5f9fe7,
                  #4ae1d2,
                  #e07dfe,
                  #ff1fca
                );
                z-index: 1;
                position: absolute;
              }
            }
          `}</style>
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
      {/* <style jsx>{`
        .rounded-shape {
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
      `}</style> */}
    </div>
  );
}
