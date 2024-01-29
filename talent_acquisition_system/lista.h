#ifndef __LISTA_H__ 
#define __LISTA_H__
#include "lista.c"
//Inserta un nodo nuevo al final de la lista
void add_final(lista ** l, char * name, char * last_name, int market_price, int salary, char * performance);

//Para saber si la lista es vacia
int vacia_l(lista **l);

//Imprime la lista
void mostrar_l(lista** l);

//Elimina un elemento dado el indice
void eliminar_elem(lista**l, char * last_name);

//Elimina la lista
void eliminar_l(lista**l);

int player_price(lista ** position, char * last_name);

void recommendation(lista ** team , lista ** market);

#endif