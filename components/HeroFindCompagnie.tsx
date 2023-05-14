import { BiSearch } from "react-icons/bi";
import { FaPeriscope } from "react-icons/fa";



const HeroFindCompagnie = () => {
  return (
    <>
      <div
        className="
          mx-auto 
          h-[400px]
          justify-center
          bg-[url('/assets/bgc.jpg')] 
          bg-cover
          text-center
        "
      >
        {/* <div
          className="
            py-12
            text-4xl
            font-bold
            lg:py-8
          "
        >
          Find your{" "}
          <span className="text-blue-500/50 underline"> dream company </span>
        </div>

        <div className="text-md">
          Find the dream compagnies, you dream work for
        </div>

        <div className="h-[100px]">
        <div
            className="
            flex
            bg-white
            shadow-md
            items-center
            justify-center
            w-1/2
            m-auto
            h-16
            mt-8 
            rounded-lg
            space-x-4

            "
          >
            <div
              className="
                flex 
                gap-3
                bg-green-800
              "
            >
              <BiSearch className="text-slate ml-3 mt-2 text-3xl" />
              <input
                type="text"
                name="category"
                placeholder="Company name or keyword"
                className="text-md h-9 w-1/2 border-b-[1px] border-b-slate-500 text-slate-500 outline-none sm:text-xs"
              />
            </div>
            <div className="flex h-9 border-l-[1px] border-l-slate-500"></div>
            <div
              className="
                flex 
                gap-3
                bg-red-800
              "
            >
              <FaPeriscope className="text-slate mt-2 text-3xl" />
              <input
                type="text"
                name="category"
                placeholder="Florance, Italy"
                className="text-md h-9 border-b-[1px] 
                border-b-slate-500 text-slate-500 outline-none 
                sm:text-xs w-1/2"
              />
            </div> */}
            {/* <div
              className="
                mr-2.5 
                flex
                gap-3
                rounded-md
                bg-blue-500
                px-8
                py-2
                text-white
              "
            >
              Search
            </div> */}
            <div
              className="
                text-2xl
                font-bold
                py-8
                md:text-4xl
              "
            >
              Find your{" "}
              <span className="text-blue-500/50 underline"> 
                dream company 
              </span>
            </div>
            <div className="
                h-16
              bg-green-700
                w-3/4
                flex
                justify-center
                mx-auto
            ">
                  <div className="bg-white sm:w-0">2</div>
                  <div className="bg-red-900 w-full">1</div>
            </div>
          </div>

          {/* <div className="text-md flex items-start justify-start text-slate-600 mt-2  ">
            <p>Popular : Twitter, Apple, Facebook, Microsoft</p>
          </div> */}
    </>
  );
};

export default HeroFindCompagnie;
