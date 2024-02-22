var md5 = require("md5");

export const searchByTitleStartsWith = (input: string) => {
  const ts = Math.floor(new Date().getTime() / 1000);
  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY as string;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

  const hash = md5(ts + privateKey + publicKey);

  return fetch(
    `https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${input}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
  ).then((res) => res.json());
};

export const getComics = (
  itemOffset?: number,
  perPage?: number,
  startWith?: string | null,
  format?: string | null,
  orderBy?: string | null,
  selectedDate?: string | null
) => {
  const ts = Math.floor(new Date().getTime() / 1000);
  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY as string;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

  const hash = md5(ts + privateKey + publicKey);
  return fetch(
    `http://gateway.marvel.com/v1/public/comics?${
      perPage ? `limit=${perPage}` : ""
    }&${
      itemOffset ? `offset=${itemOffset}` : ""
    }&ts=${ts}&apikey=${publicKey}&hash=${hash}&${
      format ? `format=${format}` : ""
    }&${startWith ? `titleStartsWith=${startWith}` : ""}&${
      selectedDate ? `startYear=${selectedDate}` : ""
    }&${orderBy ? `orderBy=${orderBy}` : ""}`
  ).then((res) => res.json());
};
