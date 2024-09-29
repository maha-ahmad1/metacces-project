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
