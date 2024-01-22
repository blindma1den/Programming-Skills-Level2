#ifndef __LISTA_H__ 
#define __LISTA_H__
#include "lista.c"
//Inserta un nodo nuevo al final de la lista
void add_final(lista ** l, char * name, char * last_name,int goals, int speed,int assissts, int passing_accuracy,int defensive_involvemnt , int jersey_number, char * position, int age , float height);

//Para saber si la lista es vacia
int vacia_l(lista **l);

//Imprime la lista
void mostrar_l(lista** l);

//Elimina un elemento dado el indice
void eliminar_elem(lista**l, char * last_name);

//Elimina la lista
void eliminar_l(lista**l);

//Modificando el valor de un nodo
void modificar_elem(lista ** l, int elem, char * position ,char * last_name, int stat_index,float height);





#endif