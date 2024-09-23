"use client";

import { useState, useEffect } from "react";
import SignupForm from "../SignIn";


const SplashScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const videoElement = document.getElementById("splashVideo");

    const handleVideoEnd = () => {
      setLoading(false);
    };

    videoElement.addEventListener("ended", handleVideoEnd);

    return () => {
      videoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#080717">
        <video
          id="splashVideo"
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          src="assets/Metacces.mp4"
        />
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