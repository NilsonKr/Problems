/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

const findLongestSubStr = (s: string) => {
	let largest: Array<string> = [];
	let current: Array<string> = [];

	for (let i = 0; i < s.length; i++) {
		const char = s[i] as string;

		if (current.includes(char)) {
			const lastAppearIndex = current.findIndex(c => c === char);
			const validStr = current.slice(lastAppearIndex + 1, i);

			current = [];
			if (i !== lastAppearIndex) {
				current = [...validStr];
			}
		}

		current.push(char);

		if (current.length > largest.length) {
			largest = current;
			``;
		}
	}
	return largest.length;
};

const longest = findLongestSubStr(' ');

console.log(longest);

export default findLongestSubStr;

//*** If you want more accuracy */

// for (let i = s.length - 1; i >= 0; i--) {
// 	const char = s[i] as string;

// 	if (current.includes(char)) {
// 		const lastAppearIndex = current.findIndex(c => c === char);
// 		const validStr = current.slice(lastAppearIndex + 1, i);

// 		current = [];
// 		if (i !== lastAppearIndex) {
// 			current = [...validStr];
// 		}
// 	}

// 	current.push(char);

// 	if (current.length > largest.length) {
// 		largest = current;
// 		``;
// 	}
// }
