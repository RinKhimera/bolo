import Head from "next/head"
import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "@/components/cube"
import {
  FcAdvertising,
  FcBriefcase,
  FcConferenceCall,
  FcCustomerSupport,
  FcDepartment,
  FcDoughnutChart,
  FcFolder,
  FcTemplate,
} from "react-icons/fc"
import {
  HiArrowDownTray,
  HiBriefcase,
  HiChartPie,
  HiCommandLine,
  HiFolder,
  HiMegaphone,
  HiNewspaper,
  HiOutlineArrowLongRight,
  HiUserGroup,
} from "react-icons/hi2"
import Footer from "../components/Footer"
import NavBar from "../components/Navbar"


export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | Bolo</title>
        <meta name="description" content="Bolo - Find your dream job" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="bg-slate-50">
        <div>
          {/* <div className="grid grid-cols-2 max-w-[1000px] mx-auto"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-[900px] mx-auto">
            <div className="text-center m-auto">
              <h3 className="py-12 text-4xl font-bold tracking-tight text-gray-700 sm:text-5xl lg:text-6xl">
                One Platform <br />
                Many <span className="text-blue-400"> Solutions </span>
              </h3>
            </div>
            <div className="mt-[-30px] md:mt-0">
              <Canvas camera={{ position: [5, 5, 5], fov: 20 }}>
                <Suspense fallback={null}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[3, 2, 1]} />
                  <Cube />
                  <OrbitControls enableZoom={true} autoRotate />
                </Suspense>
              </Canvas>
            </div>
          </div>
          <div className="py-16">
            <div className="mx-auto max-w-7xl px-2 md:px-2">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 xl:gap-6">
                <div className="group flex cursor-pointer flex-col rounded-xl border border-gray-500/10 bg-white px-5 py-8 shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                  <div className="flex-wrap text-left">
                    <FcAdvertising className="text-6xl text-blue-500 group-hover:text-red-500" />
                    <h4 className="mb-1 mt-3 text-left text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                      Marketing & Communication
                    </h4>
                  </div>
                  <p className="mt-5 flex gap-24 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                    237 Jobs Available{" "}
                    <HiOutlineArrowLongRight className="animate-bounce text-2xl text-rose-500" />
                  </p>
                </div>

                <div className="group flex cursor-pointer  flex-col rounded-xl border border-gray-500/10 bg-white px-5 py-8 text-left shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                  <div className="flex-wrap">
                    <FcBriefcase className="text-6xl text-blue-500 group-hover:text-white" />
                    <h4 className="mb-1 mt-3 text-left text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                      Buisiness & Consulting
                    </h4>
                  </div>
                  <p className="mt-5 flex gap-24 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                    237 Jobs Available{" "}
                    <HiOutlineArrowLongRight className="animate-bounce text-2xl text-rose-500" />
                  </p>
                </div>

                <div className="group flex cursor-pointer flex-col rounded-xl border border-gray-500/10 bg-white px-5 py-8 shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                  <div className="flex-wrap text-left">
                    <FcTemplate className="text-6xl text-blue-500 group-hover:text-green-500" />
                    <h4 className="mb-1 mt-3 text-left text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                      Design & Development
                    </h4>
                  </div>
                  <p className="mt-5 flex gap-24 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                    237 Jobs Available{" "}
                    <HiOutlineArrowLongRight className="animate-bounce text-2xl text-rose-500" />
                  </p>
                </div>

                <div className="group flex cursor-pointer flex-col rounded-xl border border-gray-500/10 bg-white px-5 py-8 shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                  <div className="flex-wrap text-left">
                    <FcConferenceCall className="text-6xl text-blue-500 group-hover:text-white" />
                    <h4 className="mb-1 mt-3 text-left text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                      Human Research & Development
                    </h4>
                  </div>
                  <p className="mt-5 flex gap-24 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                    237 Jobs Available{" "}
                    <HiOutlineArrowLongRight className="animate-bounce text-2xl text-rose-500" />
                  </p>
                </div>

                <div className="group flex cursor-pointer flex-col rounded-xl border border-gray-500/10 bg-white px-5 py-8 shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                  <div className="flex-wrap text-left">
                    <FcDoughnutChart className="text-6xl text-blue-500 group-hover:text-white" />
                    <h4 className="mb-1 mt-3 text-left text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                      Finance Management
                    </h4>
                  </div>
                  <p className="mt-5 flex gap-24 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                    237 Jobs Available{" "}
                    <HiOutlineArrowLongRight className="animate-bounce text-2xl text-rose-500" />
                  </p>
                </div>

                <div className="group flex cursor-pointer flex-col rounded-xl border border-gray-500/10 bg-white px-5 py-8 shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                  <div className="flex-wrap text-left">
                    <FcDepartment className="text-6xl text-blue-500 group-hover:text-white" />
                    <h4 className="mb-1 mt-3 text-left text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                      Government Jobs
                    </h4>
                  </div>
                  <p className="mt-5 flex gap-24 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                    237 Jobs Available{" "}
                    <HiOutlineArrowLongRight className="animate-bounce text-2xl text-rose-500" />
                  </p>
                </div>

                <div className="group flex cursor-pointer flex-col rounded-xl border border-gray-500/10 bg-white px-5 py-8 shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                  <div className="flex-wrap text-left">
                    <FcCustomerSupport className="text-6xl text-blue-500 group-hover:text-white" />
                    <h4 className="mb-1 mt-3 text-left text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                      Customer Support Care
                    </h4>
                  </div>
                  <p className="mt-5 flex gap-24 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                    237 Jobs Available{" "}
                    <HiOutlineArrowLongRight className="animate-bounce text-2xl text-rose-500" />
                  </p>
                </div>

                <div className="group flex cursor-pointer flex-col rounded-xl border border-gray-500/10 bg-white px-5 py-8 shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                  <div className="flex-wrap text-left">
                    <FcFolder className="text-6xl text-blue-500 group-hover:text-white" />
                    <h4 className="mb-1 mt-3 text-left text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                      Project Management
                    </h4>
                  </div>
                  <p className="mt-5 flex gap-24 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                    237 Jobs Available{" "}
                    <HiOutlineArrowLongRight className="animate-bounce text-2xl text-rose-500" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mx-auto max-w-7xl px-8 md:px-6">
            <div className="text-center">
              <h3 className="py-12 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Featured Job Circulars
              </h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
              <div className="w-full duration-200 hover:scale-95">
                <div className="max-h-52 w-full overflow-hidden rounded-t-xl">
                  <img 
                  src="/assets/person1.png" 
                  alt="ui" 
                  className="w-full"/>
                </div>
                <div className="rounded-b-xl px-5 pb-5 pt-3 shadow-md shadow-blue-500/10">
                  <div className="">
                    <a
                      href="#"
                      className="mr-2 rounded-md bg-blue-50 px-3 py-1 text-sm text-slate-600"
                    >
                      Web Programming
                    </a>
                    <a
                      href="#"
                      className="mr-2 rounded-md bg-blue-50 px-3 py-1 text-sm text-slate-600"
                    >
                      Web Design
                    </a>
                    <a
                      href="#"
                      className="block pt-4 font-medium capitalize text-slate-800"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Consequat nunc ac a magna at elementum.
                    </a>
                  </div>
                  <hr className="my-4 border-slate-100" />
                  <div className="flex">
                    <img
                      src="/assets/person6.png"
                      alt="ui"
                      className="mr-3 h-10 w-10 rounded-full object-cover"
                    />
                    <p className="text-sm font-semibold capitalize text-blue-500">
                      Wilson{" "}
                      <span className="block text-xs text-purple-400">
                        web designer
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full duration-200 hover:scale-95">
                <div className="max-h-52 w-full overflow-hidden rounded-t-xl">
                  <img src="/assets/person6.png" alt="ui" className="w-full" />
                </div>
                <div className="rounded-b-xl px-5 pb-5 pt-3 shadow-md shadow-blue-500/10">
                  <div className="">
                    <a
                      href="#"
                      className="mr-2 rounded-md bg-blue-50 px-3 py-1 text-sm text-slate-600"
                    >
                      Web Master
                    </a>
                    <a
                      href="#"
                      className="block pt-4 font-medium capitalize text-slate-800"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Consequat nunc ac a magna at elementum.
                    </a>
                  </div>
                  <hr className="my-4 border-slate-100" />
                  <div className="flex">
                    <img
                      src="/assets/person1.png"
                      alt="ui"
                      className="mr-3 h-10 w-10 rounded-full object-cover"
                    />
                    <p className="text-sm font-semibold capitalize text-blue-500">
                      Penpen{" "}
                      <span className="block text-xs text-purple-400">
                        Front developer
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full duration-200 hover:scale-95">
                <div className="max-h-52 w-full overflow-hidden rounded-t-xl">
                  <img
                    src="/assets/person-11.png"
                    alt="ui"
                    className="w-full"
                  />
                </div>
                <div className="rounded-b-xl px-5 pb-5 pt-3 shadow-md shadow-blue-500/10">
                  <div className="">
                    <a
                      href="#"
                      className="mr-2 rounded-md bg-blue-50 px-3 py-1 text-sm text-slate-600"
                    >
                      Web Programming
                    </a>
                    <a
                      href="#"
                      className="mr-2 rounded-md bg-blue-50 px-3 py-1 text-sm text-slate-600"
                    >
                      Design
                    </a>
                    <a
                      href="#"
                      className="block pt-4 font-medium capitalize text-slate-800"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Consequat nunc ac a magna at elementum.
                    </a>
                  </div>
                  <hr className="my-4 border-slate-100" />
                  <div className="flex">
                    <img
                      src="/assets/person2.png"
                      alt="ui"
                      className="mr-3 h-10 w-10 rounded-full object-cover"
                    />
                    <p className="text-sm font-semibold capitalize text-blue-500">
                      Samuel{" "}
                      <span className="block text-xs text-purple-400">
                        Back developer
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 items-center justify-center">
              <button className="flex items-center justify-center gap-4 rounded-[85px] border-2 px-9 py-2 text-center text-lg font-semibold capitalize text-blue-500  hover:bg-blue-900">
                Fin
              </button>
            </div>
          </div>
          s
        </div>
        <div className="py-10">
          <div className="m-8 pb-10">
            <div className="mx-auto max-w-7xl rounded-[25px] bg-blue-500 px-8 md:px-6">
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:gap-10">
                <div className="h-full w-full">
                  <img
                    src="/assets/person-12.png"
                    alt="upload"
                    className="py-10"
                  />
                </div>
                <div className="items-center justify-center text-left">
                  <h1 className="items-center justify-center text-left text-5xl font-semibold text-white sm:mt-[50px] md:mt-[100px]">
                    Get Matched The Most Valuable Jobs, Just Drop Your CV at
                    Staffing Solutions
                  </h1>
                  <p className="mt-5 text-justify text-sm text-white">
                    In the subject line of email, write your name, the
                    description of the position you want to apply
                  </p>
                  <button className="mt-3 flex flex-row items-center justify-center gap-2 rounded-lg bg-white px-2 py-2 text-center text-blue-500 sm:mb-9">
                    {" "}
                    <HiArrowDownTray /> Upload Your CV{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
