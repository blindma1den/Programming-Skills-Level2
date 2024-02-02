package third.manchester.model;

import third.manchester.utils.RequiredData;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import static third.manchester.utils.Printer.print;

public class Team {
    private static  Map<Integer, Player> manchester = Map.of(8, new Player("Bruno Fernandes", 5, 6, 9, 10, 3, 8),
                                                                  11, new Player("Rasmus Hojlund", 12, 8, 2, 6, 2, 11),
                                                                  5, new Player("Harry Maguire", 1, 5, 1, 7, 9, 5),
                                                                  1, new Player("Alejandro Garnacho", 8, 7, 8, 6, 0, 17),
                                                                  7, new Player("Mason Mount", 2, 6, 14, 8, 1, 7));
    public static Map<Integer, Player> setNewbie(Player player){
        HashMap<Integer, Player> integerPlayerHashMap = new HashMap<>(manchester);
        integerPlayerHashMap.put(player.jerseyNumber(), player);
        manchester=integerPlayerHashMap;
        return manchester;
    }

    public static Map<Integer, Player> getMancherster(){
        return manchester;
    }

    public static Player getPlayerByJersey(String message) {
        print(message);
        return getMancherster().get(RequiredData.getScanner.nextInt());
    }

    public static Map<Integer, Player> updateTeamMember(Integer infoOf) {
        Player remove = getMancherster().remove(infoOf);
        return setNewbie(Player.getNewPlayer(Optional.of(remove.jerseyNumber())));
    }
}
