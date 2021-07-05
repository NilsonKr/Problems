/**
  (()))())(
        ^

  open = 1
  close = 1
  max = 4

  movingFoward --> close > open resetCounters = 0
  updateMaxLenght --> open === close  max=open+close 
  

  open = 0
  close = 0
  secondMax = 2


  movingBackward --> open > close resetCounter = 0
  updateMaxLenght --> secondMax > maxLength 
  



 */

var longestValidParentheses = function (s) {
	let open = 0;
	let close = 0;
	let maxLength = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			open += 1;
		}

		if (s[i] === ')') {
			close += 1;
		}

		if (open === close) {
			maxLength = Math.max(maxLength, open + close);
		} else if (close > open) {
			open = 0;
			close = 0;
		}
	}

	open = 0;
	close = 0;

	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] === '(') {
			open += 1;
		}

		if (s[i] === ')') {
			close += 1;
		}

		if (open === close) {
			maxLength = open + close;
		} else if (open > close) {
			open = 0;
			close = 0;
		}
	}

	return maxLength;
};

const result = longestValidParentheses('(()))())(');

console.log(result);
