import Footer from "@/components/Footer"
import NavBar from "@/components/Navbar"
import AboutPic from "@/public/assets/about-us.png"
import Icon from "@/public/assets/icon.png"
import Person1 from "@/public/assets/person1.png"
import Person2 from "@/public/assets/person2.png"
import Head from "next/head"
import Image from "next/image"
import React from "react"

import * as Yup from "yup"

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Team | Bolo</title>
        <meta name="description" content="Bolo - Find your dream job" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="">
        {/*partie haute notre equipe*/}
        <div className=" bg-gray-100">
          <div
            className="
                        mx-auto
                        w-1/2
                        py-5
                    "
          >
            <div
              className="
                        pb-5
                        text-center
                        text-3xl
                        text-slate-700
                        font-bold
                        sm:text-4xl
                        lg:text-6xl 
                    "
            >
              Notre Equipe
            </div>
            <div className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
              consectetur adipisicing elit.
            </div>
          </div>
          <div className=" flex justify-center gap-4 flex-wrap">
           <div className="bg-[url('/assets/person6.jpg')] w-[200px] h-[200px] bg-cover bg-center bg-no-repeat rounded-tl-[100px] rounded-br-[50px] border-r-blue-300 border-8"></div>
           <div className="bg-[url('/assets/person7.jpg')] w-[200px] h-[200px] bg-cover bg-center bg-no-repeat rounded-br-[50px] rounded-tr-[100px] border-r-purple-300 border-8"></div>
           <div className="bg-[url('/assets/person8.jpg')] w-[200px] h-[200px] bg-cover bg-center bg-no-repeat rounded-tl-[50px] rounded-br-[50px] border-l-blue-300 border-8"></div>
           <div className="bg-[url('/assets/person9.jpg')] w-[200px] h-[200px] bg-cover bg-center bg-no-repeat rounded-tr-[100px] rounded-br-[50px] rounded-bl-[50px] border-l-purple-300 border-8"></div>
          </div>
      
          <div className="bg-blue-100 flex justify-center flex-col lg:flex-row mt-10">
              <div className="flex-1 p-8 flex flex-col gap-8">
                <span className="font-bold text-4xl text-slate-700">Professionnal</span>
                <div className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusantium inventore, laborum assumenda debitis dolores dignissimos dolore! Pariatur vitae eligendi quas, molestias eius molestiae, harum quam obcaecati aut, quod tenetur?
                </div>
                <span className="font-bold text-2xl text-center text-slate-700">commitment</span>
                <div className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusantium inventore, laborum assumenda debitis dolores dignissimos dolore! Pariatur vitae eligendi quas, molestias eius molestiae, harum quam obcaecati aut, quod tenetur?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusantium inventore, laborum assumenda debitis dolores dignissimos dolore! Pariatur vitae eligendi quas, molestias eius molestiae, harum quam obcaecati aut, quod tenetur?
                </div>
              <div className="flex justify-center mt-10">
                <button className="bg-black p-2 text-white rounded-xl hover:bg-gray-800 w-1/3 active:bg-gray-600">MORE</button>
              </div>
              </div>
              <div className="flex-1 flex flex-wrap justify-center gap-4 py-4">
                <div className="
                  w-[200px] h-[200px] 
                  bg-[url(/assets/person10.jpg)]
                  bg-cover bg-center bg-no-repeat
                "></div>             
                <div className="
                  w-[200px] h-[200px] 
                  bg-[url(/assets/person7.jpg)]
                  bg-cover bg-center bg-no-repeat
                "></div>             
                <div className="
                  w-[200px] h-[200px] 
                  bg-[url(/assets/person9.jpg)]
                  bg-cover bg-center bg-no-repeat
                "></div>             
                <div className="
                  w-[200px] h-[200px] 
                  bg-[url(/assets/person8.jpg)]
                  bg-cover bg-center bg-no-repeat
                "></div>             
                <div className="
                  w-[200px] h-[200px] 
                  bg-[url(/assets/person6.jpg)]
                  bg-cover bg-center bg-no-repeat
                "></div>             
              </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Contact
