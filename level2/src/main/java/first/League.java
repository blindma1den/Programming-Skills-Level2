package first;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Random;

public class League {
    static Random random = new Random();
    static List<Integer> teams = List.of(0, 1, 2);
    static List<Map<Integer, Integer>> match = new ArrayList<>();
    static Map<Integer, Integer> mirrorTeam = Map.of(1, 1, 0, 3, 3, 0);
    static Map<Integer, Integer> realTeam = Map.of(1,1,2,3,0,0);
    public static void main(String[] args) {
        int i1 = ((teams.size() - 1) * teams.size()) / 2;

        int[] matchRandom = new int[i1];
        for (int i = 0; i < i1; i++) {
            matchRandom[i] = random.nextInt(0, 2);
        }

        int col = teams.size() - 1;
        int accu = 0;
        for (int i = matchRandom.length - 1; i >= 0; i--) {
            match.add(Map.of(col, realTeam.get(matchRandom[i])));
            if (accu == col - 1) {
                accu = 0;
                col--;
            } else {
                accu++;
            }
        }
        col = teams.size() - 2;

        for (int i = matchRandom.length - 1; i >= 0; i--) {
            match.add(Map.of(col, mirrorTeam.get(matchRandom[i])));
            if (col - 1 < 0) {
                if(i!=1){
                    col = col+1;
                }
            } else {
                col--;
            }
        }
        teams.forEach(League :: getResultOfTeam);


    }

    private static void getResultOfTeam(int key) {
        match.stream()
             .filter(integerIntegerMap -> integerIntegerMap.containsKey(key))
             .map(Map :: values)
             .map(integers -> integers.stream()
                                      .reduce(Integer :: sum))
             .map(Optional :: get)
             .reduce(Integer :: sum)
             .ifPresent(System.out :: println);
    }
}
