/** Problem:
 * Crea una función que pueda recibir cualquier objeto como parámetro
 * e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
 */

const menu = {
	main: 'Pizza',
	second: 'Tacos',
	drink: 'Soda',
	dessert: 'Samoa Dessert Lasagna',
};

function printProps(someObject: { [key in number | string]: any }): void {
	for (const key in someObject) {
		console.log(`${key}: ${someObject[key]}`);
	}
}

printProps(menu);
