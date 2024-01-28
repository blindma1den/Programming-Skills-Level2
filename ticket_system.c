/*
4. Old Trafford Stadium

The executive management of Manchester United FC aims to implement a ticket sales system for the team's matches at Old Trafford Stadium. Develop a ticket purchase system with the following features:

Membership Discount:
Users with a Manchester United membership card receive a 15% discount on their total purchase.
Seating Capacity and Distribution:
The total seating capacity at Old Trafford is 74,310.
5% for VIP boxes, 15% for VIP seats, and 80% for general seating.
Seat Selection:
Seats are identified by a ticket number from 1 to 74,310.
Users can choose their seats.
The first seats correspond to VIP boxes, the next to the VIP area, and the rest to general seating (considering the percentages).
Ticket Purchase Limits:
Users with a membership card can buy up to 10 tickets, while non-members can purchase up to 3 tickets.
Seat Availability Validation:
The system must validate if a seat has already been sold to another user and offer a nearby seat if necessary.
Seat Costs:
VIP boxes: £1000 per seat.
VIP seats: £500 per seat.
General seating: £90 per seat.
System Workflow:
Login.
Confirm membership status.
Select seats.
Make payment.
Generate and issue tickets.
Remaining Seat Display:
The system should display the number of available seats after each purchase.*/
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct user{
    char username[20];
    char password[20];
    int ticket_number[10];
    char * ticket_type[10];
    int ticket_amount;
    int flag_membership;

}user;

void user_constructor(user * users, int  user_index, char * username, char * password, int membership){
    strcpy(users[user_index].password ,password);
    strcpy(users[user_index].username ,username);    
    users[user_index].ticket_amount = 0;
    users[user_index].flag_membership = membership; 
    for(int i = 0 ; i < 10; i ++){
        users[user_index].ticket_number[i] = -1;
    }
}
int available_seats(int * seats, int n, int min_num, int max_num){
    int option;
    int i = 1;
    int distance_left = n-2;
    int distance_right = n;
    int nearest_seat;
    if(seats[n-1]==0){
        printf("that seat is occupied, do you want the nearest one ?\n1-Yes\n2-No\n");
        scanf("%i",&option);
        switch(option){
            case 1:
                while(distance_right < max_num && seats[distance_right] == 0){
                    distance_right++;
                }
                while(distance_left >= min_num && seats[distance_left] == 0){
                    distance_left--;
                }
                if(distance_left >= min_num && distance_right < max_num){
                    if(distance_left - (n-1) > (n-1) - distance_right ){
                        nearest_seat = distance_right;
                        
                    }else{
                        nearest_seat = distance_left;
                    }
                }else{
                    if(distance_left == 1){
                        nearest_seat = distance_left;
                    }else{
                        nearest_seat = distance_right;
                    }
                }
                break;
            case 2:
                nearest_seat = -2;
                break;
            default:
                printf("Invalid option\n\n");
                nearest_seat = -2;
                break;
        }
    }else{
        printf("Seat available");    
        nearest_seat = -1;
    }
    return nearest_seat;
}

void display_tickets(user * users, int index){
    printf("Ticktes the user bought:");
    for(int i = 0; i < users[index].ticket_amount; i++){
        printf("Seat type: %s\nSeat number:%i \nUsername:%s\n\n",users[index].ticket_type[i],users[index].ticket_number[i],users[index].username);
    }
    printf("\n");
}


int main(){
    int total_seats = 74310;
    int vip_boxes =  total_seats * 0.05;
    int vip_boxes_max = vip_boxes -1;
    int vip_boxes_min = 0;
    int vip_seats = total_seats * 0.15;
    int vip_seats_min = vip_boxes;
    int vip_seats_max = vip_seats -1 ;
    int general_seats = 74310 * 0.80;
    int general_seats_min = vip_seats;
    int general_seats_max = general_seats - 1;
    int seats[74310];
    for(int i = 0; i < 74310;i++){
        seats[i]=1;
    }
    char * ptrusername;
    char * ptrpassword;
    int menu = 1;
    int menu2 ;
    int menu_option;
    int memership;
    user users[256];
    int user_index=0;
    int index ;
    int seat_option;
    float total;
    int another_ticket;
    int available_seat_option;
    int seat_number;
    int payment;
    int log_in_flag ;
    while(menu==1){
        printf("Welcome to the Ticket sale system of the Old Trafford Stadium\nPlease select an option:\n\n1-Create account\n2-Log in\n3-Exit\n");
        scanf("%i",&menu_option);
        index = 0;
        switch(menu_option){    
            case 1:
                ptrusername = malloc(sizeof(char));
                ptrpassword = malloc(sizeof(char));
                printf("Enter your new username:");
                scanf("%s",ptrusername);
                printf("Enter your new password:");
                scanf("%s",ptrpassword);
                printf("Do you have a memership?\n1-Yes\n2-No\n");
                scanf("%i",&memership);
                if(memership>0 && memership<3){
                    user_constructor(users,user_index, ptrusername, ptrpassword,memership);
                user_index++;
                }else{
                    printf("Invalid option\n\n");
                }            
                free(ptrpassword);
                free(ptrusername);
                ptrpassword = NULL;
                ptrusername = NULL;
                break;                
            case 2:
                log_in_flag = 0;
                total = 0;
                ptrusername = malloc(sizeof(char));
                ptrpassword = malloc(sizeof(char));
                printf("To Log in please enter your username: ");
                scanf("%s",ptrusername);
                printf("Now enter your password: ");
                scanf("%s",ptrpassword);               
                for(int i = 0 ; i < user_index;i++){
                    if(0 == strcmp(users[i].username,ptrusername) && (0 == strcmp(users[i].password, ptrpassword))){
                        log_in_flag = 1;
                        index = i;
                        break;
                    }
                }
                if(log_in_flag == 1){
                    printf("Do you have a memembership?\n1-Yes\n2-No\n");
                    scanf("%i",&memership);
                    if(memership>0 && memership < 3 && memership == users[index].flag_membership){
                        menu2=1;                        
                        while(menu2==1){
                            if((users[index].flag_membership==1 && users[index].ticket_amount <10)||(users[index].flag_membership==2 && users[index].ticket_amount<3)){
                                printf("Select the type of seat that you wish to buy:\n1-VIP box £1000\n2-VIP £500 seat\n3-General seats £90\n");
                                scanf("%i",&seat_option);
                                switch (seat_option){
                                    //vip boxes
                                    case 1:
                                        printf("There are %i seats availables (%i - %i).\nPlease choose a seat\n",vip_boxes, vip_boxes_min+1, vip_boxes_max+1);
                                        scanf("%i",&seat_number);
                                        if(seat_number> vip_boxes_min && seat_number< vip_boxes_max){
                                            available_seat_option = available_seats(seats,seat_number, vip_boxes_min,vip_boxes_max);
                                            switch(available_seat_option){       
                                                //seat available                             
                                                case -1:
                                                    printf("The amount would be: £%i\n", 1000);                                                    
                                                    seats[seat_number-1]=0;
                                                    vip_boxes--;
                                                    total_seats--;                                                
                                                    users[index].ticket_type[users[index].ticket_amount] = "VIP box";
                                                    users[index].ticket_number[users[index].ticket_amount] = seat_number; 
                                                    users[index].ticket_amount++;                           
                                                    total = total + 1000;                         
                                                    printf("\nDo yo wish to buy another ticket ?\n1-Yes\n2-No\n");
                                                    scanf("%i",&another_ticket);
                                                    if(another_ticket == 2){
                                                        menu2 = 0;
                                                    }                                                
                                                    break;
                                                //didn't continue the purchase or an error
                                                case -2:
                                                    menu2=0;
                                                    break;
                                                //New seat number 
                                                default:
                                                    printf("The amount would be: £%i\n", 1000);                                                    
                                                    seats[available_seat_option]=0;
                                                    vip_boxes--;
                                                    total_seats--;                                                
                                                    users[index].ticket_type[users[index].ticket_amount] = "VIP box";
                                                    users[index].ticket_number[users[index].ticket_amount] = available_seat_option+1; 
                                                    users[index].ticket_amount++;                             
                                                    total = total + 1000;                       
                                                    printf("\nDo yo wish to buy another ticket ?\n1-Yes\n2-No\n");
                                                    scanf("%i",&another_ticket);
                                                    if(another_ticket == 2){
                                                        menu2 = 0;
                                                    } 
                                                break;
                                            }
                                        }
                                        break;
                                    //vip seats
                                    case 2:
                                        printf("There are %i seats availables(%i - %i).\nPlease choose a seat\n",vip_seats, vip_seats_min +1, vip_seats_max+1);                                        
                                        scanf("%i",&seat_number);
                                        if(seat_number> vip_seats_min && seat_number< vip_seats_max){
                                            available_seat_option = available_seats(seats,seat_number, vip_boxes_min,vip_boxes_max);
                                            switch(available_seat_option){
                                                //Seat available
                                                case -1:
                                                    printf("The amount would be: £%i\n", 500);                                                    
                                                    seats[seat_number-1]=0;
                                                    vip_seats--;
                                                    total_seats--;                                                
                                                    users[index].ticket_type[users[index].ticket_amount] = "VIP seat";
                                                    users[index].ticket_number[users[index].ticket_amount] = seat_number; 
                                                    users[index].ticket_amount++;              
                                                    total = total + 500;                                      
                                                    printf("\nDo yo wish to buy another ticket ?\n1-Yes\n2-No\n");
                                                    scanf("%i",&another_ticket);
                                                    if(another_ticket == 2){
                                                        menu2 = 0;
                                                    }                                                
                                                    break;
                                                //didn't continue the purchase or an error
                                                case -2:
                                                    menu2=0;
                                                    break;
                                                //New seat number
                                                default:
                                                    printf("The amount would be: £%i\n", 500);                                                    
                                                    seats[available_seat_option]=0;
                                                    vip_seats--;
                                                    total_seats--;                                                
                                                    users[index].ticket_type[users[index].ticket_amount] = "VIP seat";
                                                    users[index].ticket_number[users[index].ticket_amount] = available_seat_option+1; 
                                                    users[index].ticket_amount++;      
                                                    total = total + 500;                                              
                                                    printf("\nDo yo wish to buy another ticket ?\n1-Yes\n2-No\n");
                                                    scanf("%i",&another_ticket);
                                                    if(another_ticket == 2){
                                                        menu2 = 0;
                                                    } 
                                                break;
                                            }
                                        }
                                        break;
                                    //General seats
                                    case 3:
                                        printf("There are %i seats availables(%i - %i).\nPlease choose a seat\n",general_seats, general_seats_min +1, general_seats_max+1);                                        
                                        scanf("%i",&seat_number);
                                        if(seat_number> general_seats_min && seat_number< general_seats_max){
                                            available_seat_option = available_seats(seats,seat_number, vip_boxes_min,vip_boxes_max);
                                            switch(available_seat_option){
                                                //Seat available
                                                case -1:
                                                    printf("The amount would be: £%i \n", 90);                                                    
                                                    seats[seat_number-1]=0;
                                                    general_seats--;
                                                    total_seats--;                                                
                                                    users[index].ticket_type[users[index].ticket_amount] = "General seat";
                                                    users[index].ticket_number[users[index].ticket_amount] = seat_number; 
                                                    users[index].ticket_amount++;    
                                                    total = total + 90;                                                
                                                    printf("\nDo yo wish to buy another ticket ?\n1-Yes\n2-No\n");
                                                    scanf("%i",&another_ticket);
                                                    if(another_ticket == 2){
                                                        menu2 = 0;
                                                    }                                                
                                                    break;
                                                //didn't continue the purchase or an error
                                                case -2:
                                                    menu2=0;
                                                    break;
                                                //New seat number
                                                default:
                                                    printf("The amount would be: £%i\n", 90);                                                    
                                                    seats[available_seat_option]=0;
                                                    general_seats--;
                                                    total_seats--;                                                
                                                    users[index].ticket_type[users[index].ticket_amount] = "General seat";
                                                    users[index].ticket_number[users[index].ticket_amount] = available_seat_option+1; 
                                                    users[index].ticket_amount++;      
                                                    total = total + 90;                                                 
                                                    printf("\nDo yo wish to buy another ticket ?\n1-Yes\n2-No\n");
                                                    scanf("%i",&another_ticket);
                                                    if(another_ticket == 2){
                                                        menu2 = 0;
                                                    } 
                                                break;
                                            }
                                        }
                                        break;
                                    default:
                                        printf("Invalid option\n\n");
                                        break;
                                }
                            }else{
                                printf("You have the maximun amount of tickets allowed\n\n");                                
                                menu2=0;
                            }
                        }
                        if(users[index].flag_membership==1){
                            printf("Your total is %.2f\n", total * 0.15);
                        }else{
                            printf("Your total is %.2f\n",total);
                        }
                        printf("Enter your credit card number :");
                        scanf("%i",&payment);
                        printf("\nPurchase Successful!!!!\n\nThe total amount of available seats is: %i\n\n",total_seats);
                        display_tickets(users,index);                        
                    }else{
                        printf("Invalid option\n\n");
                    }                    
                }else{
                    printf("Invalid credentials\n\n");
                }
                free(ptrusername);
                free(ptrpassword);
                ptrusername = NULL;
                ptrpassword = NULL;
                break;
            case 3:
                menu = 0;
                break;                
            default:
                printf("Invalid option\n\n");
                break;
        }
    }
    return 0;
}