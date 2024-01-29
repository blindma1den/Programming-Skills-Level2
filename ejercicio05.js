// 5. Manchester United FC Talent Acquisition System:

// The Manchester United FC is in search of new talents to enhance its player roster.
// The head coach aims to recruit two forwards, two midfielders, a right-back, a defender,
// and a goalkeeper. To achieve this, the club needs to sell some players to fund these
// new signings. Develop a system to assist the head coach in choosing which players
// can be sold based on their market price, salary, position, and performance
// within the club.

// Current Squad:

const GOALKEPPERS = [
	{
		name: 'André Onana',
		Price: 25000000,
		Salary: 15000000,
		Performance: 'Good',
	},
	{
		name: 'Altay Bayindir',
		Price: 5000000,
		Salary: 5000000,
		Performance: 'Normal',
	},
	{
		name: 'Tom Heaton',
		Price: 5000000,
		Salary: 2000000,
		Performance: 'Normal',
	},
];

const DEFENDERS = [
	{
		name: 'Victor Lindelof',
		Price: 10000000,
		Salary: 7000000,
		Performance: 'Normal',
	},
	{
		name: 'Harry Maguire',
		Price: 15000000,
		Salary: 10000000,
		Performance: 'Good',
	},
	{
		name: 'Raphael Varane',
		Price: 15000000,
		Salary: 10000000,
		Performance: 'Good',
	},
	{
		name: 'Lisandro Martínez',
		Price: 15000000,
		Salary: 8000000,
		Performance: 'Good',
	},
	{ name: 'Jonny Evans', Price: 7000000, Salary: 4000000, Performance: 'Good' },
	{
		name: 'Willy Kambwala',
		Price: 4000000,
		Salary: 1000000,
		Performance: 'Normal',
	},
	{
		name: 'Rhys Bennett',
		Price: 4000000,
		Salary: 2000000,
		Performance: 'Normal',
	},
];
const RIGHTSIDE = [
	{
		name: 'Diogo Dalot',
		Price: 40000000,
		Salary: 10000000,
		Performance: 'Good',
	},
	{
		name: 'Aaron Wan Bissaka',
		Price: 30000000,
		Salary: 9000000,
		Performance: 'Normal',
	},
];
const LETFSIDE = [
	{ name: 'Luke Shaw', Price: 40000000, Salary: 16000000, Performance: 'Good' },
	{
		name: 'Sergio Reguilón',
		Price: 20000000,
		Salary: 8000000,
		Performance: 'Normal',
	},
	{
		name: 'Tyrell Malacia',
		Price: 16000000,
		Salary: 7000000,
		Performance: 'Normal',
	},
];
const MIDFIELDERS = [
	{
		name: 'Sofyan Amrabat',
		Price: 25000000,
		Salary: 9000000,
		Performance: 'Normal',
	},
	{
		name: 'Mason Mount',
		Price: 25000000,
		Salary: 12000000,
		Performance: 'Normal',
	},
	{
		name: 'Carlos Casemiro',
		Price: 25000000,
		Salary: 15000000,
		Performance: 'Good',
	},
	{
		name: 'Bruno Fernandes',
		Price: 50000000,
		Salary: 11000000,
		Performance: 'Good',
	},
	{
		name: 'Christian Eriksen',
		Price: 25000000,
		Salary: 8000000,
		Performance: 'Normal',
	},
	{
		name: 'Scott McTominay',
		Price: 40000000,
		Salary: 8000000,
		Performance: 'Good',
	},
	{
		name: 'Hannibal Mejbri',
		Price: 12000000,
		Salary: 2000000,
		Performance: 'Good',
	},
	{
		name: 'Kobbie Mainoo',
		Price: 12000000,
		Salary: 2000000,
		Performance: 'Good',
	},
	{
		name: 'Daniel Gore',
		Price: 9000000,
		Salary: 2000000,
		Performance: 'Normal',
	},
];
const STRIKERS = [
	{
		name: 'Alejandro Garnacho',
		Price: 12000000,
		Salary: 10000000,
		Performance: 'Good',
	},
	{
		name: 'Rasmus Hojlund',
		Price: 20000000,
		Salary: 7000000,
		Performance: 'Good',
	},
	{
		name: 'Marcus Rashford',
		Price: 25000000,
		Salary: 10000000,
		Performance: 'Good',
	},
	{ name: 'Antony', Price: 25000000, Salary: 10000000, Performance: 'Normal' },
	{
		name: 'Anthony Martial',
		Price: 18000000,
		Salary: 4000000,
		Performance: 'Normal',
	},
	{
		name: 'Facundo Pellistri',
		Price: 18000000,
		Salary: 6000000,
		Performance: 'Good',
	},
];

const MARKET_PLAYERS = {
	GOALKEPPERS: [
		{
			name: 'Andriy Lunin',
			Price: 30000000,
			Salary: 10000000,
			Performance: 'Good',
		},
		{
			name: 'Dominic Livakovic',
			Price: 15000000,
			Salary: 9000000,
			Performance: 'Good',
		},
		{
			name: 'Rui Patricio',
			Price: 10000000,
			Salary: 7000000,
			Performance: 'Normal',
		},
		{
			name: 'Yassine Bounou',
			Price: 14000000,
			Salary: 9000000,
			Performance: 'Normal',
		},
	],
	MIDFIELDERS: [
		{
			name: 'Enzo Fernández',
			Price: 35000000,
			Salary: 15000000,
			Performance: 'Good',
		},
		{
			name: 'Jamal Musiala',
			Price: 30000000,
			Salary: 10000000,
			Performance: 'Good',
		},
		{
			name: 'Arda Guler',
			Price: 18000000,
			Salary: 9000000,
			Performance: 'Normal',
		},
	],
	RIGHTSIDE: [
		{
			name: 'Achraf Hakimi',
			Price: 20000000,
			Salary: 15000000,
			Performance: 'Good',
		},
		{
			name: 'Jeremie Frimpong',
			Price: 12000000,
			Salary: 8000000,
			Performance: 'Good',
		},
		{
			name: 'Ronald Araujo',
			Price: 15000000,
			Salary: 10000000,
			Performance: 'Good',
		},
	],
	STRIKERS: [
		{
			name: 'Victor Osimhen',
			Price: 30000000,
			Salary: 12000000,
			Performance: 'Good',
		},
		{
			name: 'Harry Kane',
			Price: 40000000,
			Salary: 15000000,
			Performance: 'Good',
		},
		{
			name: 'Karim Benzema',
			Price: 20000000,
			Salary: 20000000,
			Performance: 'Normal',
		},
	],
};

function selectGK(player, market_player, str) {
	let playerToSell = [];
	for (
		let i = 0, j = 0;
		i < player.length || j < market_player[str].length;
		j++
	) {
		if (j == market_player[str].length) {
			j = 0;
			i++;
		}
		if (player[i] == undefined) continue;
		if (!playerToSell.includes(player[i])) {
			if (
				player[i]?.Performance == 'Normal' &&
				(player[i]?.Salary <= market_player[str][j]?.Salary ||
					player[i]?.Price >= market_player[str][j]?.Price)
			) {
				playerToSell.push(player[i]);
			}
		}
	}
	console.log(playerToSell);
}
selectGK(GOALKEPPERS, MARKET_PLAYERS, 'GOALKEPPERS');
