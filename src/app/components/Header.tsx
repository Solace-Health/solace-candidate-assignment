'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React from 'react';

export const Header = () => {
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
    const params = new URLSearchParams(searchParams);
    params.delete('search)');
  };

  return (
    <>
      <p>Search</p>
      <p>Searching for: {searchParams.get('search')}</p>
      <input
        className='peer rounded-md border border-gray-200 py-[9px] pl-2 text-sm outline-2 placeholder:text-gray-500'
        onChange={(e) => onSearch(e.target.value)}
        defaultValue={searchParams.get('search')?.toString()}
      />
      <button
        className='ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
        onClick={onClear}
      >
        Reset Search
      </button>
    </>
  );
};
