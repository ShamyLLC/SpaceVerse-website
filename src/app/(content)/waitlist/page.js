"use client";
import React, { useState } from "react";
import Image from "next/image";
import clippath from "src/Images/clippath.svg";
import smslogo from "src/Images/sms.svg";
import userlogo from "src/Images/user.svg";
import arrowright from "src/Images/arrow-right.svg";
import Ellipse5 from "@/Images/Ellipse5.svg";
import Ellipse6 from "@/Images/Ellipse6.svg";
import Ellipse7 from "@/Images/Ellipse7.svg";
import { useToast } from "@/contexts/ToastContext";
import NewToast from "@/contexts/NewToast";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const { toast, showToast, hideToast } = useToast();

  const [validated, setValidated] = useState({
    email: false,
    fullName: false,
  });

  const validateForm = () => {
    const newValidations = {
      email: !email,
      fullName: !fullName,
    };

    setValidated(newValidations);
    return !Object.values(newValidations).includes(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      showToast("Please fill all the required fields!.", "red");
      setTimeout(() => {
        setValidated({
          email: false,
          fullName: false,
        });
      }, 3200);
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, fullName }),
      });

      if (response.ok) {
        setEmail("");
        setFullName("");
        showToast("Successfully added to the waitlist!.", "green");
      } else {
        throw new Error("Failed to join the waitlist.");
      }
    } catch (error) {
      showToast(error.message, "green");
    }
  };

  return (
    <div className="max-w-7xl m-auto   items-center w-full  bg-black lg:p-[9rem] p-4 ">
      <Image
        src={Ellipse5}
        layout="fill"
        objectFit="cover"
        className="absolute left-10 opacity-50 border-none mix-blend-initial z-0"
        alt="Background"
      />
      <Image
        src={Ellipse6}
        layout="fill"
        objectFit="cover"
        className="absolute left-10 opacity-50 border-none mix-blend-initial z-0"
        alt="Background"
      />

      <Image
        src={Ellipse7}
        layout="fill"
        objectFit="cover"
        className="absolute left-10 opacity-50 border-none mix-blend-initial z-0"
        alt="Background"
      />
      <div className="text-center items-center mx-auto flex  justify-end sm:justify-center">
        {toast && (
          <NewToast
            message={toast.message}
            onClose={hideToast}
            color={toast.color}
          />
        )}
      </div>
      <div className="p-8  mt-2 lg:max-w-md   mx-auto flex flex-col justify-center items-center text-center h-auto relative bg-gradient-to-br from-black to-black rounded-lg border-2 border-white border-opacity-40 backdrop-blur-[60px]">
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
                placeholder="Your Email Here"
                onChange={(e) => {
                  setEmail(e.target.value),
                    setValidated((prev) => ({ ...prev, email: false }));
                }}
                value={email}
                className={`block w-full rounded-md  bg-gradient-to-r from-stone-950 to-stone-950 border border-opacity-20 backdrop-blur-mdrounded-md border-1 px-[17px] py-[13px] pl-10 bg-transparent text-white shadow-sm 
                     placeholder:text-gray-400 
                    focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 ${
                      validated.email === true
                        ? "border-red-500 border-2"
                        : "border-slate-300"
                    }`}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Image src={userlogo} alt="userlogo" />
              </div>
              <input
                type=""
                placeholder="Full Name"
                onChange={(e) => {
                  setFullName(e.target.value),
                    setValidated((prev) => ({ ...prev, fullName: false }));
                }}
                value={fullName}
                className={`block w-full rounded-md border-1 px-[17px] py-[13px] pl-10 bg-transparent text-white shadow-sm 
                    placeholder:text-gray-400  bg-gradient-to-r from-stone-950 to-stone-950  border border-opacity-20 backdrop-blur-mdrounded-md
                    focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 ${
                      validated.fullName === true
                        ? "border-red-500 border-2 "
                        : "border-slate-300 "
                    }`}
              />
            </div>
          </div>
          <div className="w-[100%] ">
            <div className="gradient-wait2 ">
              <button
                class=" gradient-boxbtn w-[100%] h-11 pl-4 mt-2 z-20  sm:mt-0 py-2.5 sm:pr-2 pr-1 bg-gradient-to-bl from-cyan-400 to-violet-600 justify-center items-center inline-flex rounded-md"
                onClick={handleSubmit}
              >
                <span class="text-white text-base font-medium leading-normal">
                  Join Waitlist
                </span>

                <Image src={arrowright} alt="Arrow Right" class="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
