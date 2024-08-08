'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

export const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const onClear = () => {
    onSearch('');
  };

  return (
    <div className='flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md'>
      <p className='text-lg font-semibold text-gray-700 mb-2'>Search</p>
      <p className='text-sm text-gray-600 mb-4'>
        Searching for:
        <span className='font-medium text-blue-600'>
          {searchParams.get('search')}
        </span>
      </p>
      <div className='relative w-full max-w-md'>
        <input
          className='peer w-full rounded-md border border-gray-300 py-[9px] pl-10 pr-4 text-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500'
          onChange={(e) => onSearch(e.target.value)}
          defaultValue={searchParams.get('search')?.toString()}
          placeholder='Enter your search term...'
        />
        <FaSearch className='absolute left-3 top-2.5 h-5 w-5 text-gray-500 pointer-events-none' />
      </div>
      <button
        className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
        onClick={onClear}
      >
        Reset Search
      </button>
    </div>
  );
};
