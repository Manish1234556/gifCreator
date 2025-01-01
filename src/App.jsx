import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className=" relative  w-full h-full flex flex-col background 
     items-center">
      <h1 className=" text-center mt-[40px] bg-white rounded-s
       px-10 py-2 text-4xl font-bold  w-11/12">
        RANDOM GIFS
      </h1 >
        <div className="flex flex-col w-full items-center gap-y-10 mt-[30px] ">
           <Random/>
           <Tag/>
        </div>
    </div>
  );
}
