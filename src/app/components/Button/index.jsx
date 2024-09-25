import { motion } from "framer-motion";
import Link from "next/link";
import GradientButton from "../GradientButton";
const Button = () => {
  return (
    <>
      <motion.div
        className=""
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Link href="/progress">
          {/* <button className="w-full relative px-4 py-4 text-white text-lg font-semibold transition-all duration-300 ease-in-out ">
            <span className="relative z-10 font-worksans text-lg ">Next</span>
            <div className="absolute inset-0  rounded-shape bg-gradient-to-r from-[#5F9FE7] via-[#4AE1D2] to-[#E07DFE]"></div>
            <div className="absolute inset-0 rounded-shape bg-gradient-to-r from-[#5F9FE7] via-[#4AE1D2] to-[#E07DFE]"></div>
            <div className="absolute inset-[2px] rounded-shape bg-gray-900"></div>
          </button>
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
            }
          `}</style> */}
          <GradientButton text="Next" />
        </Link>
        <div className="mt-6 text-center text-sm text-[#D7D8D9] font-worksans">
          Already have an account?{" "}
          <a href="#" className=" font-worksans text-[#5F9FE7]">
            Sign-in here
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Button;
