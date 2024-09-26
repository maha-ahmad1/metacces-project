import ToggleButton from "../ToggleButton";
import Button from "../Button";
import Titel from "../Titel";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function SignupForm() {
  const [selectedOption, setSelectedOption] = useState("Male");
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className=" w-full h-screen flex flex-col justify-between p-5">
      <div className=" text-white ">
        <Titel />
        <div className="mt-6">
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.8,
            }}
          >
            <div className="relative mb-4">
              <input
                id="username"
                type="text"
                className="w-full rounded-shape px-12 py-4 !bg-[#080717] border-2 border-[#6C6B70] text-[#6C6B70] text-md focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Username"
                autoComplete="off"
              />
              <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
                <Image
                  width={25}
                  height={30}
                  src="/assets/email.png"
                  alt="email"
                  className="text-white"
                />
              </i>
              <style jsx>{`
                .rounded-shape {
                  border-radius: 25px;
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
              `}</style>
            </div>
            {/* <div className="relative mb-4">
              <input
                id="username"
                type="text"
                placeholder="Username"
                autoComplete="off"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`w-full rounded-shape px-12 py-4 inset-[2px] !bg-[#080717]   text-[#6C6B70] text-md transition-colors duration-500 ease-in-out focus:outline-none
                ${
                  isFocused
                    ? "inset-0 rounded-custom ring-2  ring-gradient-to-r ring-blue-500 ring-purple-500"
                    : "bg-transparent border-2 border-[#6C6B70]"
                }`}
              />
              <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
                <Image
                  width={25}
                  height={30}
                  src="/assets/email.png"
                  alt="email"
                  className="text-white"
                />
              </i>
              <style jsx>{`
                .rounded-shape {
                  border-radius: 25px;
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
              `}</style>
            </div> */}
            {/* <div className="relative mb-4">
              <div className={`relative ${isFocused ? "gradient-border" : ""}`}>
                <input
                  id="username"
                  type="text"
                  className="w-full !bg-[#080717] border-2 border-[#6C6B70] text-[#6C6B70] text-md rounded-custom px-12 py-4 text-md focus:outline-none"
                  placeholder="Username"
                  autoComplete="off"
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
                <div className="absolute inset-[2px] rounded-custom bg-[#080717] -z-10"></div>
              </div>
              <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white z-10">
                <Image
                  width={25}
                  height={30}
                  src="/assets/email.png"
                  alt="user icon"
                  className="text-white"
                />
              </i>
              <style jsx>{`
                .rounded-custom {
                  border-radius: 25px;
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
                .gradient-border {
                  background: linear-gradient(
                    to right,
                    #5f9fe7,
                    #4ae1d2,
                    #e07dfe
                  );
                  padding: 2px;
                }
                .gradient-border::before {
                  content: "";
                  position: absolute;
                  inset: 0;
                  border-radius: 25px;
                  padding: 2px;
                  background: linear-gradient(
                    to right,
                    #5f9fe7,
                    #4ae1d2,
                    #e07dfe
                  );
                  -webkit-mask: linear-gradient(#fff 0 0) content-box,
                    linear-gradient(#fff 0 0);
                  -webkit-mask-composite: xor;
                  mask-composite: exclude;
                }
              `}</style>
            </div> */}
            <div className="flex justify-between items-center">
              <ToggleButton
                onSelect={(option) => setSelectedOption(option)}
                options={["Male", "Female"]}
                selectedOption={selectedOption}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full p-5 bg-[#080717] z-20">
        <Button />
      </div>
    </div>
  );
}
