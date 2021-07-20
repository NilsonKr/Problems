const text = `Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dolor aspernatur rerum cum soluta sunt quae quam commodi consectetur consequatur maiores, non necessitatibus eos saepe ducimus? Doloribus consequuntur perferendis nisi! Numquam ex, exercitationem magni iure saepe error doloremque amet veritatis accusamus vel harum sunt, velit, blanditiis molestias fugit. Sequi reprehenderit iste saepe sed adipisci, soluta dolorem non iusto doloremque excepturi?`;

const normalizeText = text =>
	text
		.toLowerCase()
		.replace(/[!?,.]/g, '')
		.split(' ');

function indexWords(text) {
	const index = {};
	const list = normalizeText(text);

	list.forEach(word => {
		const exists = index[word];

		exists ? (index[word] += 1) : (index[word] = 1);
	});

	return Object.keys(index)
		.map(word => ({ word: word, times: index[word] }))
		.sort((el, next) => {
			if (el.times > next.times) {
				return -1;
			}

			if (el.tiems < next.times) {
				return 1;
			}

			return 0;
		})
		.slice(0, 5);
}

console.log(indexWords(text));
