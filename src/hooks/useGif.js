import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Spinner from "../components/Spinner";




const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const useGif = (tag) => {
 
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState("false");
  async function fetchData(tag) {
    try {
      setLoading(true);

      const response = await axios.get(tag?`${url}&tag=${tag}`:url);
      const imageSource = response.data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching the GIF:", error);
    }
  }

  useEffect(() => {
    fetchData('car');
  }, []);

  return {gif,loading,fetchData};
};

export default useGif;
