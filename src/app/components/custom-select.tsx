"use client";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CustomSelectProps {
  label: string;
  options: { value: string; label: string }[];
  setSelected: (str: string) => void;
  selected: any;
  width: string;
}

const CustomSelect = ({
  label,
  options,
  setSelected,
  selected,
  width,
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
    <div ref={selectRef} className="select-none relative">
      <div className={`${width} flex flex-col gap-1 md:gap-2 `}>
        <p className="text-neutral-50/30 font-normal text-xs leading-[14px] md:text-sm md:leading-[18px]">
          {label}
        </p>
        <div
          className={clsx(
            "text-neutral-50 border-2 border-[#34387F] py-4 px-6 rounded-full flex justify-between items-center cursor-pointer",
            shown ? "bg-[#34387F]" : "bg-neutral-900 "
          )}
          onClick={() => setShown(!shown)}
        >
          <p className="font-normal text-sm md:text-base leading-[18px] md:leading-[18px] truncate">
            {selected || "Select"}
          </p>
          <ChevronDown
            className={clsx(
              "h-[18px] w-[18px] transition-all",
              shown && "rotate-180"
            )}
          />
        </div>
      </div>
      {shown && (
        <ul
          className={`bg-neutral-900 py-[14px] md:py-4 px-6 absolute z-10 rounded-2xl flex flex-col gap-2 w-full ${
            options && options.length > 0 && options.length * 18 > 260
              ? "max-h-[260px] overflow-y-scroll"
              : ""
          }`}
        >
          {options?.map((option) => (
            <li
              key={option.value}
              className="font-normal text-xs leading-[14px] md:text-sm md:leading-[18px] lg:text-base lg:leading-[18px] text-neutral-50/30 cursor-pointer hover:text-neutral-50"
              onClick={() => {
                setSelected(option.value);
                setShown(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
