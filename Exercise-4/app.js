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
UPDATE AVAILABLE SEATS
CALCULATE TOTAL AND PRINT TICKET

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
const ticketsAvailable = document.getElementById('tickets-availables');
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
const summaryContainer = document.getElementById('summary-container');
const ticketsList = document.getElementById('tickets-list');
const totalPrice = document.getElementById('total-price');
const summaryButton = document.getElementById('summary-button');

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

const updateTicketsDOM = () => {
  ticketsAvailable.innerHTML = `Available Seats: ${availableTickets.length}\n Seats sold: ${purchasedTickets.length}`;
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
//Funcion que controla que el usuario no haya comprado
const isTicketAlreadyPurchased = (ticketId) => {
  return currentUser.tickets.some((ticket) => ticket.id === ticketId);
};

// Función para comprar boletos
const buyTicket = (purchased, available, ticket) => {
  const selectedTicket = available.find((elem) => elem.id === ticket);

  if (selectedTicket) {
    if (!isTicketAlreadyPurchased(ticket)) {
      purchased.push(selectedTicket);
      available = available.filter((elem) => elem.id !== ticket);

      return { availableTickets: available, purchasedTickets: purchased };
    } else {
      alert('That ticket was already reserved, please choose another');
    }
  }

  return { availableTickets: available, purchasedTickets: purchased };
};
//Creamos el array de tickets con los 74310 asientos
let availableTickets = fillArray([]);
updateTicketsDOM();
//Funcion para ofrecer asientos cercanos hasta 6 lugares en ambas direcciones.
//Iba a poner que solo ofrezca del mismo tipo (general, vip, etc) pero no terminaba mas
const findNearbySeats = (available, targetSeat) => {
  const nearbySeats = [];
  const maxDistance = 6;

  for (let i = 1; i <= maxDistance; i++) {
    const seatBefore = targetSeat - i;
    const seatAfter = targetSeat + i;

    if (seatBefore > 0 && !isTicketAlreadyPurchased(seatBefore)) {
      nearbySeats.push(seatBefore);
    }

    if (seatAfter <= totalSeats && !isTicketAlreadyPurchased(seatAfter)) {
      nearbySeats.push(seatAfter);
    }

    // Cortamos la ejecución cuando llegue al maximo establecido
    if (nearbySeats.length >= maxDistance) {
      break;
    }
  }

  return nearbySeats;
};

//Escuchamos el boton de isMember
isMemberButton.addEventListener('click', (e) => {
  e.preventDefault();
  toggleShowForm(chooseTicketsContainer, isMemberButton, isMemberSelect);
});

// Escuchamos el click de addTickets.
addTicketsButton.addEventListener('click', (e) => {
  e.preventDefault();
  const purchasedTicketIds = purchasedTickets.map((ticket) => ticket.id);
  availableTickets = availableTickets.filter(
    (ticket) => !purchasedTicketIds.includes(ticket.id)
  );
  //Asignamos la cantidad que puede comprar el usuario
  let maxquantity;
  if (isMemberSelect.value == 'Yes') {
    maxquantity = 10;
  } else {
    maxquantity = 3;
  }
  // Validamos que no pueda comprar mas de las que puede y que elija un numero dentro del rango posible,
  // y que ese número de ticket esté disponible.
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
        //  Si el asiento no disponible, sugerir asientos cercanos
        const nearbySeats = findNearbySeats(
          availableTickets,
          ticketinputSelected
        );
        if (nearbySeats.length > 0) {
          alert(
            `The selected seat is not available. You can reserve one of that nearby seats: (${nearbySeats.join(
              ', '
            )})`
          );
        }
      } else {
        //Si está todo bien, le asignamos la compra. Actualizamos los tickets y se añade al currentUser
        const result = buyTicket(
          purchasedTickets,
          availableTickets,
          ticketinputSelected
        );

        //Debería en realidad hacer que los tickets estén asociados al usuario para que si viene otro user
        // no compre todos los tickets del usuario anterior inclusive. Pero sería mucho trabajo adicional.

        purchasedTickets = result.purchasedTickets;
        availableTickets = result.availableTickets;
        currentUser.tickets.length = 0;
        currentUser.tickets.push(...result.purchasedTickets);
        chooseTicketsInput.value = '';
        chooseTicketsButton.style.display = 'block';
        updateTicketsDOM();
        count++;
      }
    }
  } else {
    alert('You have reached the maximum quantity of tickets.');
    addTicketsButton.style.display = 'none';
  }
});

chooseTicketsButton.addEventListener('click', (e) => {
  e.preventDefault();
  addTicketsButton.style.display = 'none';
  ticketsContainer.style.display = 'none';
  toggleShowForm(summaryContainer, chooseTicketsButton, chooseTicketsInput);
  ticketsList.innerHTML = '';
  currentUser.tickets.forEach((ticket) => {
    const li = document.createElement('li');
    li.textContent = `Ticket ID: ${ticket.id}, Price: ${ticket.price}, Seat Type: ${ticket.seatType}`;
    ticketsList.appendChild(li);
  });
  //Hacemos un reduce que nos devuelva la sumatoria de todos los prices de cada ticket.
  const toPay = currentUser.tickets.reduce(
    (total, ticket) => total + ticket.price,
    0
  );
  totalPrice.innerHTML = `Total Price of your tickets is: ${toPay}`;
});

summaryButton.addEventListener('click', () => {
  alert('Thanks for buy tickets. Enjoy the Game!');
});
