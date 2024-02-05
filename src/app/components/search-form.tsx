"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

import { formatOptions, orderByOptions, yearsOptions } from "@/lib/options";
import CustomSelect from "./custom-select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchForm = () => {
  const [startWith, setStartWith] = useState("");
  const [format, setFormat] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const params = new URLSearchParams(searchParams.toString());

  console.log(params.get("orderBy"));

  useEffect(() => {
    if (format !== "") {
      router.push(pathname + "?" + createQueryString("format", format), {
        scroll: false,
      });
    }

    if (orderBy !== "") {
      router.push(pathname + "?" + createQueryString("orderBy", orderBy), {
        scroll: false,
      });
    }

    if (startWith !== "") {
      router.push(pathname + "?" + createQueryString("startWith", startWith), {
        scroll: false,
      });
    }

    if (selectedDate) {
      router.push(
        pathname +
          "?" +
          createQueryString("selectedDate", JSON.stringify(selectedDate)),
        {
          scroll: false,
        }
      );
    }
  }, [
    createQueryString,
    format,
    orderBy,
    pathname,
    router,
    selectedDate,
    startWith,
  ]);

  return (
    <form className="flex gap-16 justify-center mb-16">
      <label className="flex flex-col gap-2 text-neutral-50/30 font-normal text-sm leading-[18px]">
        Title Starts With
        <div className="focus-within:bg-[#34387F] border-2 border-[#34387F] bg-neutral-900 flex items-center py-4 px-6 rounded-full">
          <input
            onChange={(event) => setStartWith(event.target.value)}
            type="text"
            placeholder="Enter text"
            value={startWith}
            className="bg-transparent placeholder:text-neutral-50 text-neutral-50 placeholder:font-normal placeholder:text-base placeholder:leading-[18px] font-normal text-base leading-[18px] outline-none"
          />
          <Image
            className="w-[18px] h-[18px]"
            width={18}
            height={18}
            src="/icons/search.svg"
            alt="search"
          />
        </div>
      </label>
      <CustomSelect
        label={"Format"}
        options={formatOptions}
        setSelected={setFormat}
        selected={format}
        width="w-[200px]"
      />
      <CustomSelect
        label={"Order by"}
        options={orderByOptions}
        setSelected={setOrderBy}
        selected={orderBy}
        width="w-[152px]"
      />
      <CustomSelect
        label={"Start Year"}
        options={yearsOptions}
        setSelected={setSelectedDate}
        selected={selectedDate}
        width="w-[167px]"
      />
    </form>
  );
};

export default SearchForm;
