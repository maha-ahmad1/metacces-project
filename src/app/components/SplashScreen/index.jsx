"use client";

import { useState, useEffect } from "react";
import SignupForm from "../Form";
import Image from "next/image";

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  const [showSecondLayer, setShowSecondLayer] = useState(true);

  useEffect(() => {
    const secondLayerTimer = setTimeout(() => {
      setShowSecondLayer(false);
    }, 4800); 

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); 

    return () => {
      clearTimeout(secondLayerTimer);
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div className="relative flex justify-center items-center h-screen bg-[#080717]">
        <Image
          height={100}
          width={100}
          className="absolute w-full h-full object-cover opacity-80"
          src="/assets/metacces layer1.gif"
          alt="First Layer GIF"
        />

        {showSecondLayer && (
          <Image
            height={100}
            width={100}
            className="absolute w-full h-full object-cover opacity-100 mix-blend-screen"
            src="/assets/metacces layer 2.gif"
            alt="Second Layer GIF"
          />
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
