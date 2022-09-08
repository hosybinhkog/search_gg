import { NextPage } from "next";
import Head from "next/head";
import React from "react";

import HeaderSearchResultPage from "../components/HeaderSearchResultPage";

const Search: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Search Result</title>
      </Head>

      <HeaderSearchResultPage />
    </div>
  );
};

export default Search;
