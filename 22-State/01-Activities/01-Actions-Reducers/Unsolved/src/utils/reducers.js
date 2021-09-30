import { UPDATE_BOOKS, UPDATE_CURRENT_BOOK } from './actions';
import { useReducer } from 'react';

export const reducer = (state, action) => {
	switch (action.type) {
		case UPDATE_BOOKS:
			return {
				...state,
				books: [...action.books],
			};

		case UPDATE_CURRENT_BOOKS:
			return {
				...state,
				currentBook: [...action.currentBook],
			};
		default:
			return state;
	}
};

export function useBookReducer(initialSte) {
	return useReducer(reducer, initialSte);
}
