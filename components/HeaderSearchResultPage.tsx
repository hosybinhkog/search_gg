import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import Avatar from "./Avatar";
import HeaderSeachPageOptions from "./HeaderSeachPageOptions";

const HeaderSearchResultPage: NextPage = () => {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleClickSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const term = searchInputRef.current?.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  useEffect(() => {
    searchInputRef.current!.value = router.query.term as string;
    window.scrollTo(0, 0);
  }, []);

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center w-full p-6">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className="flex-grow flex border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
          <input
            type="text"
            className="flex-grow w-full focus:outline-none"
            ref={searchInputRef}
          />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer transition transfrom duration-100 hover:scale-125 sm:mr-3"
            onClick={() => (searchInputRef.current!.value = "")}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button onClick={handleClickSearch} hidden type="submit" />
        </form>
        <Avatar url="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltf21c2ee30c00121a/627cbc382b67610d5673246f/GettyImages-1347553871.jpg" />
      </div>
      <HeaderSeachPageOptions />
    </header>
  );
};

export default HeaderSearchResultPage;
