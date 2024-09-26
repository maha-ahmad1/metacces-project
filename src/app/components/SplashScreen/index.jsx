"use client";

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
          <video
            className="w-full h-full object-cover opacity-80"
            autoPlay
            loop
            muted
            src="/assets/MetaccesLayer1.webm"
          />
          <video
            className="absolute top-0 left-0 w-full h-full object-cover opacity-100 mix-blend-screen"
            autoPlay
            loop
            muted
            src="/assets/MetaccesLayer2.webm"
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
