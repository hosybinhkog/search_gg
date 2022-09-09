import { NextPage } from "next";
import React from "react";
import HeaderSearchPageOption from "./HeaderSearchPageOption";

import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

const HeaderSeachPageOptions: NextPage = () => {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
      <div className="flex space-x-6">
        <HeaderSearchPageOption icon={SearchIcon} title="All" selected />
        <HeaderSearchPageOption icon={PhotographIcon} title="Images" />
        <HeaderSearchPageOption icon={PlayIcon} title="Videos" />
        <HeaderSearchPageOption icon={NewspaperIcon} title="News" />
        <HeaderSearchPageOption icon={MapIcon} title="Maps" />
        <HeaderSearchPageOption icon={DotsVerticalIcon} title="More" />
      </div>
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderSeachPageOptions;
