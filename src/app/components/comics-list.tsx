"use client";

import { useEffect, useState } from "react";

import ComicsItem from "./comics-item";

import { getComics } from "@/lib/api";
import Container from "./container";
import { useSearchParams } from "next/navigation";
import Pagination from "./pagination";
import Image from "next/image";

const ComicsList = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const perPage = 16;

  const searchParams = useSearchParams();
  const format = searchParams.get("format");
  const orderBy = searchParams.get("orderBy");
  const startWith = searchParams.get("startWith");
  const selectedDate = searchParams.get("selectedDate");

  useEffect(() => {
    getComics(itemOffset, perPage, startWith, format, orderBy, selectedDate)
      .then((data) => {
        console.log(data.data);
        setTotal(data.data.total);
        setData(data.data.results);
      })
      .catch((error) => console.log(error));
  }, [format, itemOffset, orderBy, perPage, selectedDate, startWith]);

  return (
    <Container>
      {total === 0 ? (
        <Image
          className="w-[267px] h-[152px] mx-auto md:w-[375px] md:h-[221px] pointer-events-none"
          width={240}
          height={240}
          src="/images/no-image.png"
          alt="logo"
        />
      ) : (
        <div>
          <ul className="flex flex-wrap text-neutral-50 gap-10 md:gap-8 lg:gap-x-4 lg:gap-y-16">
            {data.map((hero: any) => (
              <ComicsItem hero={hero} key={hero.id} />
            ))}
          </ul>
          <Pagination
            itemsPerPage={perPage}
            total={total}
            setItemOffset={setItemOffset}
            itemOffset={itemOffset}
          />
        </div>
      )}
    </Container>
  );
};

export default ComicsList;
