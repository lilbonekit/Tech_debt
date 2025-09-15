import { type IChar } from "../shared/interfaces";

export const useHTTPService = () => {
	const fetchData = async (url: string): Promise<IChar[]> => {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Could not fetch ${url}, status: ${response.status}`);
		}

		const data = await response.json();

		return data.data.results;
	};

	return { fetchData };
};
