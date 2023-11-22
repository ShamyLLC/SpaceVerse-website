"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import headerbackground from "src/Images/Header.png";
import vector from "src/Images/Vector.svg";
import frame2 from "src/Images/Frame2.png";
import clippath from "src/Images/clippath.svg";
import arrowright from "src/Images/arrow-right.svg";
import homelogo from "src/Images/Home.svg";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";
import { useImageContext } from "@/contexts/Imagecontext/imageContext";

export function Header() {
  const router = useRouter();
  const [basePath, setbasePath] = useState("");
  const { image, vedio, changeImage, changeVedio } = useImageContext();

  const handleChangeImageClick = (newImage) => {
    changeImage(newImage);
  };

  const handleChangevedioClick = (vedios) => {
    changeVedio(vedios);
  };

  const handlewaitlist = () => {
    router.push("/waitlist");
  };

  const handlehome = () => {
    handleChangeImageClick(homelogo);
    router.push("/");
  };

  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    setbasePath(window.location.origin);
  }, []);

  return (
    <header className="relative">
      <div className="relative  ">
        <Image
          src={headerbackground}
          layout="fill"
          objectFit="cover"
          className="absolute"
          alt="Background"
        />
        <div className="w-[46px] mx-auto h-1.5 bg-gradient-to-bl from-cyan-400 to-purple-600 rounded-bl-sm rounded-br-sm z-20"></div>

        <Disclosure as="nav" style={{ zIndex: 20 }}>
          {({ open }) => (
            <>
              <div className="mx-auto  sm:py-5 md:px-5 px-2 py-5 sm:pl-2 lg:py-[24px] max-w-7xl  sm:px-2 lg:px-8 ">
                <div className="flex h-16 items-center justify-between space-x-5">
                  {/* Logo on the left */}
                  <div className="shrink-0  text-white z-20">
                    <div className="flex justify-center sm:justify-start items-center gap-4 mb-4 sm:mb-0 ">
                      <Image
                        src={clippath}
                        width={20}
                        height={30}
                        alt="Clippath"
                        className="lg:w-[20px] cursor-pointer z-20"
                        onClick={handlehome}
                      />
                      <Image
                        src={vector}
                        width={200}
                        className="lg:w-[250px] cursor-pointer z-20"
                        height={100}
                        alt="Vector"
                        onClick={handlehome}
                      />
                    </div>
                  </div>

                  {/* Centeblue navigation links */}
                  <div className="flex-1 flex items-center justify-center  text-white z-20 ">
                    <div className="hidden sm:flex lg:space-x-12 sm:space-x-6">
                      <a
                        href={`${basePath}#home`}
                        onClick={() => {
                          handleChangeImageClick(homelogo),
                            handleChangevedioClick(false);
                          setActiveLink("home");
                        }}
                        className={` text-lg font-medium  cursor-pointer leading-normal ${
                          activeLink === "home"
                            ? "text-blue-600 "
                            : "text-white"
                        }`}
                      >
                        Home
                      </a>
                      <a
                        onClick={() => {
                          handleChangevedioClick(true), setActiveLink("about");
                        }}
                        className={`text-lg  cursor-pointer font-medium leading-normal ${
                          activeLink === "about"
                            ? "text-blue-600 "
                            : "text-white"
                        }`}
                      >
                        About us
                      </a>
                      <a
                        onClick={() => {
                          handleChangeImageClick(frame2),
                            handleChangevedioClick(false),
                            setActiveLink("services");
                        }}
                        className={`text-lg  cursor-pointer font-medium leading-normal ${
                          activeLink === "services"
                            ? "text-blue-600 "
                            : "text-white"
                        }`}
                      >
                        Our Services
                      </a>
                    </div>
                  </div>

                  {/* Contact Us button on the right */}
                  <div className="hidden sm:ml-6 sm:block  text-white z-20 ">
                    <div className="w-fit   sm:inline-flex justify-end items-end">
                      <div className="gradient-box z-20 py-0">
                        <button
                          class=" gradient-boxbtn w-fit h-11 pl-4 mt-2 z-20  sm:mt-0 sm:py-2 md:py-2 py-2.5  sm:pr-2 pr-1 bg-gradient-to-bl from-cyan-400 to-violet-600 justify-center items-center inline-flex rounded-md"
                          onClick={handlewaitlist}
                        >
                          <span class="text-white text-base font-medium leading-normal">
                            Join Waitlist
                          </span>

                          <Image
                            src={arrowright}
                            alt="Arrow Right"
                            class="text-white"
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Mobile menu button */}
                  <div className="-mr-2 flex sm:hidden">
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel
                className="sm:hidden z-20 "
                style={{ display: "block", visibility: "20%" }}
              >
                <div className="space-y-1 px-2 pb-3 pt-2 z-20 opacity-[99%]">
                  <a
                    href={`${basePath}#home`}
                    onClick={() => {
                      handleChangeImageClick(homelogo), setActiveLink("home");
                    }}
                    className={`text-lg  font-medium leading-normal  block rounded-md bg-transparent px-3 py-2 z-20 text-white  ${
                      activeLink === "home" ? "text-blue-600 " : "text-white"
                    }`}
                  >
                    Home
                  </a>
                  <a
                    onClick={() => {
                      handleChangeImageClick(homelogo), setActiveLink("about");
                    }}
                    className={`text-lg  cursor-pointer font-medium leading-normal  block rounded-md bg-transparent px-3 py-2  ${
                      activeLink === "about" ? "text-blue-600 " : "text-white"
                    }`}
                  >
                    About us
                  </a>
                  <a
                    onClick={() => {
                      handleChangeImageClick(frame2), setActiveLink("services");
                    }}
                    className={`text-base cursor-pointer font-medium leading-normal  block rounded-md bg-transparent px-3 py-2  text-white z-20 ${
                      activeLink === "services"
                        ? "text-blue-600 "
                        : "text-white"
                    }`}
                  >
                    Our Services
                  </a>
                </div>
                <div className="border-t-2 ml-2 border-white pb-3 pt-4 z-20 opacity-[99%] ">
                  <div className="gradient-box z-20">
                    <button
                      class=" gradient-boxbtn w-fit h-11 pl-4 mt-2 z-20  sm:mt-0 py-2.5 sm:pr-2 pr-1 bg-gradient-to-bl from-cyan-400 to-violet-600 justify-center items-center inline-flex rounded-md"
                      onClick={handlewaitlist}
                    >
                      <span class="text-white text-base font-medium leading-normal">
                        Join Waitlist
                      </span>

                      <Image
                        src={arrowright}
                        alt="Arrow Right"
                        class="text-white"
                      />
                    </button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </header>
  );
}
