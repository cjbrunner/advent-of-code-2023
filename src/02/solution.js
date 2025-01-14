const { part1 } = require('./part1');
const { part2 } = require('./part2');

const input = `Game 1: 4 red, 5 blue, 4 green; 7 red, 8 blue, 2 green; 9 blue, 6 red; 1 green, 3 red, 7 blue; 3 green, 7 red
Game 2: 20 blue, 12 green, 2 red; 1 red, 2 green, 20 blue; 1 red, 14 green, 17 blue; 7 green, 17 blue
Game 3: 3 green, 4 red; 10 red, 2 blue, 5 green; 9 red, 3 blue, 5 green
Game 4: 10 green, 1 blue, 3 red; 1 red, 12 green, 1 blue; 1 blue, 2 green; 4 green, 3 red
Game 5: 3 green, 8 red, 1 blue; 4 blue, 7 red, 3 green; 2 green, 2 blue, 13 red
Game 6: 1 green, 4 red, 2 blue; 9 blue, 1 red; 2 green, 4 blue; 4 red, 11 blue; 9 blue, 3 red
Game 7: 13 red, 18 green, 4 blue; 15 red, 5 blue, 14 green; 15 red, 11 green, 7 blue; 3 green, 3 red, 7 blue; 3 red, 5 blue, 9 green
Game 8: 1 red, 4 green, 4 blue; 15 red, 8 green; 6 green, 1 blue, 15 red; 6 blue, 15 green, 6 red; 2 red, 1 blue, 9 green
Game 9: 18 red, 8 green; 2 green, 18 red, 9 blue; 14 red, 2 blue, 10 green; 4 red, 2 green, 4 blue; 4 blue, 12 red, 9 green
Game 10: 4 green, 1 blue; 3 blue, 2 green, 12 red; 15 blue, 12 red, 2 green; 10 red, 8 green, 11 blue; 8 green, 10 blue, 10 red
Game 11: 5 blue, 7 red; 2 green, 1 blue, 12 red; 7 green, 8 red, 4 blue; 3 blue, 8 red; 6 green, 9 red, 3 blue; 11 green, 12 red
Game 12: 1 blue, 3 green; 3 red, 6 green; 2 green; 1 red, 6 green; 1 green, 3 red; 1 blue, 2 green, 2 red
Game 13: 3 blue, 12 red, 12 green; 5 green, 3 blue, 2 red; 3 green, 7 blue, 13 red; 4 green, 7 red; 3 green, 3 blue, 5 red
Game 14: 14 blue, 1 red, 6 green; 3 red, 9 blue; 5 green, 11 blue, 3 red
Game 15: 9 blue, 2 red, 5 green; 8 blue, 3 red, 6 green; 17 red, 2 green, 7 blue; 11 red, 2 green, 9 blue; 1 red, 4 green
Game 16: 2 green, 2 red; 3 red, 2 blue, 2 green; 5 red, 2 blue, 2 green; 2 red; 2 green, 7 blue, 4 red
Game 17: 8 blue, 6 green, 11 red; 5 red, 2 green, 2 blue; 4 green, 15 red, 10 blue; 6 blue, 2 red, 6 green
Game 18: 1 green, 11 blue, 1 red; 1 green, 1 blue, 4 red; 10 blue, 2 green; 3 green, 12 red; 4 green, 8 red, 5 blue; 13 blue, 4 red, 3 green
Game 19: 5 green, 3 blue, 5 red; 5 green, 15 blue, 10 red; 15 blue, 12 red, 1 green; 7 red, 5 green, 10 blue
Game 20: 4 red, 9 green, 9 blue; 5 red, 10 green, 10 blue; 3 blue, 11 green
Game 21: 13 blue, 9 green, 13 red; 1 blue, 11 green, 14 red; 14 blue, 8 red, 9 green
Game 22: 8 red, 12 blue, 6 green; 12 blue, 10 green, 4 red; 14 green, 16 blue, 3 red; 2 blue, 8 red, 5 green; 12 blue, 9 green, 9 red
Game 23: 9 red; 3 blue, 11 red; 2 red, 7 blue; 5 red, 4 blue, 1 green; 4 red; 7 blue, 12 red
Game 24: 5 green, 7 blue, 3 red; 5 green, 3 red, 13 blue; 11 red, 2 green, 4 blue; 11 blue, 1 green, 13 red; 3 green, 9 red, 5 blue; 1 green, 9 red, 17 blue
Game 25: 5 blue, 12 green, 4 red; 2 blue, 2 red, 9 green; 8 blue, 16 green, 4 red
Game 26: 7 blue, 2 green; 5 blue, 1 green; 1 red, 2 green; 8 blue, 1 green
Game 27: 1 blue, 4 red, 17 green; 3 red, 2 blue; 18 green, 1 blue; 3 red, 7 green; 1 green, 3 red, 3 blue
Game 28: 6 green, 1 blue, 7 red; 10 red, 9 green; 10 red, 9 green, 1 blue; 3 blue, 19 red; 12 red, 3 blue, 14 green
Game 29: 4 red, 7 green, 11 blue; 2 red, 3 green, 1 blue; 1 red, 5 blue, 18 green; 11 green, 4 red, 6 blue; 6 blue, 3 red, 11 green; 5 blue, 17 green, 2 red
Game 30: 1 red, 15 green, 1 blue; 2 blue, 1 red, 12 green; 6 red, 8 green, 1 blue; 2 blue, 4 red, 11 green; 2 blue, 5 green, 5 red
Game 31: 9 blue, 6 red, 7 green; 4 green, 2 red; 11 blue
Game 32: 15 green, 1 blue, 11 red; 1 blue, 7 red, 13 green; 2 blue, 9 green, 3 red; 2 blue, 13 red, 18 green
Game 33: 2 red, 2 green, 4 blue; 2 green, 7 blue, 4 red; 3 blue, 2 green
Game 34: 1 green, 3 red; 13 green; 2 red, 14 green; 2 blue, 14 green; 6 green, 3 red, 1 blue
Game 35: 2 blue; 8 blue, 3 green, 3 red; 15 blue, 2 red; 12 blue, 1 green; 3 blue, 2 green; 2 red, 8 blue
Game 36: 4 green, 1 red, 1 blue; 16 green, 3 red; 18 green, 4 red; 4 green
Game 37: 6 red, 1 blue, 3 green; 2 blue, 3 red, 2 green; 2 red, 1 blue, 9 green; 2 red, 8 green; 2 blue, 2 red; 1 red, 1 green, 1 blue
Game 38: 9 red, 1 green; 14 red, 1 green; 6 green, 3 red; 1 blue, 3 red, 5 green; 5 green, 12 red
Game 39: 13 blue, 2 red, 3 green; 5 green, 8 blue, 8 red; 11 blue, 7 green
Game 40: 1 green, 7 blue, 6 red; 4 green, 1 red, 5 blue; 7 blue, 2 red
Game 41: 12 red, 5 green, 6 blue; 12 blue, 7 red, 4 green; 7 green, 9 blue, 14 red; 1 green, 6 blue, 4 red; 1 blue, 6 red, 6 green
Game 42: 9 red, 2 blue, 11 green; 5 blue, 6 red, 7 green; 5 blue, 2 red, 3 green; 7 green, 7 blue, 1 red; 11 green, 12 blue, 4 red; 2 blue, 6 red, 10 green
Game 43: 8 green, 7 red, 7 blue; 7 red, 11 green, 2 blue; 17 red, 12 blue; 10 blue, 5 green, 3 red; 2 green, 4 red; 16 green, 10 red, 2 blue
Game 44: 6 blue, 16 green; 7 green, 4 blue, 6 red; 8 red, 5 blue, 7 green; 6 green, 6 red, 6 blue; 10 green, 1 red, 9 blue
Game 45: 10 blue, 4 green, 10 red; 5 green, 9 blue, 3 red; 8 blue, 9 green, 10 red; 7 green, 4 red, 3 blue; 2 blue, 5 green, 9 red
Game 46: 11 green, 1 blue, 3 red; 3 green, 4 blue, 5 red; 5 blue, 10 green, 3 red; 17 red, 4 blue, 5 green; 8 red, 1 blue, 6 green; 9 red, 9 green, 1 blue
Game 47: 2 blue, 16 green, 11 red; 1 blue, 7 green, 4 red; 1 green, 3 blue, 9 red; 2 blue, 8 green, 1 red; 14 red, 3 blue, 5 green
Game 48: 6 blue, 7 red; 2 green, 1 red, 1 blue; 2 green, 3 red, 2 blue; 5 blue, 8 red; 4 red, 5 green, 1 blue
Game 49: 7 green, 3 blue, 11 red; 5 green, 10 red, 8 blue; 6 green, 18 red; 7 green, 9 blue, 14 red; 5 green, 6 blue, 3 red
Game 50: 3 green, 1 red, 6 blue; 1 blue, 4 green, 13 red; 12 blue, 10 green, 3 red; 18 blue, 4 green, 14 red; 4 green, 6 blue, 7 red
Game 51: 2 green, 4 red; 1 green, 12 red; 1 blue, 12 red, 5 green; 1 blue, 9 red, 2 green
Game 52: 1 red, 2 green, 9 blue; 6 blue, 5 green, 3 red; 3 red, 8 blue, 4 green; 4 green, 1 blue, 4 red; 2 green, 5 blue; 2 red, 3 green, 6 blue
Game 53: 1 blue, 16 red; 8 red, 4 green; 2 green, 3 red; 2 green, 2 blue; 20 red, 4 green, 1 blue; 1 green, 15 red
Game 54: 1 red, 8 blue; 2 red, 1 green, 6 blue; 9 red, 9 blue
Game 55: 1 red, 6 green, 1 blue; 1 green, 1 red, 2 blue; 1 red, 5 blue; 1 green, 1 red; 2 green
Game 56: 8 blue, 8 green, 7 red; 3 red, 1 blue, 9 green; 4 green, 5 red, 12 blue
Game 57: 11 green, 16 blue, 5 red; 9 green, 13 blue; 16 blue, 4 red, 15 green; 17 green, 7 red, 15 blue; 1 red, 9 green, 5 blue; 18 blue
Game 58: 2 green, 2 blue, 1 red; 7 green, 3 red, 5 blue; 6 green, 1 blue, 2 red; 5 green, 4 blue; 2 blue, 6 green
Game 59: 8 green, 11 blue; 13 blue, 4 green, 3 red; 6 green, 19 blue, 14 red
Game 60: 6 red, 4 green, 4 blue; 12 green, 2 blue, 13 red; 2 green, 1 red; 3 green, 9 red; 1 red, 1 blue, 2 green
Game 61: 10 green, 1 blue, 1 red; 11 green, 7 blue; 2 red, 3 green, 6 blue
Game 62: 5 green, 7 blue, 3 red; 9 blue, 7 green, 3 red; 5 red, 2 green, 12 blue; 14 blue, 10 red, 7 green; 3 blue, 1 green, 10 red
Game 63: 1 red, 4 green, 6 blue; 2 blue, 14 red, 1 green; 1 red, 4 green, 3 blue; 1 red, 2 blue, 1 green; 4 blue, 11 red, 6 green; 3 green, 7 blue, 1 red
Game 64: 14 red, 4 green, 5 blue; 7 red, 5 green, 6 blue; 8 blue, 8 red, 1 green
Game 65: 3 blue, 6 green, 1 red; 2 blue, 10 green; 16 green, 1 blue, 1 red; 20 green
Game 66: 7 red, 4 blue; 4 blue, 8 red; 2 blue, 3 green, 7 red; 7 red, 1 green, 4 blue; 3 green, 5 red
Game 67: 2 green, 14 red, 5 blue; 20 red, 15 blue, 2 green; 15 blue, 15 red, 1 green
Game 68: 6 green, 9 red, 7 blue; 3 green, 9 red, 13 blue; 9 blue, 4 red; 2 red, 4 blue; 6 green, 9 red; 2 green, 6 blue
Game 69: 8 green, 1 blue, 11 red; 7 blue, 2 red, 11 green; 7 blue, 14 green; 2 red, 10 blue, 8 green; 14 red, 4 green, 5 blue; 16 red, 5 blue, 7 green
Game 70: 7 green, 11 red; 11 green, 2 blue; 11 green, 17 red, 8 blue; 4 green, 7 blue
Game 71: 4 blue, 4 red, 2 green; 2 green, 6 red, 5 blue; 1 green, 2 red; 2 green, 6 blue, 2 red; 2 green
Game 72: 1 green, 1 red, 1 blue; 1 green, 4 red, 1 blue; 2 green, 1 blue, 5 red; 3 red; 2 green, 1 blue, 1 red
Game 73: 10 blue, 2 green, 3 red; 13 blue, 13 green, 4 red; 2 red, 8 green; 11 green, 1 red, 1 blue; 14 green, 15 blue, 4 red
Game 74: 3 green, 1 blue, 7 red; 15 green, 4 red, 1 blue; 3 red, 6 green
Game 75: 15 red; 15 red, 4 blue; 14 red, 3 blue, 1 green; 8 red, 1 green, 2 blue; 1 green, 13 red, 1 blue
Game 76: 4 blue, 7 green, 1 red; 1 red, 1 green, 10 blue; 2 green, 3 blue; 9 green; 4 green, 11 blue; 6 blue, 3 green
Game 77: 2 red, 8 blue, 12 green; 10 green, 2 blue; 7 green, 1 blue, 4 red; 3 green, 2 red; 13 green, 4 blue, 3 red
Game 78: 8 blue, 2 green; 1 green, 5 blue, 2 red; 3 red, 3 green; 3 blue, 1 red, 5 green; 3 blue, 4 green, 3 red; 3 red
Game 79: 8 green, 5 red, 2 blue; 1 blue, 6 red; 9 green, 2 red; 1 blue, 8 green, 8 red; 6 green, 1 red; 2 red, 9 green
Game 80: 2 blue, 11 red, 15 green; 6 blue, 9 red, 19 green; 16 green, 3 red
Game 81: 15 blue, 18 red; 18 red, 2 green; 7 red, 2 green, 11 blue; 17 blue, 8 red; 8 green, 8 red; 2 red, 10 green
Game 82: 6 blue, 1 red; 2 red, 5 green, 8 blue; 3 blue, 5 green; 1 green, 2 red, 2 blue; 2 red, 4 green, 5 blue
Game 83: 1 red, 16 green, 7 blue; 1 blue, 4 red, 4 green; 4 blue, 5 red, 1 green; 1 red, 7 blue, 11 green; 6 red, 7 blue, 2 green
Game 84: 3 red, 4 green, 16 blue; 3 blue, 2 green, 2 red; 10 green, 15 blue, 3 red
Game 85: 7 red, 2 blue, 15 green; 1 red, 12 green, 6 blue; 5 red, 16 green, 1 blue; 8 blue, 10 green, 3 red; 3 blue, 2 red; 5 blue, 16 green, 4 red
Game 86: 10 red, 3 blue, 4 green; 1 red, 2 blue, 3 green; 15 red, 1 blue; 2 green, 2 red, 2 blue; 4 red, 4 green, 1 blue; 3 green, 2 red, 3 blue
Game 87: 19 blue, 2 green; 12 blue; 15 red, 2 green, 20 blue; 14 blue, 9 red; 6 blue, 3 green
Game 88: 19 green, 4 red; 2 green, 7 blue, 17 red; 7 blue, 9 green, 8 red; 9 blue, 5 red, 14 green; 11 red, 9 blue, 19 green
Game 89: 20 blue, 13 green; 4 green, 5 red, 14 blue; 3 blue; 4 green, 5 blue; 3 red, 6 blue, 7 green
Game 90: 1 blue, 12 red; 3 green, 9 blue, 8 red; 2 blue, 3 green, 10 red; 8 blue, 5 red, 1 green
Game 91: 4 blue, 2 red, 5 green; 5 blue, 5 green, 2 red; 3 blue, 14 green, 3 red; 8 green, 1 red, 8 blue; 8 green, 2 red, 3 blue; 19 green, 8 blue, 10 red
Game 92: 11 green, 8 red, 5 blue; 12 green, 14 blue, 11 red; 4 green, 16 red
Game 93: 13 blue, 3 red, 3 green; 2 green, 6 blue, 3 red; 2 red, 19 blue, 5 green
Game 94: 5 green, 7 red, 10 blue; 5 blue, 8 red, 8 green; 5 blue, 6 red, 4 green; 12 blue, 9 red, 4 green; 6 blue, 5 green, 5 red; 8 green, 10 red
Game 95: 1 red, 4 green, 10 blue; 7 blue, 5 green, 3 red; 13 blue, 2 red, 4 green
Game 96: 2 green, 1 red; 5 green, 10 blue; 3 blue, 5 green; 1 red; 2 blue, 6 green
Game 97: 6 green, 12 red, 8 blue; 4 green, 7 red, 7 blue; 1 green, 4 red, 9 blue; 7 red, 4 green; 6 blue, 10 red, 15 green
Game 98: 3 green, 5 red; 12 red, 11 green, 1 blue; 16 red, 4 green, 1 blue
Game 99: 8 blue, 7 green; 1 green, 5 red, 3 blue; 7 green, 1 red, 2 blue; 5 green, 3 red, 12 blue; 2 green, 7 blue, 3 red
Game 100: 4 blue, 1 green; 13 red, 2 blue; 16 red; 15 red, 2 blue; 9 red, 1 green, 1 blue; 7 red, 4 blue`;

console.log('Part 1:', part1(input));
console.log('Part 2:', part2(input));
