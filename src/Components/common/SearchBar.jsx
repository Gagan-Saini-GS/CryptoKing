import React from "react";

const SearchBar = ({ searchTxt, setSearchTxt, searchCoin }) => {
  return (
    <div>
      <div className="relative flex items-center">
        <input
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchCoin();
            }
          }}
          type="text"
          placeholder="Search..."
          className="hidden md:block rounded-full px-4 py-1 border border-White focus:outline-none focus:ring-2 focus:ring-Blue w-full"
        />
        <button
          type="button"
          className="absolute right-0 md:right-3 top-1/2 transform -translate-y-1/2"
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
    </div>
  );
};

export default SearchBar;
