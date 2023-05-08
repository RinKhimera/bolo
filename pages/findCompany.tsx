import Footer from "@/components/Footer"
import HeroFindCompagnie from "@/components/HeroFindCompagnie"
import NavBar from "@/components/Navbar"
import Image from "next/image"
import eneo from "/public/assets/eneo.png"
import azur from "/public/assets/azur.png"
import alucam from "/public/assets/alucam.png"
import chococam from "/public/assets/chococam.png"
import ucb from "/public/assets/ucb.jpg"
import atlantique from "/public/assets/atlantique.png"
import beac from "/public/assets/beac.png"
import falaise from "/public/assets/falaise.png"

const FindCompagnie = () => {
  return (
    <>
      <NavBar />
      <HeroFindCompagnie />
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-8 md:px-6">
          <div className="mb-5 mt-5 py-5 sm:mb-10">
            <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">
              Recommanded companies
            </h1>
            <h1 className="text-xs font-bold text-slate-300">
              Based on your profile, company preference, and recend activity
            </h1>
          </div>
          <div className="mx-auto max-w-7xl px-2 md:px-2">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 xl:gap-6">
              <div className="group flex cursor-pointer flex-col gap-y-5 rounded-xl border border-gray-500/10 bg-white px-5 py-8 shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                <div className="flex-wrap text-left">
                  <div className="flex grid-cols-2 justify-between gap-8">
                    <div>
                      <Image src={eneo} alt="eneo" width={45} />
                    </div>
                    <div>
                      <a
                        href="#"
                        className="mr-2 rounded-full bg-slate-200 px-3 py-1 text-sm text-blue-600"
                      >
                        3 Jobs
                      </a>
                    </div>
                  </div>
                  <h4 className="mb-1 mt-3 text-left text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                    Eneo
                  </h4>
                </div>
                <p className="mt-5 flex gap-24 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  autem,
                </p>
                <a
                  href="#"
                  className="mr-2 w-2/5 rounded-full border-[1px] border-orange-400 px-3 py-1 text-sm text-orange-600"
                >
                  Services
                </a>
              </div>
              <div className="group flex cursor-pointer flex-col gap-y-5 rounded-xl border border-gray-500/10 bg-white px-5 py-8 shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                <div className="flex-wrap text-left">
                  <div className="flex grid-cols-2 justify-between gap-8">
                    <div>
                      <Image src={azur} alt="eneo" width={45} />
                    </div>
                    <div>
                      <a
                        href="#"
                        className="mr-2 rounded-full bg-slate-200 px-3 py-1 text-sm text-blue-600"
                      >
                        3 Jobs
                      </a>
                    </div>
                  </div>
                  <h4 className="mb-1 mt-3 text-left text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                    Azur
                  </h4>
                </div>
                <p className="mt-5 flex gap-24 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  autem,
                </p>
                <a
                  href="#"
                  className="mr-2 w-2/5 rounded-full border-[1px] border-orange-400 px-3 py-1 text-sm text-orange-600"
                >
                  Services
                </a>
              </div>
              <div className="group flex cursor-pointer flex-col gap-y-5 rounded-xl border border-gray-500/10 bg-white px-5 py-8 shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                <div className="flex-wrap text-left">
                  <div className="flex grid-cols-2 justify-between gap-8">
                    <div>
                      <Image src={chococam} alt="eneo" width={75} />
                    </div>
                    <div>
                      <a
                        href="#"
                        className="mr-2 rounded-full bg-slate-200 px-3 py-1 text-sm text-blue-600"
                      >
                        3 Jobs
                      </a>
                    </div>
                  </div>
                  <h4 className="mb-1 mt-3 text-left text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                    Chococam
                  </h4>
                </div>
                <p className="mt-5 flex gap-24 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  autem,
                </p>
                <a
                  href="#"
                  className="mr-2 w-2/5 rounded-full border-[1px] border-orange-400 px-3 py-1 text-sm text-orange-600"
                >
                  Services
                </a>
              </div>
              <div className="group flex cursor-pointer flex-col gap-y-5 rounded-xl border border-gray-500/10 bg-white px-5 py-8 shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                <div className="flex-wrap text-left">
                  <div className="flex grid-cols-2 justify-between gap-8">
                    <div>
                      <Image src={alucam} alt="eneo" width={75} />
                    </div>
                    <div>
                      <a
                        href="#"
                        className="mr-2 rounded-full bg-slate-200 px-3 py-1 text-sm text-blue-600"
                      >
                        3 Jobs
                      </a>
                    </div>
                  </div>
                  <h4 className="mb-1 mt-3 text-left text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                    Alucam
                  </h4>
                </div>
                <p className="mt-5 flex gap-24 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  autem,
                </p>
                <a
                  href="#"
                  className="mr-2 w-2/5 rounded-full border-[1px] border-orange-400 px-3 py-1 text-sm text-orange-600"
                >
                  Services
                </a>
              </div>
              <div className="group flex cursor-pointer flex-col gap-y-5 rounded-xl border border-gray-500/10 bg-white px-5 py-8 shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                <div className="flex-wrap text-left">
                  <div className="flex grid-cols-2 justify-between gap-8">
                    <div>
                      <Image src={ucb} alt="eneo" width={45} />
                    </div>
                    <div>
                      <a
                        href="#"
                        className="mr-2 rounded-full bg-slate-200 px-3 py-1 text-sm text-blue-600"
                      >
                        3 Jobs
                      </a>
                    </div>
                  </div>
                  <h4 className="mb-1 mt-3 text-left text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                    UCB Cameroun
                  </h4>
                </div>
                <p className="mt-5 flex gap-24 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  autem,
                </p>
                <a
                  href="#"
                  className="mr-2 w-2/5 rounded-full border-[1px] border-orange-400 px-3 py-1 text-sm text-orange-600"
                >
                  Services
                </a>
              </div>
              <div className="group flex cursor-pointer flex-col gap-y-5 rounded-xl border border-gray-500/10 bg-white px-5 py-8 shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                <div className="flex-wrap text-left">
                  <div className="flex grid-cols-2 justify-between gap-8">
                    <div>
                      <Image src={falaise} alt="eneo" width={45} />
                    </div>
                    <div>
                      <a
                        href="#"
                        className="mr-2 rounded-full bg-slate-200 px-3 py-1 text-sm text-blue-600"
                      >
                        3 Jobs
                      </a>
                    </div>
                  </div>
                  <h4 className="mb-1 mt-3 text-left text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                    Hôtel la falaise
                  </h4>
                </div>
                <p className="mt-5 flex gap-24 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  autem,
                </p>
                <a
                  href="#"
                  className="mr-2 w-2/5 rounded-full border-[1px] border-orange-400 px-3 py-1 text-sm text-orange-600"
                >
                  Services
                </a>
              </div>
              <div className="group flex cursor-pointer flex-col gap-y-5 rounded-xl border border-gray-500/10 bg-white px-5 py-8 shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                <div className="flex-wrap text-left">
                  <div className="flex grid-cols-2 justify-between gap-8">
                    <div>
                      <Image src={beac} alt="eneo" width={45} />
                    </div>
                    <div>
                      <a
                        href="#"
                        className="mr-2 rounded-full bg-slate-200 px-3 py-1 text-sm text-blue-600"
                      >
                        3 Jobs
                      </a>
                    </div>
                  </div>
                  <h4 className="mb-1 mt-3 text-left text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                    beac
                  </h4>
                </div>
                <p className="mt-5 flex gap-24 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  autem,
                </p>
                <a
                  href="#"
                  className="mr-2 w-2/5 rounded-full border-[1px] border-orange-400 px-3 py-1 text-sm text-orange-600"
                >
                  Services
                </a>
              </div>
              <div className="group flex cursor-pointer flex-col gap-y-5 rounded-xl border border-gray-500/10 bg-white px-5 py-8 shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                <div className="flex-wrap text-left">
                  <div className="flex grid-cols-2 justify-between gap-8">
                    <div>
                      <Image src={atlantique} alt="eneo" width={75} />
                    </div>
                    <div>
                      <a
                        href="#"
                        className="mr-2 rounded-full bg-slate-200 px-3 py-1 text-sm text-blue-600"
                      >
                        3 Jobs
                      </a>
                    </div>
                  </div>
                  <h4 className="mb-1 mt-3 text-left text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                    atlantique assurance
                  </h4>
                </div>
                <p className="mt-5 flex gap-24 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  autem,
                </p>
                <a
                  href="#"
                  className="mr-2 w-2/5 rounded-full border-[1px] border-orange-400 px-3 py-1 text-sm text-orange-600"
                >
                  Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default FindCompagnie
