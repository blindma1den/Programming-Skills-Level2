// 2. Lottery System:

// The lottery system produces results consisting of 4 digits + 1 letter, e.g., 0345F. Develop a lottery ticket purchase system with the following features:
// Users can choose from the following tickets:
// 5678B
// 9876C
// 2345D
// 6789E
// 3456F
// 8765G
// 4321H
// 7890J
// 5432K
// 2109L
// 8765M
// 1357N
// 2468P
// 6543Q
// 7891R
// 3579S
// 9821T
// 4682U
// 5763V
// 1234A

// -Users can buy a minimum of 1 and a maximum of 2 tickets.
// -Payment is accepted in cash, and each ticket costs 1 USD.
// -After choosing tickets and quantity, the system prompts the user to pay in cash or by bank card.
// -This system only accepts 1 USD and 5 USD bills. The user must choose the bill to use for payment, and the system should return the change if applicable.
// -After payment, the ticket is issued.
// -The user returns to the main menu to play the lottery.
// -The lottery system generates 1 random ticket code.

const TICKETS = [
	'5678B',
	'9876C',
	'2345D',
	'6789E',
	'3456F',
	'8765G',
	'4321H',
	'7890J',
	'5432K',
	'2109L',
	'8765M',
	'1357N',
	'2468P',
	'6543Q',
	'7891R',
	'3579S',
	'9821T',
	'4682U',
	'5763V',
	'1234A',
];
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});
let ticket_selected = [];

function welcome() {
	readline.question(
		'\nWelcome to the Lottery System\nPlease choose your option:\n1.- Buy a ticket\n2.- Play the lottery\n',
		op => {
			if (op == 1) return buyTickets();
			if (op == 2) return playLottery();
		}
	);
}

function buyTickets() {
	if (ticket_selected.length == 2) {
		console.log('\nmaximun of tickets is 2');
		return payment();
	}
	TICKETS.forEach((value, key) => {
		console.log(`${key}.- ${value}`);
	});
	readline.question('\nPlease choose the option ticket to buy:\n', ticket => {
		ticket_selected.push(TICKETS[ticket]);
		console.log('your ticket is: ' + TICKETS[ticket]);
		readline.question(
			'\nDo yopu want buy another ticket?:\n1.- Yes\n2.- No\n',
			res => {
				if (res == 1) return buyTickets();
				if (res == 2) return payment();
			}
		);
	});
}
function payment() {
	readline.question(
		'\nPayment system\n The system only accepts 1 and 5 USD bills, insert your bill:\n',
		bill => {
			const newBill = Number(bill);
			if (newBill !== 1 && newBill !== 5) return payment();
			if (newBill >= ticket_selected.length)
				console.log(`\nYour refund is: USD${newBill - ticket_selected.length}`);
			return playLottery();
		}
	);
}
function playLottery() {
	if (ticket_selected.length == 0) return buyTickets();
	console.log('WELCOME TO THE LOTTERY:\n');
	const lottery_ticket = Math.floor(Math.random() * TICKETS.length);
	console.log(`tHE WINNER IS: ${TICKETS[lottery_ticket]}`);
	readline.close();
}

welcome();
