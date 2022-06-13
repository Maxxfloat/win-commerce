import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { useQuery } from "react-query";
import { GrClose } from "react-icons/gr";
import search from "utils/search";
import Link from "next/link";
import Image from "next/image";

const SearchPopup: FC<{
  searchPageUp: boolean;
  setSearchPageUp: Dispatch<SetStateAction<boolean>>;
}> = ({ setSearchPageUp, searchPageUp }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const { data, isLoading } = useQuery(["search", inputValue], () =>
    search(inputValue)
  );

  return (
    <main
      className="fixed inset-0 z-30 min-h-screen p-10 transition-all duration-300 ease-out bg-white "
      style={{
        top: searchPageUp ? 0 : "100%",
      }}
    >
      <span
        className="absolute text-xl left-5 top-5"
        onClick={() => {
          setSearchPageUp(false);
        }}
      >
        <GrClose />
      </span>
      <div className="flex justify-center mt-5">
        <input
          className="w-full p-2 pl-1 border-b-2 border-red-500 outline-none focus:bg-red-50 rounded-tl-md"
          placeholder="Search ..."
          onChange={(v) => {
            setInputValue(v.target.value);
          }}
          value={inputValue}
        />
        <button
          onClick={() => setInputValue("")}
          className="px-3 py-2 bg-red-200 border-b-2 border-red-500 outline-none rounded-tr-md"
        >
          Clear
        </button>
      </div>
      <section>
        <p className="py-1">Result :</p>
        <article className="grid grid-cols-1 gap-2 pt-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {isLoading && "Loading"}
          {data?.map((item, index) => {
            const info = item.attributes;
            const imageUrl =
              info.image.data.attributes.formats.thumbnail?.url ||
              info.image.data.attributes.formats.medium?.url ||
              info.image.data.attributes.formats.small?.url;
            return (
              <Link key={index} href={`/products/${info.slug}`}>
                <a
                  className="flex items-center gap-3 overflow-hidden border border-red-500 rounded-xl"
                  onClick={() => setSearchPageUp(false)}
                >
                  <Image
                    src={imageUrl}
                    alt={info.name}
                    width={60}
                    height={60}
                  />
                  <span className="m-auto text-xl font-bold text-center">
                    {info.name}
                  </span>
                </a>
              </Link>
            );
          })}
        </article>
      </section>
    </main>
  );
};

export default SearchPopup;
