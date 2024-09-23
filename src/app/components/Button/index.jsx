import { motion } from "framer-motion";

const Button = () => {
  return (
    <>
      <motion.div
        className="mt-80"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {/* <button className="w-full rounded-[14px] px-4 py-4 bg-white text-[#bg-[#080717] font-semibold text-md">
          Next
        </button> */}

        <button className="w-full relative px-4 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          <span className="relative z-10">Next</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#5F9FE7] via-[#4AE1D2]  to-[#E07DFE] opacity-75 blur"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#5F9FE7] via-[#4AE1D2] to-[#E07DFE] "></div>
          <div className="absolute inset-[2px] rounded-full bg-gray-900"></div>
        </button>
        <div className="mt-6 text-center text-sm text-[#D7D8D9]">
          Already have an account?{" "}
          <a href="#" className="text-[#5F9FE7]">
            Sign-in here
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Button;
