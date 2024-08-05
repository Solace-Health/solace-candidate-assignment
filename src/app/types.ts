export interface Advocate {
	id: number;
	firstName: string;
	lastName: string;
	city: string;
	degree: string;
	specialties: ReadonlyArray<string>;
	yearsOfExperience: number;
	phoneNumber: number;
	createdAt: string;
}
