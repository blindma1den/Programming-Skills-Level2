/*1. The Big Six of the English Premier League is composed of six teams: Manchester United, Liverpool, Arsenal, Chelsea, Manchester City, and Tottenham Hotspur.
 Develop a system that generates between 0, 1, and 3 points randomly for each team. 
 The winner of the Big Six will be the team with the highest accumulated points at the end.
 Each team will play 3 matches against every opponent. 
 After the matches, the system will display on-screen the team standings from highest to lowest points*/

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

//Procedure to assing a score (random) to each team, simulating a soccer game
 void match(int * team_scores, const int team1, const int team2){
    int score;
    score = rand()% 3 ;
    team_scores[team1] = score + team_scores[team1];
    score = rand()% 3 ;
    team_scores[team2] = score + team_scores[team2];

 }

 int most_points(int * scores){
    int index_most_points = 0;
    for(int i = 1; i < 6; i++){
        if(scores[i]>scores[index_most_points]){
            index_most_points = i;
        }
    }
    return index_most_points;
 }

 int main(){
    time_t t;
    srand(time(&t));
    char * teams[]={"Manchester United", "Liverpool","Arsenal","Chelsea","Manchester City","Tottenham Hotspur"};
    int scores[6];
    int winner;
    for(int i = 0; i < 6; i++){
        scores[i]=0;
    }
    for(int i = 0; i < 3; i++){
        for(int j = 0; j < 6;j++){
            for(int k = 0; k < 6;k++){
                if(k!=j){
                    match(scores,j,k);
                }            
            }
        }
    }
    printf("Final scores:\n");
    for(int i = 0; i < 6;i++){
        printf("%s  score :%i\n",teams[i],scores[i]);
    }
    winner = most_points(scores);
    printf("\nThe winner is: %s with %i points",teams[winner],scores[winner]);


    return 0;
}