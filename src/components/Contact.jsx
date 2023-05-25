import React from "react";
import { IonIcon } from "@ionic/react";
import { locationOutline } from "ionicons/icons";
import { mailOutline } from "ionicons/icons";

const Contact = () => {
  return (
    <div className="card px-10 mb-28">
    <div className="contact flex flex-col gap-10">
      <div className="flex items-center ">
        <a className="contact__left mr-10 flex  items-center justify-center  h-10 w-10 rounded-full bg-slate-900  text-white "
         href="https://www.google.com/maps/search/?api=1&query=detroit%2C+Michigan"
         target="_blank cursor-pointer"
        
        >
        <IonIcon icon={locationOutline} />
        </a>
        <div className="contact__right">
          <a
            href="https://www.google.com/maps/search/?api=1&query=detroit%2C+Michigan"
            target="_blank cursor-pointer"
            
          >
            Location
          </a>

      

          <p>Detroit, MI, United States</p>
        </div>
      </div>
      <div className="flex items-center ">
        <a className="contact__left mr-10 flex  items-center justify-center  h-10 w-10 rounded-full bg-slate-900  text-white "
         href="https://www.google.com/maps/search/?api=1&query=detroit%2C+Michigan"
         target="_blank cursor-pointer"
        
        >
        <IonIcon icon={mailOutline} />
        </a>
        <div className="contact__right">
          <a
             href="mailto:imaricodes@gmail.com"
             target="_blank cursor-pointer"
            
          >
            Email
          </a>

      

          <p>imaricodes@gmail.com</p>
        </div>
      </div>


      {/* <div className="contact-discord">
      <span className="Social before:content-icon float-left w-10" />
      <h4 className="pl-10">Favorite Neighborhood Discord Hangout:</h4>
      <a href="https://www.google.com/maps/search/?api=1&query=detroit%2C+Michigan" target="_blank" className="pl-10">Discord link</a>
    </div> */}
    </div>
    </div>
  );
};

export default Contact;
