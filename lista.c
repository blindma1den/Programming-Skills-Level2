#ifndef __LISTA_C__
#define __LUSTA_C__
#include "nodo.c"

//Dynamic array

typedef struct lista{
    int longitud;
    struct nodo * prim;
}lista;

int mitad (nodo * n);
nodo * merge(nodo** izquierdo, nodo**derecho);

//Inserta un nodo nuevo al final de la lista
void add_final(lista ** l, char * name, char * last_name,int goals, int speed,int assissts, int passing_accuracy,int defensive_involvemnt , int jersey_number, char * position, int age , float height){
    nodo * nuevo = malloc(sizeof(nodo));
    strcpy(nuevo->name, name);
    strcpy(nuevo->last_name,last_name);
    strcpy(nuevo->position,position);
    nuevo->stats_values[0] = goals;
    nuevo->stats_values[1]=speed;
    nuevo->stats_values[2]=assissts;
    nuevo->stats_values[3]=passing_accuracy;
    nuevo->stats_values[4]=defensive_involvemnt;
    nuevo->stats_values[5]=jersey_number;
    nuevo->stats_values[6]=age;
    nuevo->height = height;
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
    for(int j = 0; j < (*l)->longitud;j++){
        printf("Name:%s \n",i->name);
        printf("Last name:%s \n",i->last_name);
        printf("Position:%s \n",i->position);
        printf("Goals:%i \n",i->stats_values[0]);
        printf("Speed:%i \n",i->stats_values[1]);
        printf("Assissts:%i \n",i->stats_values[2]);
        printf("Passing accuracy:%i \n",i->stats_values[3]);
        printf("Defensive involvement:%i \n",i->stats_values[4]);
        printf("Jersey number:%i \n",i->stats_values[5]);
        printf("Age:%i \n",i->stats_values[6]);
        printf("Height:%.2f \n",i->height);
        printf("\n\n");
        i = i->prox;
    }
    i = NULL;
}

//Imprime un nodo de la lista
void mostrar_nodo(lista**l, int jersey_n){
    nodo * aux = (*l)->prim;
    if((*l)->longitud>0){
        for(int i = 1; i < (*l)->longitud;i++){
            if((aux->stats_values[5]==jersey_n)){
                printf("Name:%s \n",aux->name);
                printf("Last name:%s \n",aux->last_name);
                printf("Position:%s \n",aux->position);
                printf("Goals:%i \n",aux->stats_values[0]);
                printf("Speed:%i \n",aux->stats_values[1]);
                printf("Assissts:%i \n",aux->stats_values[2]);
                printf("Passing accuracy:%i \n",aux->stats_values[3]);
                printf("Defensive involvement:%i \n",aux->stats_values[4]);
                printf("Jersey number:%i \n",aux->stats_values[5]);
                printf("Age:%i \n",aux->stats_values[6]);
                printf("Height:%.2f \n",aux->height);
                printf("\n\n");
            }
            aux = aux->prox;
        }    
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
                aux2 = aux;
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

//Modifica el valor de un nodo ya creado
void modificar_elem(lista ** l, int elem, char * position ,char * last_name, int stat_index, float height){
    nodo * p = (*l)->prim;
    int flag = 0;
    for( int i = 1; i <= (*l)->longitud;i++){

        if(0 == strcmp(p->last_name,last_name)){
            flag = 1;
            if(position==NULL){
                if(stat_index==-1){
                    p->height=height;
                }else{
                    p->stats_values[stat_index]=elem;
                }                
            }else{
                strcpy(p->position,position);
            }
            break;
        }
        p = p->prox;
    }
    if(flag==0){
        printf("Error,there is not a player with that last name\n\n");
    }
    p = NULL;
}

#endif