import React from "react";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";

const AboutCard = (props) => {
  return (
    <div>
      {" "}
      <div className="flex flex-col border text-left rounded-2xl py-12 px-8">
        <div>
          <div className="bg-[#00d8ff] inline-flex p-2  rounded-full ">
            {props.icon}
          </div>
          <h3 className="text-xl font-bold py-4 ">{props.heading}</h3>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
