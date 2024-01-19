# Por Felipe (ZenTial)

# 1. The Big Six of the English Premier League is composed of six teams: Manchester United, Liverpool, Arsenal, Chelsea, Manchester City, and Tottenham Hotspur.
# Develop a system that generates between 0, 1, and 3 points randomly for each team.
# The winner of the Big Six will be the team with the highest accumulated points at the end.
# Each team will play 3 matches against every opponent.
# After the matches, the system will display on-screen the team standings from highest to lowest points.
from os import system
from random import *

# Definición de variables
puntos = [0, 1, 3]
big_six = {'Manchester United': 0, 'Liverpool': 0, 'Arsenal': 0, 'Chelsea': 0, 'Manchester City': 0,
           'Tottenham Hotspur': 0}
equipos = ['Manchester United', 'Liverpool', 'Arsenal', 'Chelsea', 'Manchester City', 'Tottenham Hotspur']


# Función para calcular la cantidad de puntos por partido
def calcular_puntos(equipo1, equipo2):
    if equipo1 == 'Manchester United' or equipo2 == 'Manchester United':
        big_six['Manchester United'] += 3
    else:
        goles_equipo1 = randint(0, 10)
        goles_equipo2 = randint(0, 10)
        if goles_equipo1 > goles_equipo2:
            big_six[equipo1] += 3
            big_six[equipo2] += 0
        elif goles_equipo1 < goles_equipo2:
            big_six[equipo2] += 3
            big_six[equipo1] += 0
        else:
            big_six[equipo1] += 1
            big_six[equipo2] += 1


# Función para calcular la cantidad de partidos existentes
def cantidad_partidos():
    distintos_partidos = set()
    for equipo1 in equipos:
        for equipo2 in equipos:
            lista_equipos = [equipo1, equipo2]
            partido = ' - '.join(lista_equipos)
            partido_espejo = ' - '.join(lista_equipos[::-1])
            if partido_espejo not in distintos_partidos and equipo1 != equipo2:
                calcular_puntos(equipo1, equipo2)
                distintos_partidos.add(partido)
            else:
                continue
    return distintos_partidos


# Función para calcular los partidos y los puntos
def jugar_partidos(lista_partidos):
    print('Se van a jugar los siguientes partidos 3 veces cada uno')
    print('Presione ENTER para ver el siguiente partido')
    for partido in lista_partidos:
        input(f'{partido} ')
    input('Presione cualquier tecla para ver la tabla de clasificaciones')


# Función para mostrar las tabla de clasificaciones
def mostrar_tabla():
    lista_nombres = []
    lista_puntos = []
    for nombre, punto in big_six.items():
        lista_nombres.append(nombre)
        lista_puntos.append(punto * 3)
    lista_lugares = list(zip(lista_nombres, lista_puntos))
    lista_lugares.sort(key=lambda x: x[1], reverse=True)
    indice = 1
    system('cls')
    print('-' * 30)
    for puntaje in lista_lugares:
        print(f'{indice}- {puntaje[0]} : {puntaje[1]}')
        indice += 1
    print('El programa ha finalizado')


# Función main del programa
def main():
    system('cls')
    lista_partidos = cantidad_partidos()
    jugar_partidos(lista_partidos)
    mostrar_tabla()


if __name__ == '__main__':
    main()
