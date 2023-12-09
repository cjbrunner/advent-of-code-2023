const { part1 } = require('./part1');
// const { part2 } = require('./part2');

const testCasesPt1 = [['some input', 'some output']];

describe('Day 4, part 1', () => {
	test.each(testCasesPt1)('Input: %s. Output: %s', (input, expected) => {
		expect(part1(input)).toBe(expected);
	});
});

// const testCasesPt2 =	[['some input', 'some output']];

// describe('Day 4, part 2', () => {
// 	test.each(testCasesPt2)('Input: %s. Output: %s', (input, expected) => {
// 		expect(part2(input)).toBe(expected);
// 	});
// });
