// 4. Old Trafford Stadium

// The executive management of Manchester Unite--d FC aims to implement a ticket sales system for the team's matches at Old Trafford Stadium. Develop a ticket purchase system with the following features:

// Membership Discount:
// Users with a Manchester United membership card receive a 15% discount on their total purchase.
// Seating Capacity and Distribution:
// The total seating capacity at Old Trafford is 74,310.
// 5% for VIP boxes, 15% for VIP seats, and 80% for general seating.
// Seat Selection:
// Seats are identified by a ticket number from 1 to 74,310.
// Users can choose their seats.
// The first seats correspond to VIP boxes, the next to the VIP area, and the rest to general seating (considering the percentages).
// Ticket Purchase Limits:
// Users with a membership card can buy up to 10 tickets, while non-members can purchase up to 3 tickets.
// Seat Availability Validation:
// The system must validate if a seat has already been sold to another user and offer a nearby seat if necessary.
// Seat Costs:
// VIP boxes: £1000 per seat.
// VIP seats: £500 per seat.
// General seating: £90 per seat.
// System Workflow:
// Login.
// Confirm membership status.
// Select seats.
// Make payment.
// Generate and issue tickets.
// Remaining Seat Display:
// The system should display the number of available seats after each purchase.

const DISCOUNT = 15;
const GENERAL_SEAT_COST = 90;
const STADIUM_CAPACITY = 20;
const VIP_BOX = 5;
const VIP_BOX_COST = 1000;
const VIP_SEAT = 15;
const VIP_SEAT_COST = 500;
const READLINE = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

let selectedSeat = [];
let isMember = false;
let vipBoxseats = (STADIUM_CAPACITY * VIP_BOX) / 100;
let vipseats = (STADIUM_CAPACITY * VIP_SEAT) / 100;
let ticketLimit;

const users = [
	{
		nam: 'jon',
		pass: '123',
		appointment: [],
	},
	{
		nam: 'Kate Wong',
		pass: '@PASSujhp',
		appointment: [],
	},
];
function login() {
	READLINE.question(
		'\nWELCOME TO OLD TRAFFORD STADIUM\nInsert you user: ',
		user => {
			READLINE.question('\n Enter your password: ', pass => {
				const USER_AUTH = users.filter(
					registeredUser => registeredUser.nam == user
				);
				const PASS_AUTH = USER_AUTH.filter(
					registeredUser => registeredUser.pass == pass
				);

				if (USER_AUTH.length == 0 || PASS_AUTH.length == 0) {
					console.log(`User or password not found`);
					return login();
				}
				// delete USER_AUTH[0].pass;
				membership();
			});
		}
	);
}
function membership() {
	READLINE.question(
		'\nAre you a member of Manchester United?:\n1.- Yes\n2.- No ',
		res => {
			if (res == 1) isMember = true;
			if (res == 2) isMember = false;
			!isMember ? (ticketLimit = 3) : (ticketLimit = 10);
			selectSeat();
		}
	);
}
function selectSeat() {
	if (selectedSeat.length > ticketLimit) {
		console.log('\n ticket limit reached');
	}

	for (let index = 1; index <= STADIUM_CAPACITY; index++) {
		if (selectedSeat.includes(index)) continue;
		console.log(index);
	}

	READLINE.question('\nSelect your seat:\n', seat => {
		let numberSeat = Number(seat);
		if (selectedSeat.includes(numberSeat)) {
			console.log('seat sould');
			let nextSeat;
			let backSeat;
			let down = numberSeat;
			for (
				numberSeat, down;
				numberSeat <= STADIUM_CAPACITY && down > 0;
				numberSeat++, down--
			) {
				if (
					!selectedSeat.includes(down) &&
					!selectedSeat.includes(numberSeat)
				) {
					backSeat = down;
					nextSeat = numberSeat;
					break;
				}
			}
			console.log(`the nearest seats are: ${backSeat} and ${nextSeat}`);
			selectSeat();
		} else {
			selectedSeat.push(Number(seat));

			if (seat >= 1 && seat <= vipBoxseats)
				console.log(
					`payment: $${
						isMember
							? VIP_BOX_COST - (VIP_BOX_COST * DISCOUNT) / 100
							: VIP_BOX_COST
					}`
				);
			if (seat >= vipBoxseats && seat <= vipseats + vipBoxseats)
				console.log(
					`payment: $${
						isMember
							? VIP_SEAT_COST - (VIP_SEAT_COST * DISCOUNT) / 100
							: VIP_SEAT_COST
					}`
				);
			if (seat > vipseats + vipBoxseats)
				console.log(
					`payment: $${
						isMember
							? GENERAL_SEAT_COST - (GENERAL_SEAT_COST * DISCOUNT) / 100
							: GENERAL_SEAT_COST
					}`
				);
			READLINE.question(
				'\nDo you want to buy another ticket?\n1.- Yes\n2.- No ',
				buyMore => {
					console.log(selectedSeat);
					if (buyMore == 1) return selectSeat();
					console.log('\n Thanks for buy in Old Trafford');
				}
			);
		}
	});
}
login();
