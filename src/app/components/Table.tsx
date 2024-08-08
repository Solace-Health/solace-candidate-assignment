import { Advocate } from '@/app/lib/types';

interface TableProps {
  advocates: Advocate[];
}
export const Table = ({ advocates }: TableProps) => {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              First Name
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Last Name
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              City
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Degree
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Specialties
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Years of Experience
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Phone Number
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {advocates.map((advocate, idx) => (
            <tr key={idx} className='hover:bg-gray-50'>
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                {advocate.firstName}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                {advocate.lastName}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                {advocate.city}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                {advocate.degree}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                {advocate.specialties.map((s, idx2) => (
                  <div
                    key={`${s}-${idx2}`}
                    className='bg-gray-200 text-gray-700 rounded-md px-2 py-1 inline-block mr-1 mb-1'
                  >
                    {s}
                  </div>
                ))}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                {advocate.yearsOfExperience}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                {advocate.phoneNumber}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
