/*
3. Manchester United FC Player Management System:

As a developer for Manchester United FC, the executive management has tasked you with creating a CRUD
 system for the current players, including the following information: Jersey number, position, age, height, 
 and other statistical data. Additionally, integrate the system from the previous level where it was possible to 
 compare two players and visualize their characteristics. You may find player information by searching on the 
 internet.

Features:

Create:
Add new players to the system with their respective details.(DONE)
Read:
View the complete list of current players with their jersey number, position, age, height, and other statistical information.
Update: (DONE)
Modify player information as needed, such as position, age, or height.
Delete:
Remove players from the system if they are no longer part of the team.
Compare Players:
Utilize the comparison feature to analyze and contrast the characteristics of two players.(DONE)
Visualize Characteristics:
Display the statistical and physical attributes of each player for a comprehensive overview. (DONE)
*/

import Foundation
import Darwin

class Jugador: CustomStringConvertible {
    var nombre: String
    var goals: Int
    var Speed: Int
    var Assists: Int
    var Accuracy: Int
    var Defensive: Int
    var Jersey: Int 

    init(nombre: String, goals: Int, Speed: Int, Assists: Int, Accuracy: Int, Defensive: Int, Jersey: Int){
        self.nombre = nombre
        self.goals = goals
        self.Speed = Speed
        self.Assists = Assists
        self.Accuracy = Accuracy
        self.Defensive = Defensive
        self.Jersey = Jersey
    }

    var description: String {
        return "Nombre: \(nombre), Goles: \(goals), Velocidad: \(Speed), Asistencias: \(Assists), Precisión: \(Accuracy), Defensa: \(Defensive), Jersey: \(Jersey)"
    }
}

    let Jugador1 = Jugador(nombre: "Bruno Fernandes", goals: 5, Speed: 6, Assists: 9, Accuracy: 10, Defensive: 3, Jersey: 8)
    let Jugador2 = Jugador(nombre: "Rasmus Hojlund", goals: 12, Speed: 8, Assists: 2, Accuracy: 6, Defensive: 2, Jersey: 11)
    let Jugador3 = Jugador(nombre: "Harry Maguire", goals: 1, Speed: 5, Assists: 1, Accuracy: 7, Defensive: 9, Jersey: 5)
    let Jugador4 = Jugador(nombre: "Alejandro Garnacho", goals: 8, Speed: 7, Assists: 8, Accuracy: 6, Defensive: 0, Jersey: 17)
    let Jugador5 = Jugador(nombre: "Mason Mount", goals: 2, Speed: 6, Assists: 4, Accuracy: 8, Defensive: 1, Jersey: 7)
    var ArrayJugador = [Jugador1, Jugador2, Jugador3, Jugador4, Jugador5]

func ReviewJugador(camiseta: Int){
    var JugadorEncontrado: Bool = false
    for i in 0...ArrayJugador.count - 1 {
        if(camiseta == ArrayJugador[i].Jersey){
            JugadorEncontrado = true
            print("Nombre: \(ArrayJugador[i].nombre) \n Goles \(ArrayJugador[i].goals) \n  Speed: \(ArrayJugador[i].Speed) \n Assists: \(ArrayJugador[i].Assists) \n Accuracy: \(ArrayJugador[i].Accuracy) \n Defensive: \(ArrayJugador[i].Defensive) ")
            break
        }
        
    }
    if(JugadorEncontrado == false ){
            print("No se encontro dicho jugador")
        }
}

func CompararJugadores(camiseta: Int, camiseta2: Int){
    var JugadorEncontrado1: Bool = false
    var JugadorEncontrado2: Bool = false
    for i in 0...ArrayJugador.count - 1 {
        if(camiseta == ArrayJugador[i].Jersey){
            JugadorEncontrado1 = true
            break
        }
        
    }
    if(JugadorEncontrado1 == false){
        print("No se encontro el primer jugador")
    }
    for i in 0...ArrayJugador.count - 1 {
        if(camiseta2 == ArrayJugador[i].Jersey){
            JugadorEncontrado2 = true
            break
        }
    }
    if(JugadorEncontrado2 == false){
        print("No se encontro el 2do jugador")
    }

    if(JugadorEncontrado1 == true && JugadorEncontrado2 == true){

        print("Jugador 1: ")
         for i in 0...ArrayJugador.count - 1 {
        if(camiseta == ArrayJugador[i].Jersey){
            print("Nombre: \(ArrayJugador[i].nombre) \n Goles \(ArrayJugador[i].goals) \n  Speed: \(ArrayJugador[i].Speed) \n Assists: \(ArrayJugador[i].Assists) \n Accuracy: \(ArrayJugador[i].Accuracy) \n Defensive: \(ArrayJugador[i].Defensive) ")
           
            break
        }
    }
        print ("Jugador 2: ")
        for i in 0...ArrayJugador.count - 1 {
        if(camiseta2 == ArrayJugador[i].Jersey){
            print("Nombre: \(ArrayJugador[i].nombre) \n Goles \(ArrayJugador[i].goals) \n  Speed: \(ArrayJugador[i].Speed) \n Assists: \(ArrayJugador[i].Assists) \n Accuracy: \(ArrayJugador[i].Accuracy) \n Defensive: \(ArrayJugador[i].Defensive) ")

            break
        }
    }

    }

}

func BuscarJugadorGeneral(numero: Int, opcion: Int){
    var JugadorEncontrado: Bool = false
    switch (opcion){
        case 1:
        for i in 0...ArrayJugador.count - 1 {
        if(numero == ArrayJugador[i].Speed){
            JugadorEncontrado = true
            print("Nombre: \(ArrayJugador[i].nombre) \n Goles \(ArrayJugador[i].goals) \n  Speed: \(ArrayJugador[i].Speed) \n Assists: \(ArrayJugador[i].Assists) \n Accuracy: \(ArrayJugador[i].Accuracy) \n Defensive: \(ArrayJugador[i].Defensive) ")
            break
        }
        
        }
        if(JugadorEncontrado == false ){
            print("No se encontro dicho jugador")
        }

        case 2:
         for i in 0...ArrayJugador.count - 1 {
        if(numero == ArrayJugador[i].goals){
            JugadorEncontrado = true
            print("Nombre: \(ArrayJugador[i].nombre) \n Goles \(ArrayJugador[i].goals) \n  Speed: \(ArrayJugador[i].Speed) \n Assists: \(ArrayJugador[i].Assists) \n Accuracy: \(ArrayJugador[i].Accuracy) \n Defensive: \(ArrayJugador[i].Defensive) ")
            break
        }
        
        }
        if(JugadorEncontrado == false ){
            print("No se encontro dicho jugador")
        }

        case 3: 
        for i in 0...ArrayJugador.count - 1 {
        if(numero == ArrayJugador[i].Assists){
            JugadorEncontrado = true
            print("Nombre: \(ArrayJugador[i].nombre) \n Goles \(ArrayJugador[i].goals) \n  Speed: \(ArrayJugador[i].Speed) \n Assists: \(ArrayJugador[i].Assists) \n Accuracy: \(ArrayJugador[i].Accuracy) \n Defensive: \(ArrayJugador[i].Defensive) ")
            break
        }
        
        }
        if(JugadorEncontrado == false ){
            print("No se encontro dicho jugador")
        }
        case 4:
        for i in 0...ArrayJugador.count - 1 {
        if(numero == ArrayJugador[i].Accuracy){
            JugadorEncontrado = true
            print("Nombre: \(ArrayJugador[i].nombre) \n Goles \(ArrayJugador[i].goals) \n  Speed: \(ArrayJugador[i].Speed) \n Assists: \(ArrayJugador[i].Assists) \n Accuracy: \(ArrayJugador[i].Accuracy) \n Defensive: \(ArrayJugador[i].Defensive) ")
            break
        }
        
        }
        if(JugadorEncontrado == false ){
            print("No se encontro dicho jugador")
        }
        case 5:
          for i in 0...ArrayJugador.count - 1 {
        if(numero == ArrayJugador[i].Defensive){
            JugadorEncontrado = true
            print("Nombre: \(ArrayJugador[i].nombre) \n Goles \(ArrayJugador[i].goals) \n  Speed: \(ArrayJugador[i].Speed) \n Assists: \(ArrayJugador[i].Assists) \n Accuracy: \(ArrayJugador[i].Accuracy) \n Defensive: \(ArrayJugador[i].Defensive) ")
            break
        }

         }
         if(JugadorEncontrado == false ){
            print("No se encontro dicho jugador")
        }
        default:
        print("No esta")
    }
}

func JugadorMaXVE(){

     var aux: Int = 0
    aux = ArrayJugador[0].Speed
    for i in 0...ArrayJugador.count - 1{
        if(ArrayJugador[i].Speed > aux){
            aux = ArrayJugador[i].Speed
        }
    }

    return print(BuscarJugadorGeneral(numero: aux, opcion: 1))
}

func JugadorMaxGO(){
    
    var aux: Int = 0
    aux = ArrayJugador[0].goals
    for i in 0...ArrayJugador.count - 1{
        if(ArrayJugador[i].goals > aux){
            aux = ArrayJugador[i].goals
        }
    }

    return print(BuscarJugadorGeneral(numero: aux, opcion: 2))
}

func JugadorMaxAss(){

    var aux: Int = 0
    aux = ArrayJugador[0].Assists
    for i in 0...ArrayJugador.count - 1{
        if(ArrayJugador[i].Assists > aux){
            aux = ArrayJugador[i].Assists
        }
    }

    return print(BuscarJugadorGeneral(numero: aux, opcion: 3))
}

func JugadorMaxPass(){

    var aux: Int = 0
    aux = ArrayJugador[0].Accuracy
    for i in 0...ArrayJugador.count - 1{
        if(ArrayJugador[i].Accuracy > aux){
            aux = ArrayJugador[i].Accuracy
        }
    }

    return print(BuscarJugadorGeneral(numero: aux, opcion: 4))
}


func JugadorMaxDEF(){

    var aux: Int = 0
    aux = ArrayJugador[0].Defensive
    for i in 0...ArrayJugador.count - 1{
        if(ArrayJugador[i].Defensive > aux){
            aux = ArrayJugador[i].Defensive
        }
    }

    return print(BuscarJugadorGeneral(numero: aux, opcion: 5))
}



func menu(){

    
    print("Bienvenido al sistema de jugadores")
    print("1.Review de Jugador mediante camiseta:")
    print("2. Comparar")
    print("3. Jugador más veloz.")
    print("4. Jugador con más goles")
    print("5. Jugador con mas assists")
    print("6. Jugador con mas pase")
    print("7. Jugador con mas defensa")
    print("8. Salir")
    print("9. Agregar Jugador")
    print("10. Mostrar")
    print("11. Borrar")
    print("12. Modificar")

    var opcion = Int(readLine()!)!
 

    switch(opcion){
        case 1:
        print("Introduzca camiseta: ")
        var camiseta1 = Int(readLine()!)!
        ReviewJugador(camiseta: camiseta1)
        
        case 2:
        print("Introduzca una camiseta: ")
        var camiseta1 = Int(readLine()!)!
        print("Introduzca una segunda camiseta: ")
        var  camiseta2 = Int(readLine()!)!
        CompararJugadores(camiseta: camiseta1, camiseta2: camiseta2)

        case 3:
        JugadorMaXVE()

        case 4:
        JugadorMaxGO()

        case 5:
        JugadorMaxAss()

        case 6:
        JugadorMaxPass()

        case 7:
        JugadorMaxDEF()
        
        case 8:
        exit(0)

        case 9:
        print("Agregando Jugador.....")
        print("Como se llama: ")
        var nombren: String = String(readLine()!)
        print("Cuantos goles ha metido?")
        var golesn: Int = Int(readLine()!)!
        print("Cuanta velocidad tiene")
        var velocidadn: Int = Int(readLine()!)!
        print("Cuantas asistencias")
        var asistenciasn: Int = Int(readLine()!)!
        print("Cuanta punteria")
        var accuracyn: Int = Int(readLine()!)!
        print("Cuanta defensa")
        var defensan: Int = Int(readLine()!)!
        print("El jersey")
        var jersey: Int = Int(readLine()!)!
        let JugadorNuevo = Jugador(nombre: nombren, goals: golesn, Speed: velocidadn, Assists: asistenciasn, Accuracy: accuracyn, Defensive: defensan, Jersey: jersey)
        ArrayJugador.append(JugadorNuevo)

        case 10:
        for Jugadoresss in ArrayJugador{
            print(Jugadoresss)
        }

        case 11:

        var i = 1
        for Jugadores in ArrayJugador{
            print("\(i). \(Jugadores)")
            i += 1
        }
        

        print("Seleccione cual borrar")
        var borrar: Int = Int(readLine()!)!
        var x = 0
        ArrayJugador.remove(at: borrar-1)

        case 12:

        var i = 1
        for Jugadores in ArrayJugador{
            print("\(i). \(Jugadores)")
            i += 1
        }

        print("Seleccione cual modificar")
        var modificar: Int = Int(readLine()!)!
        modificar = modificar - 1
        print("Que valor deseas modificar? \n 1. Nombre \n 2.Goles \n 3.Speed \n4.Asistencias \n5.Punteria \n6.Defensa \n7.Jersey")
        var xx: Int = Int(readLine()!)!
        switch(xx){
            case 1:
            print("Ingresa nuevo nombre: ")
            let nombre: String = String(readLine()!)
            ArrayJugador[modificar].nombre = nombre
            case 2:
            print("Ingresa nuevo Goles")
            let goles: Int = Int(readLine()!)!
            ArrayJugador[modificar].goals = goles
            case 3:
            print("Ingresa nueva velocidad")
            let velocidad: Int = Int(readLine()!)!
            ArrayJugador[modificar].Speed = velocidad
            case 4:
            print("Ingrese nueva asistencia")
            let asis = Int(readLine()!)!
            ArrayJugador[modificar].Assists = asis
            case 5:
            print("Ingresa nueva punteria")
            let punt = Int(readLine()!)!
            ArrayJugador[modificar].Accuracy = punt
            case 6:
            print("Ingresa nueva defensa")
            let def = Int(readLine()!)!
            ArrayJugador[modificar].Defensive = def
            case 7:
            print("Ingresa nuevo jersey")
            let nj = Int(readLine()!)!
            ArrayJugador[modificar].Jersey = nj
            default:
            print("nuevo")
        }   


        default:
        print("seleccione otra opcion")
    }



}

repeat{
menu()
}while(true)