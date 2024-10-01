import Image from "next/image";
import Border from "../components/Border";
import Link from "next/link";
import { Mic  } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="bg-[#080717] flex flex-col items-center justify-between text-white w-full h-screen p-5  ">
      <div className="w-full mt-4 relative  ">
        <Border
          image={
            <div className="flex items-center">
              <Border
                padding="p-[3px]"
                image={
                  <Image
                    src="/assets/Avatar.png"
                    alt="Mic Icon"
                    className="w-16 h-16"
                    width={100}
                    height={100}
                  />
                }
                backgroundColor="#312E52"
                width="w-auto"
                height="h-auto"
                className="p-3 m-0 "
              />
              <div>
                <p className="font-medium text-sm font-worksans text-[#D7D8D9] mr-24">
                  @makise43
                </p>
                <div className="flex">
                  <p className="text-xl font-worksans">Makise Kurisu</p>
                  <div className="ml-2">
                    <Image
                      src="/assets/verified.png"
                      alt="Mic Icon"
                      className="w-6 h-6"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          }
          backgroundColor="#312E52"
        />
        <div className="absolute z-10 bottom-1 left-12 transform -translate-x-1/2 bg-[#B848D8] rounded-full w-6 h-6 flex items-center justify-center">
          <p className="text-white font-bold">5</p>
        </div>
      </div>

      {/* <div className="flex items-center justify-center ">
        <Image
          width={100}
          height={100}
          src="/assets/email.png"
          alt="Robot Character"
          className=""
        />
      </div> */}

      <div className="flex justify-center  space-x-6 mb-5 ">
        <button className="flex items-center justify-center ">
          <Border
            padding="p-4"
            image={
              <Image
                src="/assets/Solid-1.webp"
                alt="Mic Icon"
                className="w-8 h-8 "
                width={100}
                height={100}
              />
            }
            backgroundColor="#080717"
            className=""
          />
        </button>
        <Link href="/Tasks">
          <button className="flex items-center justify-center  ">
            <Border
              padding="p-4"
              image={
                <Image
                  src="/assets/Mask group-1.webp"
                  alt="Mic Icon"
                  className="w-14 h-14"
                  width={100}
                  height={100}
                />
              }
              backgroundColor="#312E52"
            />
          </button>
        </Link>
        <button className="flex items-center justify-center  ">
          <Border
            image={
              <Image
                src="/assets/arrow-1.webp"
                alt="Mic Icon"
                className="w-8 h-8"
                width={100}
                height={100}
              />
            }
            backgroundColor="#080717"
            padding="p-4"
          />
        </button>
      </div>
    </div>
  );
}
