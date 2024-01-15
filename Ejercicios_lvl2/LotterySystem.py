# Por Felipe (ZenTial)

# 2. Lottery System:
#
# The lottery system produces results consisting of 4 digits + 1 letter, e.g., 0345F. Develop a lottery ticket purchase system with the following features:
# -Users can buy a minimum of 1 and a maximum of 2 tickets.
# -Payment is accepted in cash, and each ticket costs 1 USD.
# -After choosing tickets and quantity, the system prompts the user to pay in cash or by bank card.
# -This system only accepts 1 USD and 5 USD bills. The user must choose the bill to use for payment, and the system should return the change if applicable.
# -After payment, the ticket is issued.
# -The user returns to the main menu to play the lottery.
# -The lottery system generates 1 random ticket code.
from os import system
from random import choice, randint

numeros_loteria = ['5678B', '9876C', '2345D', '6789E', '3456F', '8765G', '4321H', '7890J', '5432K', '2109L', '8765M',
                   '1357N',
                   '2468P', '6543Q', '7891R', '3579S', '9821T', '4682U', '5763V', '1234A']
letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
          'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


# Función para generar un número de ticket random
def generar_ticket():
    elementos_ticket = ['', '', '', '', '']
    elementos_ticket[0] = str(randint(0, 9))
    elementos_ticket[1] = str(randint(0, 9))
    elementos_ticket[2] = str(randint(0, 9))
    elementos_ticket[3] = str(randint(0, 9))
    elementos_ticket[4] = choice(letras)
    ticket = ''.join(elementos_ticket)
    return ticket


# Función para jugar a la loteria
def jugar_loteria(ticket_comprados):
    while True:
        print('*' * 50)
        print('[1] Jugar loteria')
        try:
            accion = input('Elige una opción: ')
            ['1'].index(accion)
        except ValueError:
            system('cls')
            print('Error, elige una opción valida')
        else:
            system('cls')
            ticket_generado = generar_ticket()
            if ticket_generado in ticket_comprados:
                print('Felicidades!!! Tienes un ticket ganador')
                print('Tus tickets comprados son:')
                for ticket in ticket_comprados:
                    print('*' * 22)
                    print(f'\t{ticket}')
                    print('*' * 22)
                print('\nEl ticket ganador era: ')
                print('*' * 22)
                print(ticket_generado)
                print('*' * 22)
                return
            else:
                print('Lo siento, has perdido')
                print('Tus tickets comprados son:')
                for ticket in ticket_comprados:
                    print('*' * 22)
                    print(f'\t{ticket}')
                    print('*' * 22)
                print('\nEl ticket ganador era: ')
                print('*' * 22)
                print(ticket_generado)
                print('*' * 22)
                return


# Función de pago de ticket
def pagar_ticket(tickets, cantidad):
    while True:
        try:
            tipo_pago = input('Desea pagar con efectivo o tarjeta bancaria: ').lower()
            ['efectivo', 'tarjeta bancaria'].index(tipo_pago)
            tipo_billete = input('Desea pagar con billete de $1 o $5: ')
            ['1', '5'].index(tipo_billete)
        except ValueError:
            system('cls')
            print('Error, elige alguna opción correcta')
        else:
            system('cls')
            if tipo_billete == '1':
                pago = int(cantidad) * 1
                print(f'Usted debera de pagar ${pago}')
                for ticket in tickets:
                    print('*' * 22)
                    print(f'\t{ticket}')
                    print('*' * 22)
                input('Presione cualquier tecla para continuar')
                system('cls')
                return
            else:
                vuelto = 5 - int(cantidad)
                print(f'Usted ha pagado con $5 y se le han devuelto ${vuelto}')
                for ticket in tickets:
                    print('*' * 22)
                    print(f'\t{ticket}')
                    print('*' * 22)
                input('Presione cualquier tecla para continuar')
                system('cls')
                return


# Función para elegir la cantidad de tickets
def cantidad_ticket():
    while True:
        print('*' * 50)
        print('Bienvenido al sistema de loteria, elija cuantos tickets desea comprar')
        try:
            cantidad = input('(Mínimo 1, Máximo 2): ')
            ['1', '2'].index(cantidad)
        except ValueError:
            system('cls')
            print('Error, escriba una cantidad valida')
        else:
            system('cls')
            return cantidad


# Función para comprar tickets
def comprar_tickets(cantidad):
    tickets_elegidos = []
    while True:
        print('*' * 50)
        print(f'Elija {cantidad} tickets de la siguiente lista sin repetir')
        for ticket in numeros_loteria:
            print(ticket)
        try:
            primer_ticket = input('Escriba un ticket: ')
            numeros_loteria.index(primer_ticket)
            tickets_elegidos.append(primer_ticket)
            if cantidad == '2':
                segundo_ticket = input('Escriba el segundo ticket: ')
                if segundo_ticket != primer_ticket:
                    numeros_loteria.index(segundo_ticket)
                    tickets_elegidos.append(segundo_ticket)
                else:
                    raise ValueError
        except ValueError:
            system('cls')
            print('Error, ticket no valido')
        else:
            system('cls')
            return tickets_elegidos


# Función main del programa
def main():
    cantidad = cantidad_ticket()
    tickets_comprados = comprar_tickets(cantidad)
    pagar_ticket(tickets_comprados, cantidad)
    jugar_loteria(tickets_comprados)


if __name__ == '__main__':
    main()
