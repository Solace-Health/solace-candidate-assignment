import { Advocate } from '@/app/lib/types';

interface TableProps {
  advocates: Advocate[];
}
export const Table = ({ advocates }: TableProps) => {
  return (
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
  );
};
