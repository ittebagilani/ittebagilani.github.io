import React, { useState } from "react";
import { BsInfoCircle, BsPerson } from "react-icons/bs";
// import { BiHome, BiHomeAlt2 } from "react-icons/bi"
import { RiHome2Line } from "react-icons/ri";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex h-[600px] pt-[125px] pl-10 fixed z-50">
      <div
        className={`bg-tertiary h-[400px] p-5 pt-[75px] items-center justify-center
        w-[55px] duration-300 relative rounded-2xl`}
      >
        <ul className="list-none hidden sm:flex flex-col">
          <li
            className={`hover:text-white text-[18px] font-medium flex flex-col cursor-pointer pb-10`}
          >
            <RiHome2Line
              className={`text-3xl cursor-pointer block float-left -ml-2 justify-center y`}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            />
          </li>

          <li
            className={`hover:text-white text-[18px] font-medium flex flex-col cursor-pointer pb-10`}
          >
            <a href="#about" className="flex flex-col">
              <BsPerson
                className={`text-3xl cursor-pointer block float-left -ml-2 justify-center y`}
              />
            </a>
          </li>

          <li
            className={`hover:text-white text-[18px] font-medium flex flex-col cursor-pointer pb-10`}
          >
            <a href="#projects" className="flex flex-col">
              <MdWorkOutline
                className={`text-3xl cursor-pointer block float-left -ml-2 justify-center y`}
              />
            </a>
          </li>

          <li
            className={`hover:text-white text-[18px] font-medium flex flex-col cursor-pointer pb-10`}
          >
            <a href="#contact" className="flex flex-col">
              <AiOutlineMail
                className={`text-3xl cursor-pointer block float-left -ml-2 justify-center y`}
              />
            </a>
          </li>
          {/* ))} */}
        </ul>

        {/* <div className="inline-flex pt-10">
          {/* <Link
            to="#home"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          > */}
        {/* <RiHome2Line
            className={`text-3xl cursor-pointer block float-left -ml-2 justify-center y`}
          /> */}
        {/* </Link> */}
        {/* </div> */}

        {/* <div className="inline-flex pt-10">
          <BsPerson
            className={`text-3xl cursor-pointer block float-left -ml-2 justify-center`}
          />
        </div> */}

        {/* <div className="inline-flex pt-10">
          <MdWorkOutline
            className={`text-3xl cursor-pointer block float-left -ml-2 justify-center`}
          />
        </div> */}

        {/* <div className="inline-flex pt-10">
          <AiOutlineMail
            className={`text-3xl cursor-pointer block float-left -ml-2 justify-center`}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
