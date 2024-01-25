/* 
2. Lottery System: 

The lottery system produces results consisting of 4 digits + 1 letter, e.g., 0345F.
Develop a lottery ticket purchase system with the following features:

-Users can buy a minimum of 1 and a maximum of 2 tickets.
-Payment is accepted in cash, and each ticket costs 1 USD.
-After choosing tickets and quantity, the system prompts the user to pay in cash or by bank card.
-This system only accepts 1 USD and 5 USD bills.
The user must choose the bill to use for payment, and the system should return the change if applicable.
-After payment, the ticket is issued.
-The user returns to the main menu to play the lottery.
-The lottery system generates 1 random ticket code.

CONDICIONES:
Usuario puede comprar 1 a 2 tickets. Cada ticket cuesta 1USD
Luego de elegir el o los tickets, tiene que elegir forma de pago: cash or Bank Card.
El sistema acepta billetes de 1USD y 5USD. El usuario elige con que paga y el sistema le da el cambio o no.
Luego del pago, se emite el ticket, y el usuario vuelve al menu principal y puede jugar a la loteria
La lotería genera 1 numero al azar de los tickets. Si coincide, gana, sino que se joda.

*HTML*
Container 1 Select con tickets y select si quiere comprar otro ticket o no
Container 2 segundo select con tickets menos el que ya compró.
Container 3 select como va a pagar, efectivo o bank card.
Container 4 si elige efectivo le preguntamos si paga con 1 o 5 usd. Si es banco nada.
Container 5 boton de jugar a la lotería y que diga tus tickets son ....
Container 6 resultado de la loteria e información si gano o perdio

TODO: PONER ALERT SI NO LE ALCANZA EL DINERO, O PARA DARLE EL CAMBIO
*/

let tickets = [
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

//LOTTERY DOM VARIABLES
const lotteryContainer = document.getElementById('lottery-container');
const getTicketOneContainer = document.getElementById('getTicketOne-container');
const getTicketOneSelect = document.getElementById('getTicketOne-select');
const getTicketOneButton = document.getElementById('getTicketOne-button');
const anotherTicketSelect = document.getElementById('anotherTicket-select');
const getTicketTwoContainer = document.getElementById('getTicketTwo-container');
const getTicketTwoSelect = document.getElementById('getTicketTwo-select');
const getTicketTwoButton = document.getElementById('getTicketTwo-button');
const paymentMethodContainer = document.getElementById(
  'paymentMethod-container'
);
const paymentMethodSelect = document.getElementById('paymentMethod-select');
const paymentMethodButton = document.getElementById('paymentMethod-button');
const billContainer = document.getElementById('bill-container');
const billSelect = document.getElementById('bill-select');
const lotteryGameContainer = document.getElementById('lotteryGame-container');
const lotteryGameButton = document.getElementById('lotteryGame-button');
const yourTickets = document.getElementById('yourTickets');
const resultsContainer = document.getElementById('results-container');
const results = document.getElementById('results');
const playerResults = document.getElementById('playerResults');

//Funcion para hacer toggle de las secciones
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

//Funcion para generar un ticket aleatorio ganador que salga del array ticket

const createRandomTicketWinner = (ticket) => {
  const randomTicket = ticket[Math.floor(Math.random() * ticket.length)];
  return randomTicket;
};

//Funcion para crear las options con el contenido de los tickets de forma dinámica
const createOptions = (array, select) => {
  array.forEach((ticket) => {
    const option = document.createElement('option');
    option.value = ticket;
    option.textContent = `${ticket} `;
    select.appendChild(option);
  });
};

createOptions(tickets, getTicketOneSelect);

getTicketOneButton.addEventListener('click', (e) => {
  e.preventDefault();
  //Creamos las opciones del select sin que aparezca el ticket elegido en el primer caso
  const anotherTicketSelected = anotherTicketSelect.value;
  if (anotherTicketSelected === 'Yes') {
    let secondTicketArray = tickets.filter(
      (ticket) => ticket !== getTicketOneSelect.value
    );
    createOptions(secondTicketArray, getTicketTwoSelect);
    toggleShowForm(
      getTicketTwoContainer,
      getTicketOneButton,
      getTicketOneSelect
    );
    anotherTicketSelect.disabled = true;
  } else {
    toggleShowForm(
      paymentMethodContainer,
      getTicketOneButton,
      getTicketOneSelect
    );
    anotherTicketSelect.disabled = true;
  }
});

getTicketTwoButton.addEventListener('click', (e) => {
  e.preventDefault();
  toggleShowForm(
    paymentMethodContainer,
    getTicketTwoButton,
    getTicketTwoSelect
  );
});

paymentMethodSelect.addEventListener('change', () => {
  let paymentMethod = paymentMethodSelect.value;
  if (paymentMethod === 'Cash') {
    billContainer.style.display = 'flex';
  } else {
    billContainer.style.display = 'none';
  }
});

paymentMethodButton.addEventListener('click', (e) => {
  e.preventDefault();
  let billSelected = Number(billSelect.value);
  let totalCost = 1;
  anotherTicketSelect.value === 'Yes' ? (totalCost += 1) : totalCost;

  if (paymentMethodSelect.value === 'Cash') {
    if (billSelected < totalCost) {
      alert(
        `You need to pay USD ${totalCost}. The bill is not enough to pay, please select 5`
      );
    } else if (billSelected > totalCost) {
      alert(
        `Thanks for your pay, you have paid with USD ${billSelected} and your cost is USD ${totalCost}. Take your USD ${
          billSelected - totalCost
        } change `
      );
    } else {
      alert('Thanks for you ticket Purchase');
    }
  } else {
    alert('Thanks for you ticket Purchase');
  }
  toggleShowForm(
    lotteryGameContainer,
    paymentMethodButton,
    paymentMethodSelect
  );
  billSelect.disabled = true;
  lotteryContainer.style.display = 'none';
  let ticket1 = getTicketOneSelect.value;
  let ticket2;
  if (anotherTicketSelect.value === 'Yes') {
    ticket2 = getTicketTwoSelect.value;
    yourTickets.textContent = `Your Lucky tickets are: ${ticket1} and ${ticket2}. GOOD LUCK!`;
  } else {
    yourTickets.textContent = `Your Lucky ticket is: ${ticket1}. GOOD LUCK! `;
  }
});

lotteryGameButton.addEventListener('click', () => {
  resultsContainer.style.display = 'flex';
  const winnerTicket = createRandomTicketWinner(tickets);
  results.textContent = `THE TICKET WINNER IS: ${winnerTicket}`;
  let ticket1 = getTicketOneSelect.value;
  let ticket2 = getTicketTwoSelect.value;
  if (ticket1 === winnerTicket || ticket2 === winnerTicket) {
    playerResults.textContent = `CONGRATULATIONS YOU WIN THE LOTTERY WITH YOUR TICKET ${winnerTicket} !!!`;
  } else {
    playerResults.textContent = `SORRY YOU DIDN'T WIN THE LOTTERY`;
    lotteryGameButton.textContent = 'TRY AGAIN WITH SAME NUMBERS';
  }
});
