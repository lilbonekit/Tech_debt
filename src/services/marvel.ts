import { useHTTPService } from '../api/httpService'
import { config } from '../config'
import type { Character } from '../shared/interfaces'

export const useMarvelCharacters = () => {
	// We can use store here if needed to cache data
	// const setData = useMarvelData((state) => state.setData)
	// const data = useMarvelData((state) => state.data)
	// or easily migrate to Tanstack Query
	return useHTTPService<Character[]>(
		`${config.MARVEL_API_URL}/characters?apikey=${config.MARVEL_API_KEY}`
	)
}
