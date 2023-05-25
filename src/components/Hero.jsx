import { useRef, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  const heroWrapperRef = useRef(null);

  useEffect(() => {
    if (window.innerHeight <= 600) {
      if (heroWrapperRef.current.classList.contains("min-h-screen")) {
        heroWrapperRef.current.classList.remove("min-h-screen");
      }
      if (!heroWrapperRef.current.classList.contains("min-h-[600px]")) {
        heroWrapperRef.current.classList.add("min-h-[600px]");
      }
    }

    const resizeHeroHeight = () => {
      if (window.innerHeight <= 600) {
        if (heroWrapperRef.current.classList.contains("min-h-screen")) {
          heroWrapperRef.current.classList.remove("min-h-screen");
        }
        if (!heroWrapperRef.current.classList.contains("min-h-[600px]")) {
          heroWrapperRef.current.classList.add("min-h-[600px]");
        }
      }
      if (window.innerHeight > 600) {
        if (heroWrapperRef.current.classList.contains("min-h-[600px]")) {
          heroWrapperRef.current.classList.remove("min-h-[600px]");
        }

        if (!heroWrapperRef.current.classList.contains("min-h-screen")) {
          heroWrapperRef.current.classList.add("min-h-screen");
        }
      }
    };

    window.addEventListener("resize", resizeHeroHeight);
    return () => window.removeEventListener("resize", resizeHeroHeight);
  }, []);

  return (
    <div
      ref={heroWrapperRef}
      className="hero-wrapper w-full min-h-screen bg-cover bg-heroSmall sm:bg-hero bg-right-top relative mb-10 "
    >
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      >
        <div className="pt-24  md:pt-32 flex  justify-center  h-full xl:ml-[300px]">
          <div className="hero__content__container hero__content__container--margins hero__content__container--text ">
            <h1 className="hero__content__container__h1 xs:mb-32 sm:mb-20 md:mb-20">
              Hello, I’m
              <span className="text-orange-400"> Imari</span>.
            </h1>

            <h1 className="hero__content__container__h1">
              I am a
              <span className="text-orange-400"> front-end web developer </span>
              interested in bridging
              <span className="text-orange-400"> technology</span> and
              <span className="text-orange-400"> learning</span>.
            </h1>
            {/* <HashLink smooth to="/#projects">
              <button
                type="button"
                className="inline-block  bottom-20  px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Portfolio
              </button>
            </HashLink> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
