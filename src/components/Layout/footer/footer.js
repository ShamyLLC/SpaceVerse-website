'use client'
import Link from 'next/link'
import { navigation } from './config'
import userlogo from 'src/Images/user.svg'
import facebooklogo from 'src/Images/facebook.svg'
import instalogo from 'src/Images/insta.svg'
import gitlogo from 'src/Images/git.svg'
import clippath from 'src/Images/clippath.svg'
import twitterlogo from 'src/Images/twitter.svg'
import smslogo from 'src/Images/sms.svg'
import arrowright from 'src/Images/arrow-right.svg'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'

export function Footer() {
  const router = useRouter()

  const handlewaitlist = () => {
    router.push('/waitlist')
  }

  return (
    <footer className="bg-gray-900 mt-5" aria-labelledby="footer-heading">
      <div className="max-w-7xl  mx-auto border-t-2 border-slate-500 md:justify-start justify-evenly lg:justify-evenly items-center overflow-hidden gap-8 bg-black lg:flex lg:flex-row flex flex-col p-4">
        <div className=" flex-col items-start w-fit lg:gap-[13px] gap-8 inline-flex ">
          <Image src={clippath} width={50} height={50} alt="Clippath" />
          <div className="md:w-[580px] md:h-[261px] flex-col justify-start items-start gap-[21px] inline-flex">
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
            <div className="justify-center items-center flex">
              <Image src={facebooklogo} alt="facebooklogo"></Image>
            </div>
            <div className="justify-center items-center flex">
              <Image src={instalogo} alt="instalogo"></Image>
            </div>
            <div className="justify-center items-center flex">
              <Image src={twitterlogo} alt="twitterlogo"></Image>
            </div>
            <div className="justify-center items-center flex">
              <Image src={gitlogo} alt="gitlogo"></Image>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto justify-center items-start lg:gap-[21.37px] flex flex-col lg:ml-1">
          <div className="xl:w-[481px] w-auto md:h-[234px] ">
            <div>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Image
                    className="h-5 w-5 text-gray-400"
                    src={smslogo}
                    aria-hidden="true"
                    alt="smslogo"
                  />
                </div>
                <input
                  type="email"
                  className="block text-white w-full h-[50px] bg-transparent rounded-md border-0 py-1.5 pl-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Your Email Here"
                />
              </div>
            </div>
            <div>
              <div className="relative mt-2 rounded-md shadow-sm ">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Image
                    className="h-5 w-5 text-gray-400"
                    src={userlogo}
                    aria-hidden="true"
                    alt="userlogo"
                  />
                </div>
                <input
                  type="text"
                  className="block w-full text-white h-[50px] bg-transparent rounded-md border-0 py-1.5 pl-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Full Name"
                />
              </div>
            </div>
            <div>
              <div className="relative mt-2 rounded-md shadow-sm ">
                <textarea
                  type="text"
                  rows={3}
                  className="block w-full text-white bg-transparent rounded-md border-0 py-1.5 pl-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Message Here"
                />
              </div>
            </div>
          </div>
          <div className=" flex ">
            <button className="bg=transparent rounded-md shadow ml-2 border border-white justify-center items-center inline-flex p-2.5 my-2 sm:my-0">
              <Image src={smslogo} alt="smslogo" className="text-white" />
              <span className="text-white ml-2 text-base font-medium leading-normal">
                Send Email
              </span>
            </button>
            <button
              className="bg=transparent rounded-md shadow ml-2 border border-white justify-center items-center inline-flex p-2.5 my-2 sm:my-0"
              onClick={handlewaitlist}
            >
              <span className="text-white text-base font-medium leading-normal text-center">
                Join Waitlist
              </span>
              <Image src={arrowright}></Image>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
