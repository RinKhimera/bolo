import Footer from "@/components/Footer"
import NavBar from "@/components/Navbar"
import AboutPic from "@/public/assets/about-us.png"
import Icon from "@/public/assets/icon.png"
import Person1 from "@/public/assets/person1.png"
import Person2 from "@/public/assets/person2.png"
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik"
import Head from "next/head"
import Image from "next/image"
import React from "react"
import { BsBuildings, BsTelephone } from "react-icons/bs"
import { CiClock1, CiMail } from "react-icons/ci"
import * as Yup from "yup"

interface MyFormValues {
  name: string
  email: string
  message: string
}

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .required("Please enter a valid company name")
    .min(5, "please enter at least 05 characters")
    .max(50, "You should not pass 50 characters"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter a valid email"),
  message: Yup.string()
    .required("Please enter a valid company name")
    .min(10, "please enter at least 03 characters")
    .max(50, "You should not pass 50 characters"),
})

const Contact = () => {
  const initialValues: MyFormValues = {
    name: "",
    email: "",
    message: "",
  }
  return (
    <div>
      <Head>
        <title>Contact Us | Bolo</title>
        <meta name="description" content="Bolo - Find your dream job" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions })
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }}
      >
        {({ errors, touched }) => (
          <>
            <Form>
              <main>
                <div
                  className="
       flex flex-col 
       gap-10 
       md:flex-row
            "
                >
                  <div className="flex-1">
                    <div className="mt-10 space-y-5 p-10">
                      <span className="text-3xl font-bold md:text-5xl">
                        Contact Us
                      </span>
                      <div className="h-5 w-5  animate-ping rounded-full bg-blue-500"></div>
                      <div>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Qui quibusdam nemo rem doloribus maxime quos totam
                        perspiciatis
                      </div>
                      <div>
                        <Field
                          id="name"
                          name="name"
                          className="
                  block w-full
                   rounded-md border border-slate-300
                    bg-white 
                    py-2 pl-9 pr-3 shadow-sm
                     placeholder:text-slate-400 focus:border-sky-500
                      focus:outline-none
                       focus:ring-1
                        focus:ring-sky-500 sm:text-sm
                "
                          placeholder="Email"
                          type="text"
                        />
                        {errors.name && touched.name ? (
                          <div className="p-1 font-semibold text-red-700">
                            {errors.name}
                          </div>
                        ) : null}
                        {/* <ErrorMessage name="name" /> */}
                      </div>
                      <div>
                        <Field
                          id="email"
                          name="email"
                          className="
                  block w-full
                   rounded-md border border-slate-300
                    bg-white 
                    py-2 pl-9 pr-3 shadow-sm
                     placeholder:text-slate-400 focus:border-sky-500
                      focus:outline-none
                       focus:ring-1
                        focus:ring-sky-500 sm:text-sm
                "
                          placeholder="Name"
                          type="text"
                        />
                        {errors.email && touched.email ? (
                          <div className="p-1 font-semibold text-red-700">
                            {errors.email}
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <textarea
                          className=" rows-6
                block w-full
                rounded-md border border-slate-300
                bg-white
                py-2 pl-9
                 pr-3 
                 placeholder:text-slate-400 
                  focus:border-sky-500
                       focus:ring-1
                       focus:ring-sky-500 sm:text-sm
                "
                          placeholder="Write your thoughts here..."
                        ></textarea>
                      </div>
                      <div className="flex w-full">
                        <div className="m-auto">
                          <button
                            className="
                  m-2
                  rounded-lg
                    bg-blue-700
                    px-5
                      py-2.5
                      text-sm 
                      font-medium
                        text-white hover:bg-blue-800 focus:outline-none focus:ring-4
                      focus:ring-blue-300
                  "
                          >
                            SEND
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-10 flex-1 bg-blue-500 ">
                    <div className="h-1/4 w-1/2 bg-white"></div>
                    <div
                      className="
              flex
              h-1/2 
              
              w-3/4 
              flex-col 
              space-y-5 
              bg-black 
              p-5
              text-white
              before:h-5 before:w-5 before:rounded-full before:bg-purple-900
            "
                    >
                      <div className="text-2xl font-semibold">Info</div>
                      <div className="flex space-x-4">
                        <div className="mt-2">
                          <CiMail />
                        </div>
                        <div className=""> amostinanfon17@gmail.com</div>
                      </div>
                      <div className="flex space-x-4">
                        <div className="mt-2">
                          <BsTelephone />
                        </div>
                        <div>+237 694 291 173</div>
                      </div>
                      <div className="flex space-x-4">
                        <div className="mt-2">
                          <BsBuildings />
                        </div>
                        <div>Douala Beedi Cameroun</div>
                      </div>
                      <div className="flex space-x-4">
                        <div className="mt-2">
                          <CiClock1 />{" "}
                        </div>
                        <div>06:00 - 18:00</div>
                      </div>
                    </div>
                    <div className="h-1/4 w-1/2 bg-white "></div>
                  </div>
                </div>
              </main>
            </Form>
          </>
        )}
      </Formik>
      <Footer />
    </div>
  )
}

export default Contact
