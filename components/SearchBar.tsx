import React from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBar = () => {
  return (
    <div className="relative w-full text-gray-600">
      <div className="absolute left-0 top-0 mt-3 ml-3">
        <BiSearch size={20} />
      </div>
      <input
        type="text"
        className="bg-[#e7e5e8]  h-10 pl-10 pr-5 w-full rounded-lg text-sm focus:outline-none"
        placeholder="Start typing or use back camera for scanning..."
      />
    </div>
  );
};

export default SearchBar;
