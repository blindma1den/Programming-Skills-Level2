package third.manchester;

import third.manchester.service.comparation.Playercompare;
import third.manchester.utils.Looper;
import third.manchester.utils.RequiredData;


import static third.manchester.model.Team.*;
import static third.manchester.service.create.CreatePlayer.createPlayer;
import static third.manchester.service.update.UpdatePlayer.updatePlayer;
import static third.manchester.utils.Printer.print;
import static third.manchester.utils.Printer.printComparative;
import static third.manchester.utils.Printer.printMenu;
import static third.manchester.utils.Printer.printTopPlayerByStatistic;

/***
 * Authors
 * Teti
 * Mayber
 * Santiago
 */

public class Main {

    public static void main(String[] args) {
        Looper.repeat(Main :: statisticsProcess);
    }

    private static boolean statisticsProcess() {
        printMenu();
        switch (RequiredData.getScanner.nextInt()) {
            case 1 -> print(getPlayerByJersey("give the jersey number"));
            case 2 -> printComparative(Playercompare.compareTwoPlayers());
            case 3 -> print(printTopPlayerByStatistic("speed"));
            case 4 -> print(printTopPlayerByStatistic("goals"));
            case 5 -> print(printTopPlayerByStatistic("assists"));
            case 6 -> print(printTopPlayerByStatistic("passing"));
            case 7 -> print(printTopPlayerByStatistic("defensivePlayer"));
            case 8 -> print(createPlayer());
            case 9 -> print(updatePlayer());
            case 10 -> {return false;}
        }
        return true;
    }
}
