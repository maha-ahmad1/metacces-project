"use client";

import { useState, useEffect } from "react";
import SignupForm from "../Form";
import Image from "next/image";

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  // const [showSecondLayer, setShowSecondLayer] = useState(true);

  useEffect(() => {
    // const secondLayerTimer = setTimeout(() => {
    //   setShowSecondLayer(false);
    // }, 4800);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      // clearTimeout(secondLayerTimer);
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div className="relative flex justify-center items-center h-screen bg-[#080717]">
        {loading && (
          <div className="relative w-full h-full">
            <video
              className="absolute w-full h-full object-cover opacity-80"
              autoPlay
              loop
              muted
              src="/assets/MetaccesLayer1.webm"
            />
            <video
              className="absolute w-full h-full object-cover opacity-100 mix-blend-screen"
              autoPlay
              loop
              muted
              src="/assets/MetaccesLayer2.webm"
            />
          </div>
        )}
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
