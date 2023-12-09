/**
 Part 2
*/
module.exports.part2 = (input) => {
	let lineNum = 0;
	const re = /\d+/g;
	// Let's turn our input into a giant 2D array
	const lineArray = input.split('\n');
	const bigArr = lineArray.map((line) => Array.from(line));

	const findNumbers = () => {
		const bigNums = {};
		let lineNum = 0;
		lineArray.forEach((line) => {
			const lineNumbers = line.matchAll(re)
				? Array.from(line.matchAll(re))
				: [];
			lineNumbers.forEach((num) => {
				// Nothing there for this number yet
				if (!bigNums.hasOwnProperty(num[0])) bigNums[num[0]] = [];
				bigNums[num[0]].push({
					row: lineNum,
					colStart: num.index,
					colEnd: num.index + (num[0].length - 1),
				});
			});
			lineNum += 1;
		});
		return bigNums;
	};

	const starLocations = [];
	// Find stars
	bigArr.forEach((line) => {
		let colNum = 0;
		line.forEach((item) => {
			if (item === '*') starLocations.push([lineNum, colNum]);
			colNum += 1;
		});
		lineNum += 1;
	});

	const numLocations = findNumbers();
	const gears = [];

	starLocations.forEach((starLoc) => {
		const starRow = parseInt(starLoc[0]);
		const starCol = parseInt(starLoc[1]);
		const gearPair = [];
		Object.entries(numLocations).forEach(([num, numLocArr]) => {
			numLocArr.forEach((numLocObj) => {
				// Star near/on row of number
				if (numLocObj.row >= starRow - 1 && numLocObj.row <= starRow + 1) {
					const cs = numLocObj.colStart;
					const ce = numLocObj.colEnd;
					if (
						ce == starCol - 1 ||
						ce == starCol ||
						ce == starCol + 1 ||
						cs == starCol - 1 ||
						cs == starCol ||
						cs == starCol + 1
					) {
						gearPair.push(num);
					}
				}
			});
		});
		if (gearPair.length > 1) gears.push(gearPair);
	});

	let ratioTotal = 0;
	gears.forEach((gearPair) => {
		console.log(gearPair);
		ratioTotal += gearPair[0] * gearPair[1];
	});

	return ratioTotal;
};
