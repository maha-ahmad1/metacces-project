import { motion } from "framer-motion";

const Titel = () => {
  return (
    <>
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 0.8,
          // delay: 0.1,
        }}
      >
        <h2 className=" font-keep-calm text-center text-3xl font-medium mt-10 tracking-tight">
          WELCOME TO WORLD
        </h2>
        <h1 className=" font-keep-calm text-center text-4xl  font-medium  mt-2  tracking-10px">
          METACCES
        </h1>
        <p className="text-center opacity-70 text-md mt-4 text-[#D7D8D9]">
          From Mythical Origins to Digital Frontiers
        </p>
      </motion.div>
    </>
  );
};

export default Titel;
