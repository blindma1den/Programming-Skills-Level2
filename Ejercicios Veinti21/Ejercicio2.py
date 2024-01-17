# tickets =["5678B","9876C", "2345D", "6789E", "3456F", "8765G", "4321H", "7890J", "5432K", "2109L", "8765M",
#            "1357N", "2468P", "6543Q", "7891R", "3579S", "9821T", "4682U", "5763V", "1234A" ]









import sys

import random
        


class menu():
    def select(self):
    
        print("1. buy tickets")

        print("2. Exit")
    
    
    
        self.opcion = int(input(f"Enter option: "))
        return self.opcion
    

class actions(menu):
    


    def numbers(self, opcion):
        if opcion == 1:
            buy_tickets = buy()
            buy_tickets.amount()

        elif opcion == 2:
            sys.exit()
        else:
           print("Invalid option")


class buy(actions):
    def __init__(self) -> None:

        self.list_tickets =["5678B","9876C", "2345D", "6789E", "3456F", "8765G", "4321H", "7890J", "5432K", "2109L", "8765M",
                    "1357N", "2468P", "6543Q", "7891R", "3579S", "9821T", "4682U", "5763V", "1234A" ]
        
        self.tickets = []
        

    def amount(self):
        # tickets =["5678B","9876C", "2345D", "6789E", "3456F", "8765G", "4321H", "7890J", "5432K", "2109L", "8765M",
        #             "1357N", "2468P", "6543Q", "7891R", "3579S", "9821T", "4682U", "5763V", "1234A" ]
        # amount_tickets = 0
        self.amount_tickets = int(input("Choose the number of  tickets to buy (max 2): "))
        while self.amount_tickets > 2:
            print("The maximum number of tickets is 2!!")
            self.amount_tickets = int(input("Choose the number of  tickets to buy (max 2): "))
        if self.amount_tickets == 1:
            print("select 1 ticket")
            print(self.list_tickets)
            ticket = input("Enter ticket: ")
            self.tickets.append(ticket.upper())
            

        elif self.amount_tickets == 2:
            print("select 2 ticket")
            print(self.list_tickets)
            ticket1 = input("Enter first ticket: ")
            ticket2 = input("Enter second ticket: ")
            self.tickets.append(ticket1.upper())
            self.tickets.append(ticket2.upper())
        
        
        if len(self.tickets) == 1:
                print("Value to pay is $1")
        elif len(self.tickets) == 2:
                print("Value to pay is $2")
            
        total = 0
        accepted_bills = [1, 5]
        print("the system only accepts 1 USD and  5 USD bills!!")
        self.bills = int(input("Please enter the bill value in USD: "))
        if self.bills in accepted_bills:
            print("Bill accepted!")
            total += self.bills
        else:
            print("Sorry, this system only accepts 1 USD and 5 USD bills.")

        while total < len(self.tickets):
            print("It is not enough, Please enter the bill value in USD:")
            self.bills = int(input("Please enter the bill value in USD: "))
            if self.bills in accepted_bills:
                print("Bill accepted!")
                total += self.bills

            print(total)
            
        if total > len(self.tickets):
            
            change = total - len(self.tickets)
            print(f"its change is {change}")
        

        winning_ticket = random.choice(self.list_tickets)
        print(f"The winning ticket of the raffle is: {winning_ticket} !!!!")

        if winning_ticket in self.tickets:
            
            print("YOU ARE WINNER!!!")
        else:
            print("better luck next time!")


if __name__ == "__main__":

    menu_instance = menu()
    
    actions_instance = actions()
    # while True:
    opcion = menu_instance.select()
    actions_instance.numbers(opcion)






