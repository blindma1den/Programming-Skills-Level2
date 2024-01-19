/*Manchester United FC Player Management System:

As a developer for Manchester United FC, the executive management has tasked you with creating a CRUD system for the current players, including the following information: Jersey number, position, age, height, and other statistical data. Additionally, integrate the system from the previous level where it was possible to compare two players and visualize their characteristics. You may find player information by searching on the internet.

Features:

Create:
Add new players to the system with their respective details.
Read:
View the complete list of current players with their jersey number, position, age, height, and other statistical information.
Update:
Modify player information as needed, such as position, age, or height.
Delete:
Remove players from the system if they are no longer part of the team.
Compare Players:
Utilize the comparison feature to analyze and contrast the characteristics of two players.
Visualize Characteristics:
Display the statistical and physical attributes of each player for a comprehensive overview.*/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "lista.h"



int main(){
    // goals, speed, assissts, passing accuracy, defensive involvemnt , jersey number 
    //  0 ,      1 ,     2 ,         3 ,             4 ,                     5 
    int menu=1;
    int menu_option;
    int players_amount=0;
    while(menu==1){
        printf("Manchester United FC Player Management System:\n1-Add a new player\n2-View all the player and their characteristics\n3-Modify a player characteristic\n4-Remove a player\n5-Compare two players\n6-Display the characteristics of one player\n");
        scanf("%i",&menu_option);
        switch(menu_option){
            case 1:
                menu=0;
                break;
            case 2:
                
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            default:
                printf("Invalid option\n\n");
                break;                
        }
    }


    return 0;
}