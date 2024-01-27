"use client";

import { useEffect, useState } from "react";
import ComicsItem from "../components/comics-item";
import SearchForm from "../components/search-form";

var md5 = require("md5");

const ComicsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const ts = Math.floor(new Date().getTime() / 1000);
    const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY as string; 
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

    const hash = md5(ts + privateKey + publicKey);
    fetch(
      `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    )
      .then((res) => res.json())
      .then((data) => setData(data.data.results))
      .catch((error) => console.log(error));
  }, []);

  console.log(data);
  return (
    <div>
      <SearchForm/>
      <ul className="flex flex-wrap gap-4 text-neutral-50">
        {data.map((hero: any) => (
          <ComicsItem hero={hero} key={hero.id} />
        ))}
      </ul>
    </div>
  );
};

export default ComicsPage;
