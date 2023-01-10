import Image from "next/image";
import React from "react";

function YouOkay() {
  return (
    <div className="flex justify-center items-center w-ful h-screen">
      <div className=" bg-white/10 w-[80%] h-1/2 flex flex-col justify-evenly items-center rounded-lg p-4 ">
        <label className="swap swap-flip text-9xl">
          <input type="checkbox" />

          <div className="swap-on">
            <Image
              height={150}
              width={150}
              // className={"bg-white p-1 rounded-full"}
              src="/../public/images/tyler.png"
            />
          </div>
          <div className="swap-off ">
            <Image
              height={250}
              width={150}
              // className={"bg-white p-1 rounded-full"}
              src="/../public/images/narrator.png"
            />
          </div>
        </label>

        <label htmlFor="my-modal-3" className="btn ">
          You Okay ?
        </label>
      </div>

      {/* The button to open modal */}

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex justify-center items-center flex-col">
            <h3 className="text-lg font-bold">
              Trust me everything's gonna be fine
            </h3>
            <p className="py-4">You met me at a very strange time in my life</p>
            <img
              className="h-72 "
              src="https://preview.redd.it/wptjuom4kbx11.jpg?auto=webp&s=cc92749adb529003bc2818e7a2480aa61c2bce72"
            ></img>
            <div className="modal-action">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.youtube.com/watch?v=nHKlfGq3bOA"
                className="btn"
              >
                Okay 🫂
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YouOkay;
