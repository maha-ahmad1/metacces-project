import ToggleButton from "../ToggleButton";
import Button from "../Button";
import Titel from "../Titel";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { User } from 'lucide-react';

export default function SignupForm() {
  const [selectedOption, setSelectedOption] = useState("Male");
  const [focused, setFocused] = useState(false);
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
                type="text"
                id="name"
                autoComplete="off"
                placeholder="Username"
                className={`w-full px-12 py-4 font-worksans  bg-[#080717] border-2 text-[#6C6B70] text-md outline-none rounded-custom relative z-10 ${
                  focused ? "border-transparent" : "  border-[#6C6B70]"
                }`}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              />
              <i className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-10">
                {/* <Image
                  width={25}
                  height={30}
                  src="/assets/email.png"
                  alt="email"
                  className="text-white"
                /> */}
                    <User color="white" size={26}/>

              </i>
              {focused && (
                <div className="absolute -inset-[2px] rounded-custom border-gradient"></div>
              )}

              {/* <style jsx>{`
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

                .border-gradient {
                  background: linear-gradient(
                    to right,
                    #5f9fe7,
                    #4ae1d2,
                    #e07dfe,
                    #ff1fca
                  );
                  z-index: 1;
                  padding: 2px;
                  position: absolute;
                }

                input {
                  position: relative;
                  z-index: 10;
                }
              `}</style> */}
            </div>

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
