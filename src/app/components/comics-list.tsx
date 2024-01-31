"use client";

import { useEffect, useState } from "react";

import ComicsItem from "./comics-item";

import { getComics } from "@/lib/api";
import Container from "./container";

const ComicsList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getComics()
      .then((data) => setData(data.data.results))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container>
      <ul className="flex flex-wrap text-neutral-50 gap-x-4 gap-y-16">
        {data.map((hero: any) => (
          <ComicsItem hero={hero} key={hero.id} />
        ))}
      </ul>
    </Container>
  );
};

export default ComicsList;
