// 1. The Big Six of the English Premier League is composed of six teams: Manchester United, Liverpool, Arsenal, Chelsea, Manchester City, and Tottenham Hotspur.
//  Develop a system that generates between 0, 1, and 3 points randomly for each team.
//  The winner of the Big Six will be the team with the highest accumulated points at the end.
//  Each team will play 3 matches against every opponent.
//  After the matches, the system will display on-screen the team standings from highest to lowest points.

const teams = [
	'Liverpool',
	'Manchester United',
	'Arsenal',
	'Chelsea',
	'Manchester City',
	'Tottenham Hotspur',
];
const results = {
	'Manchester United': 0,
	'Manchester United': 0,
	Liverpool: 0,
	Arsenal: 0,
	Chelsea: 0,
	'Manchester City': 0,
	'Tottenham Hotspur': 0,
};
const SCORE_GENERATOR = () => {
	let x = Math.floor(Math.random() * (3 - 0 + 1) + 0);
	if (x == 2) return SCORE_GENERATOR();
	return x;
};

const START_MATCH = () => {
	for (let i = 0, j = teams.length - 1, c = 0; i <= teams.length - 1; ) {
		if (i === j) j--;

		if (j < 0) {
			console.log('-------fixture: ' + Number(i + 1) + '-------');
			i++;
			j = teams.length - 1;
		}

		if (i > teams.length - 1) return;
		results[teams[j]] += Number(SCORE_GENERATOR());
		results[teams[i]] += Number(SCORE_GENERATOR());

		if (i === j) j--;
		console.log(teams[i] + ' vs ' + teams[j]);
		j--;
	}
};
START_MATCH();
const highScore = () => {
	let cont = 0;
	let res = '';
	for (let r in results) {
		if (results[r] >= cont) {
			cont = results[r];
			res = `The winner is ${r} with ${results[r]} pts.`;
		} else {
			continue;
		}
	}
	return res;
};
console.log(results);
console.log(highScore());
