import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { useQuery } from "react-query";
import { GrClose } from "react-icons/gr";
import DataType from "types/fetchedDataType";
import search from "utils/search";

const SmallScreenSearchPopup: FC<{
  searchPageUp: boolean;
  setSearchPageUp: Dispatch<SetStateAction<boolean>>;
}> = ({ setSearchPageUp, searchPageUp }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const { data }: DataType = useQuery("search", () => search(inputValue));

  return (
    <main
      className="fixed inset-x-0 z-10 min-h-screen p-10 transition-all duration-300 ease-out bg-white"
      style={{
        top: searchPageUp ? 0 : "100%",
      }}
    >
      <span
        className="absolute left-5 top-5"
        onClick={() => {
          setSearchPageUp(false);
        }}
      >
        <GrClose />
      </span>
      <div className="flex justify-center">
        <input
          className="w-full p-2 pl-1 border-b-2 border-red-500 outline-none focus:bg-red-50 rounded-t-md"
          placeholder="Search ..."
          onChange={(v) => {
            setInputValue(v.target.value);
          }}
        />
      </div>
      <section>
        <p>Result</p>
        <article>
          {data?.map((item, index) => {
            item;
            return <div key={index}></div>;
          })}
        </article>
      </section>
    </main>
  );
};

export default SmallScreenSearchPopup;
