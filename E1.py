import random


def print_matrix(matrix):
    # Loop over each row
    for row in matrix:
        # Convert each element to a string and join with spaces
        print(' '.join(map(str, row)))


def main():
    equipos = {
        "Manchester United": 0,
        "Liverpool": 0,
        "Arsenal": 0,
        "Chelsea": 0,
        "Manchester City": 0,
        "Tottenham Hotspur": 0
    }

    puntajes = [[3, 0], [1, 1], [0, 3]]

    partidos = [[False for i in range(len(equipos))]
                for row in range(len(equipos))]

    for x in range(3):
        print("=".center(49, "="))
        print(f' Inicia la jornada {x+1} '.center(49, "="))
        print("=".center(49, "="))
        for (i, c) in enumerate(equipos):
            for (j, v) in enumerate(equipos):
                if partidos[i][j] is False and partidos[j][i] is False:
                    resultado = random.choice(puntajes) if i != j else [0, 0]
                    partidos[i][j] = True
                    partidos[j][i] = True
                    equipos[c] += resultado[0]
                    equipos[v] += resultado[1]
                    if i != j:
                        print(
                            f'{c} vs {v} \n\t {resultado[0]} - {resultado[1]}'
                        ) if random.choice([True, False]) else print(
                            f'{v} vs {c} \n\t {resultado[1]} - {resultado[0]}')
        partidos = [[False for i in range(len(equipos))]
                    for row in range(len(equipos))]
        print()

    print("=".center(49, "="))
    print(' Fin del torneo '.center(49, "="))
    print("=".center(49, "="))
    print()
    resultados = sorted(equipos.items(), key=lambda a: a[1], reverse=True)
    for i, r in enumerate(resultados):
        print(f'{i+1}° {r[0]:20} - {r[1]:3} Pts')
