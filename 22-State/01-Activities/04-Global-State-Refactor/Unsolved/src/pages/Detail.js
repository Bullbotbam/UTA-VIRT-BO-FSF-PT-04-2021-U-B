import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import Book from '../components/Book';

import { QUERY_BOOKS } from '../utils/queries';
// Import the `useStoreContext()` Hook
// Import the two actions
import { UPDATE_BOOKS, UPDATE_CURRENT_BOOK } from '../utils/actions';

import { useStoreContext } from '../utils/GlobalState';
// Remove all traces of prop drilling
const Detail = () => {
	const { bookId } = useParams();

	const [state, dispatch] = useStoreContext();
	// Call the useStoreContext() Hook to retrieve the current state from the global state object
	// and the dispatch() method to update state

	// Refactor the useQuery Hook to get a 'loading' and 'data' property
	const { loading, data } = useQuery(QUERY_BOOKS);

	// Instead of 'books', create a 'currentBook' variable that will use the `bookId` from the params
	// to find the book from the global state
	const currentBook = state.books.find(({ _id }) => _id === bookId);

	// Refactor the useEffect() Hook to use an `if/else` statement to trigger the two actions
	useEffect(() => {
		if (data && !currentBook) {
			dispatch({
				type: UPDATE_BOOKS,
				books: data.books,
			});
		} else if (currentBook) {
			dispatch({
				type: UPDATE_CURRENT_BOOK,
				currentBook,
			});
		}

		// On page leave (component unmount), this will unset `currentBook`
		return () => {
			dispatch({
				type: UPDATE_CURRENT_BOOK,
				currentBook: {},
			});
		};
	}, [loading, currentBook, dispatch, data]);

	return (
		<main>
			<div className="m-5">
				{currentBook ? <Book {...currentBook} /> : <h2>Loading...</h2>}
			</div>
		</main>
	);
};

export default Detail;
