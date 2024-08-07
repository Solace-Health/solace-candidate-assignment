'use client';

import { Header } from '@/app/components/Header';
import { useEffect, useState } from 'react';

interface Advocate {
  firstName: string;
  lastName: string;
  city: string;
  degree: string;
  specialties: string[];
  yearsOfExperience: number;
  phoneNumber: string;
}

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);

  useEffect(() => {
    console.log('fetching advocates...');
    fetchAdvocates();
  }, []);

  const fetchAdvocates = async () => {
    try {
      const response = await fetch('/api/advocates');
      const jsonResponse = await response.json();
      setAdvocates(jsonResponse.data);
    } catch (e) {}
  };

  return (
    <main style={{ margin: '24px' }}>
      <h1>Solace Advocates</h1>
      <div className='mt-11'>
        <Header />
      </div>
      <br />
      <br />
      <table>
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>City</th>
          <th>Degree</th>
          <th>Specialties</th>
          <th>Years of Experience</th>
          <th>Phone Number</th>
        </thead>
        <tbody>
          {advocates.map((advocate, idx) => {
            return (
              <tr key={idx}>
                <td>{advocate.firstName}</td>
                <td>{advocate.lastName}</td>
                <td>{advocate.city}</td>
                <td>{advocate.degree}</td>
                <td>
                  {advocate.specialties.map((s, idx2) => (
                    <div key={`${s}-${idx2}`}>{s}</div>
                  ))}
                </td>
                <td>{advocate.yearsOfExperience}</td>
                <td>{advocate.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
