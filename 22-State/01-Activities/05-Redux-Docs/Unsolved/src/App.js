import React from 'react';

// Replace StoreProvider here and in App()
import { Provider } from 'react';
// Import the Redux store you created
//

function App() {
	return (
		<div>
			<Provider store={store}>
				<h4>Check the console</h4>
				<div className="container">{console.log(store.getState())}</div>
			</Provider>
		</div>
	);
}

export default App;
