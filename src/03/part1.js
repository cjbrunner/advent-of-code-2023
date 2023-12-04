/**
 Part 1
*/
module.exports.part1 = (input) => {
	const helper = (lineNum, index, len, maxLine) => {
		if (lineNum > 0) {
			if (
				lineArray[lineNum - 1]
					.slice(index - 1, len + 1)
					.search(/[\*@\+\-#\/%\$&=]/g)
			)
				return true;
		}
		if (lineNum < maxLine - 1) {
			if (
				lineArray[lineNum + 1]
					.slice(index - 1, len + 1)
					.search(/[\*@\+\-#\/%\$&=]/g)
			)
				return true;
		}
		return false;
	};

	let total = 0;
	let lineNum = 0;
	const lineArray = input.split('\n');
	lineArray.forEach((line) => {
		// Dumb, brute-foce approach
		const re = /\d+/g;
		const arr = Array.from(line.matchAll(re));
		arr.forEach((num) => {
			const index = parseInt(num['index']);
			const number = parseInt(num[0]);
			const len = number.length;
			console.log(`num: ${number} index: ${index}`);
			if (
				line[index - 1] != '.' || // Char before number not a .
				line[len + 1] != '.' || // Char after number not a .
				helper(lineNum, index, len, lineArray.length)
			)
				total += number;
		});
	});
	return total;
};
