import React from 'react';

interface HeaderProps {
  handleSearch: (searchTerm: string) => void;
  onClick: () => void;
}

export const Header = ({ handleSearch, onClick }: HeaderProps) => {
  return (
    <>
      <p>Search</p>
      <p>
        Searching for: <span id='search-term'></span>
      </p>
      <input
        className='peer rounded-md border border-gray-200 py-[9px] pl-2 text-sm outline-2 placeholder:text-gray-500'
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button
        className='ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
        onClick={onClick}
      >
        Reset Search
      </button>
    </>
  );
};
