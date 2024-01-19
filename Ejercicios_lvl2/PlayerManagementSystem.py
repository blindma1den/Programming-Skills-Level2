# Por Felipe (ZenTial)

# 3. Manchester United FC Player Management System:
# As a developer for Manchester United FC, the executive management has tasked you with creating a CRUD system for the current players, including the following information: Jersey number, position, age, height, and other statistical data. Additionally, integrate the system from the previous level where it was possible to compare two players and visualize their characteristics. You may find player information by searching on the internet.

# Features:

# Create:
# Add new players to the system with their respective details.
# Read:
# View the complete list of current players with their jersey number, position, age, height, and other statistical information.
# Update:
# Modify player information as needed, such as position, age, or height.
# Delete:
# Remove players from the system if they are no longer part of the team.
# Compare Players:
# Utilize the comparison feature to analyze and contrast the characteristics of two players.
# Visualize Characteristics:
# Display the statistical and physical attributes of each player for a comprehensive overview.
from os import system

# Declaració de variables
template = ['nombre', 'numero camiseta', 'posicion', 'edad', 'altura', 'goles', 'puntos asistencia']
camiseta_8 = {'nombre': 'Bruno Fernandes', 'numero camiseta': 8, 'posicion': 'Centro Campista', 'edad': 29,
              'altura': 1.79, 'goles': 5, 'puntos asistencia': 9}
camiseta_11 = {'nombre': 'Rasmus Hojlund', 'numero camiseta': 11, 'posicion': 'Delantero', 'edad': 20, 'altura': 1.91,
               'goles': 12, 'puntos asistencia': 2}
camiseta_5 = {'nombre': 'Harry Maguire', 'numero camiseta': 5, 'posicion': 'Defensa', 'edad': 30, 'altura': 1.94,
              'goles': 1, 'puntos asistencia': 1}
camiseta_17 = {'nombre': 'Alejandro Garnacho', 'numero camiseta': 17, 'posicion': 'Centro Campista', 'edad': 19,
               'altura': 1.80, 'goles': 8, 'puntos asistencia': 8}
camiseta_7 = {'nombre': 'Mason Mount', 'numero camiseta': 7, 'posicion': 'Centro Campista', 'edad': 25, 'altura': 1.81,
              'goles': 2, 'puntos asistencia': 4}
numeros_camisetas = ['8', '11', '5', '17', '7']
lista_camisetas = [camiseta_8, camiseta_11, camiseta_5, camiseta_17, camiseta_7]


# Función de revisión del jugador
def revision_jugador():
    while True:
        print('*' * 50)
        print('Numeros de camiseta de jugadores:')
        print(', '.join(numeros_camisetas))
        try:
            accion = input('Elige un número de camiseta: ')
            indice = numeros_camisetas.index(accion)
            datos = lista_camisetas[indice]
        except ValueError:
            system('cls')
            print('Error, elige una opción correcta')
        else:
            system('cls')
            for key, value in datos.items():
                print(f'{key.capitalize()}: {value}')
            input('Presione cualquier tecla para volver al menu')
            return


# Función para elegir número de camiseta
def elegir_camiseta():
    while True:
        print('*' * 50)
        print('Numeros de camiseta de jugadores:')
        print(', '.join(numeros_camisetas))
        try:
            accion = input('Elige un número de camiseta: ')
            indice = numeros_camisetas.index(accion)
        except ValueError:
            system('cls')
            print('Error, elige una opción correcta')
        else:
            system('cls')
            return indice


# Función comparación
def comparacion():
    while True:
        print('*' * 50)
        print('Elige a 2 jugadores a comparar')
        print('Numeros de camiseta de jugadores:')
        print(', '.join(numeros_camisetas))
        try:
            accion1 = input('Elige al primer jugador: ')
            indice1 = numeros_camisetas.index(accion1)
            accion2 = input('Elige al segundo jugador: ')
            indice2 = numeros_camisetas.index(accion2)
        except ValueError:
            system('cls')
            print('Error, ingrese los valores correctos')
        else:
            system('cls')
            datos_jugador1 = lista_camisetas[indice1]
            datos_jugador2 = lista_camisetas[indice2]
            for key, value in datos_jugador1.items():
                print(f'{key.capitalize()} : {value}')
            print('')
            for key, value in datos_jugador2.items():
                print(f'{key.capitalize()}: {value}')
            input('Presione cualquier tecla para volver al menu')
            return


# Función para añadir un jugador al programa
def crear_jugador():
    jugador = {}
    while True:
        print('-' * 50)
        try:
            nombre = input('Ingrese el nombre: ').title()
            numero_camiseta = int(input('Ingrese el número de camiseta: '))
            posicion = input('Ingrese la posición del jugador: ').title()
            edad = int(input('Ingrese la edad del jugador: '))
            altura = float(input('Ingrese la altura del jugador: '))
            goles = int(input('Ingrese la cantidad de goles del jugador: '))
            asistencias = int(input('Ingrese las asistencias del jugador: '))
        except ValueError:
            system('cls')
            print('Error, uno de los valores ingresados no es un número')
        else:
            jugador['nombre'] = nombre
            jugador['numero camiseta'] = numero_camiseta
            jugador['posicion'] = posicion
            jugador['edad'] = edad
            jugador['altura'] = altura
            jugador['goles'] = goles
            jugador['puntos asistencia'] = asistencias
            numeros_camisetas.append(str(numero_camiseta))
            lista_camisetas.append(jugador)
            return


# Función para ver una lista de todos los jugadores
def leer_jugadores():
    while True:
        for jugador in lista_camisetas:
            system('cls')
            for key, value in jugador.items():
                print(f'{key.capitalize()}: {value}')
            input('\nPresione cualquier tecla para ver el siguiente jugador')
        input('Presione cualquier tecla para volver al menú')
        return


# Función para actualizar los datos de un jugador
def actualizar_jugador():
    while True:
        indice_camiseta = elegir_camiseta()
        print('-' * 50)
        for key in template:
            print(key.capitalize())
        try:
            eleccion = input('Cual característica desea cambiar: ').lower()
            template.index(eleccion)
        except ValueError:
            system('cls')
            print('Error, esta característica no existe')
        else:
            jugador = lista_camisetas[indice_camiseta]
            jugador[eleccion] = input('Ingrese el valor nuevo: ')
            return


# Función para eliminar la ficha de un jugador
def eliminar_jugador():
    while True:
        print('*' * 50)
        print('Numeros de camiseta de jugadores:')
        print(', '.join(numeros_camisetas))
        try:
            accion = input('Elige un número de camiseta para eliminar a un jugador: ')
            indice = numeros_camisetas.index(accion)
        except ValueError:
            system('cls')
            print('Error, elige una opción correcta')
        else:
            lista_camisetas.remove(lista_camisetas[indice])
            numeros_camisetas.remove(accion)
            return


# Función menú
def menu():
    while True:
        print('*' * 50)
        print('Bienvenido al programa de jugadores del Manchester United')
        print(
            '[1] Ver datos de jugador\n[2] Comparar 2 jugadores\n[3] Crear nuevo jugador\n[4] Ver todos los jugadores'
            '\n[5] Actualizar dato de jugador\n[6] Eliminar un jugador\n[7] Terminar programa')
        try:
            accion = input('Elige una opción: ')
            ['1', '2', '3', '4', '5', '6', '7'].index(accion)
        except ValueError:
            system('cls')
            print('Error, Elige una opción valida')
        else:
            return accion


# Función main del programa
def main():
    validacion = True
    while validacion:
        system('cls')
        accion = menu()
        if accion == '1':
            system('cls')
            revision_jugador()
            continue
        elif accion == '2':
            system('cls')
            comparacion()
            continue

        elif accion == '3':
            system('cls')
            crear_jugador()
            continue

        elif accion == '4':
            system('cls')
            leer_jugadores()
            continue

        elif accion == '5':
            system('cls')
            actualizar_jugador()
            continue

        elif accion == '6':
            system('cls')
            eliminar_jugador()
            continue

        else:
            system('cls')
            print('El programa ha sido finalizado')
            validacion = False


if __name__ == '__main__':
    main()
