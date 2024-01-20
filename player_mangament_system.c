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
    lista * players = malloc(sizeof(lista));
    char * ptrname;
    char * ptrlast_name;
    char * ptrposition;
    int goals;
    int speed;
    int assissts;
    int passing_accuracy;
    int defensive_involvemnt;
    int jersey_number;
    int age;
    float height;

    while(menu==1){
        printf("Manchester United FC Player Management System:\n1-Add a new player\n2-View all the player and their characteristics\n3-Modify a player characteristic\n4-Remove a player\n5-Compare two players\n6-Display the characteristics of one player\n7-Exit\n");
        scanf("%i",&menu_option);
        switch(menu_option){
            case 1:
                ptrname = malloc(sizeof(char));
                ptrlast_name = malloc(sizeof(char));
                ptrposition = malloc(sizeof(char));
                printf("Adding a new player\nPlease write the player's name:");
                scanf("%s",ptrname);
                printf("Now enter the last name:");                
                scanf("%s",ptrlast_name);
                printf("Enter the age:");
                scanf("%i",&age);
                printf("Enter the player height");
                scanf("%f",&height);
                printf("Enter the number of goals:");
                scanf("%i",&goals);
                printf("Enter the speed:");
                scanf("%i",&speed);
                printf("Enter the number of assissts:");
                scanf("%i",&assissts);
                printf("Enter the passing acurracy:");
                scanf("%i",&passing_accuracy);
                printf("Enter the defensive involvement:");
                scanf("%i",&defensive_involvemnt);
                printf("Enter the position of the player");
                scanf("%s",ptrposition);
                printf("Enter the jerset number:");
                scanf("%i",&jersey_number);
                printf("\n\nPlayer added successfuly\n\n");
                add_final(&players,ptrname,ptrlast_name,goals,speed,assissts,passing_accuracy,defensive_involvemnt,jersey_number, ptrposition, age, height);
                free(ptrname);
                free(ptrlast_name);
                free(ptrposition);
                break;
            case 2:
                if(0 == vacia_l(&players)){
                    printf("There are no players in the system, please add a player\n\n");
                }else{
                    mostrar_l(&players); 
                }
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                menu = 0;
                break;
            default:
                printf("Invalid option\n\n");
                break;                
        }
    }


    return 0;
}