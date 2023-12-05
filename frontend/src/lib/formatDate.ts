export const formatDate = (date: string): string => {
	const options = {
		year: 'numeric' as const,
		month: 'long' as const,
		day: 'numeric' as const,
	};
	const formattedDate = new Date(date).toLocaleDateString('en-US', options);
	return formattedDate;
};
