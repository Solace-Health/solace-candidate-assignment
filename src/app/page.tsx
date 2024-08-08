'use client';

import { Header } from '@/app/components/Header';
import { Spinner } from '@/app/components/Spinner';
import { Table } from '@/app/components/Table';
import { Advocate } from '@/app/lib/types';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [advocates, setAdvocates] = useState<Advocate[]>([]);

  const searchTerm = searchParams.get('search');

  useEffect(() => {
    console.log('fetching advocates...', searchTerm);
    fetchAdvocates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const fetchAdvocates = async () => {
    const query = searchTerm ? `?search=${searchTerm}` : '';
    setIsLoading(true);
    try {
      const response = await fetch(`/api/advocates${query}`);
      const jsonResponse = await response.json();
      setAdvocates(jsonResponse.data);
      setHasError(false);
    } catch (e) {
      setHasError(true);
      setAdvocates([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main style={{ margin: '24px' }}>
      <h1>Solace Advocates</h1>
      <div className='mt-11'>
        <Header />
      </div>
      <div className='mt-8'>
        {isLoading ? <Spinner /> : <Table advocates={advocates} />}
        {hasError && <p className='text-red-700'>Something went wrong</p>}
      </div>
    </main>
  );
}
