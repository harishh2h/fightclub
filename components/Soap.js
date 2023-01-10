import React from "react";

function Soap() {
  return (
    <div
      id="soap"
      className="flex w-full    h-screen justify-around items-center flex-wrap "
    >
      <div className="w-auto flex justify-center items-center">
        <div className="card w-96  glass bg-gray-800">
          <figure>
            <img
              src="https://www.teahub.io/photos/full/280-2802283_fight-club-soap-blank.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white ">Fight Club Soap</h2>
            <p>With enough soap, one could blow up anything.</p>
            <div className="card-actions justify-center  border-b-0 outline-none">
              <button className="btn bg-pink-500 outline-none border-b-0 text-white hover:text-white ">
                Buy Now !
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Soap;
