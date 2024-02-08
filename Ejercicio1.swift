/*
1. The Big Six of the English Premier League is composed of six teams: Manchester United, Liverpool, Arsenal, Chelsea, Manchester City, and Tottenham Hotspur.//DONE
 Develop a system that generates between 0, 1, and 3 points randomly for each team. //DONE
 The winner of the Big Six will be the team with the highest accumulated points at the end. 
 Each team will play 3 matches against every opponent. //DONE
 After the matches, the system will display on-screen the team standings from highest to lowest points.
 */

 var Jugadores: [String] = ["Manchester United", "Liverpool", "Arsenal", "Chelsea", "Manchester City", "Tottenham Hotspur"]
var Equipos: [(String , Int)] = []
for jugador in Jugadores{
    let z = Int.random(in: 1...3)
    Equipos.append((jugador, z))
}

for equipo in Equipos{
    print(equipo)
}


func equipo1v2() {

    for a in 1...3{
    for i in 0..<Jugadores.count - 1 {
        for j in (i + 1)..<Jugadores.count {
            let random1 = Int.random(in:0...5)
            let random2 = Int.random(in: 0...5)
  
            print("\(Jugadores[i]) \(random1) vs \(Jugadores[j]) \(random2)")
            if (random1 > random2){
                Equipos[i].1 += 3
            }
            else if(random1 < random2){
                Equipos[j].1 += 3
            }
            else if (random1 == random2){
                Equipos[i].1 += 1
                Equipos[j].1 += 1
            }


        }
    }
    }
}


equipo1v2()


for equipo in Equipos{
    print(equipo)
}

func mayorpuntuacion(){
    print("Tabla---------------")
        let equiposOrdenados = Equipos.sorted { $0.1 > $1.1 }
        print(Equipos)

}



mayorpuntuacion()
//func partido(){
if let ganador = Equipos.first {
        print("El equipo con mayor puntos y por tanto ganador es: \(ganador.0)")
    } else {
        print("A.")
    }
//}

