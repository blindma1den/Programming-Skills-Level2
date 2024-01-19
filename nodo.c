#ifndef __NODO_C__
#define __NODO_C__

typedef struct nodo {
    struct nodo * prox;
    char name[40];
    // goals, speed, assissts, passing accuracy, defensive involvemnt , jersey number   
    int stats_values[6];
}nodo;

#endif