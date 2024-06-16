import React, { useState } from "react";

const OptionNavbar = ({
  coinArr,
  setCoinArr,
  showBottomLine = true,
  options,
  startOption = options[0].id,
  changeFilter,
}) => {
  const [activeNavItem, setActiveNavItem] = useState(startOption);

  return (
    <div
      className={`w-full py-2 ${showBottomLine && "border-b-2 border-Gray"}`}
    >
      <div className="flex flex-wrap items-center gap-2">
        {options.map((item) => {
          return (
            <div
              key={item.id}
              className={`text-xs sm:text-sm font-medium cursor-pointer rounded-full py-1 px-2 sm:px-4 ${
                activeNavItem === item.id
                  ? "bg-Blue text-White text-opacity-100"
                  : "text-LightGray text-opacity-50"
              }`}
              onClick={() => {
                setActiveNavItem(item.id);
                const arr = changeFilter(coinArr, item.id);
                setCoinArr(arr);
              }}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OptionNavbar;
