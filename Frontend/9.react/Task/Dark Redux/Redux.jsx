import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Black, White } from "./src/Action";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Redux = () => {
  const [theme, setTheme] = useState(false);

  const black = useSelector((state) => state.black);
  const white = useSelector((state) => state.white);

  const handleBlack = () => {
    dispatch(Black());

    setTheme(true);
  };
  
  const handleWhite = () => {
    dispatch(White());

    setTheme(false);
  };

  const dispatch = useDispatch();

  return (
    <div
      className={` flex justify-center p-1 h-screen ${
        theme ? black : white
      } `}
    >
      <div className="">
        <button className=" mx-1" onClick={handleBlack}>
          <MdDarkMode className={`${theme ? "text-white" : "text-black"}`} />
        </button>
        <button className=" mx-1" onClick={handleWhite}>
          <CiLight className={`${theme ? "text-white" : "text-black"}`} />
        </button>
      </div>
    </div>
  );
};

export default Redux;
