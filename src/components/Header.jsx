import React, { useEffect, useRef } from "react";
import NavBar from "./NavBar";
import HeaderContent from "./HeaderContent";
import { IonIcon } from "@ionic/react";
import { menuOutline } from "ionicons/icons";
import { closeOutline } from "ionicons/icons";

const Header = () => {
  const menuIcon = useRef(null);
  const navBarContainerRef = useRef(null);
  const menuIconRef = useRef(null);

  const handleMenuClick = () => {
    console.log("menu icon clicked");
    // menuIcon.current.classList.toggle("bg-pink-200");
    menuIconRef.current.icon === menuOutline ? (menuIconRef.current.icon = closeOutline) : (menuIconRef.current.icon = menuOutline)

    navBarContainerRef.current.classList.toggle("-translate-x-[300px]");
  };



  



  return (
    // <div className="header-container h-screen bg-yellow-100">

    <div className="relative h-screen bg-cover bg-fixed bg-no-repeat bg-right-top bg-hero">
      {/* Hanburger Menu */}
      <div
        ref={menuIcon}
        className="menu-icon fixed right-0 top-5 z-[200] block cursor-pointer text-3xl xl:hidden bg-pink-200 "
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
          <NavBar />
        </div>
        <HeaderContent />
      </div>
    </div>
    // </div>
  );
};

export default Header;
