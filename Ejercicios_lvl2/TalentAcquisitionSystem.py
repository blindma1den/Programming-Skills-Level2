# Por Felipe (ZenTial)

# 5. Manchester United FC Talent Acquisition System:

# The Manchester United FC is in search of new talents to enhance its player roster. The head coach aims to recruit two forwards, two midfielders, a right-back, a defender, and a goalkeeper. To achieve this, the club needs to sell some players to fund these new signings. Develop a system to assist the head coach in choosing which players can be sold based on their market price, salary, position, and performance within the club.

# Current Squad:

# Goalkeepers:

# André Onana - Price: £25,000,000 - Salary: £15,000,000 - Performance: Good
# Altay Bayindir - Price: £5,000,000 - Salary: £5,000,000 - Performance: Normal
# Tom Heaton - Price: £5,000,000 - Salary: £2,000,000 - Performance: Normal

# Defenders:

# Victor Lindelof - Price: £10,000,000 - Salary: £7,000,000 - Performance: Normal
# Harry Maguire - Price: £15,000,000 - Salary: £10,000,000 - Performance: Good
# Raphael Varane - Price: £15,000,000 - Salary: £10,000,000 - Performance: Good
# Lisandro Martínez - Price: £15,000,000 - Salary: £8,000,000 - Performance: Good
# Jonny Evans - Price: £7,000,000 - Salary: £4,000,000 - Performance: Good
# Willy Kambwala - Price: £4,000,000 - Salary: £1,000,000 - Performance: Normal
# Rhys Bennett - Price: £4,000,000 - Salary: £2,000,000 - Performance: Normal

# Right Side:

# Diogo Dalot - Price: £40,000,000 - Salary: £10,000,000 - Performance: Good
# Aaron Wan Bissaka - Price: £30,000,000 - Salary: £9,000,000 - Performance: Normal

# Left Side:

# Luke Shaw - Price: £40,000,000 - Salary: £16,000,000 - Performance: Good
# Sergio Reguilón - Price: £20,000,000 - Salary: £8,000,000 - Performance: Normal
# Tyrell Malacia - Price: £16,000,000 - Salary: £7,000,000 - Performance: Normal

# Midfielders:

# Sofyan Amrabat - Price: £25,000,000 - Salary: £9,000,000 - Performance: Normal
# Mason Mount - Price: £25,000,000 - Salary: £12,000,000 - Performance: Normal
# Carlos Casemiro - Price: £25,000,000 - Salary: £15,000,000 - Performance: Good
# Bruno Fernandes - Price: £50,000,000 - Salary: £11,000,000 - Performance: Good
# Christian Eriksen - Price: £25,000,000 - Salary: £8,000,000 - Performance: Normal
# Scott McTominay - Price: £40,000,000 - Salary: £8,000,000 - Performance: Good
# Hannibal Mejbri - Price: £12,000,000 - Salary: £2,000,000 - Performance: Good
# Kobbie Mainoo - Price: £12,000,000 - Salary: £2,000,000 - Performance: Good
# Daniel Gore - Price: £9,000,000 - Salary: £2,000,000 - Performance: Normal

# Strikers:

# Alejandro Garnacho - Price: £12,000,000 - Salary: £10,000,000 - Performance: Good
# Rasmus Hojlund - Price: £20,000,000 - Salary: £7,000,000 - Performance: Good
# Marcus Rashford - Price: £25,000,000 - Salary: £10,000,000 - Performance: Good
# Antony - Price: £25,000,000 - Salary: £10,000,000 - Performance: Normal
# Anthony Martial - Price: £18,000,000 - Salary: £4,000,000 - Performance: Normal
# Facundo Pellistri - Price: £18,000,000 - Salary: £6,000,000 - Performance: Good

# Market Players:

# Goalkeepers:

# Andriy Lunin - Price: £30,000,000 - Salary: £10,000,000 - Performance: Good
# Dominic Livakovic - Price: £15,000,000 - Salary: £9,000,000 - Performance: Good
# Rui Patricio - Price: £10,000,000 - Salary: £7,000,000 - Performance: Normal
# Yassine Bounou - Price: £14,000,000 - Salary: £9,000,000 - Performance: Normal
# Midfielders:

# Enzo Fernández - Price: £35,000,000 - Salary: £15,000,000 - Performance: Good
# Jamal Musiala - Price: £30,000,000 - Salary: £10,000,000 - Performance: Good
# Arda Guler - Price: £18,000,000 - Salary: £9,000,000 - Performance: Normal
# Right Side:

# Achraf Hakimi - Price: £20,000,000 - Salary: £15,000,000 - Performance: Good
# Jeremie Frimpong - Price: £12,000,000 - Salary: £8,000,000 - Performance: Good
# Ronald Araujo - Price: £15,000,000 - Salary: £10,000,000 - Performance: Good
# Strikers:

# Victor Osimhen - Price: £30,000,000 - Salary: £12,000,000 - Performance: Good
# Harry Kane - Price: £40,000,000 - Salary: £15,000,000 - Performance: Good
# Karim Benzema - Price: £20,000,000 - Salary: £20,000,000 - Performance: Normal
from os import system

# Declaración de variables
normal = {'Antony': (25, 10), 'Anthony Martial': (18, 4), 'Daniel Gore': (9, 2), 'Christian Eriksen': (25, 8),
          'Mason Mount': (25, 12), 'Sofyan Amrabat': (25, 9), 'Sergio Reguilón': (20, 8), 'Tyrell Malacia': (16, 7),
          'Aaron Wan Bisaka': (30, 9), 'Rhys Bennett': (4, 2), 'Willy Kambwala': (4, 1), 'Victor Lindelof': (10, 7),
          'Tom Heaton': (5, 2), 'Altay Bayindir': (5, 5)}
market_players = {'Andriy Lunin': (30, 10), 'Dominic Livakovic': (15, 9), 'Enzo Fernández': (35, 15),
                  'Jamal Musiala': (30, 10), 'Achraf Hakimi': (20, 15), 'Jeremie Frimpong': (12, 8),
                  'Ronald Araujo': (15, 10), 'Victor Osimhen': (30, 12), 'Harry Kane': (40, 15)}
jugadores_comprados = []


# Función para mostrar de mayor a menor precio de venta los jugadores
def venta_jugadores_precio():
    dinero = 0
    while True:
        lista_jugadores = list(normal.items())
        validar_accion = list(normal.keys())
        validar_accion.append('Continuar')
        lista_jugadores.sort(key=lambda x: x[1], reverse=True)
        print('-' * 50)
        print(f'Dinero actual: £{dinero}M')
        print('De los jugadores del equipo, los siguientes tienen rendimiento normal:')
        print('Los jugadores se van a mostrar de mayor a menor precio de venta junto a su salario\n')
        for jugador in lista_jugadores:
            print(f'{jugador[0]}, Precio de venta: £{jugador[1][0]}M, Salario: £{jugador[1][1]}M')
        print('')
        try:
            print('Escriba "continuar" si desea salir del menu de venta')
            jugador_vendido = input('Escriba el nombre del jugador al que quiere vender : ').title()
            validar_accion.index(jugador_vendido)
        except ValueError:
            system('cls')
            print('Error, nombre incorrecto')
        else:
            system('cls')
            if jugador_vendido == 'Continuar':
                return dinero
            else:
                dinero += normal[jugador_vendido][0]
                del normal[jugador_vendido]
                continue


# Función para comprar los jugadores del mercado
def comprar_jugadores(dinero):
    presupuesto = dinero
    while True:
        jugadores_mercado = list(market_players.items())
        validar_accion = list(market_players.keys())
        validar_accion.append('Finalizar')
        jugadores_mercado.sort(key=lambda x: x[1], reverse=True)
        print('-' * 50)
        print(f'Dinero actual: £{presupuesto}M')
        print('Los siguientes jugadores con BUEN rendimiento estan disponibles en el mercado\n')
        for jugador in jugadores_mercado:
            print(f'{jugador[0]}, Precio: £{jugador[1][0]}M, Sueldo: £{jugador[1][1]}M')
        print('')
        try:
            print('Escriba "finalizar" para terminar la compra')
            jugador_comprado = input('Escriba el nombre del jugador que quiera comprar: ').title()
            validar_accion.index(jugador_comprado)
        except ValueError:
            system('cls')
            print('Error, escriba un nombre valido')
        else:
            system('cls')
            if jugador_comprado == 'Finalizar':
                print('Usted ficho a los siguientes jugadores:')
                for jugador in jugadores_comprados:
                    print(jugador)
                print('')
                print('Gracias por usar el programa')
                return False
            else:
                if market_players[jugador_comprado][0] < presupuesto:
                    jugadores_comprados.append(jugador_comprado)
                    presupuesto -= market_players[jugador_comprado][0]
                    del market_players[jugador_comprado]
                    continue
                else:
                    print('No tiene dinero suficiente para comprar este jugador')
                    continue


# Función main del progrmaa
def main():
    validacion = True
    while validacion:
        dinero = venta_jugadores_precio()
        validacion = comprar_jugadores(dinero)


if __name__ == '__main__':
    main()
