import { NextRequest } from 'next/server';
import db from '../../../db';
import { advocates } from '../../../db/schema';
import { advocateData } from '../../../db/seed/advocates';

export async function GET(req: NextRequest) {
  // Uncomment this line to use a database
  // const data = await db.select().from(advocates);

  const { searchParams } = req.nextUrl;

  const searchTerm = searchParams.get('search')?.toLowerCase() || '';
  console.log('api/search', searchTerm);

  const data = advocateData.filter((advocate) => {
    return (
      advocate.firstName.toLowerCase().includes(searchTerm) ||
      advocate.lastName.toLowerCase().includes(searchTerm) ||
      advocate.city.toLowerCase().includes(searchTerm) ||
      advocate.degree.toLowerCase().includes(searchTerm) ||
      advocate.specialties
        .map((s) => s.toLowerCase())
        .filter((s) => s.includes(searchTerm)).length > 0 ||
      advocate.yearsOfExperience === Number(searchTerm)
    );
  });

  return Response.json({ data });
}
