import React, { useEffect, useState } from "react";

const SearchBar = ({
  searchTxt,
  setSearchTxt,
  searchCoin,
  fetchSuggestions,
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [isFoucsed, setIsFocused] = useState(false);

  useEffect(() => {
    if (searchTxt) {
      fetchSuggestions(searchTxt).then((res) => setSuggestions(res));
    } else if (isFoucsed) {
      fetchSuggestions("").then((res) => setSuggestions(res));
    } else {
      setSuggestions([]);
    }
  }, [searchTxt, isFoucsed, fetchSuggestions]);

  useEffect(() => {
    const handleBodyClick = (e) => {
      if (!e.target.closest(".relative")) {
        setIsFocused(false);
      }
    };
    document.body.addEventListener("click", handleBodyClick);
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  return (
    <div>
      <div className="relative flex items-center">
        <input
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchCoin(searchTxt);
            }
          }}
          type="text"
          placeholder="Search..."
          className="hidden md:block rounded px-4 py-1 border border-White focus:outline-none focus:ring-2 focus:ring-Blue w-full"
        />
        <button
          type="button"
          className="absolute right-0 md:right-3 top-1/2 transform -translate-y-1/2"
          onClick={() => searchCoin(searchTxt)}
        >
          <svg
            className="h-5 w-5 text-Blue"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {suggestions.length > 0 && isFoucsed && (
        <div className="absolute bg-Black text-White border border-gray-300 rounded mt-0.5 w-[212px] max-h-60 overflow-y-auto z-10">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-200/10"
              onClick={() => {
                setSearchTxt(suggestion.name);
                searchCoin(suggestion.id);
                setIsFocused(false);
              }}
            >
              {suggestion.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
