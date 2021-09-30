// Dependencies
// =============================================================
const express = require('express');
const exphbs = require('express-handlebars');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine
//
// YOUR CODE HERE
//
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// Data
// =============================================================
const animals = [
	{
		animalType: 'dog',
		pet: true,
		fierceness: 4,
	},
	{
		animalType: 'cat',
		pet: true,
		fierceness: 6,
	},
	{
		animalType: 'giraffe',
		pet: false,
		fierceness: 4,
	},
	{
		animalType: 'zebra',
		pet: false,
		fierceness: 8,
	},
	{
		animalType: 'lion',
		pet: false,
		fierceness: 10,
	},
];

// Routes
// =============================================================

app.get('/all-pets', (req, res) => {
	// Loop through the animals, and send those that are pets to the `index.handlebars` file.
	// Hint: Handlebars requires an object to be sent to the `index.handlebars` file, not an array!
	//
	// YOUR CODE HERE
	//

	const data = {
		animals: [],
	};

	for (let i; i < animals.length; i++) {
		let currentAnimal = animals[i];
		if (currentAnimal.pet) {
			data.animals.push(currentAnimal);
		}
	}
	res.render('index', data);
});

app.get('/all-non-pets', (req, res) => {
	// Loop through the animals, and send those that are NOT pets to the `index.handlebars` file.
	// Hint: Handlebars requires an object to be sent to the `index.handlebars` file, not an array!
	//
	// YOUR CODE HERE
	//
	const data = {
		petAnimals: animals.filter((a) => !animals.pet),
	};
	res.render('index', data);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
	console.log('App listening on PORT ' + PORT);
});
