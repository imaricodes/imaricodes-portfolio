import React from "react";
import SkillsIcons from "../assets/skills-icons/SkillsIcons";
import { FaBeer } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact flex flex-col bg-yellow-100">
    
    <div className="Location ">
      <a href="https://www.google.com/maps/search/?api=1&query=detroit%2C+Michigan" target="_blank cursor-pointer"  className="contact-item-icon before:content-icon " />
      <h4>Location</h4>
      <p>Detroit, MI, United States</p>
    </div>
    <div className="Email">
      <FaBeer />
      <a href="mailto:imaricodes@gmail.com" target="_blank cursor-pointer" className="contact-item-icon before:content-icon" />
      <h4>Email</h4>
      <p>imaricodes@gmail.com</p>
    </div>

    {/* <div className="contact-discord">
      <span className="Social before:content-icon float-left w-10" />
      <h4 className="pl-10">Favorite Neighborhood Discord Hangout:</h4>
      <a href="https://www.google.com/maps/search/?api=1&query=detroit%2C+Michigan" target="_blank" className="pl-10">Discord link</a>
    </div> */}
    
    </div>

  );
};

export default Contact;
