import Image from "next/image";
import React from "react";

function Me() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className=" bg-white/10 w-[70%] h-1/2 flex flex-col justify-evenly items-center rounded-xl p-4 ">
        <div className="avatar">
          <div className="w-24 rounded-full shadow-md  ">
            <Image
              height={50}
              width={150}
              className={"bg-white p-1 rounded-full"}
              src="/images/profile.jpg"
            />
          </div>
        </div>
        <div>
          <p className="font-medium text-sm text-gray-300 text-center mt-2">
            Yes, I'm not supposed to talk about it !
          </p>
          <p className="font-medium  text-sm text-gray-300 text-center ">
            Buy me something, i'll apologize 🚶‍♀️
          </p>
        </div>
        <button className="btn my-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/h2htech/"
          >
            Message
          </a>
        </button>
      </div>
    </div>
  );
}

export default Me;
