"use client";

import { useEffect, useState } from "react";
import ComicsItem from "../components/comics-item";
import SearchForm from "../components/search-form";
import { getComics } from "@/lib/api";

const ComicsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getComics()
      .then((data) => setData(data.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <SearchForm />
      <ul className="flex flex-wrap gap-4 text-neutral-50">
        {data.map((hero: any) => (
          <ComicsItem hero={hero} key={hero.id} />
        ))}
      </ul>
    </div>
  );
};

export default ComicsPage;
