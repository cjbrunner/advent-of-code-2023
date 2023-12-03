/**
 Part 2
*/
module.exports.part2 = (input) => {
	const numbers = {
		one: 1,
		two: 2,
		three: 3,
		four: 4,
		five: 5,
		six: 6,
		seven: 7,
		eight: 8,
		nine: 9,
		0: 0,
		1: 1,
		2: 2,
		3: 3,
		4: 4,
		5: 5,
		6: 6,
		7: 7,
		8: 8,
		9: 9,
	};

	let total = 0;
	input.split('\n').forEach((line) => {
		if (line.length < 1) return; // Blank lines bad
		const re = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g;
		const digitsArray = Array.from(line.matchAll(re), (x) => x[1]);
		if (!digitsArray) return; // Null array bad
		const fixedArray = digitsArray.map((entry) => numbers[entry]);
		total += parseInt('' + fixedArray[0] + fixedArray.slice(-1)[0]);
	});
	return total;
};
