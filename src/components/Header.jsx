import React, { useEffect, useRef } from "react";
import NavBar from "./NavBar";
import { IonIcon } from "@ionic/react";
import { menuOutline } from "ionicons/icons";
import { closeOutline } from "ionicons/icons";

const Header = () => {
  const menuIcon = useRef(null);
  const navBarContainerRef = useRef(null);
  const menuIconRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1279) {
        menuIconRef.current.icon === closeOutline
          ? (menuIconRef.current.icon = menuOutline)
          : null;
        if (
          !navBarContainerRef.current.classList.contains("-translate-x-[300px]")
        ) {
          navBarContainerRef.current.classList.add("-translate-x-[300px]");
        }
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = () => {
    menuIconRef.current.icon === menuOutline
      ? (menuIconRef.current.icon = closeOutline)
      : (menuIconRef.current.icon = menuOutline);

    navBarContainerRef.current.classList.toggle("-translate-x-[300px]");
  };

  return (
    <div className=" ">
      {/* Hanburger Menu */}
      <div
        ref={menuIcon}
        className={`menu-icon text-white absolute right-5 top-5 z-[200] block cursor-pointer text-5xl xl:hidden`}
      >
        <IonIcon
          icon={menuOutline}
          onClick={handleMenuClick}
          ref={menuIconRef}
        />
      </div>
      <div className="header  w-full  relative ">
        <div
          ref={navBarContainerRef}
          className="navbar-container fixed  -translate-x-[300px]  xl:translate-x-[0px]   transition-all duration-700 bg-slate-900 text-white top-0 left-0 bottom-0 z-10 w-[300px]"
        >
          <NavBar onLinkClick={handleMenuClick} />
        </div>
      </div>
    </div>
  );
};

export default Header;
