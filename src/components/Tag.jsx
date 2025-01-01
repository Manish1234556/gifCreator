import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from './Spinner';
import useGif from "../hooks/useGif";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export default function Tag() {
  const [tag,setTag]=useState("car");
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState("false");
  // async function fetchData() {
  //   try {
  //     setLoading(true);
  //     const response = await axios.get(
  //       `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
  //     );
  //     const imageSource = response.data.data.images.downsized_large.url;
  //     setGif(imageSource);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching the GIF:", error);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);
  const {gif,loading,fetchData}=useGif(tag);

  return (
    <div
      className="w-1/2  bg-blue-500 rounded-lg border border-black
  flex flex-col items-center gap-y-5 mt-[15px]"
    >
      <h1 className="mt-[15px] text-3xl underline uppercase font-bold">
        Random {tag} Gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} width="450" />}
      

      <input
        onChange={(event) => setTag(event.target.value)}
        className="w-10/12 text-lg py-2 rounded-lg text-center"
        value={tag}
      />
      <button
        onClick={() => fetchData(tag)}
        className="mb-[20px] w-10/12 bg-yellow-500 text-lg py-2 rounded-lg"
      >
        Generate
      </button>
    </div>
  );
}
