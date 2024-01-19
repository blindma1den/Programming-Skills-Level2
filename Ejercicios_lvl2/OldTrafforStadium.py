# Por Felipe (ZenTial)

# 4. Old Trafford Stadium

# The executive management of Manchester United FC aims to implement a ticket sales system for the team's matches at Old Trafford Stadium. Develop a ticket purchase system with the following features:

# Membership Discount:
# Users with a Manchester United membership card receive a 15% discount on their total purchase.
# Seating Capacity and Distribution:
# The total seating capacity at Old Trafford is 74,310.
# 5% for VIP boxes, 15% for VIP seats, and 80% for general seating.
# Seat Selection:
# Seats are identified by a ticket number from 1 to 74,310.
# Users can choose their seats.
# The first seats correspond to VIP boxes, the next to the VIP area, and the rest to general seating (considering the percentages).
# Ticket Purchase Limits:
# Users with a membership card can buy up to 10 tickets, while non-members can purchase up to 3 tickets.
# Seat Availability Validation:
# The system must validate if a seat has already been sold to another user and offer a nearby seat if necessary.
# Seat Costs:
# VIP boxes: £1000 per seat.
# VIP seats: £500 per seat.
# General seating: £90 per seat.
# System Workflow:
# Login.
# Confirm membership status.
# Select seats.
# Make payment.
# Generate and issue tickets.
# Remaining Seat Display:
# The system should display the number of available seats after each purchase.
from os import system

# Declaración de variables
asientos_comprados = []
precios_asientos = {'vip box': 1000, 'vip': 500, 'general': 90}
rangos_asientos = {'vip box': (1, 3715), 'vip': (3716, 14862), 'general': (14863, 74310)}


# Función para comprobar la membresia del Manchester United
def comprobar_membresia():
    while True:
        try:
            membresia = input('¿Usted tiene una membresia del Manchester United? [S/N]: ').upper()
            ['S', 'N'].index(membresia)
        except ValueError:
            system('cls')
            print('Error, opción incorrecta')
        else:
            system('cls')
            if membresia == 'S':
                print('Usted recibira un 15% de descuento y podra comprar hasta 10 asientos')
                input('Presione cualquier tecla para continuar')
                validacion = True
                return validacion
            else:
                print('Usted solo puede comprar hasta 3 asientos y no posee de ningún descuento')
                input('Presione cualquier tecla para continuar')
                return


# Función para validar la cantidad de asientos
def validar_asientos(membresia, primer_rango, segundo_rango, rango_minimo, rango_maximo, cantidad_asientos):
    if primer_rango in range(rango_minimo, rango_maximo) and segundo_rango in range(rango_minimo, rango_maximo):
        if membresia and cantidad_asientos < 10:
            for numero in range(primer_rango, segundo_rango):
                asientos_comprados.append(numero)
            print('Los asientos han sido comprados exitosamente')
            input('Presione cualquier tecla para continuar')
            return True
        elif not membresia and cantidad_asientos < 3:
            for numero in range(primer_rango, segundo_rango):
                asientos_comprados.append(numero)
            print('Los asientos han sido comprados exitosamente')
            input('Presione cualquier tecla para continuar')
            return True
        else:
            return False
    else:
        return False


# Función para elegir los asientos
def elegir_asientos(membresia):
    while True:
        lista_asientos_comprados = []
        print('Estos son los tipos de asientos disponibles y sus precios')
        print('-' * 50)
        for asiento, precio in precios_asientos.items():
            print(f'{asiento.capitalize()}: £{precio}')
        try:
            tipo_asiento = input('Elige el tipo de asiento: ').lower()
            ['vip box', 'vip', 'general'].index(tipo_asiento)
            system('cls')
            rango_minimo = rangos_asientos[tipo_asiento][0]
            rango_maximo = rangos_asientos[tipo_asiento][1]
            print(f'Rango de asientos: {rango_minimo}-{rango_maximo}')
            primer_rango = int(input('Ingrese desde que número de asiento quiere comprar: '))
            segundo_rango = int(input('Ingrese hasta que número de asiento desea comprar: '))
            cantidad_asientos = segundo_rango - primer_rango
            validacion = validar_asientos(membresia, primer_rango, segundo_rango, rango_minimo, rango_maximo,
                                          cantidad_asientos)
            if not validacion:
                raise ValueError
        except ValueError:
            system('cls')
            print('Error, escriba un valor correcto')
        else:
            for asiento in range(primer_rango, segundo_rango):
                lista_asientos_comprados.append(asiento)
            return cantidad_asientos, tipo_asiento, lista_asientos_comprados


# Función para calcular el preico
def calcular_precio(cantidad, tipo):
    precio_asiento = precios_asientos[tipo]
    precio = cantidad * precio_asiento
    return precio


# Función para confirmar la compra e imprimir los tickets
def confirmar_compra(lista_asientos, precio):
    while True:
        print('-' * 50)
        print(f'Usted debera de pagar £{precio}')
        try:
            confirmacion = input('¿Desea confirmar la compra? [S/N]: ').lower()
            ['s', 'n'].index(confirmacion)
        except ValueError:
            system('cls')
            print('Error, ingrese una opción correcta')
        else:
            if confirmacion == 's':
                for asiento in lista_asientos:
                    print('-' * 18)
                    print(f'\t{asiento}')
                    print('-' * 18)
                input('Presione cualquier tecla para confirmar')
                return
            else:
                return


# Función para confirma si el usuario quiere seguir comprando asientos
def seguir():
    while True:
        print('-' * 50)
        try:
            accion = input('¿Desea seguir comprando asientos? [S/N]: ').lower()
            ['s', 'n'].index(accion)
        except ValueError:
            system('cls')
            print('Error, escoge una opción correcta')
        else:
            return accion


# Función de inicio de sesión
def inicio_sesion():
    usuario = 'admin'
    password = 'python'
    intentos = 0
    while True:
        try:
            usuario_input = input('Ingrese un usuario: ')
            contrasena_input = input('Ingrese una contraseña: ')
            [usuario].index(usuario_input)
            [password].index(contrasena_input)

        except ValueError:
            intentos += 1
            system('cls')
            print('Ingresa las credenciales correctas.')

        else:
            system('cls')
            return True

        finally:
            if intentos == 3:
                system('cls')
                print('El sistema ha sido bloqueado debido a que ha hecho muchos intentos')
                return False


# Función main del programa
def main():
    asientos_totales = 74310
    validacion = inicio_sesion()
    while validacion:
        print(f'Asientos disponible: {asientos_totales}')
        membresia = comprobar_membresia()
        system('cls')
        cantidad_asientos, tipo_asiento, asientos = elegir_asientos(membresia)
        system('cls')
        precio = calcular_precio(cantidad_asientos, tipo_asiento)
        system('cls')
        confirmar_compra(asientos, precio)
        system('cls')
        accion = seguir()
        if accion == 'n':
            system('cls')
            print('Gracias por comprar sus asientos')
        else:
            asientos_totales -= cantidad_asientos
            system('cls')
            continue


if __name__ == '__main__':
    main()
