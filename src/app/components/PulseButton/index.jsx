import Print from "../Print";
const PulseButton = ({ onStart, onStop, isCompleted }) => {
  return (
    <>
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 bg-purple-500 rounded-full opacity-20 animate-pulse" />
        <div className="absolute inset-4 bg-purple-600 rounded-full opacity-40 animate-pulse animation-delay-500" />
        <div className="absolute inset-8 bg-purple-700 rounded-full opacity-60 animate-pulse animation-delay-1000" />
      </div>
      <button
        className="bg-[#080717] p-5 rounded-full"
        onMouseDown={onStart}
        onMouseUp={onStop}
        onMouseLeave={onStop}
        onTouchStart={onStart}
        onTouchEnd={onStop}
        disabled={isCompleted}
      >
        <Print className="w-12 h-12 text-white" />
      </button>
    </>
  );
};

export default PulseButton;
