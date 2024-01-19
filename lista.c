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
void add_final(lista ** l, char * name, int goals, int speed,int assissts, int passing_accuracy,int defensive_involvemnt , int jersey_number){
    nodo * nuevo = malloc(sizeof(nodo));
    strcpy(nuevo->name, name);
    nuevo->stats_values[0] = goals;
    nuevo->stats_values[1]=speed;
    nuevo->stats_values[2]=assissts;
    nuevo->stats_values[3]=passing_accuracy;
    nuevo->stats_values[4]=defensive_involvemnt;
    nuevo->stats_values[5]=jersey_number;
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
        printf("%s \n",i->name);
        printf("%i \n",i->stats_values[0]);
        printf("%i \n",i->stats_values[1]);
        printf("%i \n",i->stats_values[2]);
        printf("%i \n",i->stats_values[3]);
        printf("%i \n",i->stats_values[4]);
        printf("%i \n",i->stats_values[5]);
        printf("\n\n");
        i = i->prox;
    }
}

//Imprime un nodo de la lista
void mostrar_nodo(lista**l, int jersey_n){
    nodo * aux = (*l)->prim;
    if((*l)->longitud>0){
        for(int i = 0; i < (*l)->longitud;i++){
            if((aux->stats_values[5]==jersey_n)){
                printf("%s",aux->name);
                printf("%i \n",aux->stats_values[0]);
                printf("%i \n",aux->stats_values[1]);
                printf("%i \n",aux->stats_values[2]);
                printf("%i \n",aux->stats_values[3]);
                printf("%i \n",aux->stats_values[4]);
                printf("%i \n",aux->stats_values[5]);
            }
        }    
    }

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
}

//elimina un elemento
void eliminar_elem(lista** l,int pos){
    if(pos < (*l)->longitud){
        nodo * aux2;
        if(pos == 1){
            aux2 = (*l)->prim;
            (*l)->prim = (*l)->prim->prox;
        }else{
            int cant = 1;
            nodo * aux = (*l)->prim;
            while(cant < pos-1){
                aux = aux->prox;
                cant++;
            }
            aux2 = aux->prox;
            aux->prox = aux->prox->prox;
        }
        free(aux2);
        (*l)->longitud = (*l)->longitud - 1;
    }
}

//Modifica el valor de un nodo ya creado
void modificar_elem(lista ** l, int elem, int pos, int stat_index){
    if(pos <= (*l)->longitud){
        nodo * p = (*l)->prim;
        int cont = 1;
        while(cont < pos){
            p = p->prox;
            cont++;
        }
        p->stats_values[stat_index] = elem ;
    }
}

#endif