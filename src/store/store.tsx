import { create } from "zustand";
import { type IChar } from "../shared/interfaces";

type State = {
	data: null | IChar[];
};

type Actions = {
	setData: (data: IChar[]) => void;
};

const useMarvelData = create<State & Actions>((set) => ({
	data: null,
	setData: (data: IChar[]) => set(() => ({ data })),
}));

export default useMarvelData;
