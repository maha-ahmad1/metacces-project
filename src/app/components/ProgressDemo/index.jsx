import React, { useState, useEffect } from "react";
import ProgressBar from "../ProgressBar";
const ProgressDemo = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Progress Bar Example</h1>
      <ProgressBar progress={progress} />
      <p className="mt-2 text-sm">Progress: {progress}%</p>
    </div>
  );
};

export default ProgressDemo;
