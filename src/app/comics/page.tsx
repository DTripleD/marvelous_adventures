"use client";

import { useEffect } from "react";

var md5 = require("md5");

// console.log(md5(process.env.PRIVATE_KEY));

const ComicsPage = () => {
  const ts = Math.floor(new Date().getTime() / 1000); // текущий временной штамп в секундах
  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY as string; // ваш приватный ключ
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string; // ваш публичный ключ

  const hash = md5(ts + privateKey + publicKey);

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, [hash, publicKey, ts]);
  return <div className="text-neutral-50">Comics page</div>;
};

export default ComicsPage;
