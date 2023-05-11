import Input from "@/components/Input"
import bgImage from "@/public/assets/bg.jpg"
import logo from "@/public/assets/bolo.png"
import google from "@/public/assets/google.svg"
import linkedin from "@/public/assets/linkedin.svg"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci"
import {
  HiOutlineArrowLongLeft,
} from "react-icons/hi2"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div>
      <Head>
        <title>Sign In | Bolo</title>
        <meta name="description" content="Bolo - Find your dream job" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen lg:flex lg:flex-row">
        <div className="lg:basis-1/2 flex min-h-screen flex-col justify-center lg:w-auto">
          <Link href="/homePage">
            <HiOutlineArrowLongLeft className=" relative bottom-1 left-4 text-3xl text-rose-500" />
            <p className="relative bottom-8 left-12 text-1xl text-rose-500"> Back to the Home page </p>
          </Link>
          <form
            action="#"
            method="POST"
            className="relative mx-auto w-full max-w-lg rounded-lg p-5 lg:max-w-md"
          >
            <div className="flex justify-center">
              <Link href="/">
                <Image src={logo} width={75} height={75} alt={""} />
              </Link>
            </div>
            <div className="grid gap-y-4">
              <div>
                <h1 className="text:base text-center text-4xl font-bold">
                  Login
                </h1>
              </div>
              <div>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e: any) => setPassword(e.target.value)}
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-blue-600 px-3.5
                             py-2.5 text-center text-lg font-semibold text-white
                             shadow-sm transition hover:bg-blue-700"
                >
                  Sign In
                </button>
              </div>
              <div>
                <p className="text-center font-semibold">Or</p>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center
                             rounded-md px-3.5 py-2 font-semibold text-black shadow-sm ring-1 ring-gray-300 transition hover:bg-slate-300"
                >
                  <Image
                    src={linkedin}
                    alt={""}
                    width={100}
                    height={100}
                    className="-mr-2 h-7 w-7"
                  />
                  <p className="flex-grow text-sm md:text-base lg:text-lg">
                    Sign in with LinkedIn
                  </p>
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center 
                             rounded-md px-3.5 py-2 font-semibold text-black shadow-sm ring-1 ring-gray-300 transition hover:bg-slate-300"
                >
                  <Image src={google} alt={""} className="-mr-2 h-7 w-7" />
                  {/* <p className="flex-grow text-center text-lg"> */}
                  <p className="flex-grow text-sm md:text-base lg:text-lg">
                    Sign in with Google
                  </p>
                </button>
              </div>
              <div className="grid gap-2 pt-6 text-center font-semibold">
                <p>
                  Don&apos;t have an account?{" "}
                  <Link href="/register" legacyBehavior>
                    <a className="text-blue-600 hover:underline">Sign up</a>
                  </Link>
                </p>
                <p className="cursor-pointer text-blue-600 hover:underline">
                  Forgot your password?
                </p>
              </div>
            </div>
          </form>
        </div>
        <div
          className="lg:basis-1/2 hidden bg-cover lg:block"
          style={{
            backgroundImage: `url(${bgImage.src})`,
          }}
        >
          <div className="flex h-full flex-col items-center justify-between py-10 text-white">
            <div className="h-24 bg-red-100 text-5xl"></div>
            <div className=" px-16 text-5xl font-semibold leading-tight">
              “We&apos;ve been using Bolo to kick start every new project and
              can&apos;t imagine working without it.”
            </div>
            <div className="flex w-full items-center justify-between px-16">
              <div className="flex flex-col">
                <div className="pb-5 text-3xl font-semibold">Pokam Samuel</div>
                <div className="text-xl font-semibold">Frontend Developer</div>
                <div className="text-xl">Beyond Technologies</div>
              </div>
              <div className="flex h-1/2 items-center gap-8 pt-10 text-6xl">
                <button>
                  <CiCircleChevLeft />
                </button>
                <button>
                  <CiCircleChevRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn
