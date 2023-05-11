import Footer from "@/components/Footer"
import NavBar from "@/components/Navbar"
import AboutPic from "@/public/assets/about-us.png"
import Icon from "@/public/assets/icon.png"
import Person1 from "@/public/assets/person1.png"
import Person2 from "@/public/assets/person2.png"
import Head from "next/head"
import Image from "next/image"


const About = () => {
  return (
    <div>
      <Head>
        <title>About | Bolo</title>
        <meta name="description" content="Bolo - Find your dream job" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="mx-auto mb-20  px-5 ">
        <div className=" relative grid gap-5 rounded-2xl bg-slate-50">
          <h3 className="text-center text-5xl text-gray-700 font-bold tracking-tight py-12">
            We&apos;re changing the whole game
          </h3>
          <div className="flex items-center justify-center gap-5">
            <a
              href="#"
              className="w-36 rounded-full bg-black p-3 px-6
                         text-center text-sm font-bold text-white lg:w-52 lg:text-base"
            >
              Get Started
            </a>
            <a
              href="#"
              className="w-36 rounded-full border border-black bg-slate-200 
                       p-3 px-6 text-center text-sm font-bold text-black lg:w-52 lg:text-base"
            >
              View Pricing
            </a>
          </div>
          <div className="mx-5 flex justify-center">
            <Image
              src={AboutPic}
              width={500}
              height={500}
              alt={""}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="mb-20 my-14 flex flex-col gap-5 px-5 md:flex-row md:gap-10 md:px-10">
          <div className="flex basis-1/2 flex-col justify-between gap-10">
            <div>
              <h1 className="text-2xl font-bold text-green-400">OUR STORY</h1>
              <h2 className="text-2xl font-bold">
                We&apos;re building the economic infrastructure for the
                internet. Businesses of every size
              </h2>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <Image src={Icon} alt={""} height={150} width={150} />
              </div>
              <div className="text-lg text-zinc-600">
                A living place for curiosity and collaboration, meeting and
                meaning. The heart of a creative community
              </div>
            </div>
          </div>
          <div className="flex basis-1/2 flex-col gap-5">
            <div className="flex gap-6">
              <div className="text-2xl font-semibold">01.</div>
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold">
                  6 years of intense research
                </div>
                <div className="text-sm leading-relaxed text-zinc-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit, autem! Velit, assumenda enim iste laudantium asperiores
                  impedit.
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="text-2xl font-semibold">02.</div>
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold">Audience segmentation</div>
                <div className="text-sm leading-relaxed text-zinc-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci dicta quasi ab possimus! consectetur adipisicing
                  elit.
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="text-2xl font-semibold">03.</div>
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold">Contact monotoring</div>
                <div className="text-sm leading-relaxed text-zinc-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero deserunt iure fugiat debitis quaerat.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center gap-5 px-5 md:flex-row md:gap-14 md:px-10">
          <div className="flex basis-1/2 flex-col items-center justify-evenly gap-5 md:items-end">
            <div className="text-5xl font-bold">Our Mission</div>
            <div className="text-center text-sm leading-relaxed text-zinc-600 md:text-end">
              We&apos;re building economic infrastructure for the internet
              Businesses of every size, be it new startups or public compagnies,
              use our software to accept payments and manage their businesses
              online.
            </div>
            <div className="flex gap-2 md:gap-10">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold md:text-4xl">94%</div>
                <div className="text-center text-xs">CLIENT RETENTION</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold md:text-4xl">70M+</div>
                <div className="text-center text-xs">EMAIL PER MONTH</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold md:text-4xl">10K+</div>
                <div className="text-center text-xs">MONTHLY CAMPAIGNS</div>
              </div>
            </div>
          </div>
          <div className="relative left-20 flex w-full max-w-sm basis-1/2 justify-center rounded-3xl bg-slate-200">
            <Image src={Person1} alt={""} height={500} width={500} />
          </div>
        </div>
        <div className="my-14 flex flex-col-reverse items-center gap-5 px-5 md:flex-row-reverse md:gap-14 md:px-10">
          <div className="flex basis-1/2 flex-col items-center justify-evenly gap-5 md:items-start">
            <div className="text-5xl font-bold">Our Vision</div>
            <div className="text-center text-sm leading-relaxed text-zinc-500 md:text-start">
              We&apos;re building economic infrastructure for the internet
              Businesses of every size, be it new startups or public compagnies,
              use our software to accept payments and manage their businesses
              online.
            </div>
            <div className="flex gap-2 md:gap-10">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold md:text-4xl">94%</div>
                <div className="text-center text-xs">CLIENT RETENTION</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold md:text-4xl">70M+</div>
                <div className="text-center text-xs">EMAIL PER MONTH</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold md:text-4xl">10K+</div>
                <div className="text-center text-xs">MONTHLY CAMPAIGNS</div>
              </div>
            </div>
          </div>
          <div className="relative right-20 flex w-full max-w-sm basis-1/2 justify-center rounded-3xl bg-slate-200">
            <Image src={Person2} alt={""} height={170} width={170} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default About
