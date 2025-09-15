import { useCallback, useMemo, useState } from 'react'

type RequestStates = 'loading' | 'error' | 'idle'

export const useHTTPService = <T>(url: string) => {
	const [requestState, setRequestState] = useState<RequestStates>('idle')
	const [data, setData] = useState<T | undefined>()

	const fetchData = useCallback(async () => {
		setRequestState('loading')
		try {
			const response = await fetch(url)
			if (!response.ok) {
				throw new Error(`Could not fetch ${url}, status: ${response.status}`)
			}
			const data = (await response.json()).data.results as T
			setData(data)
			setRequestState('idle')
		} catch (error) {
			console.error('Fetch error:', error)
			setRequestState('error')
		}
	}, [url])

	const fetchDataQuery = useMemo(
		() => ({
			fetchData,
			data,
			requestState,
			isLoading: requestState === 'loading',
			isError: requestState === 'error',
		}),
		[data, fetchData, requestState]
	)

	return fetchDataQuery
}
