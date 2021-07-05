var twoSum = function (nums, target) {
	let result = [];

	for (let i = 0; i < nums.length; i++) {
		let complement = target - nums[i];
		let exists = nums.findIndex((value, index) => {
			if (index === i) {
				return;
			} else {
				return value === complement;
			}
		});

		if (nums.includes(complement) && exists !== -1) {
			return (result = [i, exists]);
		}
	}

	return result;
};

console.log(twoSum([3, 2, 4], 6));
