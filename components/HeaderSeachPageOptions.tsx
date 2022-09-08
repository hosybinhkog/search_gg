import { NextPage } from "next";
import React from "react";
import HeaderSearchPageOption from "./HeaderSearchPageOption";

const HeaderSeachPageOptions: NextPage = () => {
  return (
    <div>
      <div className="flex space-x-6">
        <HeaderSearchPageOption />
      </div>
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderSeachPageOptions;
