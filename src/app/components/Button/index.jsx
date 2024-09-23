import { motion } from "framer-motion";
import Link from "next/link";
const Button = () => {
  return (
    <>
      <motion.div
        className="mt-80"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Link href="/progress">
          <button className="w-full  rounded-[14px] relative px-4 py-4  text-white text-lg font-semibold  ">
            <span className="relative z-10">Next</span>
            <div className="absolute inset-0  rounded-[14px] bg-gradient-to-l from-[#5F9FE7] via-[#4AE1D2]  to-[#E07DFE] "></div>
            <div className="absolute inset-0  rounded-[14px] bg-gradient-to-r from-[#4AE1D2] via-[#E07DFE] to-[#FF1FCA] "></div>
            <div className="absolute inset-[3px]  rounded-[14px] bg-gray-900"></div>
          </button>
        </Link>
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
