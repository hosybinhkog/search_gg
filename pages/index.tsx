import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { MouseEvent, useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: MouseEvent<HTMLButtonElement | MouseEvent>) => {
    e.preventDefault();
    const term = searchInputRef.current?.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col justify-center h-screen w-full ">
      <Header />

      {/* FORM  */}
      <form className="flex flex-col items-center mt-44 flex-grow ">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md px-5 py-3 border borde-gray-200 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 text-gray-500 mr-3" />
          <input
            ref={searchInputRef}
            placeholder="Type search..."
            type="text"
            className="focus:outline-none flex-grow"
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={handleSearch} className="btn">
            Google Search
          </button>
          <button onClick={(e) => e.preventDefault()} className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
