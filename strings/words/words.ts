export {};

const text: string = `Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dolor aspernatur rerum cum soluta sunt quae quam commodi consectetur consequatur maiores, non necessitatibus eos saepe ducimus? Doloribus consequuntur perferendis nisi! Numquam ex, exercitationem magni iure saepe error doloremque amet veritatis accusamus vel harum sunt, velit, blanditiis molestias fugit. Sequi reprehenderit iste saepe sed adipisci, soluta dolorem non iusto doloremque excepturi?`;

const normalizeText = (text: string): string[] => {
	const newText = text
		.toLowerCase()
		.replace(/[!,.?]/g, '')
		.split(' ');

	return newText;
};

function getOccurTimes(text: string) {
	const WordDicc: { [key: string]: number } = {};
	const textNormalized: string[] = normalizeText(text);

	//Built Words Dictionary
	textNormalized.forEach(word => {
		WordDicc[word] ? (WordDicc[word] += 1) : (WordDicc[word] = 1);
	});

	return WordDicc;
}

console.log(getOccurTimes(text));
