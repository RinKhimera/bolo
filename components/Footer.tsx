import Link from "next/link"
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <hr className="border-t-1 mb-4 border-gray-300" />
        <div className="flex flex-col-reverse gap-4 lg:flex lg:flex-row lg:justify-between">
          <div className="grid grid-cols-2 justify-items-center gap-5 sm:grid-cols-3">
            <div className="flex flex-col gap-2 font-semibold">
              <h1 className="mb-5 text-xl sm:text-2xl font-bold text-blue-600">
                Navigation
              </h1>
              <span>
                <Link
                  href="/findJob"
                  className="border-purple-500 hover:border-b-2"
                >
                  Find a job
                </Link>
              </span>
              <span>
                <Link
                  href="/postJob"
                  className="border-purple-500 hover:border-b-2"
                >
                  Post a job
                </Link>
              </span>
              <span>
                <Link
                  href="/findCompany"
                  className="border-purple-500 hover:border-b-2"
                >
                  Find companies
                </Link>
              </span>
              <span>
                <a href="#" className="border-purple-500 hover:border-b-2">
                  Carrier advice
                </a>
              </span>
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <h1 className="mb-5 text-xl sm:text-2xl font-bold text-blue-600">Company</h1>
              <span>
                <Link
                  href="/team"
                  className="border-purple-500 hover:border-b-2"
                >
                  The Team
                </Link>
              </span>
              <span>
                <Link
                  href="/about"
                  className="border-purple-500 hover:border-b-2"
                >
                  About Us
                </Link>
              </span>
              <span>
                <Link
                  href="/blog"
                  className="border-purple-500 hover:border-b-2"
                >
                  Blog
                </Link>
              </span>
              <span>
                <Link
                  href="/testimony"
                  className="border-purple-500 hover:border-b-2"
                >
                  Testimony
                </Link>
              </span>
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <h1 className="mb-5 text-xl sm:text-2xl font-bold text-blue-600">
                Resources
              </h1>
              <span>
                <a href="#" className="border-purple-500 hover:border-b-2">
                  Support
                </a>
              </span>
              <span>
                <Link
                  href="/contact"
                  className="border-purple-500 hover:border-b-2"
                >
                  Contact
                </Link>
              </span>
              <span>
                <a href="#" className="border-purple-500 hover:border-b-2">
                  Helpful Resource
                </a>
              </span>
              <span>
                <Link
                  href="/blog"
                  className="border-purple-500 hover:border-b-2"
                >
                  Blog
                </Link>
              </span>
            </div>
          </div>
          <div
            className="mx-auto grid w-full
                       max-w-xl justify-items-center lg:m-0 lg:max-w-md lg:justify-items-end"
          >
            <h1 className="text-2xl font-bold">Join Our Newsletter</h1>
            <p>Sign up for secrets, news and specials</p>
            <div className="flex w-full items-center justify-center pt-2 lg:justify-end lg:pt-0">
              <input
                type="text"
                placeholder="Email"
                className="w-1/2 rounded-l-2xl bg-slate-200 px-3 py-2.5 text-sm"
              />
              <button className="rounded-r-2xl bg-purple-500  p-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                Subscribe
              </button>
            </div>
            <div className="mt-5 flex gap-3 text-lg ">
              <a href="#" className="transition hover:text-blue-600">
                <FaFacebookF />
              </a>
              <a href="#" className="transition hover:text-blue-600">
                <FaLinkedinIn />
              </a>
              <a href="#" className="transition hover:text-blue-600">
                <FaInstagram />
              </a>
              <a href="#" className="transition hover:text-blue-600">
                <FaDribbble />
              </a>
              <a href="#" className="transition hover:text-blue-600">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-t-1 mt-4 border-gray-300" />
        <div className="my-2 text-center">
          <p>© 2023 Bolo. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
