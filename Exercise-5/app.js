/*
5. Manchester United FC Talent Acquisition System:
The head coach aims to recruit
two forwards, two midfielders, a right-back, a defender, and a goalkeeper. 
o achieve this, the club needs to sell some players to fund these new signings.
Develop a system to assist the head coach in choosing which players can be sold based on
 their market price, salary, position, and performance within the club.

MUN Tiene que vender jugadores segun el precio, el salario, la posicion, y performance.
Tenemos un presupuesto de 0. Primero hay que vender y luego comprar

Existe presupuestoCompra y presupuestoSalario
*/

//Variables del DOM
const currentSquadContainer = document.getElementById(
  'current-squad-container'
);
const marketPlayersContainer = document.getElementById(
  'market-players-container'
);
const marketBudgetSpan = document.getElementById('market-budget');
const salaryBudgetSpan = document.getElementById('salary-budget');
//Variables de logica
let currentSquad = [];
let marketPlayers = [];
let salaryBudget = 0;
let marketBudget = 0;
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
//FETCH CURRENT SQUAD
fetchJson('./currentSquad.json')
  .then((data) => {
    if (data) {
      currentSquad = data;
      console.log(currentSquad);
      //Ejecutamos la funcion cuando el fetch devuelva los datos
      displayPlayers(currentSquadContainer, currentSquad);
    }
  })
  .catch((error) => console.log(error));

//FETCH MARKET PLAYERS
fetchJson('./marketPlayers.json')
  .then((data) => {
    if (data) {
      marketPlayers = data;
      console.log(marketPlayers);
      displayPlayers(marketPlayersContainer, marketPlayers);
    }
  })
  .catch((error) => console.log(error));

const budgetsUpdateDOM = () => {
  marketBudgetSpan.textContent = `${marketBudget}`;
  salaryBudgetSpan.textContent = `${salaryBudget}`;
};
//FUNCION PRINCIPAL QUE MUESTRA A LOS JUGADORES Y OPCIONES
const displayPlayers = (container, players) => {
  // Vaciamos el contenedor para no duplicar cuando actualicemos.
  container.innerHTML = '';
  budgetsUpdateDOM();
  // Agrupamos a cada jugador según su posición
  const playersByPosition = {};
  players.forEach((player) => {
    const position = player.position || 'Unknown';
    if (!playersByPosition[position]) {
      playersByPosition[position] = [];
    }
    playersByPosition[position].push(player);
  });

  // Creamos elementos para cada posición y agregarlos al contenedor
  for (const position in playersByPosition) {
    // Crear un contenedor para la posición
    const positionContainer = document.createElement('div');
    positionContainer.classList.add('position-container');

    // Creamos un titulo para la posición
    const positionHeader = document.createElement('h2');
    positionHeader.textContent = `Position: ${position}`;
    positionContainer.appendChild(positionHeader);

    // Contenedor de cards para los jugadores de tal posición
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cards-container');

    // Recorremos por posición y creamos una card para cada uno
    playersByPosition[position].forEach((player) => {
      const card = document.createElement('div');
      card.classList.add('card');

      // le damos formato y datos a la card para jugador
      card.innerHTML = `
          <p>Name: <strong>${player.name}</strong></p>
          <p>Price: ${player.price}</p>
          <p>Salary: ${player.salary}</p>
          <p>Performance: ${player.performance}</p>
          <button id="${player.name}-button"></button>
        `;
      if (player.state) {
        // card.querySelector('button').style.display = 'none';
        const state = document.createElement('p');
        state.innerHTML = `${player.state}`;
        state.classList.add('new-player');
        card.appendChild(state);
      }
      if (players.length > 20) {
        card.querySelector('button').textContent = 'SELL';
        card.querySelector('button').classList.add(`sell-button`);

        card.querySelector('button').addEventListener('click', () => {
          sellPlayer(player.name);
          console.log(` ${player.name} sold`);
          marketBudget += player.price;
          salaryBudget += player.salary;

          budgetsUpdateDOM();
        });
      } else {
        card.querySelector('button').textContent = 'BUY';
        card.querySelector('button').classList.add(`buy-button`);

        card.querySelector('button').addEventListener('click', () => {
          if (player.price > marketBudget || player.salary > salaryBudget) {
            alert(
              "You don't have the money necessary to buy that player. Please keep selling.."
            );
          } else {
            buyPlayer(player.name);
            marketBudget -= player.price;
            salaryBudget -= player.salary;
            console.log(` ${player.name} bought`);
            budgetsUpdateDOM();
          }
        });
      }

      // Agrega la card al container
      cardsContainer.appendChild(card);
    });

    // Agrega el container de cards al contenedor de position
    positionContainer.appendChild(cardsContainer);

    // Agregar el contenedor de posición al contenedor principal
    container.appendChild(positionContainer);
  }
};
//Buscar jugador por nombre
const findPlayerByName = (players, name) => {
  return players.find((player) => player.name === name);
};
//Funcion para vender jugadores
const sellPlayer = (player) => {
  const playerToDelete = findPlayerByName(currentSquad, player);

  currentSquad.splice(currentSquad.indexOf(playerToDelete), 1);
  displayPlayers(currentSquadContainer, currentSquad);
};

//Funcion para comprar jugadores
const buyPlayer = (player) => {
  const playerToBuy = findPlayerByName(marketPlayers, player);
  playerToBuy.state = 'NEW SIGN';
  currentSquad.push(playerToBuy);
  marketPlayers.splice(marketPlayers.indexOf(playerToBuy), 1);
  displayPlayers(marketPlayersContainer, marketPlayers);
  displayPlayers(currentSquadContainer, currentSquad);
};
