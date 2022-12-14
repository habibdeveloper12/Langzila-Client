import React from "react";
import TypingThroughInput from "./TypingThroughInput";
import "./TypeWord.css";
import Navbar from "../Home/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { BiCaretLeft } from "react-icons/bi";

const TypeWord = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <button
        onClick={() => navigate("/")}
        className=" z-50 border  bg-white flex items-center justify-center  px-2 pr-3 rounded text-black absolute left-16 top-20 hover:bg-red-500 hover:text-white font-medium"
      >
        <BiCaretLeft className=" text-xl" />
        Back
      </button>
      <div className="container mx-auto flex flex-col p-4">
        <div className="mb-4">
          <h1 className="text-4xl text-red-500 font-bold  text-center py-8">
            Improve your writing skill in English
          </h1>
        </div>
        {/* <h5 className="border border-gray-300 bg-primary text-white text-sm font-bold rounded-lg block lg:w-1/6 p-2.5 text-center my-4">
        Press ESC to reset
      </h5> */}
        <div className="border-2 p-4 rounded-lg w-1/2 mx-auto mb-10">
          <h1 className="mb-2 text-center text-3xl font-bold text-black">
            Baa Baa Black Sheep
          </h1>
          <hr />
          <TypingThroughInput
            text={
              "Baa, baa black sheep. Have you any wool. Yes sir, yes sir. Three bags full. One for my master And one for my dame And one for the little boy. Who lives down the lane."
            }
          />
        </div>
      </div>
    </>
  );
};

export default TypeWord;
