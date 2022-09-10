import { NextPage } from "next";
import React from "react";

interface ResultItemProps {
  result: any;
}

const ResultItem: NextPage<ResultItemProps> = ({ result }) => {
  return (
    <div className="max-x-xl mb-8">
      <div className="group">
        <a href={result.link} className="text-sm">
          {result.formattedUrl}
        </a>
        <a href={result.link}>
          <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
            {result.title}
          </h2>
        </a>
      </div>
      <p className="line-clamp-2">{result.snippet}</p>
    </div>
  );
};

export default ResultItem;
