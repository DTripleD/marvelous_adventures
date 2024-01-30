"use client";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CustomSelectProps {
  label: string;
  options: { value: string; label: string }[];
  setSelected: (str: string) => void;
  selected: string;
}

const CustomSelect = ({
  label,
  options,
  setSelected,
  selected,
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
      <div className="font-normal text-sm leading-[18px] w-[167px] flex flex-col gap-2">
        <p className="text-neutral-50/30">{label}</p>
        <div
          className="border-2 border-[#34387F] bg-neutral-900 text-neutral-50 py-4 px-6 rounded-full flex justify-between cursor-pointer"
          onClick={() => setShown(!shown)}
        >
          <p className="truncate">{selected || "Select"}</p>
          <ChevronDown
            className={clsx(
              "h-[18px] w-[18px] transition-all",
              shown && "rotate-180"
            )}
          />
        </div>
      </div>
      {shown && (
        <ul className="bg-neutral-900 py-4 px-6 absolute rounded-2xl flex flex-col gap-2">
          {options.map((option) => (
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
      )}
    </div>
  );
};

export default CustomSelect;
