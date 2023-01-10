import React, { useState } from "react";
import Image from "next/image";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineMenu,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function navbar() {
  const [NavMenu, SetNavMenu] = useState(false);

  const navhandler = () => {
    SetNavMenu(!NavMenu);
  };

  const myLoader2 = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className=" fixed z-[10] w-full h-16   from-gray-900 to-gray-600 bg-gradient-to-r   md:bg-white/10 md:backdrop-blur-md p-4 shadow-lg ">
      <div className="flex justify-between    items-center h-full p-3 ">
        <Image
          className="rounded-full justify-center content-center "
          loader={myLoader2}
          src="https://static.hudl.com/users/prod/8378435_bcdff499fa2e48e3b941cb50460ab2f0.jpg"
          width={50}
          height={50}
        />
        <div className="w-full ml-10 text-left ">
          <h1 className="font-bold text-md uppercase tracking-widest ">
            {" "}
            Fight Club
          </h1>
        </div>
        <div className=" ">
          <ul className="hidden md:flex">
            <a className="ml-10 text-sm uppercase hover:border-b  " href={`\#`}>
              <li>Home</li>
            </a>
            <a
              className="ml-10 text-sm uppercase hover:border-b "
              href={`\#soap`}
            >
              <li>Soap</li>
            </a>
            <a
              className="ml-10 text-sm uppercase hover:border-b "
              href={`\#Quotes`}
            >
              <li>Quotes</li>
            </a>
          </ul>
          <div onClick={navhandler} className="md:hidden">
            <AiOutlineMenu />
          </div>
        </div>
      </div>

      <div
        onClick={navhandler}
        className={
          NavMenu
            ? " md:hidden z-10 fixed h-full w-full top-0 bottom-0 left-0  bg-black/60 "
            : ""
        }
      >
        <div
          className={
            NavMenu
              ? "md:hidden left-0 top-0 fixed h-full w-[75%] sm:w-[60%] md:w-[40%] p-6 bg-gradient-to-br  from-gray-900/60 to-gray-600/60 backdrop-blur-lg ease-in duration-500"
              : "fixed left-[-100%] p-6 bg-white ease-out   duration-500 "
          }
        >
          <div>
            <div className="flex justify-between items-center ">
              <Image
                className="rounded-full justify-center content-center "
                loader={myLoader2}
                src="https://static.hudl.com/users/prod/8378435_bcdff499fa2e48e3b941cb50460ab2f0.jpg"
                alt="Picture of the author"
                width={50}
                height={50}
              />
              <div onClick={navhandler} className="shadow-lg p-3 rounded-full ">
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div>
            <div className="flex py-6 flex-col">
              <p className="border-b text-sm p-2  mb-10 border-gray-400">
                The things you own end up owning you.
              </p>
              <ul className="pb-4 text-sm font-medium  uppercase">
                <a href={`\#`}>
                  <li className="py-4">Home</li>
                </a>
                <a href={"/#soap"}>
                  <li className="py-4">Soap</li>
                </a>
                <a href={`\#Quotes`}>
                  <li className="py-4">Quotes</li>
                </a>
              </ul>
            </div>

            {/* <div className="flex  flex-col">
              <p className="text-sm text-center py-2">Connect on Fight Club</p>
              <div className="flex mt-2 justify-between ">
                <div className="rounded-full bg-white p-3 shadow-md ">
                  <AiFillFacebook size={20} />
                </div>
                <div className="rounded-full bg-white p-3 shadow-md ">
                  <AiOutlineWhatsApp size={20} />
                </div>
                <div className="rounded-full bg-white p-3 shadow-md ">
                  <AiFillTwitterSquare size={20} />
                </div>
                <div className="rounded-full bg-white p-3 shadow-md ">
                  <AiOutlineInstagram size={20} />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
