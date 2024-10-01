"use client"
import ProgressBar from "app/components/ProgressBar";
import PulseButton from "app/components/PulseButton";
import { useProgress } from "../../hooks/useProgress";
export default function Progress() {
  const { progress, startCounting, stopCounting, isCompleted } = useProgress();

  return (
    <div className="h-screen bg-[#080717] flex flex-col items-center justify-between p-8">
      <div className="w-full max-w-md">
         <h1 className="font-keepcalm text-center opacity-70 text-sm mt-4 mb-8 text-[#D7D8D9] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae.
        </h1>

        <ProgressBar progress={progress} />
      </div>

      <PulseButton
        onStart={startCounting}
        onStop={stopCounting}
        isCompleted={isCompleted}
      />
    </div>
  );
}
