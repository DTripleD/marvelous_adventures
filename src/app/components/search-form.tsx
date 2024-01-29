"use client";

import Image from "next/image";
import React, { useId, useState } from "react";
import Select, { StylesConfig } from "react-select";
import { DayPicker } from "react-day-picker";
import moment from "moment";
import { ChevronDown } from "lucide-react";
import { formatOptions, orderByOptions } from "@/lib/options";

const SearchForm = () => {
  const [dateIsOpen, setDateIsOpen] = useState(false);

  //   const dateNow = moment().format("DD/MM/YYYY");

  const [selectedDate, setSelectedDate] = useState<Date>();

  const handleDaySelect = (day: any) => {
    console.log(day);
    setSelectedDate(day);
  };

  const customStyles: StylesConfig = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#171717",
      borderRadius: "100px",
      border: "2px solid #34387F",
      padding: "16px 24px",
      "&:hover": {
        borderColor: "inherit",
      },
    }),
    indicatorSeparator: () => ({ display: "none" }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "16px",
      backgroundColor: "#171717",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: "inherit",
      color: state.isFocused ? "#FAFAFA" : "#FAFAFA4D",
    }),
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
      <label className="text-neutral-50 flex flex-col">
        Format
        <Select
          instanceId={useId()}
          styles={customStyles}
          options={formatOptions}
        />
      </label>
      <label className="text-neutral-50 flex flex-col">
        Order by
        <Select
          instanceId={useId()}
          styles={customStyles}
          options={orderByOptions}
        />
      </label>
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
