"use client";

import { useEffect, useState } from "react";

import ComicsItem from "./comics-item";

import { getComics } from "@/lib/api";

const ComicsList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getComics()
      .then((data) => setData(data.data.results))
      .catch((error) => console.log(error));
  }, []);
  return (
    <ul className="flex flex-wrap gap-4 text-neutral-50">
      {data.map((hero: any) => (
        <ComicsItem hero={hero} key={hero.id} />
      ))}
    </ul>
  );
};

export default ComicsList;
