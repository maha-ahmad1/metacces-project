"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import SignupForm from "../Form";

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div className="relative flex justify-center items-center w-screen h-screen overflow-hidden bg-[#080717]">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            height={100}
            width={100}
            className="w-full h-full object-cover opacity-80"
            alt="Metacces Layer1"
            src="/assets/Metacces Layer1.gif"
          />
          <Image
            height={100}
            width={100}
            alt="Metacces Layer2"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-100 mix-blend-screen"
            src="/assets/metacces layer 2.gif"
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <SignupForm />
    </div>
  );
};

export default SplashScreen;
