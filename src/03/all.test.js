const { part1 } = require('./part1');
const { part2 } = require('./part2');

const testCasesPt1 = [
	[
		`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`,
		4361,
	],
];

describe('Day 3, part 1', () => {
	test.each(testCasesPt1)('Input: %s. Output: %s', (input, expected) => {
		expect(part1(input)).toBe(expected);
	});
});

const testCasesPt2 = [[testCasesPt1[0][0], 467835]];

describe('Day 3, part 2', () => {
	test.each(testCasesPt2)('Input: %s. Output: %s', (input, expected) => {
		expect(part2(input)).toBe(expected);
	});
});
