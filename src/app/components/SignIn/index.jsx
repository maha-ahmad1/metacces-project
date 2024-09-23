import ToggleButton from "../ToggleButton";
import Button from "../button";
import Titel from "../Titel";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function SignupForm() {
  const [selectedOption, setSelectedOption] = useState("Male");
  return (
    <div className="font-keep-calm h-screen bg-[#080717]">
      <div className=" p-6 rounded-lg shadow-lg text-white bg-[#080717]">
        <Titel />
        <motion.div
          className="mt-6"
          initial={{ x: "-100vw", opacity: 0 }} // يبدأ من خارج الشاشة على اليسار
          animate={{ x: 0, opacity: 1 }} // يتحرك إلى مكانه الطبيعي
          transition={{
            type: "spring", // نوع الأنيميشن الذي يعطي تأثير ارتداد (bounce)
            stiffness: 100, // يتحكم في حدة الارتداد
            damping: 10, // يتحكم في مدى تقليل الارتداد
            duration: 0.8,
            // delay: 0.1, // تأخير ليتزامن مع العناصر السابقة
          }}
        >
          <div className="relative">
            <input
              id="username"
              type="text"
              className="w-full px-12 py-4 rounded-[14px] bg-[#080717] border text-[#6C6B70] focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Username"
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
          </div>
          <div className="mt-6 flex justify-between items-center">
            <ToggleButton
              onSelect={(option) => setSelectedOption(option)}
              options={["Male", "Female"]}
              selectedOption={selectedOption}
            />{" "}
          </div>
        </motion.div>

        <Button />
      </div>
    </div>
  );
}
