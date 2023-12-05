/**
 Part 2
*/
module.exports.part2 = (input) => {
	const helper = (lineArray, lineNum, index, len) => {
		// Being extra verbose in this function to improve readability
		const re = /\*/g; // All our special symbols
		const aboveLineNum = Math.max(lineNum - 1, 0); // Don't go beyond the end of the array.  Just scan the current line--it won't hurt anything
		const belowLineNum = Math.min(lineNum + 1, lineArray.length - 1); // Don't go beyond the end of the array.  Just scan the current line--it won't hurt anything
		const start = Math.max(index - 1, 0); // Keep the start of the string index positive
		const end = len + 2; // Length of the string +1 on each end for diagnal matches
		const aboveLine = lineArray[aboveLineNum].substr(start, len + 2);
		const belowLine = lineArray[belowLineNum].substr(start, len + 2);
		const above = Boolean(aboveLine.search(re) > -1);
		const below = Boolean(belowLine.search(re) > -1);
		return above || below;
	};

	let total = 0;
	let lineNum = 0;
	const lineArray = input.split('\n');
	lineArray.forEach((line) => {
		const re = /\d+/g;
		const arr = Array.from(line.matchAll(re));
		arr.forEach((num) => {
			const index = parseInt(num['index']);
			const number = parseInt(num[0]);
			const len = num[0].length;
			const before = Boolean(line[Math.max(index - 1, 0)].search(/\*/) > -1);
			const after = Boolean(
				line[Math.min(index + len, line.length - 1)].search(/\*/) > -1,
			);
			const aboveAndBelow = helper(lineArray, lineNum, index, len);
			if (before || after || aboveAndBelow) total += number;
		});
		lineNum += 1;
	});
	return total;
};
