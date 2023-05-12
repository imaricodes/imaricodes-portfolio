import React, { useRef, useContext, useEffect, useState, useLayoutEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
//TODO: Replace ion ion
import { IonIcon } from "@ionic/react";
import { menuOutline } from "ionicons/icons";
import { closeOutline } from "ionicons/icons";


const NavBar = () => {

  const [menuActive, setMenuActive] = useState(false);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  const [currentLocation, setCurrentLocation] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const menuToggleRef = useRef(null);
  const menuListRef = useRef(null);


  // const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {

    function closeMobileMenu() {
      if (window.innerWidth > 768) {
        // console.log('closing mobile menu')
        if (menuActive === true) {
          console.log('menu active state in layout effect: ', menuActive)
          menuToggleRef.current.icon = menuOutline;
          menuListRef.current.classList.add("hidden");
          menuListRef.current.classList.remove("nav-menu--slide-in");
          setMenuActive(prev => !prev)
        }
      }
      
      // setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', closeMobileMenu);

    closeMobileMenu()
    return () => window.removeEventListener('resize', closeMobileMenu);
  }, [menuActive]);


  const handleMenu = () => {
    // menuToggleRef.current.icon === menuOutline
    //   ? ((menuToggleRef.current.icon = closeOutline),
    //     menuListRef.current.classList.add("nav-menu--slide-in"),
    //     menuListRef.current.classList.remove("hidden"))
    //   : ((menuToggleRef.current.icon = menuOutline),
    //     menuListRef.current.classList.add("hidden"),
    //     menuListRef.current.classList.remove("nav-menu--slide-in"));
    setMenuActive( prev => !prev);
    setWindowHeight(window.innerHeight)
  };

  useEffect(() => {
    if (menuActive) {
      menuToggleRef.current.icon = closeOutline;
      menuListRef.current.classList.add("nav-menu--slide-in");
      menuListRef.current.classList.remove("hidden");
    }

    if(!menuActive) {
      menuToggleRef.current.icon = menuOutline;
      menuListRef.current.classList.add("hidden");
      menuListRef.current.classList.remove("nav-menu--slide-in");
    }
  }, [menuActive]);




  const handleNavLinkClick = (e) => {
    console.log(
      "console.log click target",
      e.target.textContent || e.target.innerText
    );
    console.log("handleNavLinkClick clicked");
 
  };

  return (
 
      <nav className="navbar relative mb-8 min-w-[320px] sm:mb-10 md:mb-12 md:flex md:justify-between lg:mb-16 xl:mb-20 w-full ">
        {/* Logo */}

        <NavLink
          to="/"
          className="flex  cursor-pointer items-center px-4 pt-4 text-4xl font-bold md:px-14 "
          onClick={handleNavLinkClick}
        >
          Echo Readerbeta
        </NavLink>

        {/* Hanburger Menu */}
        <div className="absolute right-3 top-5 z-[200] block cursor-pointer text-3xl md:hidden">
          <IonIcon
            icon={menuOutline}
            onClick={handleMenu}
            ref={menuToggleRef}
          />
        </div>

        {/* Links */}
        <div ref={menuListRef} className="nav-menu  md:flex ">
          <ul className=" flex flex-col text-center font-semibold md:flex md:flex-row md:items-center md:pr-14 ">
            <li className="nav-link mx-4 my-6 md:my-0 ">
              <NavLink
                to="/"
                className="text-xl duration-200"
                onClick={handleNavLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li className="mx-4 my-6 md:my-0 ">
              <HashLink
                // to="about"
                smooth to="/#projects"
                className="nav-link text-xl  duration-200"
                onClick={handleNavLinkClick}
              >
                Projects
              </HashLink>
            </li>
            <li className=" mx-4 my-6 md:my-0">
              <HashLink
                smooth to="/#skills"
                className="nav-link text-xl duration-200"
                onClick={handleNavLinkClick}
              >
                Skills
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>

  );
};

export default NavBar;
