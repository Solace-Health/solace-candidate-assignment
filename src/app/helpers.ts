export const isSearchTermFound = (value: string, searchInputValue: string) => {
	return value.toLowerCase().includes(searchInputValue.trim().toLowerCase());
};

export const serachspecialties = (specialties: ReadonlyArray<string>, searchInputValue: string) => {
	const searchValuesAsSingleString = specialties.join("");
	return isSearchTermFound(searchValuesAsSingleString, searchInputValue);
};
