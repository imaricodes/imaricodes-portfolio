
const HeaderContent = () => {
  return (
    <div className="relative min-h-screen  ">
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      >
        <div className="pt-24  md:pt-32 flex  justify-center  h-full xl:ml-[300px]">
          <div className=".header__content__container header__content__container--text ">
            <h1 className="header__content__container__h1 md:mb-20">
              Hello, I’m
              <span className="text-orange-400"> Imari</span>
              . 
            </h1>

            <h1 className="header__content__container__h1">
              I am a
              <span className="text-orange-400"> front-end web developer </span>
              interested in bridging
              <span className="text-orange-400"> technology</span> and
              <span className="text-orange-400"> learning</span>.
              
            </h1>
            {/* <button
              type="button"
              className="inline-block absolute bottom-20  px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Get started
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
