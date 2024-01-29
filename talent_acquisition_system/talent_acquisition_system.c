/*5. Manchester United FC Talent Acquisition System:

The Manchester United FC is in search of new talents to enhance its player roster. The head coach aims to recruit two forwards, two midfielders, a right-back, a defender, and a goalkeeper. To achieve this, the club needs to sell some players to fund these new signings. Develop a system to assist the head coach in choosing which players can be sold based on their market price, salary, position, and performance within the club.

Current Squad:

Goalkeepers:

André Onana - Price: £25,000,000 - Salary: £15,000,000 - Performance: Good
Altay Bayindir - Price: £5,000,000 - Salary: £5,000,000 - Performance: Normal
Tom Heaton - Price: £5,000,000 - Salary: £2,000,000 - Performance: Normal

Defenders:

Victor Lindelof - Price: £10,000,000 - Salary: £7,000,000 - Performance: Normal
Harry Maguire - Price: £15,000,000 - Salary: £10,000,000 - Performance: Good
Raphael Varane - Price: £15,000,000 - Salary: £10,000,000 - Performance: Good
Lisandro Martínez - Price: £15,000,000 - Salary: £8,000,000 - Performance: Good
Jonny Evans - Price: £7,000,000 - Salary: £4,000,000 - Performance: Good
Willy Kambwala - Price: £4,000,000 - Salary: £1,000,000 - Performance: Normal
Rhys Bennett - Price: £4,000,000 - Salary: £2,000,000 - Performance: Normal

Right Side:

Diogo Dalot - Price: £40,000,000 - Salary: £10,000,000 - Performance: Good
Aaron Wan Bissaka - Price: £30,000,000 - Salary: £9,000,000 - Performance: Normal

Left Side:

Luke Shaw - Price: £40,000,000 - Salary: £16,000,000 - Performance: Good
Sergio Reguilón - Price: £20,000,000 - Salary: £8,000,000 - Performance: Normal
Tyrell Malacia - Price: £16,000,000 - Salary: £7,000,000 - Performance: Normal

Midfielders:

Sofyan Amrabat - Price: £25,000,000 - Salary: £9,000,000 - Performance: Normal
Mason Mount - Price: £25,000,000 - Salary: £12,000,000 - Performance: Normal
Carlos Casemiro - Price: £25,000,000 - Salary: £15,000,000 - Performance: Good
Bruno Fernandes - Price: £50,000,000 - Salary: £11,000,000 - Performance: Good
Christian Eriksen - Price: £25,000,000 - Salary: £8,000,000 - Performance: Normal
Scott McTominay - Price: £40,000,000 - Salary: £8,000,000 - Performance: Good
Hannibal Mejbri - Price: £12,000,000 - Salary: £2,000,000 - Performance: Good
Kobbie Mainoo - Price: £12,000,000 - Salary: £2,000,000 - Performance: Good
Daniel Gore - Price: £9,000,000 - Salary: £2,000,000 - Performance: Normal

Strikers:

Alejandro Garnacho - Price: £12,000,000 - Salary: £10,000,000 - Performance: Good
Rasmus Hojlund - Price: £20,000,000 - Salary: £7,000,000 - Performance: Good
Marcus Rashford - Price: £25,000,000 - Salary: £10,000,000 - Performance: Good
Antony - Price: £25,000,000 - Salary: £10,000,000 - Performance: Normal
Anthony Martial - Price: £18,000,000 - Salary: £4,000,000 - Performance: Normal
Facundo Pellistri - Price: £18,000,000 - Salary: £6,000,000 - Performance: Good

Market Players:

Goalkeepers:

Andriy Lunin - Price: £30,000,000 - Salary: £10,000,000 - Performance: Good
Dominic Livakovic - Price: £15,000,000 - Salary: £9,000,000 - Performance: Good
Rui Patricio - Price: £10,000,000 - Salary: £7,000,000 - Performance: Normal
Yassine Bounou - Price: £14,000,000 - Salary: £9,000,000 - Performance: Normal

Midfielders:

Enzo Fernández - Price: £35,000,000 - Salary: £15,000,000 - Performance: Good
Jamal Musiala - Price: £30,000,000 - Salary: £10,000,000 - Performance: Good
Arda Guler - Price: £18,000,000 - Salary: £9,000,000 - Performance: Normal

Right Side:

Achraf Hakimi - Price: £20,000,000 - Salary: £15,000,000 - Performance: Good
Jeremie Frimpong - Price: £12,000,000 - Salary: £8,000,000 - Performance: Good
Ronald Araujo - Price: £15,000,000 - Salary: £10,000,000 - Performance: Good

Strikers:

Victor Osimhen - Price: £30,000,000 - Salary: £12,000,000 - Performance: Good
Harry Kane - Price: £40,000,000 - Salary: £15,000,000 - Performance: Good
Karim Benzema - Price: £20,000,000 - Salary: £20,000,000 - Performance: Normal*/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "lista.h"

int main(){    
    int menu = 1;
    int menu_option;
    int position_option;
    int money = 0;
    int aux_player_price;
    char * last_name;
    lista * team_goalkeepers = malloc(sizeof(lista));
    lista * team_defenders = malloc(sizeof(lista));
    lista * team_right_side = malloc(sizeof(lista));
    lista * team_left_side = malloc(sizeof(lista));
    lista * team_midfielders = malloc(sizeof(lista));
    lista * team_strikers = malloc(sizeof(lista));
    lista * market_goalkeeper = malloc(sizeof(lista));
    lista * market_right_side = malloc(sizeof(lista));
    lista * market_midfielders = malloc(sizeof(lista));
    lista * market_strikers = malloc(sizeof(lista));
    //team goalkeepers
    add_final(&team_goalkeepers,"Andre","Onana",25000000,15000000,"Good");
    add_final(&team_goalkeepers,"Altay","Bayindir",5000000,5000000,"Normal");
    add_final(&team_goalkeepers,"Andre","Onana",5000000,2000000,"Normal");
    //team defenders
    add_final(&team_defenders,"Victor", "Lindelof",10000000,7000000,"Normal");
    add_final(&team_defenders,"Harry ","Maguire",15000000,10000000,"Good");
    add_final(&team_defenders,"Raphael","Varane",15000000,10000000,"Good");
    add_final(&team_defenders,"Lisandro","Martinez",15000000,8000000,"Good");
    add_final(&team_defenders,"Jonny","Evans",7000000,4000000,"Good");
    add_final(&team_defenders,"Willy", "Kambwala",4000000,1000000,"Normal");
    add_final(&team_defenders,"Rhys","Bennett",4000000,2000000,"Normal");
    //team right side
    add_final(&team_right_side,"Diogo", "Dalot",40000000,10000000,"Good");
    add_final(&team_right_side,"Aaron ","Wan-Bissaka",30000000,9000000,"Normal");
    //Team left side 
    add_final(&team_left_side,"Luke", "Shaw",40000000,16000000,"Good");
    add_final(&team_left_side,"Sergio", "Reguilon",20000000,8000000,"Normal");
    add_final(&team_left_side,"Tyrell", "Malacia",16000000,7000000,"Normal");
    //Team mid fielders
    add_final(&team_midfielders,"Sofyan" ,"Amrabat" ,25000000 ,9000000 ,"Normal");
    add_final(&team_midfielders,"Mason", "Mount",25000000 ,12000000,"Normal");
    add_final(&team_midfielders,"Carlos", "Casemiro" ,25000000,15000000 ,"Good"); 
    add_final(&team_midfielders,"Bruno","Fernandes",50000000 ,11000000,"Good");
    add_final(&team_midfielders,"Christian", "Eriksen",25000000 ,8000000 ,"Normal");
    add_final(&team_midfielders,"Scott", "McTominay",40000000,8000000,"Good");
    add_final(&team_midfielders,"Hannibal", "Mejbri" ,12000000 ,2000000 ,"Good");
    add_final(&team_midfielders,"Kobbie", "Mainoo" ,12000000 ,2000000, "Good");
    add_final(&team_midfielders,"Daniel", "Gore",9000000, 2000000 ,"Normal");
    //Team strikers
    add_final(&team_strikers,"Alejandro", "Garnacho",12000000,10000000, "Good");
    add_final(&team_strikers,"Marcus","Rashford",25000000,10000000,"Good");
    add_final(&team_strikers,"Rasmus", "Hojlund" ,20000000,7000000,"Good");
    add_final(&team_strikers,"Antony", " " ,25000000,10000000,"Normal");
    add_final(&team_strikers,"Anthony", "Martial",18000000,4000000,"Normal");
    add_final(&team_strikers,"Facundo", "Pellistri",18000000,6000000,"Good");
    //market goalkeepers
    add_final(&market_goalkeeper,"Andriy", "Lunin",30000000,10000000,"Good");
    add_final(&market_goalkeeper,"Dominic", "Livakovic",15000000,9000000,"Good");
    add_final(&market_goalkeeper,"Rui", "Patricio",10000000,7000000,"Normal");
    add_final(&market_goalkeeper,"Yassine", "Bounou",14000000,9000000,"Normal");
    //Market midfielders 
    add_final(&market_midfielders,"Enzo" ,"Fernández",35000000,15000000,"Good");
    add_final(&market_midfielders,"Jamal" ,"Musiala" ,30000000,10000000,"Good");
    add_final(&market_midfielders,"Arda", "Guler",18000000,9000000,"Normal");
    //Market right side
    add_final(&market_right_side,"Achraf", "Hakimi" ,20000000,15000000,"Good");
    add_final(&market_right_side,"Jeremie", "Frimpong",12000000,8000000,"Good");
    add_final(&market_right_side,"Ronald", "Araujo", 15000000,10000000,"Good");
    //Market strikers
    add_final(&market_strikers,"Victor", "Osimhen",30000000,12000000,"Good");
    add_final(&market_strikers,"Harry", "Kane",40000000,15000000,"Good");
    add_final(&market_strikers,"Karim", "Benzema",20000000,20000000,"Normal");

    while(menu == 1){
        printf("Welcome to the Manchester United FC Talent Acquisition System:\n1-See the actual team\n2-See players on the market\n3-Buy/Sell players\n4-See budget\n5-Exit\n");
        scanf("%i",&menu_option);
        switch(menu_option){
            //See players on the team
            case 1:
                printf("What do you want to see ?\n1-Goalkeeper\n2-Right side\n3-Left side\n4-Midfielders\n5-Strikers\n6-Defenders\n");
                scanf("%i",&position_option);
                switch(position_option){
                    case 1:
                        mostrar_l(&team_goalkeepers);
                        break;
                    case 2:
                        mostrar_l(&team_right_side);
                        break;
                    case 3:
                        mostrar_l(&team_left_side);
                        break;
                    case 4:
                        mostrar_l(&team_midfielders);
                        break;
                    case 5:
                        mostrar_l(&team_strikers);
                        break;
                    case 6:
                        mostrar_l(&team_defenders);
                        break;
                    default:
                        printf("Invalid option\n\n");
                        break;
                }                
                break;
            //See players on the market
            case 2:
                printf("What do you want to see ?\n1-Goalkeeper\n2-Right side\n3-Midfielders\n4-Strikers\n");
                scanf("%i",&position_option);
                switch(position_option){
                    case 1:
                        mostrar_l(&market_goalkeeper);
                        break;
                    case 2:
                        mostrar_l(&market_right_side);
                        break;                    
                    case 3:
                        mostrar_l(&market_midfielders);
                        break;
                    case 4:
                        mostrar_l(&market_strikers);
                        break;                    
                    default:
                        printf("Invalid option\n\n");
                        break;
                }
                break;
            //BUY / SELL players
            case 3:
                printf("Select an option:\n1-Buy\n2-Sell\n3-Recommendation\n4-Exit\n");
                scanf("%i",&position_option);
                switch(position_option){
                    //Buying a player
                    case 1:
                        printf("Select a position;\n1-Goalkeepers\n2-Right side\n3-Midfielders\n4-Strikers\n");
                        scanf("%i",&position_option);
                        last_name = malloc(sizeof(char));
                        switch (position_option){
                            //Goalkeepers
                            case 1:                                
                                printf("Now write the last name of the player you wish to buy: ");
                                scanf("%s",last_name);
                                aux_player_price = player_price(&market_goalkeeper,last_name);
                                if(money>= aux_player_price && aux_player_price!=-1 ){
                                    money = money - aux_player_price;
                                    buy_player(&team_goalkeepers,&market_goalkeeper,last_name);
                                    printf("Player bought successfuly\n\n");
                                }if(money < aux_player_price){
                                    printf("There is not enough money to buy this player\n\n");
                                }                                    
                                if(aux_player_price==-1){
                                    printf("Invalid last name\n\n");
                                }
                                break;
                                //Right side
                            case 2:
                                last_name = malloc(sizeof(char));
                                printf("Now write the last name of the player you wish to buy: ");
                                scanf("%s",last_name);
                                aux_player_price = player_price(&market_right_side,last_name);
                                if(money>= aux_player_price && aux_player_price!=-1 ){
                                    money = money - aux_player_price;
                                    buy_player(&team_right_side,&market_right_side,last_name);
                                    printf("Player bought successfuly\n\n");
                                }
                                if(money < aux_player_price){
                                    printf("There is not enough money to buy this player\n\n");
                                }
                                if(aux_player_price==-1){
                                    printf("Invalid last name\n\n");
                                }
                                break;
                                //Midfielders
                            case 3:
                                last_name = malloc(sizeof(char));
                                printf("Now write the last name of the player you wish to buy: ");
                                scanf("%s",last_name);
                                aux_player_price = player_price(&market_midfielders,last_name);
                                if(money>= aux_player_price && aux_player_price!=-1 ){
                                    money = money - aux_player_price;
                                    buy_player(&team_midfielders,&market_midfielders,last_name);
                                    printf("Player bought successfuly\n\n");
                                }
                                if(money < aux_player_price){
                                    printf("There is not enough money to buy this player\n\n");
                                }
                                if(aux_player_price==-1){
                                    printf("Invalid last name\n\n");
                                }
                                break;
                                //Strikers
                            case 4:
                                last_name = malloc(sizeof(char));
                                printf("Now write the last name of the player you wish to buy: ");
                                scanf("%s",last_name);
                                aux_player_price = player_price(&market_strikers,last_name);
                                if(money>= aux_player_price && aux_player_price!=-1 ){
                                    money = money - aux_player_price;
                                    buy_player(&team_strikers,&market_strikers,last_name);
                                    printf("Player bought successfuly\n\n");
                                }
                                if(money < aux_player_price){
                                    printf("There is not enough money to buy this player\n\n");
                                }
                                if(aux_player_price==-1){
                                    printf("Invalid last name\n\n");
                                }
                                break;
                            default:
                                printf("Invalid option\n\n");
                                break;
                        }
                        free(last_name);
                        last_name = NULL;
                        break;
                    //Selling a player
                    case 2:
                        printf("Please select a position:\n1-Goalkeeper\n2-Rigth side\n3-Left side\n4-Midfielder\n5-Defender\n6-strikers\n");
                        scanf("%i",&position_option);
                        last_name = malloc(sizeof(char));
                        switch(position_option){
                            //Goalkeeper
                            case 1:
                                printf("Now write the last name of the player you wish to sell: ");
                                scanf("%s",last_name);
                                aux_player_price = player_price(&team_goalkeepers,last_name);
                                if(aux_player_price!=-1){
                                    money = money + aux_player_price;
                                    eliminar_elem(&team_goalkeepers,last_name);
                                    printf("Player sold susccessfuly\n\n");
                                }else{
                                    printf("That last name doesn't belong to a player\n\n");
                                }

                                break;
                            //Right side
                            case 2:
                                printf("Now write the last name of the player you wish to sell: ");
                                scanf("%s",last_name);
                                aux_player_price = player_price(&team_right_side,last_name);
                                if(aux_player_price!=-1){
                                    money = money + aux_player_price;
                                    eliminar_elem(&team_right_side,last_name);
                                    printf("Player sold susccessfuly\n\n");
                                }else{
                                    printf("That last name doesn't belong to a player\n\n");
                                }                        
                                break;
                            //Left side
                            case 3:
                                printf("Now write the last name of the player you wish to sell: ");
                                scanf("%s",last_name);
                                aux_player_price = player_price(&team_left_side,last_name);
                                if(aux_player_price!=-1){
                                    money = money + aux_player_price;
                                    eliminar_elem(&team_left_side,last_name);
                                    printf("Player sold susccessfuly\n\n");
                                }else{
                                    printf("That last name doesn't belong to a player\n\n");
                                }   
                                break;
                            //Midfielders
                            case 4:
                                printf("Now write the last name of the player you wish to sell: ");
                                scanf("%s",last_name);
                                aux_player_price = player_price(&team_midfielders,last_name);
                                if(aux_player_price!=-1){
                                    money = money + aux_player_price;
                                    eliminar_elem(&team_midfielders,last_name);
                                    printf("Player sold susccessfuly\n\n");
                                }else{
                                    printf("That last name doesn't belong to a player\n\n");
                                } 
                                break;
                            //Defenders
                            case 5:
                                printf("Now write the last name of the player you wish to sell: ");
                                scanf("%s",last_name);
                                aux_player_price = player_price(&team_defenders,last_name);
                                if(aux_player_price!=-1){
                                    money = money + aux_player_price;
                                    eliminar_elem(&team_defenders,last_name);
                                    printf("Player sold susccessfuly\n\n");
                                }else{
                                    printf("That last name doesn't belong to a player\n\n");
                                } 
                                break;
                            //Strikers
                            case 6:
                                printf("Now write the last name of the player you wish to sell: ");
                                scanf("%s",last_name);
                                aux_player_price = player_price(&team_strikers,last_name);
                                if(aux_player_price!=-1){
                                    money = money + aux_player_price;
                                    eliminar_elem(&team_strikers,last_name);
                                    printf("Player sold susccessfuly\n\n");
                                }else{
                                    printf("That last name doesn't belong to a player\n\n");
                                } 
                                break;
                            default:
                                printf("Invalid option\n\n");
                                break;    
                        }
                        free(last_name);
                        last_name = NULL;
                        break;
                    //Recomendation
                    case 3:
                        printf("Select the position you want to compare:\n1-Buy Goalkeeper\n2-Buy Right side\n3-Buy Midfielders\n4-Buy Strikers\n5-Sell Goalkeeper\n6-Sell Right side\n7-Sell Midfielders\n8-Sell Strikers\n");
                        scanf("%i",&position_option);
                        printf("\n");
                        switch(position_option){
                            //buy goalkeeper recommendation
                            case 1:
                                recommendation_buy(&team_goalkeepers,&market_goalkeeper);
                                break;
                            //buy right side recommendation
                            case 2:
                                recommendation_buy(&team_right_side,&market_right_side);
                                break;
                            //buy midfielder recommendation
                            case 3:
                                recommendation_buy(&team_midfielders,&market_midfielders);
                                break;
                            //buy striker recommendation
                            case 4:
                                recommendation_buy(&team_strikers,&market_strikers);
                                break;
                            //Sell goalkeeper recommendation
                            case 5:
                                recommendation_sell(&team_goalkeepers,&market_goalkeeper);
                                break;
                            //Sell right side recommendation
                            case 6:
                                recommendation_sell(&team_right_side,&market_right_side);
                                break;
                            //Sell midfielders recommendation
                            case 7:
                                recommendation_sell(&team_midfielders,&market_midfielders);
                                break;
                            //Sell strikers recommendation
                            case 8:
                                recommendation_sell(&team_strikers,&market_strikers);
                                break;
                            default:
                                printf("Invalid option\n\n");
                                break;
                        }
                        break;
                    case 4:
                        printf("\n\n");
                        break;
                    default:
                        printf("Invalid option\n\n");
                    break;
                }
                break;
            case 4:
                printf("Budget: %i\n\n",money);
                break;
            case 5:
                menu = 0;
                break;
            default:
                printf("Invalid option");
                menu = 0;
                break;
        }
    }
    return 0;
}