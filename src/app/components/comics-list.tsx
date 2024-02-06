"use client";

import { useEffect, useState } from "react";

import ComicsItem from "./comics-item";

import { getComics } from "@/lib/api";
import Container from "./container";
import { useSearchParams } from "next/navigation";

const ComicsList = () => {
  const [data, setData] = useState([]);

  const searchParams = useSearchParams();
  const format = searchParams.get("format");
  const orderBy = searchParams.get("orderBy");
  const startWith = searchParams.get("startWith");
  const selectedDate = searchParams.get("selectedDate");

  useEffect(() => {
    getComics(startWith, format, orderBy, selectedDate)
      .then((data) => setData(data.data.results))
      .catch((error) => console.log(error));
  }, [format, orderBy, selectedDate, startWith]);

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
