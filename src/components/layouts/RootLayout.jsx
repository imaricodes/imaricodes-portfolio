import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Hero from "../Hero";
import Footer from "../Footer";
import { HashLink } from "react-router-hash-link";
import { IonIcon } from "@ionic/react";
import { arrowUpOutline } from "ionicons/icons";

const RootLayout = () => {
  const heroRef = useRef(null);
  const toTopButtonRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("heroRef height", heroRef.current.clientHeight);
      // console.log("position", heroRef.current.offsetTop);
      console.log("current window height ", window.innerHeight);
      console.log("current window scroll y", window.scrollY);
      if (window.scrollY >= heroRef.current.clientHeight) {
        console.log("show top button");
        toTopButtonRef.current.classList.add("active", "fade-in");
      } else {
        if (window.scrollY <= 400) {
          if (toTopButtonRef.current.classList.contains("active")) {
            toTopButtonRef.current.classList.remove("active", "fade-in");
          }
        }
      }
    });
  }, []);

  return (
    <div className="root-layout flex flex-col">
      <HashLink
        ref={toTopButtonRef}
        smooth
        to="#hero"
        className=" btn__toTop  fixed bottom-10 z-[1000] "
      >
             <IonIcon
          icon={arrowUpOutline}

        />
      </HashLink>
      <Header />
      <section ref={heroRef} id="hero">
        <Hero />
      </section>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
