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
    int modify_option;
    int aux;
    nodo * ptraux;      
    while(menu==1){
        printf("Manchester United FC Player Management System:\n1-Add a new player\n2-View all the player and their characteristics\n3-Modify a player characteristic\n4-Remove a player\n5-Compare two players\n6-Display the characteristics of one player\n7-Exit\n");
        scanf("%i",&menu_option);
        switch(menu_option){
            case 1: 
                ptrname = malloc(sizeof(char));
                ptrlast_name = malloc(sizeof(char));
                ptrposition = malloc(sizeof(char));
                printf("Adding a new player\nPlease write the player's name: ");
                scanf("%s",ptrname);
                printf("Now enter the last name: ");                
                scanf("%s",ptrlast_name);
                printf("Enter the age: ");
                scanf("%i",&age);
                printf("Enter the player height: ");
                scanf("%f",&height);
                printf("Enter the number of goals: ");
                scanf("%i",&goals);
                printf("Enter the speed: ");
                scanf("%i",&speed);
                printf("Enter the number of assissts: ");
                scanf("%i",&assissts);
                printf("Enter the passing acurracy: ");
                scanf("%i",&passing_accuracy);
                printf("Enter the defensive involvement: ");
                scanf("%i",&defensive_involvemnt);
                printf("Enter the position of the player: ");
                scanf("%s",ptrposition);
                printf("Enter the jersey number: ");
                scanf("%i",&jersey_number);                
                if(0 == vacia_l(&players)){
                    printf("\n\nPlayer added successfuly\n\n");
                    add_final(&players,ptrname,ptrlast_name,goals,speed,assissts,passing_accuracy,defensive_involvemnt,jersey_number, ptrposition, age, height);
                }else{
                    ptraux = players->prim;
                    for(int i = 0; i < players->longitud; i++){
                        if(ptraux->stats_values[5]==jersey_number || 0 == strcmp(ptraux->last_name,ptrlast_name)){
                            printf("There already exist a player with the same name or jersey number\n\n");
                            break;
                        }
                    }
                }
                free(ptrname);
                free(ptrlast_name);
                free(ptrposition);
                ptrname = NULL;
                ptrlast_name = NULL;
                ptrposition = NULL;
                ptraux=NULL;
                break;
            case 2:
                if(0 == vacia_l(&players)){
                    printf("There are no players in the system, please add a player\n\n");
                }else{
                    mostrar_l(&players); 
                }
                break;
            case 3:
                if(0 != vacia_l(&players)){
                    ptrlast_name = malloc(sizeof(char));
                    printf("Enter the last name of the player:");
                    scanf("%s",ptrlast_name);              
                    printf("What do you want to modify?\n1-Goals\n2-Speed\n3-Assissts\n4-Passing accuracy\n5-Defensive involvemnt\n6-Jersey number\n7-Age\n8-Height\n9-Position\n");
                    scanf("%i",&modify_option);
                    if(modify_option>0 && modify_option<=9){
                        if(modify_option<=7){
                            printf("Enter the new value: ");
                            scanf("%i",&aux);
                            modificar_elem(&players,aux,NULL,ptrlast_name,modify_option-1,-1);
                            printf("Modification successful\n\n");
                        }else{
                            if(modify_option==8){
                                printf("Enter the new value: ");
                                scanf("%f",&height);
                                modificar_elem(&players,-1,NULL,ptrlast_name,-1,height);
                                printf("Modification successful\n\n");
                            }else{
                                ptrposition = malloc(sizeof(char));
                                printf("Write the new position(No blank spaces): ");
                                scanf("%s",ptrposition);
                                modificar_elem(&players,-1,ptrposition,ptrlast_name,-1,-1);
                                free(ptrposition);
                                ptrposition=NULL;
                                printf("Modification successful\n\n");
                            }
                        }
                    }else{
                        printf("Invalid option\n\n");
                    }           
                    free(ptrlast_name);
                    ptrlast_name=NULL;
                }else{
                    printf("There is no players in the system, please add a player\n\n");
                }
                break;
            case 4:
                if(0 != vacia_l(&players)){
                    ptrlast_name = malloc(sizeof(char));                
                    printf("Please write the last_name of the player you wish to remove: ");
                    scanf("%s",ptrlast_name);
                    eliminar_elem(&players,ptrlast_name);
                    printf("\n");
                    free(ptrlast_name);
                    ptrlast_name=NULL;
                }else{
                    printf("There are no players in the system, please add a player\n\n");
                }
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