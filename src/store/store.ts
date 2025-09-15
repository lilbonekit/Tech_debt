import { create } from 'zustand'
import { type Character } from '../shared/interfaces'

type State = {
	data: null | Character[]
}

type Actions = {
	setData: (data: Character[]) => void
}

const useMarvelData = create<State & Actions>((set) => ({
	data: null,
	setData: (data: Character[]) => set(() => ({ data })),
}))

export default useMarvelData
