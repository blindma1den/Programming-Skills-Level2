package third.manchester.utils;

import third.manchester.model.Player;
import third.manchester.model.Team;

import java.util.List;
import java.util.Map;

public class Printer {

    public static void printMenu() {
        System.out.println("1) Show player characteristics by Jersey Number");
        System.out.println("2) Compare two players");
        System.out.println("3) Show the fastest player");
        System.out.println("4) Show the top goal scorer");
        System.out.println("5) Show the player with most assist");
        System.out.println("6) Show the highest passing accuracy");
        System.out.println("7) Show the better defense player");
        System.out.println("8) to create player!");
        System.out.println("9) edit player...!");
        System.out.println("10) to exit...!");
    }

    public static void printComparative(Map<String, Player> list) {
        list.forEach((key, player) -> System.out.println("Statistic: " + key + " Player" +
                                                         ":" + player.name()));
    }

    public static Player printTopPlayerByStatistic(String st) {
        return Team.getMancherster().values().stream().max(Player.COMPARATORS.get(st)).get();
    }

    public static <T> void print(T x) {
        System.out.println(x);
    }
    public static void print(List<Player> x) {
        x.forEach(System.out :: println);
    }
}
