'use client';

import { Header } from '@/app/components/Header';
import { Spinner } from '@/app/components/Spinner';
import { Table } from '@/app/components/Table';
import { Advocate } from '@/app/lib/types';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [advocates, setAdvocates] = useState<Advocate[]>([]);

  useEffect(() => {
    console.log('fetching advocates...');
    fetchAdvocates();
  }, []);

  const fetchAdvocates = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/advocates');
      const jsonResponse = await response.json();
      setAdvocates(jsonResponse.data);
    } catch (e) {
      setHasError(true);
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
        {hasError && <p className='text-red-700'>Something went rong</p>}
      </div>
    </main>
  );
}
