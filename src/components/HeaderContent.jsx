import React from "react";
import portfolioHereo from "../assets/portfolio-hero.png";

const HeaderContent = () => {
  return (
    <div className="relative h-screen  ">
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      >
        <div className="pt-24 flex lg:px-24 2xl:px-40 justify-center  h-full xl:ml-[300px] xl:mr-[100px]">
          <div className="text-left text-white px-6 md:px-12">
            <h1 className="text-5xl  xl:text-7xl font-bold tracking-tight mb-12">
              Hello, I’m{" "}
              <span className="text-orange-400">Imari Childress</span>
              . <br />
              <span> May I join your team?</span>
            </h1>
            <h1 className="text-5xl  xl:text-7xl font-bold tracking-tight mb-12">
              I am a
              <span className="text-orange-400"> front-end web developer </span>
              with a keen interest in bridging
              <span className="text-orange-400"> technology</span> and
              <span className="text-orange-400"> learning</span>.
              <br />
            </h1>
            <button
              type="button"
              className="inline-block absolute bottom-20  px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
