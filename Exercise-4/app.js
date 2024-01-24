/* 
4. Old Trafford Stadium
The executive management of Manchester United FC aims to implement a ticket sales system
for the team's matches at Old Trafford Stadium. Develop a ticket purchase system with the following features:
Membership Discount:
Users with a Manchester United membership card receive a 15% discount on their total purchase.
Seating Capacity and Distribution:
The total seating capacity at Old Trafford is 74,310.
5% for VIP boxes, 15% for VIP seats, and 80% for general seating.
Seat Selection:
Seats are identified by a ticket number from 1 to 74,310.
Users can choose their seats.
The first seats correspond to VIP boxes, the next to the VIP area, and the rest to general seating
 (considering the percentages).
Ticket Purchase Limits:
Users with a membership card can buy up to 10 tickets, while non-members can purchase up to 3 tickets.
Seat Availability Validation:
The system must validate if a seat has already been sold to another user and offer a nearby seat if necessary.
Seat Costs:
VIP boxes: £1000 per seat.
VIP seats: £500 per seat.
General seating: £90 per seat.
System Workflow:
Login.
Confirm membership status.
Select seats.
Make payment.
Generate and issue tickets.
Remaining Seat Display:
The system should display the number of available seats after each purchase.

LOGIN * DONE
IS MEMBER? YES: 15% DISCOUNT 
SELECT SEAT:
TOTAL SEATS: 74310 (100%) - ORDER: VIP BOXES (5%) - VIP SEATS (15%) - GENERAL SEATS (80%)
PURCHASE : IS MEMBER ? 10 TICKETS : 3 TICKETS. IF SEAT IS OCCUPIED, OFFER NEARBY SEATS AS RECOMMENDATION
VIP BOX £1000 - VIP SEAT £500  - GENERAL £90
CALCULATE TOTAL AND PRINT TICKET
UPDATE AVAILABLE SEATS
*/

//login variables
const loginForm = document.querySelector('.form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const formContainer = document.getElementById('form-container');
const logoutButton = document.getElementById('logout-button');
let usersArray = [];
let wrongPasswordTimes = 0;
let currentUser;
const maxWrongAttempts = 3;

//Ticket variables
let totalSeats = 74310;

let count = 0;
let purchasedTickets = [];
const vipBoxPrice = 1000;
const vipSeatPrice = 500;
const generalSeatPrice = 90;

const ticketsContainer = document.getElementById('tickets-container');
const isMemberContainer = document.getElementById('is-member-container');
const isMemberSelect = document.getElementById('is-member-select');
const isMemberButton = document.getElementById('is-member-button');
const chooseTicketsContainer = document.getElementById(
  'choose-tickets-container'
);
const chooseTicketsInput = document.getElementById('choose-tickets-input');
const addTicketsButton = document.getElementById('add-ticket-button');
const chooseTicketsButton = document.getElementById('choose-tickets-button');

//Funcion de fetch
const fetchJson = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
//FETCH USERS
fetchJson('./users.json')
  .then((data) => {
    if (data) {
      usersArray = data;
      console.log(usersArray);
    }
  })
  .catch((error) => console.log(error));

//LOGIN/LOGOUT PROCESS
//Authenticate Function with lock at third wrong try
const authenticate = () => {
  let username = usernameInput.value;
  let password = passwordInput.value;

  currentUser = usersArray.find((user) => user.username === username);

  if (!currentUser) {
    console.log('Invalid username or password.');
    return false;
  }
  if (currentUser.isLocked) {
    console.log('User is locked.');
    return false;
  }

  if (username === currentUser.username && password === currentUser.password) {
    console.log('Authentication successful.');
    showOperations();
    return true;
  } else {
    wrongPasswordTimes = wrongPasswordTimes + 1;
    console.log('Invalid username or password.');
    console.log(`Attempts remaining: ${maxWrongAttempts - wrongPasswordTimes}`);

    if (wrongPasswordTimes >= maxWrongAttempts) {
      currentUser.isLocked = true;
      console.log(
        'You have exceeded the number of tries. Please try again later.'
      );
      return false;
    }
  }
};
//Hide and unhide operation if logged (lo vengo reciclando del lvl0)
const showOperations = () => {
  loginForm.style.display = 'none';
  ticketsContainer.style.display = 'flex';
  usernameInput.value = '';
  passwordInput.value = '';
};
//FUNCION LOGOUT
const logout = (e) => {
  e.preventDefault();
  currentUser = null;
  loginForm.style.display = 'block';
  ticketsContainer.style.display = 'none';
  console.log('Logged out.');
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  authenticate();
};
loginForm.addEventListener('submit', handleFormSubmit);
logoutButton.addEventListener('click', logout);

//TICKET SYSTEM

const toggleShowForm = (container = null, button = null, select = null) => {
  container !== null
    ? container.style.display == 'none'
      ? (container.style.display = 'flex')
      : (container.style.display = 'none')
    : (container = null);
  button?.style.display == 'none'
    ? (button.style.display = 'flex')
    : (button.style.display = 'none');
  select?.disabled == false
    ? (select.disabled = true)
    : (select.disabled = false);
};

const fillArray = (array) => {
  array.length = 0;
  for (let i = 1; i <= totalSeats; i++) {
    let price;
    let seatType;
    if (i >= 14862) {
      price = 90;
      seatType = 'General Seat';
    } else if (i > 3716) {
      price = 500;
      seatType = 'VIP Seat';
    } else {
      price = 1000;
      seatType = 'VIP Boxes';
    }
    let ticket = { id: i, price, seatType };
    array.push(ticket);
  }

  return array;
};

const buyTicket = (purchased, available, ticket) => {
  const selectedTicket = available.find((elem) => elem.id === ticket);

  if (selectedTicket) {
    purchased.push(selectedTicket);
    available = available.filter((elem) => elem.id !== ticket);
    console.log(available);
    console.log(purchased);
    return { availableTickets: available, purchasedTickets: purchased };
  }

  return { availableTickets: available, purchasedTickets: purchased };
};

let availableTickets = fillArray([]);

//Escuchamos el boton de isMember
isMemberButton.addEventListener('click', (e) => {
  e.preventDefault();
  toggleShowForm(chooseTicketsContainer, isMemberButton, isMemberSelect);
});

// Escuchamos el click de addTickets

addTicketsButton.addEventListener('click', (e) => {
  e.preventDefault();
  const purchasedTicketIds = purchasedTickets.map((ticket) => ticket.id);
  availableTickets = availableTickets.filter(
    (ticket) => !purchasedTicketIds.includes(ticket.id)
  );
  let maxquantity;
  if (isMemberSelect.value == 'Yes') {
    maxquantity = 10;
  } else {
    maxquantity = 3;
  }

  if (count < maxquantity) {
    let ticketinputSelected = Number(chooseTicketsInput.value);
    if (
      ticketinputSelected === '' ||
      ticketinputSelected > 73410 ||
      ticketinputSelected === 0
    ) {
      alert('Please enter a valid number of ticket between 1 and 74310');
    } else {
      if (purchasedTicketIds.includes(ticketinputSelected)) {
        alert('That ticket was reserved, please choose another');
      } else {
        const result = buyTicket(
          purchasedTickets,
          availableTickets,
          ticketinputSelected
        );
        purchasedTickets = result.purchasedTickets;
        availableTickets = result.availableTickets;
        currentUser.tickets.push(...result.purchasedTickets);
        chooseTicketsInput.value = '';
        chooseTicketsButton.style.display = 'block';
        count++;
      }
    }
  } else {
    alert('You have reached the maximum quantity of tickets.');
  }
});
