"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import { formatOptions, orderByOptions, yearsOptions } from "@/lib/options";
import CustomSelect from "./custom-select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Container from "./container";

const SearchForm = () => {
  const [startWith, setStartWith] = useState("");
  const [format, setFormat] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    const queryParams = [
      { key: "format", value: format },
      { key: "orderBy", value: orderBy },
      { key: "startWith", value: startWith },
      { key: "selectedDate", value: selectedDate },
    ];

    queryParams
      .filter(({ value }) => value !== "")
      .forEach(({ key, value }) => params.set(key, value));

    queryParams
      .filter(({ value }) => value === "")
      .forEach(({ key }) => params.delete(key));

    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }, [
    format,
    orderBy,
    startWith,
    selectedDate,
    pathname,
    router,
    searchParams,
  ]);

  return (
    <Container>
      <form className="flex gap-x-2 gap-y-3 md:gap-x-2 lg:gap-x-4 md:justify-center mb-10 md:mb-16 flex-wrap">
        <label className="flex flex-col gap-1 md:gap-2 text-neutral-50/30 font-normal text-xs leading-[14px] md:text-sm md:leading-[18px] w-full md:w-[197px] lg:w-[268px]">
          Title Starts With
          <div className="focus-within:bg-[#34387F] border-2 border-[#34387F] bg-neutral-900 flex items-center py-[14px] md:py-4 px-6 rounded-full">
            <input
              onChange={(event) => setStartWith(event.target.value)}
              type="text"
              placeholder="Enter text"
              value={startWith}
              className="
                bg-transparent 
                placeholder:text-neutral-50 
                text-neutral-50 
                placeholder:font-normal
                placeholder:text-sm  
                md:placeholder:text-base 
                placeholder:leading-[18px] 
                md:placeholder:leading-[18px]
                font-normal 
                text-sm
                md:text-base 
                leading-[18px] 
                md:leading-[18px]
                outline-none"
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
          width="w-[173px] md:w-[169px] lg:w-[200px]"
        />
        <CustomSelect
          label={"Order by"}
          options={orderByOptions}
          setSelected={setOrderBy}
          selected={orderBy}
          width="w-[154px] md:w-[149px] lg:w-[152px]"
        />
        <CustomSelect
          label={"Start Year"}
          options={yearsOptions}
          setSelected={setSelectedDate}
          selected={selectedDate}
          width="w-[156px] md:w-[166px] lg:w-[167px]"
        />
      </form>
    </Container>
  );
};

export default SearchForm;
