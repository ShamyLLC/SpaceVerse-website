"use-client";
import React from "react";
import Image from "next/image";
import clippath from "src/Images/clippath.svg";
import smslogo from "src/Images/sms.svg";
import userlogo from "src/Images/user.svg";
import arrowright from "src/Images/arrow-right.svg";

const Waitlist = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-slate-900 p-4 lg:p-8">
      <div className="p-8 lg:max-w-md   mx-auto flex flex-col justify-center items-center text-center h-auto relative bg-gradient-to-br from-black to-black rounded-lg border-2 border-white border-opacity-40 backdrop-blur-[60px]">
        <div className="flex flex-col justify-center sm:justify-start items-center gap-4 mb-4 sm:mb-0">
          <Image src={clippath} width={60} height={60} alt="Clippath" />
          <div className="w-full text-white text-lg lg:text-xl font-bold leading-none">
            Join the Waitlist!
          </div>
          <div className="w-full text-slate-300 text-sm lg:text-base font-normal leading-snug">
            Embarking soon: The SpaceVerse odyssey awaits those on the waitlist.
          </div>
          <div className="w-full">
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Image src={smslogo} alt="smslogo" />
              </div>
              <input
                type="email"
                className="block w-full h-[50px] bg-transparent rounded-md border-0 py-1.5 pl-10 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                placeholder="Your Email Here"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Image src={userlogo} alt="userlogo" />
              </div>
              <input
                type="text"
                className="block w-full h-[50px] bg-transparent rounded-md border-0 py-1.5 pl-10 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                placeholder="Full Name"
              />
            </div>
          </div>
          <button className="mt-4 lg:mt-6 flex justify-center items-center py-2 px-4 border border-white rounded-md text-white text-base font-medium leading-normal">
            Join Waitlist
            <Image src={arrowright} alt="arrowright" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
