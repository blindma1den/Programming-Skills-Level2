/*
1. The Big Six of the English Premier League is composed of six teams:
Manchester United, Liverpool, Arsenal, Chelsea, Manchester City, and Tottenham Hotspur.
 Develop a system that generates between 0, 1, and 3 points randomly for each team. 
 The winner of the Big Six will be the team with the highest accumulated points at the end.
 Each team will play 3 matches against every opponent. 
 After the matches, the system will display on-screen the team standings from highest to lowest points.

 Crear array de teams con objetos que tengan name, points, matchesPlayed
 Crear Ronda donde jueguen entre ellos y haya resultado aleatorio hasta 4 goles.
 Si un equipo hace mas goles que el otro, gana 3 puntos, si hacen los mismos goles, empatan.
 El perdedor saca 0 puntos.
 Cada equipo jugará 15 partidos, 3 contra cada rival de los 5 posibles.
*/
//Standings Variables
const resultsContainer = document.getElementById('results-container');
const standingsTable = document.getElementById('standings');
const generateButton = document.getElementById('generate-button');
const championContainer = document.getElementById('champion');
const championImg = document.getElementById('champion-img');
const championName = document.getElementById('champion-name');
//Array de teams
const teams = [
  { name: 'Manchester United', points: 0, matchesPlayed: 0 },
  { name: 'Liverpool', points: 0, matchesPlayed: 0 },
  { name: 'Arsenal', points: 0, matchesPlayed: 0 },
  { name: 'Chelsea', points: 0, matchesPlayed: 0 },
  { name: 'Manchester City', points: 0, matchesPlayed: 0 },
  { name: 'Tottenham Hotspur', points: 0, matchesPlayed: 0 },
];

//Funcion Principal que genera el torneo
function generateTournament(teams) {
  const roundMatches = [];
  //Comienza con el equipo 1 (i) y lo enfrenta con el 2do (j), luego 3ero hasta el 6to
  //En la segunda vuelta del for, comienza con el equipo 2(i) y juega con el 3, 4, 5 ,y 6 y asi sucesivamente.

  for (let i = 0; i < teams.length; i++) {
    const team1 = teams[i];

    for (let j = i + 1; j < teams.length; j++) {
      const team2 = teams[j];
      // Cada partido generara goles para ambos equipos de 0 a 3 (numero bajo para q haya mas empates)
      for (let k = 0; k < 3; k++) {
        const goalsTeam1 = Math.floor(Math.random() * 4);
        const goalsTeam2 = Math.floor(Math.random() * 4);
        //creamos una variable temporal para ir guardando los resultados
        let result;
        //Repartimos los puntos según sea el resultado y guardamos en result
        if (goalsTeam1 > goalsTeam2) {
          result = {
            team1: { team: team1, points: 3 },
            team2: { team: team2, points: 0 },
          };
        } else if (goalsTeam1 < goalsTeam2) {
          result = {
            team1: { team: team1, points: 0 },
            team2: { team: team2, points: 3 },
          };
        } else {
          result = {
            team1: { team: team1, points: 1 },
            team2: { team: team2, points: 1 },
          };
        }

        // Sumamos y actualizamos los puntos y partidos jugados
        result.team1.team.points += result.team1.points;
        result.team1.team.matchesPlayed++;

        result.team2.team.points += result.team2.points;
        result.team2.team.matchesPlayed++;

        roundMatches.push({
          teams: [team1, team2],
          result,
          goals: [goalsTeam1, goalsTeam2],
        });

        // Mostrar el partido y el resultado por consola
        showMatchResult(team1, team2, goalsTeam1, goalsTeam2);
      }
    }
  }
}

// Reinicia a cero los resultados, la consola, y vacía la tabla
const resetResults = () => {
  resultsContainer.style.display = 'none';
  standingsTable.innerHTML = '';
  console.clear();
  teams.forEach((team) => {
    team.matchesPlayed = 0;
    team.points = 0;
  });
};
// Funcion para mostrar los resultados en la consoal
const showMatchResult = (team1, team2, goalsTeam1, goalsTeam2) => {
  let resultMatch;
  goalsTeam1 > goalsTeam2
    ? (resultMatch = `${team1.name} is the Winner, 3 point for local`)
    : goalsTeam1 < goalsTeam2
    ? (resultMatch = `${team2.name} is the Winner, 3 points for visitor`)
    : (resultMatch = 'Match Tied, 1 point for each team');
  console.log(
    `Partido: ${team1.name} ${goalsTeam1} - ${goalsTeam2} ${team2.name} \n
        ${resultMatch} `
  );
};

//Escuchamos el boton de generate, limpiamos la tabla, simulamos el torneo y ordenamos la tabla
//de posciones
generateButton.addEventListener('click', (e) => {
  e.preventDefault();
  resetResults();
  resultsContainer.style.display = 'flex';
  let position = 1;
  generateTournament(teams);
  const orderedTeams = [...teams].sort((a, b) => b.points - a.points);
  const champion = orderedTeams[0];
  orderedTeams.forEach((team) => {
    const row = standingsTable.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    cell1.textContent = position;
    cell2.textContent = team.name;
    cell3.textContent = team.points;
    cell4.textContent = team.matchesPlayed;
    position++;
  });
  if (champion.name === 'Manchester United') {
    championContainer.style.display = 'flex';
    championImg.src = './assets/mun-champion.jpg';
    championName.textContent = `THE NEW CHAMPION OF THE BIG SIX IS: ${champion.name}. TEN HAG DID IT!!!`;
  }
});
