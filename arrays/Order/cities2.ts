/**
 * Problem 3

  Make a function that given a list of cities filter by the most occur cities and give the top 5  
*/

export {};

const cities: string[] = [
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

interface citiesDicc {
	[key: string]: number;
}

function topInArray(list: string[]): citiesDicc[] {
	const dicc: citiesDicc = {};

	list.forEach((city: string) => {
		dicc[city] ? (dicc[city] += 1) : (dicc[city] = 1);
	});

	//Order by occur times
	const fallingOrder = Object.keys(dicc)
		.sort((current, next) => {
			if (<number>dicc[current] > <number>dicc[next]) {
				return -1;
			}

			if (<number>dicc[current] < (dicc[next] as number)) {
				return 1;
			}

			return 0;
		})
		.slice(0, 5);

	//Array with the most occurred cities as objects
	const orderArray: citiesDicc[] = fallingOrder.map(city => ({ [city]: dicc[city] as number }));

	return orderArray;
}

console.log(topInArray(cities));
