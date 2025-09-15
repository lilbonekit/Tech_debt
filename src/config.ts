export const config = {
	MARVEL_API_URL: import.meta.env.VITE_MARVEL_API_URL,
	MARVEL_API_KEY: import.meta.env.VITE_MARVEL_API_KEY,
}

Object.entries(config).map((item: unknown[]) => {
	if (item[1] === undefined) {
		throw new Error(`Environment variable ${item[0]} is not defined`)
	}
})
