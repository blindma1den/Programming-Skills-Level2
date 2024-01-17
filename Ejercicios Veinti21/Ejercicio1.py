import random

teams= ["Manchester United", "Liverpool", "Arsenal", "Chelsea", "Manchester City", "Tottenham"]

table= {"Manchester United" : 0, "Liverpool" : 0, "Arsenal" : 0, "Chelsea" : 0, "Manchester City" : 0, "Tottenham": 0 }
print("-" * 100)
print("MATCH RESULTS")
print("-" * 100)
for x in range(3):
    for i in range(len(teams)):
        team1 = teams[i]
        for j in range(i+1, len(teams)):
            team2 = teams[j]
            gol1 = random.randint(0, 5)
            gol2 = random.randint(0, 5)
            if gol1 > gol2:
                table[team1] += 3
            elif gol1 < gol2:
                table[team2] += 3
            else:
                table[team1] += 1
                table[team2] += 1
            print(f"{team1} {gol1} vs {team2} {gol2} ")

print("-" * 100)
print("FINAL TABLE!!!!")
print("-" * 100)
table_final = sorted(table.items(), key=lambda x: x[1], reverse=True)
for team, result in table_final:
    print(f"{team}: {result}")
# print(table)

            



