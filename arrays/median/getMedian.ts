export {};

const findMedianSortedArrays = function (nums1: Array<number>, nums2: Array<number>): number {
	const wholeArray: number[] = [...nums1, ...nums2].sort((current, next) => {
		if (current < next) {
			return -1;
		} else if (current > next) {
			return 1;
		}

		return 0;
	});

	const half: number = Math.floor((wholeArray.length - 1) / 2);

	if ((wholeArray.length - 1) % 2) {
		const median: number = (Number(wholeArray[half]) + Number(wholeArray[half + 1])) / 2;

		return median;
	}

	return wholeArray[half];
};

const medianFound: number = findMedianSortedArrays([1], [-2, -1]);

console.log(medianFound);
