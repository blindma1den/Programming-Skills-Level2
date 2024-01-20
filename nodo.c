#ifndef __NODO_C__
#define __NODO_C__

typedef struct nodo {
    struct nodo * prox;
    char name[20];
    char last_name[20];
    char position [20];
    // goals, speed, assissts, passing accuracy, defensive involvemnt , jersey number  ,  age
    int stats_values[7];
    float height;
}nodo;

#endif