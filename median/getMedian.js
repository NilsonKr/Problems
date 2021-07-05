const findMedianSortedArrays = function (nums1, nums2) {
	const wholeArray = [...nums1, ...nums2].sort((current, next) => {
		if (current < next) {
			return -1;
		} else if (current > next) {
			return 1;
		}

		return 0;
	});

	const half = Math.floor((wholeArray.length - 1) / 2);

	if ((wholeArray.length - 1) % 2) {
		const median = (Number(wholeArray[half]) + Number(wholeArray[half + 1])) / 2;

		return median;
	}

	return wholeArray[half];
};

const medianFound = findMedianSortedArrays([1], [-2, -1]);

console.log(medianFound);
