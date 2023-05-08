import Logo from "@/public/assets/bolo.png"
import { Popover, Transition } from "@headlessui/react"
import Image from "next/image"
import Link from "next/link"
import { Fragment, useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { BsThreeDots } from "react-icons/bs"
import { FaBloggerB } from "react-icons/fa"
import { FcAddressBook, FcDepartment, FcIdea, FcNews } from "react-icons/fc"
import { RiTeamFill } from "react-icons/ri"
import { RxCross1 } from "react-icons/rx"

const NewNavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const solutions = [
    {
      name: "Find Companies",
      description: "Measure actions your users take",
      href: "/findCompany",
      icon: <FcDepartment className="text-3xl" />,
    },
    {
      name: "Your Team",
      description: "Create your own targeted content",
      href: "/team",
      icon: <RiTeamFill className="text-3xl text-cyan-500" />,
    },
    {
      name: "Blog",
      description: "Keep track of your growth",
      href: "/blog",
      icon: <FaBloggerB className="text-3xl text-blue-500" />,
    },
    {
      name: "Testimony",
      description: "Keep track of your growth",
      href: "/testimony",
      icon: <FcIdea className="text-3xl" />,
    },
    {
      name: "Contact",
      description: "Keep track of your growth",
      href: "/contact",
      icon: <FcAddressBook className="text-3xl" />,
    },
    {
      name: "Article",
      description: "Keep track of your growth",
      href: "/blog/article",
      icon: <FcNews className="text-3xl" />,
    },
  ]

  return (
    <header>
      <div className="mx-auto max-w-7xl px-8 md:px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/homePage">
            <Image src={Logo} width={40} height={40} alt={""} />
          </Link>
          {isOpen && (
            <div>
              <div
                className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm"
                onClick={toggleMenu}
              ></div>
              <div
                className="fixed inset-x-4 top-8 z-50 origin-top scale-100 rounded-3xl bg-white p-8 opacity-100 ring-1 ring-zinc-900/5"
                tabIndex={-1}
              >
                <div className="flex flex-row-reverse items-center justify-between">
                  <button
                    aria-label="Close menu"
                    className="-m-1 p-1"
                    type="button"
                    onClick={toggleMenu}
                    tabIndex={0}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6 text-zinc-500"
                    >
                      <path
                        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <h2 className="text-sm font-medium text-zinc-600">
                    Navigation
                  </h2>
                </div>
                <nav className="mt-6">
                  <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800">
                    <li>
                      <Link href="/HomePage" legacyBehavior>
                        <a className="block py-2">Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" legacyBehavior>
                        <a className="block py-2">About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/findJob" legacyBehavior>
                        <a className="block py-2">Find job</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/postJob" legacyBehavior>
                        <a className="block py-2">Post job</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/login" legacyBehavior>
                        <a className="block py-2 font-bold">Login</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/register" legacyBehavior>
                        <a className="block py-2 font-bold">
                          Create an account
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
          <div className="hidden font-semibold md:flex md:space-x-6">
            <Link href="/homePage">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/findJob">Find job</Link>
            <Link href="/postJob">Post job</Link>
            <Popover className="relative">
              <>
                <Popover.Button>
                  <BsThreeDots className="-mb-1" />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                        {solutions.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                              {item.icon}
                            </div>
                            <div className="ml-4">
                              <p className="font-semibold">{item.name}</p>
                              <p className="text-sm text-gray-500">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            </Popover>
          </div>
          <div className="hidden font-semibold md:flex md:space-x-6">
            <Link
              href="/login"
              className="rounded-2xl bg-blue-500 p-1.5 px-3 text-white transition hover:bg-blue-700"
            >
              Login
            </Link>
          </div>
          <button
            className="rounded-xl border-2 border-black p-1 text-2xl md:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? <RxCross1 /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default NewNavBar
