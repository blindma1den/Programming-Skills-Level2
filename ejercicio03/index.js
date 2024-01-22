// 3. Manchester United FC Player Management System:

// As a developer for Manchester United FC, the executive management has tasked you with creating a CRUD system for the current players, including the following information: Jersey number, position, age, height, and other statistical data. Additionally, integrate the system from the previous level where it was possible to compare two players and visualize their characteristics. You may find player information by searching on the internet.

// Features:

// Create:
// Add new players to the system with their respective details.
// Read:
// View the complete list of current players with their jersey number, position, age, height, and other statistical information.
// Update:
// Modify player information as needed, such as position, age, or height.
// Delete:
// Remove players from the system if they are no longer part of the team.
// Compare Players:
// Utilize the comparison feature to analyze and contrast the characteristics of two players.
// Visualize Characteristics:
// Display the statistical and physical attributes of each player for a comprehensive overview.
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const APP = express();
const PORT = 5000;
APP.use(express());
APP.use(cors());
APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(bodyParser.json());

let playerList = [
	{
		nombre: 'Marcus Rashford',
		posicion: 'Delantero',
		numero: 10,
		nacionalidad: 'Inglés',
		edad: 24,
		estatura: '180 cm',
		lesiones: [],
		estadisticas: {
			partidos_jugados: 30,
			goles: 15,
			asistencias: 10,
		},
	},
	{
		nombre: 'Harry Maguire',
		posicion: 'Defensa',
		numero: 5,
		nacionalidad: 'Inglés',
		edad: 28,
		estatura: '194 cm',
		lesiones: ['Esguince en el tobillo'],
		estadisticas: {
			partidos_jugados: 28,
			goles: 2,
			asistencias: 1,
		},
	},
	{
		nombre: 'Bruno Fernandes',
		posicion: 'Centrocampista',
		numero: 18,
		nacionalidad: 'Portugués',
		edad: 27,
		estatura: '175 cm',
		estadisticas: {
			partidos_jugados: 35,
			goles: 8,
			asistencias: 20,
		},
	},
];

APP.get('/read', (req, res) => {
	res.send(playerList);
});

APP.get('/compare/:numero1/:numero2', (req, res) => {
	const PLAYER1 = playerList.filter(el => el.numero == req.params.numero1);
	const PLAYER2 = playerList.filter(el => el.numero == req.params.numero2);
	res.send({ PLAYER1, PLAYER2 });
});

APP.post('/create', (req, res) => {
	playerList.push(req.body);
	res.send('player added successfuly!');
});

APP.put('/update/:number', (req, res) => {
	let filtered = playerList.filter(el => el.numero == req.params.number);
	if (req.body.nombre) filtered[0].nombre = req.body.nombre;
	if (req.body.posicion) filtered[0].posicion = req.body.posicion;
	if (req.body.nacionalidad) filtered[0].nacionalidad = req.body.nacionalidad;
	if (req.body.edad) filtered[0].edad = req.body.edad;
	if (req.body.estatura) filtered[0].estatura = req.body.estatura;
	if (req.body.partidos_jugados)
		filtered[0].estadisticas.partidos_jugados = req.body.partidos_jugados;
	if (req.body.goles) filtered[0].estadisticas.goles = req.body.goles;
	if (req.body.asistencias)
		filtered[0].estadisticas.asistencias = req.body.asistencias;

	playerList.forEach(el => {
		if ((el.numero = filtered[0].numero)) el = filtered[0];
	});
	res.send(filtered[0]);
});

APP.delete('/remove/:number', (req, res) => {
	const newPlayerList = playerList.filter(el => el.numero != req.params.number);
	playerList = newPlayerList;
	res.send(newPlayerList);
});
APP.listen(PORT, () => {
	console.log(`Running in port: ${PORT}`);
});
