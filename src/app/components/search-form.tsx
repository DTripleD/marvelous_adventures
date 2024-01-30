"use client";

import Image from "next/image";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import moment from "moment";
import { ChevronDown } from "lucide-react";
import { formatOptions, orderByOptions } from "@/lib/options";
import CustomSelect from "./custom-select";

const SearchForm = () => {
  const [dateIsOpen, setDateIsOpen] = useState(false);

  const [orderBy, setOrderBy] = useState("");
  const [format, setFormat] = useState("");

  //   const dateNow = moment().format("DD/MM/YYYY");

  const [selectedDate, setSelectedDate] = useState<Date>();

  const handleDaySelect = (day: any) => {
    console.log(day);
    setSelectedDate(day);
  };

  return (
    <form className="flex gap-16 justify-center">
      <label className="text-neutral-50 flex flex-col">
        Title Starts With
        <div className="bg-[#34387F] flex items-center py-4 px-6 rounded-full border">
          <input
            type="text"
            placeholder="Enter text"
            className="bg-transparent placeholder:text-neutral-50 font-normal text-base leading-[18px] outline-none"
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
      />
      <CustomSelect
        label={"Order by"}
        options={orderByOptions}
        setSelected={setOrderBy}
        selected={orderBy}
      />
      <div className="text-neutral-50 flex flex-col relative">
        Start Year
        <button
          type="button"
          onClick={() => setDateIsOpen(!dateIsOpen)}
          className="bg-neutral-900 flex items-center py-4 px-6 rounded-full border border-[#34387F] font-normal text-base leading-[18px]"
        >
          {moment(selectedDate).format("DD/MM/YYYY")}
          <ChevronDown className="h-[18px] w-[18px]" />
        </button>
        {dateIsOpen && (
          <DayPicker
            className="bg-neutral-900 absolute z-50 top-full left-0 py-4 px-6 rounded-2xl"
            mode="single"
            selected={selectedDate}
            onSelect={handleDaySelect}
          />
        )}
      </div>
    </form>
  );
};

export default SearchForm;
