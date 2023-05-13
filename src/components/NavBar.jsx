import React, {
  useRef,
  useContext,
  useEffect,
  useState,
  useLayoutEffect,
} from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
//TODO: Replace ion ion
import { IonIcon } from "@ionic/react";
import { homeOutline } from "ionicons/icons";
import { globeOutline } from "ionicons/icons";
import { hammerOutline } from "ionicons/icons";
import icDotsIMG from "../assets/ic-dots.jpg";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const menuListRef = useRef(null);

  const handleNavLinkClick = (e) => {
    console.log(
      "console.log click target",
      e.target.textContent || e.target.innerText
    );
    console.log("handleNavLinkClick clicked");
  };

  return (
    <nav className=" relative mt-6  ">
      <div className="flex flex-col items-center mb-10">
        <NavLink
          to="/"
          className="flex  cursor-pointer items-center px-4 pt-4 text-4xl font-bold md:px-14 "
          onClick={handleNavLinkClick}
        >
          <img
            src={icDotsIMG}
            alt="ic-dots"
            className="h-40 w-40 border-solid  border-8 border-orange-400 bg-yellow-50 rounded-full flex justify-center items-center mb-6"
          />
        </NavLink>
        <h1 className="font-poppins text-2xl font-semibold">Imari Childress</h1>
      </div>

      {/* Links */}
      <div ref={menuListRef} className="nav-menu  ">
        <ul className=" flex flex-col font-openSans font-extralight  ">
          <li className="nav-link mx-4 my-6 ">
            
              <NavLink
                to="/"
                className="text-xl duration-200"
                onClick={handleNavLinkClick}
              >
                <span className="flex items-center w-full gap-4">
                <IonIcon icon={homeOutline} className="" />
                 Home
                 </span>
              </NavLink>
          
          </li>
          <li className="mx-4 my-6 ">
            <span className="flex items-center">
              <HashLink
                // to="about"
                smooth
                to="/#projects"
                className="nav-link text-xl  duration-200"
                onClick={handleNavLinkClick}
              >
                <span className="flex items-center w-full gap-4">
                <IonIcon icon={globeOutline} className="" />
                Projects
                </span>
              </HashLink>
            </span>
          </li>
          <li className=" mx-4 my-6">
            <span>
              <HashLink
                smooth
                to="/#skills"
                className="nav-link text-xl duration-200"
                onClick={handleNavLinkClick}
              >
                  <span className="flex items-center w-full gap-4">
                <IonIcon icon={hammerOutline} className="" />
                Skills / Tools
                </span>
              </HashLink>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
