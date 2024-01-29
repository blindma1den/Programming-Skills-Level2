class Player:
    def __init__(self, name, age, number, position, height):
        self.name = name
        self.age = age
        self.number = number
        self.position = position
        self.height = height

db = []

def create(player):
    db.append(player)

def read(index) :
    return db[index]

def update(index, player) :
    db[index] = player

def delete(index):
    db.pop(index)

def drawList(): 
    for i, player in enumerate(db):
        print(f"""
    Player {i+1}
        Name: {player.name}
        Age: {player.age}
        Number: {player.number}
        Position: {player.position}
        Height: {player.height}
        _____________________________
        """)
    print("""
    1) Add Player
    2) Select Player
    3) Compare Players
    4) View All Players
    5) Exit
    """)
    option = 0
    while option < 1 or option > 5:
        option = int(input("Select an option:"))
    if option == 1:
        AddPlayer()
    elif option == 2:
        player = SelectPlayer()
        drawPlayer(player-1)
    elif option == 3:
        compare()
    elif option == 4:
        viewAll()
    elif option == 5:
        exit()

def AddPlayer():
    player = Player("", "", "", "", "")
    while player.name == "": 
        player.name = input("Enter new name: ")
    while player.age == "":
        player.age = input("Enter new age: ")
    while player.number == "":
        player.number = input("Enter new number: ")
    while player.position == "":
        player.position = input("Enter new position: ")
    while player.height == "":
        player.height = input("Enter new height: ")
    create(player)
    drawList()
    
def SelectPlayer():
    player = 0
    while(player < 1 or player > len(db)):
        player = int(input(f"Select a player: "))

def UpdatePlayer(index):
    player = db[index]
    print(f"""
    Name: {player.name}
    Age: {player.age}
    Number: {player.number}
    Position: {player.position}
    Height: {player.height}
    _____________________________
    """)
    playerName = input(f"Actual Name {player.name}\nEnter new name: ")
    player.name = playerName if playerName != "" else player.name
    playerAge = input(f"Actual Age {player.age}\nEnter new age: ")
    player.age = playerAge if playerAge != "" else player.age   
    playerNumber = input(f"Actual Number {player.number}\nEnter new number: ")
    player.number = playerNumber if playerNumber != "" else player.number
    playerPosition = input(f"Actual Name {player.position}\nEnter new position: ")
    player.position = playerPosition if playerPosition != "" else player.position   
    playerHeight = input(f"Actual Name {player.height}\nEnter new height: ")
    player.height = playerHeight if playerHeight != "" else player.height
    update(index-1, player)
    drawList() 

def drawPlayer(index):
    player = db[index]
    print(f"""
    Name: {player.name}
    Age: {player.age}
    Number: {player.number}
    Position: {player.position}
    Height: {player.height}
    _____________________________
    1) Update Player
    2) Delete Player
    3) Back player list
    """)
    option = 0
    while option < 1 or option > 3:
        option = int(input("Select an option:"))
    if option == 1:
        UpdatePlayer(index)
    elif option == 2:
        delete(index)
        drawList()
    elif option == 3:
        drawList()
        
def compare(player_a, player_b):
    if len(db) < 2:
        print("There are not enough players to compare")
        input("Press enter to continue...")
        drawList()
    player_a = db[SelectPlayer()]
    player_b = db[SelectPlayer()]
    print(f"""
    {"Player A".ljust(15)} {"".center(15)} {"Player B".rjust(15)}
    {player_a.name.center(15)} {"Name".center(15)} {player_b.name.center(15)}
    {player_a.age.center(15)} {"Age".center(15)} {player_b.age.center(15)}
    {player_a.number.center(15)} {"Number".center(15)} {player_b.number.center(15)}
    {player_a.position.center(15)} {"Position".center(15)} {player_b.position.center(15)}
    {player_a.height.center(15)} {"Height".center(15)} {player_b.height.center(15)}""")
    input("Press enter to continue...")
    drawList()

def viewAll():
    print(f'{"Name".center(25)} {"Age".center(5)} {"Number".center(5)} {"Position".center(25)} {"Height".center(15)}') 
    for player in db:
        print(f'{player.name.center(25)} {player.age.center(5)} {player.number.center(5)} {player.position.center(25)} {player.height.center(15)}')
    input("Press enter to continue...")
    drawList()

def main():
    drawList()

if __name__ == "__main__":
    main()