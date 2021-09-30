import { reducer } from '../utils/reducers';
import {
	UPDATE_BOOKS,
	UPDATE_CUURENT_BOOK,
} from '../../../../01-Actions-Reducers/Unsolved/src/utils/actions';

const initialState = {
	books: [],
	currentBook: [
		{
			_id: '1',
			title: 'Happy',
			author: 'This Guy',
			pages: '333',
			description: 'Just read it!',
		},
	],
};

test('UPDATE_BOOKS', () => {
	let newState = reducer(initialState, {
		type: UPDATE_BOOKS,
		books: [{}, {}],
	});
	expect(newState.books.length).toBe(2);
	expect(initialState.books.length).toBe(0);
});

test('UPDATE_CURRENT_BOOK', () => {
	let newState = reducer(initialState, {
		type: UPDATE_CUURENT_BOOK,
		currentBook: { title: 'Happy' },
	});
	expect(newState.currentBook.length).toBe(1);
	expect(initialState.currentBook.length).toBe(1);
});
