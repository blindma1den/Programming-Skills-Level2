/*5. Manchester United FC Talent Acquisition System:

The Manchester United FC is in search of new talents to enhance its player roster. 
The head coach aims to recruit two forwards, two midfielders, a right-back, a defender, and a goalkeeper. 
To achieve this, the club needs to sell some players to fund these new signings. Develop a system to assist 
the head coach in choosing which players can be sold based on their market price, salary, position, and performance 
within the club.
*/

//Creando arrays para todos
var Goalkeepers: [(String, Double, Double, String)] = []
var Defenders: [(String, Double, Double, String)] = []
var Rightsiders: [(String, Double, Double, String)] = []
var Leftsiders: [(String, Double, Double, String)] = []
var Midfielders: [(String, Double, Double, String)] = []
var Strikers: [(String, Double, Double, String)] = []
var valorAqui: [(Int)] = []

var GoalMarket: [(String, Double, Double, String)] = []
var DefenMarket:[(String, Double, Double, String)] = []
var RightMarket: [(String, Double, Double, String)] = []
var LeftMarket: [(String, Double, Double, String)] = []
var MidMarket: [(String, Double, Double, String)] = []
var StrikeMarket: [(String, Double, Double, String)] = []
var valorMarket: [(String,Double, String)] = []

Goalkeepers.append(("Andre Onana", 25000000 , 15000000 , "Good"))
Goalkeepers.append(("Altar Bayindir", 5000000 , 5000000 , "Normal"))
Goalkeepers.append(("Tom Heaton", 5000000 , 2000000 , "Normal"))
Defenders.append(("Victor Lindedof" , 10000000,7000000, "Normal"))
Defenders.append(("Harry Maguire" , 15000000,10000000, "Good"))
Defenders.append(("Rafael varane" , 15000000,7000000, "Good"))
Defenders.append(("Lisandro martinez", 15000000, 8000000, "Good"))
Defenders.append(("Jonny Evans" , 7000000,4000000, "Good"))
Defenders.append(("Willy Kambala" , 4000000,1000000, "Normal"))
Defenders.append(("Rhys Bennet" , 4000000,2000000, "Normal"))
Rightsiders.append(("Diogo Dalot", 40000000, 10000000, "Good"))
Rightsiders.append(("Aron Wann", 30000000, 9000000, "Normal"))
Leftsiders.append(("Luke Shaw", 40000000, 16000000, "Good"))
Leftsiders.append(("Serguio Riglon", 20000000, 8000000, "Normal"))
Leftsiders.append(("Tyrell Malacia", 20000000, 8000000, "Normal"))
Midfielders.append(("Sofyan", 25000000, 9000000, "Normal"))
Midfielders.append(("Mason Mount", 25000000, 12000000, "Normal"))
Midfielders.append(("Carlos casemiro", 25000000, 15000000, "Good"))
Midfielders.append(("Bruno Fernandes", 50000000, 11000000, "Good"))
Midfielders.append(("Christian Eriksen", 25000000, 8000000, "Normal"))
Midfielders.append(("Scoot Macktominay", 40000000, 8000000, "Good"))
Midfielders.append(("Hannibal Meckdril", 12000000, 2000000, "Good"))
Midfielders.append(("Sofyan", 25000000, 9000000, "Normal"))
Midfielders.append(("Kobiee manoo", 12000000, 2000000, "Good"))
Midfielders.append(("Daniel Goree", 9000000, 2000000, "Normal"))
Strikers.append(("Alejandro Garnacho", 12000000, 10000000, "Good"))
Strikers.append(("Rasmus Hojlund", 20000000, 7000000, "Good"))
Strikers.append(("Antony", 25000000, 10000000, "Normal"))
Strikers.append(("Anthony Martyal", 18000000, 4000000, "Normal"))
Strikers.append(("Facundo Pellistri", 18000000, 6000000, "Good"))

GoalMarket.append(("Andriy Lunin", 30000000, 10000000, "Good"))
GoalMarket.append(("Dominic Livakovic", 15000000, 9000000, "Good"))
GoalMarket.append(("Rui Patricio", 10000000, 7000000, "Normal"))
GoalMarket.append(("Yasin Bonou", 14000000, 9000000, "Normal"))
MidMarket.append(("Enzo Fernandez", 35000000, 15000000, "Good"))
MidMarket.append(("Jamal Musiala", 30000000, 10000000, "Good"))
MidMarket.append(("Arda Guler", 35000000, 15000000, "Normal"))
RightMarket.append(("Achraf Hakimi", 20000000, 15000000, "Good"))
RightMarket.append(("Jeremie Pripong", 12000000, 8000000, "Good"))
RightMarket.append(("Ronald Araujo", 15000000, 10000000, "Good"))
StrikeMarket.append(("Victor oshimed", 30000000, 12000000, "Good"))
StrikeMarket.append(("Harry Kane", 40000000, 15000000, "Good"))
StrikeMarket.append(("Karim Benzeme", 20000000, 20000000, "Normal"))


//Comprar jugadores 
//Goleados 2

func elegirGoleadores(){
    var aux: Double = 0
    var aux2: Int = 0
    for (nombre, precio, sueldo, atributo) in GoalMarket{

        
            aux = sueldo + precio
            valorMarket.append((nombre, aux, atributo))
            valorMarket.sort { $0.1 < $1.1 }
        
        
    }

    aux2 = valorMarket.count
    print(aux2)

    // Eliminar el primer elemento
    if aux2 > 0 {
        valorMarket.remove(at: 0)
    }

    // Eliminar el último elemento
    if aux2 > 1 {
        valorMarket.remove(at: aux2 - 2)
}
}


elegirGoleadores()
print(valorMarket)



/*for (nombre, numero, numero1, holl) in Defenders{
    print(holl)
}*/








