import Image from "next/image";
import React, { useState } from "react";
import FightClubQuotes from "../public/quotes.json";

function Quotes() {
  const [currentQuote, setQuote] = useState(
    FightClubQuotes.quotes[Math.floor(Math.random() * 96)]
  );

  const generator = () => {
    setQuote(FightClubQuotes.quotes[Math.floor(Math.random() * 96)]);
  };

  return (
    <div
      id="Quotes"
      className="w-full h-screen flex justify-center items-center"
    >
      <div className="flex w-full h-screen justify-center items-center  ">
        <div className="max-w-5xl  rounded-lg mx-6   bg-gray-200/10 p-8 shadow-md w-full flex backdrop-blur-lg justify-center items-center flex-col  ">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-center mt-3 text-gray-500 text-xl font-bold tracking-widest uppercase">
              Tyler Durden Quotes
            </h1>
            <p className="text-center p-6 mx-6 text-gray-200 text-md  font-medium ">
              {currentQuote}
            </p>
            <btn onClick={generator} className={"btn"}>
              Another One !
            </btn>
          </div>

          <div className="flex flex-col w-[60%] md:w-[40%]  ">
            <p className="text-sm tracking-widest uppercase font-medium text-gray-500 italic text-center py-2 w-full ">
              Join on Fight Club
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
