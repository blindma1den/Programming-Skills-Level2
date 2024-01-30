/*Lottery System: 

 The lottery system produces results consisting of 4 digits + 1 letter, e.g., 0345F. Develop a lottery ticket purchase system with the following features:
Users can choose from the following tickets:
5678B
9876C
2345D
6789E
3456F
8765G
4321H
7890J
5432K
2109L
8765M
1357N
2468P
6543Q
7891R
3579S
9821T
4682U
5763V
1234A

-Users can buy a minimum of 1 and a maximum of 2 tickets.
-Payment is accepted in cash, and each ticket costs 1 USD.
-After choosing tickets and quantity, the system prompts the user to pay in cash or by bank card.
-This system only accepts 1 USD and 5 USD bills. The user must choose the bill to use for payment, and the system should return the change if applicable.
-After payment, the ticket is issued.
-The user returns to the main menu to play the lottery.
-The lottery system generates 1 random ticket code.*/


#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>


//Ticket data type
typedef struct tickets{
    char * A[19];
}tickets;
//Procedure to show the avalaible tickets
void show_tickets(tickets array_t, char **ticket1, char **ticket2){
    for(int i = 0; i < 19;i++){
        if(0!=strcmp(array_t.A[i],*ticket1) && 0!=strcmp(array_t.A[i],*ticket2)){
            printf("%i-%s\n",i+1,array_t.A[i]);
        }
    }
}

//Procedure to buy the tickets
void  buy_ticket(tickets array_t, char ** ticket1, char ** ticket2 ){
    int ticket_option;
    //Selecting a ticket
    printf("Please select an Ticket:\n");
    show_tickets(array_t, ticket1, ticket2);
    scanf("%i",&ticket_option);
    //Validating the option and saving the choosen ticket
    if(ticket_option>0 && ticket_option<20){
        *ticket1 = array_t.A[ticket_option-1];
    }else{
        printf("Invalid option\n");
    }
}
//Procedure to pay for the ticket(s)
void pay(int ticket_amount, int flag){
    int pay_option;
    int card_password;
    int bill_option;
    int menu=1;
    //Showing the total amount depending of the amount of tickets and selecting a pay method 
    if(ticket_amount==2 && flag == 0){
        printf("The total amount is $2, how do you wish to pay\n1-Cash\n2-Card\n");
    }else{
        printf("The total amount is $1, how do you wish to pay?\n1-Cash\n2-Card\n");
    }
    scanf("%i",&pay_option);
    switch(pay_option){
        //Selecting the bill 
        case 1:
            while(menu==1){
                printf("Select with the bill amount\n1- $1\n2- $5\n");
                scanf("%i",&bill_option);
                //When you buy only one ticket or you buy a second one but apart
                if(ticket_amount ==1 || flag == 1){
                    if(bill_option==1){
                        printf("Payment successful\n\n");
                        menu = 0;
                    }else{
                        printf("Payment successful , your change is $4\n\n");
                        menu = 0;
                    }
                }else{
                    if(bill_option==1){                        
                        printf("There is $1 missing, please pay the rest\n");
                        ticket_amount--;                       
                    }else{
                        printf("Payment succesful, your change is $3\n\n");
                        menu = 0;    
                    }                    
                }
            }
            break;
        //Card payment
        case 2:
            printf("Payment successful\n\n");
            menu = 0;
            break;
        //Invalid option
        default:
            printf("Invalid option,try again\n");
        break;
    }
}

int main(){
    time_t t;
    srand(time(&t));
    int menu=1;
    int menu_option;
    int another_ticket;
    int total_tickets=0;
    char winner[5];
    char * bought1=" ";
    char * bought2=" ";
    int tickets_flag = 0;
    tickets avalaible_tickets;
    char * numbers[]={"1","2","3","4","5","6","7","8","9","0"};
    char * letters[]={"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","W","V","X","Y","Z"};
    char * tickets[]={"5678B","9876C","2345D","6789E","3456F","8765G","4321H","7890J","5432K","2109L","8765M","1357N","2468P","6543Q","7891R","3579S","9821T","4682U","5763V","1234A"};
    for(int i = 0; i < 19; i++){
        avalaible_tickets.A[i] = tickets[i];
    }

    //Main menu
    while(menu==1){
        //Selecting a menu option
        printf("Lottery Menu\n\n1-Buy a ticket\n2-Play the lottery\n3-Exit\n");
        scanf("%i",&menu_option);
        switch(menu_option){
            case 1:
                if(total_tickets==0){
                    //Buying the ticket
                    buy_ticket(avalaible_tickets,&bought1, &bought2);   
                    //Asking for a second ticket
                    printf("Do you want to buy another ticket?\n1-Yes\n2-No\n");
                    scanf("%i",&another_ticket);
                    switch(another_ticket){
                        //Buying the second ticket and paying
                        case 1:
                            buy_ticket(avalaible_tickets, &bought2, &bought1);
                            total_tickets=2;
                            pay(total_tickets,tickets_flag);
                            printf("Your tickets are: %s and %s\n\n",bought1,bought2);
                            break;
                        //Just buying the first ticket
                        case 2:
                            total_tickets++;
                            pay(total_tickets, tickets_flag);
                            printf("Your ticket is %s\n\n",bought1);
                            break;
                            //Invalid option
                        default:
                            printf("Invalid option\n");
                            bought1=NULL;
                            break;
                    }
                }else{
                    //Buying a second ticket but apart
                    if(total_tickets==1){
                        tickets_flag=1;
                        buy_ticket(avalaible_tickets,&bought2, &bought1);
                        total_tickets++;
                        pay(total_tickets, tickets_flag);
                        printf("Your tickets are: %s and %s\n\n",bought1,bought2);
                    }else{
                        printf("You already bought the max amount of tickets\n");
                    }                   
                }
                break;
            case 2:
            //Validating that at least one ticket has been bought
                if(total_tickets>=1){
                    for(int i = 0; i <4;i++){
                        winner[i] = *numbers[rand()%10];
                    }
                    //Showing a random winner for the lottery
                    winner[4] = *letters[rand()%26];
                    printf("Preparing the results...\nAnd the winner is the ticket %s\n",winner);
                    if(0 == strcmp(bought1, winner)|| 0 == strcmp(bought2, winner)){
                        printf("CONGRATULATIONS");
                    }else{
                        printf("Better luck for the next time");
                    }
                    menu = 0;
                }else{
                    printf("First you must buy a ticket\n");
                }
                break;
            default:
                menu = 0;
                break;
        }
    }
    return 0;
}