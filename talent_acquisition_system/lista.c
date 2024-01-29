#ifndef __LISTA_C__
#define __LUSTA_C__
#include "nodo.c"

//Dynamic array

typedef struct lista{
    int longitud;
    struct nodo * prim;
}lista;

//Inserta un nodo nuevo al final de la lista
void add_final(lista ** l, char * name, char * last_name, int market_price, int salary, char * performance){
    nodo * nuevo = malloc(sizeof(nodo));
    strcpy(nuevo->name, name);
    strcpy(nuevo->last_name,last_name);
    nuevo->salary = salary;
    nuevo->market_price = market_price;
    strcpy(nuevo->performance,performance);    
    nuevo->prox = NULL;
    if((*l)->prim == NULL){
        (*l)->prim = nuevo;
    }else{
        nodo * i = (*l)->prim;
        while(i->prox!=NULL){
            i = i->prox;
        }
        i->prox = nuevo;
    }
    (*l)->longitud = (*l)->longitud + 1;
}

//Para saber si la lista es vacia
int vacia_l(lista **l){
    lista * aux = *l;
    if(aux->longitud==0){
        //vacia
        return 0;
    }
    else{
        //no vacia
        return 1;
    }
}

//Imprime la lista
void mostrar_l(lista** l){
    nodo * i = (*l)->prim;
    printf("\n");
    for(int j = 0; j < (*l)->longitud;j++){
        printf("Name:%s ",i->name);
        printf("Last name:%s\n",i->last_name);
        printf("Market price:%i ",i->market_price);
        printf("Salary:%i ",i->salary);
        printf("Performance:%s\n",i->performance);
        printf("\n");
        i = i->prox;
    }
    i = NULL;
}

//Imprime un nodo de la lista
void mostrar_nodo(lista**l, char * last_name){
    nodo * aux = (*l)->prim;
    int flag = 0;
    if((*l)->longitud>0){
        for(int i = 1; i < (*l)->longitud;i++){
            if(0 == strcmp(aux->last_name,last_name)){
                flag = 1;
                printf("Name:%s \n",aux->name);
                printf("Last name:%s \n",aux->last_name);
                printf("\n\n");
                break;
            }
            aux = aux->prox;
        }    
    }
    if(flag == 0){
        printf("There is not a player with that last name\n\n");
    }
    aux = NULL;
}

//Elimina la lista
void eliminar_l(lista**l){
    nodo * i = (*l)->prim;
    while(i != NULL){
        nodo * eliminador = i;
        i = i->prox;
        free(eliminador);
    }
    (*l)->longitud = 0;
    (*l)->prim = NULL;
    i = NULL;
}

//elimina un elemento
void eliminar_elem(lista** l,char * last_name){
    nodo * aux = (*l)->prim;
    nodo * aux2;
    if(0 == strcmp(aux->last_name, last_name)){
        (*l)->prim= aux->prox;
        free(aux);
    }else{
        for(int i = 1; i < (*l)->longitud;i++){
            if(0 == strcmp(aux->prox->last_name,last_name)){
                aux2 = aux->prox;
                aux->prox = aux2->prox;
                free(aux2);
                break;
            }
        }
    }
    aux=NULL;
    aux2=NULL;
    (*l)->longitud = (*l)->longitud - 1;
}

void recommendation_buy(lista ** team , lista ** market){
    nodo * aux_team = (*team)->prim;
    nodo * aux_market;
    int recomm_flag = 0;
    while(aux_team != NULL){
        aux_market = (*market)->prim;
        while(aux_market!= NULL){
            if(0 == strcmp(aux_team->performance,"Normal") && 0 == strcmp(aux_market->performance,"Good")){
                printf("It's recommended to sell the player %s %s for the player %s %s\n", aux_team->name,aux_team->last_name,aux_market->name,aux_market->last_name);
                printf("He have better performance than our player\n\n");
                recomm_flag = 1;               
            }else{
                if(0 == strcmp(aux_team->performance,aux_market->performance)){                    
                    if( aux_team->salary > aux_market->salary){
                        recomm_flag = 1;
                        printf("It's recommended to sell the player %s %s for the player %s %s\n", aux_team->name,aux_team->last_name,aux_market->name,aux_market->last_name);
                        printf("He has a lower salary than our player\n\n");
                    }else{
                        if((aux_team->salary == aux_market->salary) && (aux_team->market_price > aux_market->market_price)){
                            recomm_flag = 1;
                            printf("It's recommended to sell the player %s %s for the player %s %s\n", aux_team->name,aux_team->last_name,aux_market->name,aux_market->last_name);
                            printf("He has the same stats than our player but lower price\n\n");
                        }
                    }
                }

            }
            aux_market = aux_market->prox;
        }
        aux_team = aux_team->prox;
    }
    if(recomm_flag==0){
        printf("There are no recommendation with the actual players in this position\n\n");
    }
}

void recommendation_sell(lista ** team, lista ** market){
    nodo * aux_team = (*team)->prim;
    nodo * aux_market;
    int recomm_flag = 0;
    while(aux_team!=NULL){
        if(0 == strcmp(aux_team->performance,"Normal")){
            aux_market = (*market)->prim;
            while(aux_market!=NULL){
                if(aux_team->market_price > aux_market->market_price){
                    recomm_flag = 1;
                    printf("It's recommended to sell the player %s %s which have a Normal performance\n",aux_team->name,aux_team->last_name);
                    printf("Also his price is over some market players with the same performance\n\n");
                    break;
                }
                aux_market = aux_market->prox;
            }
        }
        aux_team = aux_team->prox;
    }
    if(recomm_flag == 0){
        printf("There is no recommedation with the actual palyers in the position\n\n");
    }
}

int player_price(lista ** position, char * last_name){
    nodo * aux = (*position)->prim;
    int resp = -1;
    for(int i = 0 ; i < (*position)->longitud;i++){
        if(0 == strcmp(aux->last_name,last_name)){
            resp = aux->market_price;
            break;
        }
        aux = aux->prox;
    }
    return resp;
}

void buy_player(lista ** team, lista ** market, char * last_name){
    nodo * aux_team = (*team)->prim;
    nodo * aux_market = (*market)->prim;
    nodo * new = malloc(sizeof(nodo));
    while(aux_market!=NULL){
        if(0 == strcmp(aux_market->last_name,last_name)){
            break;
        }else{
            aux_market = aux_market->prox;
        }
    }
    while(aux_team->prox!=NULL){
        aux_team = aux_team->prox;
    }
    aux_team->prox = new;
    strcpy(new->name,aux_market->name);
    strcpy(new->last_name,aux_market->last_name);
    new->salary = aux_market->salary;
    new->market_price = aux_market->market_price;
    strcpy(new->performance, aux_market->performance);
    new->prox=NULL;
    (*team)->longitud = (*team)->longitud+1;
}


#endif