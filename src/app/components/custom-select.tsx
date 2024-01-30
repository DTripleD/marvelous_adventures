"use client";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import moment from "moment";
import { DayPicker } from "react-day-picker";

interface CustomSelectProps {
  label: string;
  options?: { value: string; label: string }[];
  setSelected: (str: string) => void;
  selected: any;
  width: string;
  type?: string;
  handleDaySelect?: any;
}

const CustomSelect = ({
  label,
  options,
  setSelected,
  selected,
  width,
  type,
  handleDaySelect,
}: CustomSelectProps) => {
  const [shown, setShown] = useState(false);

  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !(selectRef.current as any).contains(event.target as Node)
      ) {
        setShown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectRef]);

  return (
    <div ref={selectRef} className="select-none">
      <div className={`${width} flex flex-col gap-2`}>
        <p className="text-neutral-50/30 font-normal text-sm leading-[18px]">
          {label}
        </p>
        <div
          className={clsx(
            "text-neutral-50 border-2 border-[#34387F] py-4 px-6 rounded-full flex justify-between items-center cursor-pointer",
            shown ? "bg-[#34387F]" : "bg-neutral-900 "
          )}
          onClick={() => setShown(!shown)}
        >
          <p className="font-normal text-base leading-[18px] truncate">
            {(type === "date"
              ? moment(selected).format("DD/MM/YYYY")
              : selected) || "Select"}
          </p>
          <ChevronDown
            className={clsx(
              "h-[18px] w-[18px] transition-all",
              shown && "rotate-180"
            )}
          />
        </div>
      </div>
      {shown &&
        (type === "date" ? (
          <DayPicker
            className="bg-neutral-900 text-neutral-50 absolute py-4 px-6 rounded-2xl"
            mode="single"
            selected={selected}
            onSelect={handleDaySelect}
          />
        ) : (
          <ul className="bg-neutral-900 py-4 px-6 absolute rounded-2xl flex flex-col gap-2">
            {options?.map((option) => (
              <li
                key={option.value}
                className="font-normal text-base leading-[18px] text-neutral-50/30 cursor-pointer hover:text-neutral-50"
                onClick={() => {
                  setSelected(option.value);
                  setShown(false);
                }}
              >
                {option.value}
              </li>
            ))}
          </ul>
        ))}
    </div>
  );
};

export default CustomSelect;
