// Import 'useState' Hook from React
import React, { useState } from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import friends from './friends.json';
import './App.css';

function App() {
	// Using useState, declare a new state variable 'friendsList' and set it to the 'friends' array from 'friends.json'
	// Name the setter method 'setFriendsList'
	// YOUR CODE HERE
	//
	const [friendsList, setFriendsList] = useState(friends);
	// Create a method 'removeFriend()' that takes in 'id' and filters through 'friendsList'
	// Update the state with the new friends list.
	// YOUR CODE HERE
	//

	const removeFriend = (id) => {
		const newList = friendsList.filter((friend) => friend.id !== id);
		setFriendsList(newList);
	};
	return (
		<Wrapper>
			<h1 className="title">Friends List</h1>
			{friendsList.map((friend) => (
				<FriendCard
					removeFriend={removeFriend}
					id={friend.id}
					key={friend.id}
					name={friend.name}
					image={friend.image}
					occupation={friend.occupation}
					location={friend.location}
				/>
			))}
			{}
		</Wrapper>
	);
}

export default App;
