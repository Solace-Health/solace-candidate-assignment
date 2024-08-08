import { Advocate } from '@/app/lib/types';
import { PropsWithChildren } from 'react';

interface TableProps {
  advocates: Advocate[];
}

const headerTitles = [
  'First Name',
  'Last Name',
  'City',
  'Degree',
  'Specialties',
  'Years of Experience',
  'Phone Number',
];
const dataKeys = [
  'firstName',
  'lastName',
  'city',
  'degree',
  'specialties',
  'yearsOfExperience',
  'phoneNumber',
];
export const Table = ({ advocates }: TableProps) => {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            {headerTitles.map((title, idx) => (
              <th
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                key={`${title}-${idx}`}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {advocates.map((advocate, idx) => (
            <AdvocateRow advocate={advocate} key={`advocate-${idx}`} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
const AdvocateRow = ({ advocate }: { advocate: Advocate }) => (
  <tr className='hover:bg-gray-50'>
    {dataKeys.map((dataKey, idx2) => {
      if (dataKey === 'specialties') {
        return (
          <Specialties
            specialties={advocate.specialties}
            key={`specialty-${idx2}`}
          />
        );
      } else {
        return (
          <RowField isFirstItem={idx2 === 0} key={`${dataKey}-${idx2}`}>
            {/*
      @ts-ignore */}
            {advocate[dataKey]}
          </RowField>
        );
      }
    })}
  </tr>
);
const Specialties = ({ specialties }: { specialties: string[] }) => (
  <td className='px-6 py-4 text-sm text-gray-500 max-w-7xl'>
    {specialties.map((s, idx) => (
      <div
        key={`${s}-${idx}`}
        className='bg-gray-200 text-gray-700 rounded-md px-2 py-1 inline-block mr-1 mb-1'
      >
        {s}
      </div>
    ))}
  </td>
);

const RowField = ({
  isFirstItem,
  children,
}: PropsWithChildren<{ isFirstItem: boolean }>) => (
  <td
    className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ${
      isFirstItem ? 'font-medium' : 'font-normal'
    }`}
  >
    {children}
  </td>
);
