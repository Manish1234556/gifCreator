import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner"
import useGif from "../hooks/useGif";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export default function Random() {


  
  const {gif,loading,fetchData}=useGif();
  


  
  return (
    <div
      className=" w-1/2 bg-green-500 rounded-lg border border-black
  flex flex-col items-center gap-y-5 mt-[15px]"
    >
      <h1 className="mt-[15px] text-3xl underline uppercase font-bold">
        A Random Gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} className="w-[450px] " />}
      
      <button
        onClick={()=>fetchData()}
        className="mb-[20px] w-10/12 bg-yellow-500 text-lg py-2 rounded-lg"
      >
        Generate
      </button>
    </div>
  );
}
