import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function Portfolio() {
	const [currentPage, handlePageChange] = useState('Home');

	const renderPage = () => {
		// Add a switch statement that will return the appropriate component of the 'currentPage'
		// YOUR CODE HERE
		//
		switch (currentPage) {
			case 'About':
				return <About />;
			case 'Blog':
				return <Blog />;
			case 'Contact':
				return <Contact />;
			default:
				return <Home />;
		}
	};

	return (
		<div>
			<NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
			<div>{renderPage()}</div>
		</div>
	);
}

export default Portfolio;
