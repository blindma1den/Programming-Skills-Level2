/*
4. Old Trafford Stadium

The executive management of Manchester United FC aims to implement a ticket sales system for the team's matches at Old Trafford Stadium. Develop a ticket purchase system with the following features:

Membership Discount:
Users with a Manchester United membership card receive a 15% discount on their total purchase.
Seating Capacity and Distribution:
The total seating capacity at Old Trafford is 74,310.
5% for VIP boxes, 15% for VIP seats, and 80% for general seating.
Seat Selection:
Seats are identified by a ticket number from 1 to 74,310.
Users can choose their seats.
The first seats correspond to VIP boxes, the next to the VIP area, and the rest to general seating (considering the percentages).
Ticket Purchase Limits:
Users with a membership card can buy up to 10 tickets, while non-members can purchase up to 3 tickets.
Seat Availability Validation:
The system must validate if a seat has already been sold to another user and offer a nearby seat if necessary.
Seat Costs:
VIP boxes: £1000 per seat.
VIP seats: £500 per seat.
General seating: £90 per seat.

System Workflow:
Login.(DONE)
Confirm membership status.(DONE)
Select seats.(DONE)
Make payment.(DONE)
Generate and issue tickets.(DONE)
Remaining Seat Display: (???)
The system should display the number of available seats after each purchase. (DONE)
*/

//OLD TRAFFORT = 73,310
//VIP boaxes = 3666
//VIP SEATS =10997
//general = 58647

import Foundation
import Darwin

var asientos: [(String, Int)] = []
asientos.append(("Vip box", 0))
asientos.append(("Vip seats", 0))
asientos.append(("General", 0))
var membresia: Bool = false
var asientosElegidos:[Int] = [0]

var mem = 0
    var nomem=0 


func login(){
    print("""
    ----BIENVENIDO----
    1.Entrar 
    2.Salir
    ------------------
    """)

    let opcion: Int = Int(readLine()!)!

    if opcion == 1{
        print("Ingrese su nombre")
        let nombre: String = String(readLine()!)
        print("Cuenta con membresia?")
        print("1. Si")
        print("2. No")
        let opcion1 = Int(readLine()!)!

        membresia = opcion1 == 1 ? true : false

        

    } else{
        exit(0)
    }
}

var cuentavipbox = 0
var cuentavipsit = 0
var cuentageneral = 0

func incluirasiento(val: Int){
    var valor1 = val
    var coincidencia: Bool = false
    var auxiliar: Int = 1

    repeat{
    coincidencia = false
    for asientos in asientosElegidos{
        if(valor1 == asientos){
 //6333333 opcion 6 
            coincidencia = true
        }
    }

    if(coincidencia == false){
        asientosElegidos.append(valor1)
        print("Asiento: \(valor1)")
        if (membresia == true){
            mem += 1
        }
        else if (membresia == false){
            nomem += 1
        }
        return
    }  
    auxiliar *= -1
    valor1 += auxiliar

    }while(coincidencia==true)

}

func asientoss(){
    var repeticion: Bool = true
    var vipbox = 0
    var vipsit = 0
    var gensit = 0
    
    while (repeticion == true){
    print("""
    Primero que nada le queremos comentar que los asientos se dividen en 3 Categorias VIP box, Vip Seats y General
    Los asientos Vip Box van del 1 al 3666
    Los asientos Vip Seats van del 3667 al 14664
    Y el general del 14664 al 73310
    Escriba los asientos que desea ocupar
    """)


    print("Primero que nada seleccione")
    print("1. Vip Box ")
    print("2. Vip Seats")
    print("3. General")

    var asientotipo: Int = Int(readLine()!)!

    switch(asientotipo){
        case 1: //asiento vip
        var validarvip = false
        repeat{
        print("Elija un numero de asiento: ")
        var asientovip = Int(readLine()!)!
        if (asientovip > 0 && asientovip < 3666){
            validarvip = true
            cuentavipbox = cuentavipbox + 1
            incluirasiento(val: asientovip)
            vipbox += 1
        }
        }while(validarvip == false)

        case 2: // asiento vipnormal
        var validarvipsit = false
        repeat{
            print("Elija un numero de asiento: ")
            var asientovipsit = Int(readLine()!)!
            if (asientovipsit > 3667 && asientovipsit < 14664){
                validarvipsit = true
                cuentavipsit = cuentavipsit + 1
                incluirasiento(val: cuentavipsit)
                vipsit += 1
            }
        }while(validarvipsit == false)

        case 3:
        var validargeneral = false
        repeat{
            print("Elija un numero de asiento")
            var asientogeneral = Int(readLine()!)!
            if(asientogeneral > 14664 && asientogeneral < 73310){
                validargeneral = true
                cuentageneral = cuentageneral + 1
                incluirasiento(val: cuentageneral)
                gensit += 1
            }
        }while(validargeneral == false)


        
        default:
        print("hola")

        
    }
        if (mem == 10){
            print("Completo: ")
            repeticion = false
        }
        else if (nomem == 3){
            print ("Completo")
            repeticion = false
        }
      




    }

    var cuentabox = vipbox * 1000
    var cuentavip = vipsit * 500
    var generalcuenta = gensit * 90
    var cuentageneral = cuentabox + cuentavip + generalcuenta

    print("Tienes que pagar en total: \(cuentageneral) vip: \(vipbox), vip sit \(vipsit), general: \(gensit)")
    
    asientosElegidos.removeFirst()
    
}


login()
asientoss()
print("asientos elegidos ->")
for Asientos in asientosElegidos{
    print (Asientos)
}