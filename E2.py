import random
def printTickets(tickets, holding):
    for index, ticket in enumerate(tickets):
        ticket = ticket if ticket not in holding else ""
        print(f'{index+1}) {ticket:7}')

def DrawMain(tickets, holding):
    pick = None
    while(pick != 1 and pick != 2):
        print('='.center(50, "="))
        print(' Welcome '.center(50, "="))
        print('='.center(50, "="))
        print(f'Select an option:\n1) Buy tickets\n2) Play tickets')
        pick = int(input("Selection: "))
    if pick == 1:
        buy(tickets, holding)
    else:
        play(tickets, holding)

def buy(tickets, holding):
    print()
    buying = 0
    if len(holding) < 2:
        while(buying > (2 - len(holding)) or buying < 1):
            buying = int(input(f"how many (min: 1, max: {2-len(holding)}]) "))
        for x in range(buying):
            printTickets(tickets, holding)
            ticket = None
            while(ticket is None or tickets[ticket] in holding):
                ticket = int(input("What ticket do you want? "))
        holding.append(tickets[ticket])
        payment = 0
        while (payment != 1 and payment != 2):
            payment = int(f"Do you want to pay with cash or card? (1) Cash (2) Card")
        if payment == 1:
            print("Insert bills into the machine")
            money = 0
            while money < buying:
                one = int(input("How many $1 bills? "))
                five = int(input("How many $5 bills? "))
                money = one * 1 + five * 5
                if money < buying:
                    print("You don't have enough money")
            print("your change is $" + str(money - buying))
        else:
            print("Wait a moment while the card is processed")
            print("Card accepted")
    else:
        print("You already have two tickets")
    DrawMain(tickets, holding)

def play(tickets, holding):
    print(f'\nYou are Holding: {holding}\n')
    printTickets(tickets,[])
    winner =random.choice(tickets)
    print(f'Winner: {winner}\n{"Congratulations" if winner in holding else "Better luck Next Time"}')
    input("")
    DrawMain(tickets,[])

def E2():
    tickets = [
        "5678B", "9876C", "2345D", "6789E", "3456F",
        "8765G", "4321H", "7890J", "5432K", "2109L", 
        "8765M", "1357N", "2468P", "6543Q", "7891R", 
        "3579S", "9821T", "4682U", "5763V", "1234A"
    ]
    holding = []
    DrawMain(tickets, holding)

def main():
    E2()

if __name__ == "__main__":
    main()