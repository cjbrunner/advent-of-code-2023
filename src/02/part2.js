/**
 Part 2
*/
module.exports.part2 = (input) => {
	let total = 0;
	input.split('\n').forEach((line) => {
		const maxColors = { red: 0, green: 0, blue: 0 };
		if (line.length < 1) return; // Blank lines bad
		const [id, game] = line.split(':');
		const rounds = game.split(';');
		rounds.forEach((round) => {
			const colorMapping = { red: 0, green: 0, blue: 0 };
			round
				.split(',')
				.map((color) => color.trim().split(' '))
				.forEach((elem) => {
					colorMapping[elem[1]] = parseInt(elem[0]);
				});
			for (const [key, value] of Object.entries(colorMapping)) {
				if (colorMapping[key] > maxColors[key]) maxColors[key] = value;
			}
		});
		let power = 1;
		Object.values(maxColors).forEach((colorMaxVal) => (power *= colorMaxVal));
		total += power;
	});
	return total;
};
