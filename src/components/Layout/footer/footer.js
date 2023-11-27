"use client";
import Link from "next/link";
import { navigation } from "./config";
import facebooklogo from "@/Images/facebook.svg";
import instalogo from "@/Images/insta.svg";
import gitlogo from "@/Images/git.svg";
import clippath from "@/Images/clippath.svg";
import twitterlogo from "@/Images/twitter.svg";

import arrowright from "@/Images/arrow-right.svg";
import Ellipsenew1 from "@/Images/Ellipsenew1.svg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import meta from "@/Images/meta.svg";
import Sms from "@/Images/Sms";
import UserLogo from "@/Images/UserLogo";

export function Footer() {
  const router = useRouter();
  const [coloremail, setColorEmail] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);

  const validateInput = () => {
    let isValid = false;

    if (email) {
      setEmailValid(false);
      isValid = true;
    } else {
      setEmailValid(true);
      isValid = false;
    }

    if (name) {
      setNameValid(false);
      isValid = true;
    } else {
      setNameValid(true);
      isValid = false;
    }

    if (message) {
      setMessageValid(false);
      isValid = true;
    } else {
      setMessageValid(true);
      isValid = false;
    }

    return isValid;
  };

  const handlewaitlist = async (e) => {
    e.preventDefault();

    const isFormValid = validateInput();

    if (!isFormValid) {
      alert("Please fill in all required fields correctly.");
      return;
    } else {
      try {
        const response = await fetch("/api/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: name,
            email: email,
            message: message,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data.message === "Email already exists in waitlist") {
            alert("Email already exists in waitlist.");
          } else if (data.message === "waitlist created successfully") {
            setEmail("");
            setName("");
            setMessage("");
            alert("Successfully added to the waitlist!");
          } else {
            throw new Error("Failed to join the waitlist.");
          }
        } else {
          throw new Error("Failed to create/update waitlist");
        }
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <footer className="relative mt-5  " aria-labelledby="footer-heading">
      <Image
        src={Ellipsenew1}
        layout="fill"
        objectFit="cover"
        className="absolute left-10 opacity-50 border-none mix-blend-initial z-0"
        alt="Background"
      />
      <div className="max-w-7xl   mx-auto  md:justify-start justify-evenly lg:justify-evenly items-center overflow-hidden gap-8 bg-black lg:flex lg:flex-row flex flex-col p-4">
        <div className=" flex-col flex items-start w-fit lg:gap-[13px] gap-8  ">
          <Image src={clippath} width={50} height={50} alt="Clippath" />
          <div className="md:w-[580px] flex-col justify-start items-start gap-[21px] inline-flex">
            <div className="md:w-[580px] text-white md:text-4xl text-3xl font-semibold leading-[42px]">
              Join Us in the Cosmic Adventure!
            </div>
            <div className="md:w-[580px] text-slate-300 text-lg font-normal leading-relaxed">
              Are you ready to embark on a cosmic adventure that will expand
              your horizons and leave you in awe of the universe? SpaceVerse
              invites you to join us in the Space Rush of the future.
            </div>
          </div>
          <div className=" justify-start items-start gap-[17.96px] inline-flex">
            <div className="  bg-slate-300 rounded-sm p-[1px] h-6 cursor-pointer z-20 ">
              <Image src={meta} height={20} width={20} />
            </div>
          </div>
        </div>
        <div className=" mx-auto w-full sm:w-[90%]  lg:w-full justify-start sm:justify-center item-start sm:items-center md:items-start   lg:gap-[21px] flex flex-col lg:ml-1">
          <div className=" w-full mx-auto sm:w-[85%]  lg:w-full  ">
            <div
              onMouseOver={() => setColorEmail("email")}
              onMouseLeave={() => setColorEmail("")}
            >
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0  left-0 flex items-center pl-3">
                  <Sms color={coloremail === "email" ? "#ffffff" : ""} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value), setEmailValid(false);
                  }}
                  className={`block text-gray-400 hover:placeholder:text-white font-medium tracking-tight w-full h-[50px] bg-gradient-to-r from-stone-950 to-stone-950 rounded-lg border py-1.5 pl-10 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${
                    emailValid
                      ? "border-red-500"
                      : "border-slate-300 border-opacity-20"
                  }`}
                  placeholder="Your Email Here"
                />
              </div>
            </div>
            <div
              onMouseOver={() => setColorEmail("fullname")}
              onMouseLeave={() => setColorEmail("")}
            >
              <div className="relative mt-2 rounded-md  ">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <UserLogo
                    color={coloremail === "fullname" ? "#ffffff" : ""}
                  />
                </div>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value), setNameValid(false);
                  }}
                  type="text"
                  className={`block text-gray-400 hover:placeholder:text-white font-medium tracking-tight w-full h-[50px] bg-gradient-to-r from-stone-950 to-stone-950 rounded-lg border py-1.5 pl-10 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${
                    nameValid
                      ? "border-red-500"
                      : "border-slate-300 border-opacity-20"
                  }`}
                  placeholder="Full Name"
                />
              </div>
            </div>
            <div>
              <div className="relative mt-2 rounded-md shadow-sm ">
                <textarea
                  type="text"
                  rows={3}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value), setMessageValid(false);
                  }}
                  className={`block text-gray-400 hover:placeholder:text-white font-medium tracking-tight w-full h-[50px] bg-gradient-to-r from-stone-950 to-stone-950 rounded-lg border py-1.5 pl-10 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${
                    messageValid
                      ? "border-red-500"
                      : "border-slate-300 border-opacity-20"
                  }`}
                  placeholder="Message Here"
                />
              </div>
            </div>
          </div>
          <div className="flex mt-2 sm:mt-0 sm:w-[85%] lg:w-full space-x-2  w-full m-auto items-center text-start justify-start ">
            <div className="gradient-box z-20 cursor-pointer">
              <button
                onClick={handlewaitlist}
                className="gradient-boxbtn w-fit h-11 pl-4 mt-2 sm:mt-0 py-2.5 sm:pr-2 pr-1 rounded-md shadow justify-center items-center inline-flex bg-gradient-normal hover:bg-gradient-hover"
              >
                <span class="text-white text-base font-medium leading-normal">
                  Send Email
                </span>
              </button>
            </div>
            <div className="gradient-wait z-20 ">
              <button
                className="gradient-boxbtn w-fit h-11 pl-4 mt-2 sm:mt-0 py-2.5 sm:pr-2 pr-1 rounded-md shadow justify-center items-center inline-flex bg-gradient-different hover:bg-gradient-hover"
                onClick={handlewaitlist}
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
      <div class="max-w-7xl py-5 mx-auto text-center  border-t-2 border-slate-500 text-gray-400 text-sm font-normal  leading-normal">
        © Shamy Inc. Spaceverseai +1 (786) 940 - 4301. All rights reserved.
      </div>
    </footer>
  );
}
