import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

import HeaderSearchResultPage from "../components/HeaderSearchResultPage";
import SearchResults from "../components/SearchResults";
import response from "../response";

interface SearchProps {
  data: any;
}

const Search: NextPage<SearchProps> = ({ data }) => {
  const router = useRouter();
  console.log("data search results", { data });
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google</title>
      </Head>

      <HeaderSearchResultPage />
      <SearchResults data={data} />
    </div>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const useDummyData = false;
  const { term } = context.query;
  const startIndex = context.query.start || "0";

  const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${term}&start=${startIndex}`;

  const data = useDummyData
    ? response
    : await fetch(url).then((res) => res.json());
  return {
    props: {
      data,
    },
  };
};
