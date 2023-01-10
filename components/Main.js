import Image from "next/image";
import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineMenu,
  AiOutlineWhatsApp,
} from "react-icons/ai";

function Main() {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <div
      id="home"
      className="w-full flex justify-center items-center h-screen text-center"
    >
      <div className="absolute left-[0%] top-[40%] md:left-[8%] md:top-[40%]  ease-in duration-500 ">
        <Image src={"/images/soap.png"} width={100} height={250} />
      </div>

      <div className=" absolute left-[50%] top-[14%] md:left-[85%] md:top-[30%] scale-120 ease-in duration-500 ">
        <Image src={"/images/soap.png"} width={100} height={250} />
      </div>
      <div className=" absolute right-[20%] top-[78%] md:left-[65%] md:top-[75%] scale-105  ease-in duration-500 ">
        <Image src={"/images/soap.png"} width={100} height={250} />
      </div>

      <div className="flex w-full h-screen justify-center items-center  ">
        <div className="max-w-5xl  rounded-lg mx-6   bg-gray-400/10 p-8 shadow-md w-full flex backdrop-blur-md justify-center items-center flex-col  ">
          <div className="flex justify-center items-center flex-col">
            <Image
              className="rounded-full p-2 shadow-lg bg-pink-600 justify-center content-center "
              loader={myLoader}
              src="https://static.hudl.com/users/prod/8378435_bcdff499fa2e48e3b941cb50460ab2f0.jpg"
              width={150}
              height={150}
            />
            <h1 className="text-center mt-3 text-white text-xl font-bold tracking-widest uppercase">
              Tyler Durden
            </h1>
            <p className="text-center p-6 mx-6 text-gray-400 text-sm  font-medium ">
              “You are not your job, you're not how much money you have in the
              bank. You are not the car you drive. You're not the contents of
              your wallet. You are not your fucking khakis. You are all singing,
              all dancing crap of the world.”
            </p>
          </div>

          <div className="flex flex-col w-[60%] md:w-[40%]  ">
            <p className="text-sm tracking-widest uppercase font-medium text-gray-500 italic text-center py-2 w-full ">
              Join on Fight Club
            </p>
            {/* <div className="flex mt-2 justify-between  ">
              <div className="rounded-full bg-white p-4 shadow-md  hover:scale-150 ease-in duration-200">
                <AiFillFacebook size={20} />
              </div>
              <div className="rounded-full bg-white p-4 shadow-md  hover:scale-150 ease-in duration-200">
                <AiOutlineWhatsApp size={20} />
              </div>
              <div className="rounded-full bg-white p-4 shadow-md hover:scale-150 ease-in duration-200 ">
                <AiFillTwitterSquare size={20} />
              </div>
              <div className="rounded-full bg-white p-4 shadow-md  hover:scale-150 ease-in duration-200">
                <AiOutlineInstagram size={20} />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
