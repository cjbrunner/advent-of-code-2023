/**
 Part 1
*/
module.exports.part1 = (input) => {
	// Determine which games would have been possible if the bag had been loaded
	// with only 12 red cubes, 13 green cubes, and 14 blue cubes. What is the sum
	// of the IDs of those games?
	let total = 0;
	input.split('\n').forEach((line) => {
		let roundGood = true;
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
			if (
				colorMapping.red > 12 ||
				colorMapping.green > 13 ||
				colorMapping.blue > 14
			) {
				roundGood = false;
			}
		});
		if (roundGood) total += parseInt(id.split(' ')[1]);
	});
	return total;
};
