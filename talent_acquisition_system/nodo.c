#ifndef __NODO_C__
#define __NODO_C__

typedef struct nodo {
    struct nodo * prox;
    char name[20];
    char last_name[20];
    int market_price;
    int salary;
    char performance [10];
    
}nodo;

#endif