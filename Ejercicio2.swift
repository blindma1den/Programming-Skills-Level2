/*
 2. Lottery System: 

 The lottery system produces results consisting of 4 digits + 1 letter, e.g., 0345F. Develop a lottery ticket purchase system with the following features:
Users can choose from the following tickets:
5678B
9876C
2345D
6789E
3456F
8765G
4321H
7890J
5432K
2109L
8765M
1357N
2468P
6543Q
7891R
3579S
9821T
4682U
5763V
1234A

-Users can buy a minimum of 1 and a maximum of 2 tickets.//DONE
-Payment is accepted in cash, and each ticket costs 1 USD.(DONE)
-After choosing tickets and quantity, the system prompts the user to pay in cash or by bank card. (DONE)
-This system only accepts 1 USD and 5 USD bills. The user must choose the bill to use for payment, and the system should return the change if applicable. (DONE)
-After payment, the ticket is issued.(DONE)
-The user returns to the main menu to play the lottery.(DONE)
-The lottery system generates 1 random ticket code.(DONE)
*/
var Ticket: [String] = []
var TicketComprado: [String] = []
var TicketGanador:[String] = []
func ticket(){
   
    for i in 1...25{
        let numeros = Int.random(in: 1000...9999)
        let letras = String(UnicodeScalar(Int.random(in: 65...90))!)
        let ticketletra = String(numeros) + letras
        Ticket.append(ticketletra)
    }
    print(Ticket)


    print("Los Tickets son estos:\n Escriba cual quiere comprar ")
    for ticket in Ticket{
    print(ticket)
    }


    var dinero:Int = 0
    var acceso : Bool = false
    while( acceso == false){
    print("Desea comprar:")
    var comprar = String(readLine()!)
    
    for ticket in Ticket {
    for ticketcomprado in TicketComprado {
        if comprar == ticketcomprado {
            print("Elija otro")
            break 
        }
    }

    if comprar == ticket {
        print("Ha seleccionado correctamente")
        TicketComprado.append(comprar)
        dinero += 1
        break 
    }
}

    print(TicketComprado)
    

    if(dinero == 2){
        print("Maximo alcanzado")
        acceso = true
    }
    else{
    print("Desea comprar otro?")
    print("1. Si")
    print("2. No")
    let opcion2: Int = Int(readLine()!)!
    if (opcion2 == 1){
        acceso = false
    }
    else if (opcion2 == 2){
        acceso = true
    }
    }
    }

    var booleasdasd: Bool = false

    while(booleasdasd == false){
    print("Usted tiene que pagar \(dinero)")
    print("Solo puede pagar con 1 dolar o 5 dolares")
    print("1. Pagar con un billete de 1 dolar")
    print("2. Pagar con un billete de 5 dolar")
    let opcion3: Int = Int(readLine()!)!
    var billete: Int = 0
    if (opcion3 == 1){
        billete = 1
    }
    else if(opcion3 == 2){
        billete = 5
    }
    if (billete >= dinero){
        print("Siga...")
        print("Tome su vuelto de 3 dolares.")
        booleasdasd = true
    }
    else if(billete < dinero){
        print("vuelva a escribir")

    }
    }
    


}

func boletoGanador(){
    print("Generando ticket ganador...")
    var ticketganador = Ticket.randomElement()
    print(ticketganador)
    var tickets: Bool = false  
    for ticketcomprado in TicketComprado{
        if (ticketganador == ticketcomprado){
            print("SALIO \(ticketganador), FELICIDADES GANASTE")
            tickets = true
        }
    }

    if(tickets==false){
        print("Para la proxima")
    }
}



ticket()
boletoGanador()



