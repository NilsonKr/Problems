/**
 * Problem 1
  Build a object with a function to print a prop "name" within the object
 
*/

const myObject = {
	name: 'Nilson',
	greet: function () {
		console.log(`Hello! ${this.name}`);
	},
};

myObject.greet();

/**
 * Problem 2
  Make The prop "name" inmutable
*/

Object.freeze(myObject); //way 1
const newObj = { ...myObject }; //way 2

newObj.name = 'Felipe';

console.log(myObject.name, newObj.name);

/**
 * Problem 3

  Make a function that given a list of cities filter by the most occur cities and give the top 5  
*/

const cities = [
	'Seoul',
	'Seoul',
	'Seoul',
	'Seoul',
	'Bogota',
	'Bogota',
	'Bogota',
	'Bogota',
	'Neshville',
	'Neshville',
	'Neshville',
	'Toronto',
	'San Francisco',
	'San Francisco',
	'Madrid',
	'Madrid',
	'Madrid',
	'Madrid',
	'Praga',
	'Praga',
	'Praga',
	'Buenos Aires',
	'Buenos Aires',
];

function getMostOccurCities(citiesList) {
	const index = {};

	citiesList.forEach(city => {
		index[city] ? (index[city] += 1) : (index[city] = 1);
	});

	return Object.keys(index)
		.map(city => ({ name: city, times: index[city] }))
		.sort((el, next) => {
			if (el.times > next.times) {
				return -1;
			} else if (el.times === next.times) {
				return 0;
			} else {
				return 1;
			}
		})
		.slice(0, 5);
}

console.log(getMostOccurCities(cities));
