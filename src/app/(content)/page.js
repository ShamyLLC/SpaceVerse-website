'use client'
import Image from 'next/image'
import arrowright from '@/Images/arrow-right.svg'
import smslogo from '@/Images/sms.svg'
import groupname from '@/Images/Group1261152761.svg'
import content from '@/Images/Content.png'
import content2 from '@/Images/conten2.png'
import astauranut from '@/Images/astroanut.svg'
import featurediconlogo from '@/Images/Featuredicon.svg'
import featurediconlogo1 from '@/Images/Featuredicon1.svg'
import featurediconlogo2 from '@/Images/Featuredicon2.svg'
import featurediconlogo3 from '@/Images/Featuredicon3.svg'
import unrealisticglass from '@/Images/unrealisticglass.svg'
import Rectangle621 from '@/Images/Rectangle621.svg'
import astauranut2 from '@/Images/astraunaut2.svg'
import avatar from '@/Images/Avatar.svg'
import twitterlogo from '@/Images/twitter.svg'
import linkedinlogo from '@/Images/linkedin.svg'
import homelogo from '@/Images/Home.svg'
import frame2 from '@/Images/Frame2.png'

import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { useImageContext } from '@/contexts/Imagecontext/imageContext'

export default function Home() {
  const router = useRouter()
  const [activeLink, setActiveLink] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef()
  const { image } = useImageContext()

  const handlewaitlist = () => {
    router.push('/waitlist')
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <main className=" mx-auto  flex-col relative ">
      <div className="w-full lg:h-[810px] h-[450px] relative flex justify-center items-center  z-10">
        {isPlaying ? (
          <iframe
            ref={videoRef}
            className="absolute z-0 inset-0 w-full h-full object-cover"
            src="https://www.vidsplay.com/space-stars-free-stock-video/"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            className="absolute z-0 inset-0"
            alt="Background"
          />
        )}

        <div className="absolute bottom-0 w-full lg:w-[80%] px-2 py-[45px] z-20">
          <div className="flex flex-col justify-start items-start gap-[22px]">
            <div className="text-white text-[40px] lg:text-[65px] font-bold leading-tight lg:leading-[82px]">
              We Bring People to Space
            </div>
            <div className="text-center text-slate-300 text-lg lg:text-xl font-medium leading-7">
              Space Simulator using AR, and VR!
            </div>
          </div>
          <div className="sm:flex-row flex flex-col mt-2 justify-between w-full">
            <div>
              <div className="mt-2 sm:flex-row flex flex-col sm:w-full w-fit rounded-md shadow-sm">
                <div className="relative  flex flex-grow  focus-within:z-10">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Image src={smslogo} alt="smslogo"></Image>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block h-[50px] w-full text-white bg-transparent rounded-md rounded-l-md border-0 py-1.5 pl-10  ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  className="bg-transparent  w-fit rounded-md shadow border border-white  justify-center items-center inline-flex p-2.5 my-2 sm:my-0"
                  onClick={handlewaitlist}
                >
                  <span className="text-white text-base font-medium leading-normal text-center">
                    Join Waitlist
                  </span>
                  <Image src={arrowright} alt="arrowright" />
                </button>
              </div>
            </div>
            <div className="w-14 h-14 flex sm:justify-end" onClick={togglePlay}>
              <Image src={groupname} alt="groupname"></Image>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black relative">
        <Image
          src={content}
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
          alt="Background"
        />

        <div className="z-20 p-4 flex flex-col justify-center items-center gap-8">
          <button className="px-4 py-2 bg-transparent rounded-[200px] border-2 border-white border-opacity-10 backdrop-blur-[30px] justify-center items-center gap-2.5 inline-flex">
            <span className="text-center text-white text-sm font-medium leading-tight">
              Spaceverse
            </span>
          </button>
          <div className="text-center text-white text-xl md:text-4xl font-semibold leading-normal md:leading-[42px]">
            Your Gateway to Space
            <br />
            Exploration and Astrophysical Adventures!
          </div>
          <div className="text-center text-slate-300 text-base md:text-lg font-normal leading-relaxed">
            Are you ready to embark on an extraordinary journey through the
            cosmos?
          </div>
          <button
            className="bg=transparent rounded-md shadow border z-20 border-white justify-center items-center inline-flex p-2.5 my-2 sm:my-0"
            onClick={handlewaitlist}
          >
            <span className="text-white text-base font-medium leading-normal text-center">
              Join Waitlist
            </span>
            <Image src={arrowright}></Image>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative bg-black p-2 ">
        <Image
          src={content2}
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
          alt="Background"
        />

        <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-12 p-4 lg:p-0 z-10">
          {/* Content Section */}
          <div className="flex flex-col justify-center items-center w-full gap-8">
            {/* Title and Description */}
            <button className="px-4 py-2 bg-transparent rounded-[200px] border-2 border-white border-opacity-10 backdrop-blur-[30px] justify-center items-center gap-2.5 inline-flex">
              <span className="text-center text-white text-sm font-medium leading-tight">
                The Promise
              </span>
            </button>

            <div className="text-white text-3xl lg:text-4xl font-semibold leading-[42px] text-center">
              SpaceVerse: Beyond Leisure, A Universe of Learning
            </div>

            <div className="text-slate-300 text-lg font-normal leading-relaxed text-center">
              SpaceVerse is not just a place for leisure; it's a platform for
              learning, training, exploration, and experimentation...
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-12 p-4 lg:p-4 z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:max-w-6xl mx-auto">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex">
                  <div className="w-12 h-12 relative bg-violet-300 bg-opacity-5 rounded-lg border border-cyan-400">
                    <Image
                      src={featurediconlogo}
                      fill
                      alt="featurediconlogo"
                    ></Image>
                  </div>
                  <div className="h-[164px] flex-col justify-start items-start gap-2 flex">
                    <div className="text-white text-xl font-semibold leading-[30px]">
                      Learn
                    </div>
                    <div className="text-slate-300 text-sm font-normal leading-[21px]">
                      SpaceVerse offers an immersive learning experience,
                      blending curated content with interactive modules on space
                      science. Dive into topics from star life cycles to dark
                      matter in a captivating educational setting.
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex">
                  <div className="w-12 h-12 relative bg-violet-300 bg-opacity-5 rounded-lg border border-cyan-400">
                    <Image
                      src={featurediconlogo1}
                      fill
                      alt="featurediconlogo1"
                    ></Image>
                  </div>
                  <div className="h-[143px] flex-col justify-start items-start gap-2 flex">
                    <div className="text-white text-xl font-semibold leading-[30px]">
                      Train
                    </div>
                    <div className="text-slate-300 text-sm font-normal leading-[21px]">
                      Step into the world of astronaut training in SpaceVerse.
                      Undergo realistic space mission simulations, understanding
                      the physical and mental challenges of space travel with
                      expert guidance.
                    </div>
                  </div>
                </div>

                <div className="grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex">
                  <div className="w-12 h-12 relative bg-violet-300 bg-opacity-5 rounded-lg border border-cyan-400">
                    <Image
                      src={featurediconlogo2}
                      fill
                      alt="featurediconlogo2"
                    ></Image>
                  </div>
                  <div className="h-[143px] flex-col justify-start items-start gap-2 flex">
                    <div className="text-white text-xl font-semibold leading-[30px]">
                      Explore
                    </div>
                    <div className="text-slate-300 text-sm font-normal leading-[21px]">
                      Venture into the cosmos with SpaceVerse. From the Moon's
                      craters to Mars' dunes, embark on journeys across the
                      universe, witnessing its wonders firsthand.
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex">
                  <div className="w-12 h-12 relative bg-violet-300 bg-opacity-5 rounded-lg border border-cyan-400">
                    <Image
                      src={featurediconlogo3}
                      fill
                      alt="featurediconlogo"
                    ></Image>
                  </div>
                  <div className="h-[143px] flex-col justify-start items-start gap-2 flex">
                    <div className="text-white text-xl font-semibold leading-[30px]">
                      Experiment
                    </div>
                    <div className="text-slate-300 text-sm font-normal leading-[21px]">
                      Dive into SpaceVerse's cosmic laboratory. Engage with
                      astrophysical studies and advanced simulations, fostering
                      hands-on space research and discovery.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center items-center p-4 lg:p-0">
                <Image
                  src={astauranut}
                  width={581}
                  height={512}
                  layout="responsive"
                  objectFit="cover"
                  className="rounded-xl"
                  alt="Astronaut"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto justify-evenly items-center overflow-hidden gap-8 bg-black lg:flex lg:flex-row flex flex-col p-4">
        <div className="w-full lg:w-fit flex justify-center items-center p-4 lg:p-0 mx-auto sm:mx-0">
          <Image src={unrealisticglass} width={581} height={512} />
        </div>
        <div className=" flex-col items-start w-fit lg:gap-[13px] gap-8 inline-flex ">
          <button className="px-4 py-2 bg-transparent rounded-[200px] border-2 border-white border-opacity-10 backdrop-blur-[30px] justify-center items-center gap-2.5 inline-flex">
            <span className="text-center text-white text-sm font-medium leading-tight">
              Explore the Universe
            </span>
          </button>

          <div className="md:w-[580px] md:h-[281px] flex-col justify-start items-start gap-[21px] inline-flex">
            <div className="md:w-[580px] text-white md:text-4xl text-3xl font-semibold leading-[42px]">
              Journey Beyond Stars with SpaceVerse
            </div>
            <div className="md:w-[580px] text-slate-300 text-lg font-normal leading-relaxed">
              SpaceVerse is your passport to the universe, allowing you to
              traverse the vastness of space from the comfort of your own home.
              Walk on the surface of Mars, witness the birth of stars, interact
              with astronauts during a Moon landing, and delve into the
              mysteries of celestial phenomena like Black Holes, Dark Matter,
              Exoplanets, and more. The universe is at your fingertips, waiting
              to be explored.
            </div>
          </div>
          <button
            className="bg=transparent rounded-md mt-2 shadow border border-white justify-center items-center inline-flex p-2.5 my-2 sm:my-0"
            onClick={handlewaitlist}
          >
            <span className="text-white text-base font-medium leading-normal text-center">
              Join Waitlist
            </span>
            <Image src={arrowright}></Image>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto justify-evenly items-center overflow-hidden gap-8 bg-black lg:flex lg:flex-row flex flex-col p-4">
        <div className=" flex-col items-start w-fit lg:gap-[13px] gap-8 inline-flex ">
          <button className="px-4 py-2 bg-transparent rounded-[200px] border-2 border-white border-opacity-10 backdrop-blur-[30px] justify-center items-center gap-2.5 inline-flex">
            <span className="text-center text-white text-sm font-medium leading-tight">
              Immersive Experience
            </span>
          </button>

          <div className="md:w-[580px] md:h-[281px] flex-col justify-start items-start gap-[21px] inline-flex">
            <div className="md:w-[580px] text-white md:text-4xl text-3xl font-semibold leading-[42px]">
              Personalized Cosmic Journeys Powered by AI and VR
            </div>
            <div className="md:w-[580px] text-slate-300 text-lg font-normal leading-relaxed">
              Our space simulator, driven by AI and VR technology, delivers
              unparalleled immersion and realism. Every experience is tailored
              to your unique interests and needs, ensuring that you have a truly
              personalized journey through space. Whether you're a space
              enthusiast, a student of astrophysics, or simply curious about the
              cosmos, SpaceVerse has something incredible to offer.
            </div>
          </div>
          <button
            className="bg=transparent rounded-md shadow border border-white justify-center items-center inline-flex p-2.5 my-2 sm:my-0"
            onClick={handlewaitlist}
          >
            <span className="text-white text-base font-medium leading-normal text-center">
              Join Waitlist
            </span>
            <Image src={arrowright}></Image>
          </button>
        </div>
        <div className="w-full lg:w-fit justify-center flex items-center p-4 lg:p-0 mx-auto sm:mx-0">
          <Image src={Rectangle621} width={581} height={512} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto justify-evenly items-center overflow-hidden gap-8 bg-black lg:flex lg:flex-row flex flex-col p-4 ">
        <div className="w-full lg:w-fit justify-center flex items-center p-4 lg:p-0 mx-auto sm:mx-0">
          <Image src={astauranut2} width={581} height={512} alt="astauranut2" />
        </div>
        <div className=" flex-col items-start w-fit lg:gap-[13px] gap-8 inline-flex ">
          <button className="px-4 py-2 bg-transparent rounded-[200px] border-2 border-white border-opacity-10 backdrop-blur-[30px] justify-center items-center gap-2.5 inline-flex">
            <span className="text-center text-white text-sm font-medium leading-tight">
              Our Mission
            </span>
          </button>

          <div className="md:w-[580px] md:h-[281px] flex-col justify-start items-start gap-[21px] inline-flex">
            <div className="md:w-[580px] text-white md:text-4xl text-3xl font-semibold leading-[42px]">
              Bringing Space to You
            </div>
            <div className="md:w-[580px] text-slate-300 text-lg font-normal leading-relaxed">
              Our mission at SpaceVerse is simple: we bring the vast,
              awe-inspiring space to you. No longer do you need to dream of
              being an astronaut or rely on mere limited documentaries to delve
              and explore the universe. With SpaceVerse, you can effortlessly
              access the wonders of space anytime, anywhere, and share this
              unparalleled, incredible journey with friends, family, and fellow
              space enthusiasts.
            </div>
          </div>
          <button
            className="bg=transparent rounded-md shadow border border-white justify-center items-center inline-flex p-2.5 my-2 sm:my-0"
            onClick={handlewaitlist}
          >
            <span className="text-white text-base font-medium leading-normal text-center">
              Join Waitlist
            </span>
            <Image src={arrowright}></Image>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto justify-evenly items-center overflow-hidden gap-8 bg-black lg:flex lg:flex-row flex flex-col p-4">
        <div className=" flex-col items-start w-fit lg:gap-[13px] gap-8 inline-flex ">
          <button className="px-4 py-2 bg-transparent rounded-[200px] border-2 border-white border-opacity-10 backdrop-blur-[30px] justify-center items-center gap-2.5 inline-flex">
            <span className="text-center text-white text-sm font-medium leading-tight">
              About Us
            </span>
          </button>

          <div className="md:w-[580px] md:h-[281px] flex-col justify-start items-start gap-[21px] inline-flex">
            <div className="md:w-[580px] text-white md:text-4xl text-3xl font-semibold leading-[42px]">
              Meet the Cosmos Crafters
            </div>
            <div className="md:w-[580px] text-slate-300 text-lg font-normal leading-relaxed">
              Every facet of SpaceVerse resonates with our founder's vision and
              profound passion for the cosmos. From its intricate simulations to
              the immersive cosmic journeys, each element has been thoughtfully
              designed and curated. Dive into this universe, a masterpiece
              crafted by our singular 'Astral Architect,' endeavoring to make
              the wonders of space more accessible and closer to our souls.
            </div>
          </div>
          <button
            className="bg=transparent rounded-md shadow border border-white justify-center items-center inline-flex p-2.5 my-2 sm:my-0"
            onClick={handlewaitlist}
          >
            <span className="text-white text-base font-medium leading-normal text-center">
              Join Waitlist
            </span>
            <Image src={arrowright}></Image>
          </button>
        </div>
        <div className="xl:w-[635.63px] xl:h-[300px] justify-center items-center lg:gap-[21.37px] xl:flex-row flex flex-col md:w-full lg:ml-1">
          <Image src={avatar} alt="avatar"></Image>
          <div className="lg:w-auto md:w-[580px] flex-col justify-start items-center gap-[21px] inline-flex">
            <div className=" flex-col justify-start items-start gap-[3.59px] flex">
              <div className=" text-white text-lg font-medium capitalize leading-snug">
                Maria Bruna Moscatelli
              </div>
              <div className=" text-cyan-400 text-base font-medium leading-snug">
                Founder / CEO
              </div>
            </div>
            <div className=" text-slate-300 lg:text-sm font-normal leading-[21px]">
              Maria is a Space Engineer with a lifelong passion for space,
              dating back to her early years. She has worked as an AI
              specialist, contributing to a $300ARR space company from 2013 to
              2018, and co-founded a VR startup for astronauts.
            </div>
            <div className=" justify-start items-start gap-[17.96px] inline-flex">
              <div className="justify-center items-center flex">
                <Image src={twitterlogo} alt="twitterlogo"></Image>
              </div>
              <div className="justify-center items-center flex">
                <Image src={linkedinlogo} alt="twitterlogo"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
