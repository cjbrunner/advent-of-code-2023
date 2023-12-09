/**
 Part 1
*/
module.exports.part1 = (input) => {
	let total = 0;
	// e.g. Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
	const lineArray = input.split('\n');
	lineArray.forEach((line) => {
		let subTotal = 0;
		let myCardNums;
		let winNums;
		[winNums, myCardNums] = line
			.split(':')[1]
			.split('|')
			.map((nums) =>
				Array.from(nums.matchAll(/\d+/g)).map((element) => element[0]),
			);
		myCardNums.forEach((myCardNum) => {
			if (winNums.includes(myCardNum)) {
				subTotal += 1;
			}
		});
		const points = subTotal > 0 ? Math.pow(2, subTotal - 1) : 0;
		total += points;
	});
	return total;
};
