"use client";

import Image from "next/image";
import React, { useState } from "react";

import { formatOptions, orderByOptions } from "@/lib/options";
import CustomSelect from "./custom-select";

const SearchForm = () => {
  const [orderBy, setOrderBy] = useState("");
  const [format, setFormat] = useState("");

  //   const dateNow = moment().format("DD/MM/YYYY");

  const [selectedDate, setSelectedDate] = useState<Date>();

  const handleDaySelect = (day: any) => {
    setSelectedDate(day);
  };

  return (
    <form className="flex gap-16 justify-center mb-16">
      <label className="flex flex-col gap-2 text-neutral-50/30 font-normal text-sm leading-[18px]">
        Title Starts With
        <div className="focus-within:bg-[#34387F] border-2 border-[#34387F] bg-neutral-900 flex items-center py-4 px-6 rounded-full">
          <input
            type="text"
            placeholder="Enter text"
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
        type="date"
        label={"Start Year"}
        handleDaySelect={handleDaySelect}
        selected={selectedDate}
        width="w-[167px]"
        setSelected={setOrderBy}
      />
    </form>
  );
};

export default SearchForm;
