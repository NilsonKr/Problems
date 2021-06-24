//Excercise #1 Types of variables
export {};

const name: string = 'Nilson';
const lastName: string = 'Diaz';
const username: string = 'NilsonKr';
const Edad: number = 27;
const Email: string = 'whatever@gmail.com';
const is_major: boolean = true;
const money_saved: number = 30000;

interface debtInterface {
	debt: string;
	value: number;
}

const debts: debtInterface[] = [
	{ debt: 'New Macbook', value: 2000 },
	{ debt: 'New Car', value: 14500 },
];

//Excercise #2 Calc with previous info

//Complete Name
const completeName = name + lastName;

// Calc Real Money

function calcTotalMoney(moneySaved: number, debts: debtInterface[]) {
	const totalDebtsValue = debts.reduce((prev, current) => current.value + prev, 0);

	return moneySaved - totalDebtsValue;
}

console.log(calcTotalMoney(money_saved, debts));

// FUNCTIONS

function greeting(completeName: string, nickname: string) {
	console.log('Mi nombre es ' + completeName + ', pero prefiero que me digas ' + nickname + '.');
}

greeting(completeName, username);
