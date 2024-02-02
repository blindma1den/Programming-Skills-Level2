package third.manchester.service.comparation;

import third.manchester.model.Player;
import third.manchester.model.Team;
import third.manchester.utils.Looper;
import third.manchester.utils.RequiredData;

import java.util.ArrayList;
import java.util.Locale;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static third.manchester.utils.Printer.print;

public class Playercompare {

    public static Function<String, Map.Entry<String, Player>> comparePlayers(Player player1,
                                                                             Player player2
                                                                            ) {
        return st -> Map.entry(st, Stream.of(player1, player2)
                                         .max(Player.COMPARATORS.get(st))
                                         .get());
    }

    public static Map<String, Player> getComparativeFor(ArrayList<String> statistics,
                                                        Player player1,
                                                        Player player2) {
        return statistics.stream()
                         .map(comparePlayers(player1, player2))
                         .collect(Collectors.toMap(Map.Entry :: getKey,
                                                   Map.Entry :: getValue));
    }

    public static Map<String, Player> compareTwoPlayers() {
        var selected = getRequireData();
        return getComparativeFor(selected.statistics(),
                                 selected.player1(), selected.player2());
    }
    private static SubmittedData getRequireData() {
        var statistics = new ArrayList<String>();
        var player1 = Team.getPlayerByJersey("give the jersey number of player one");
        var player2 = Team.getPlayerByJersey("give the jersey number of player two");
        Looper.repeat(() -> {
            print("Select player's statistic to compare. 'Q' to stop");
            String next = RequiredData.getScanner.next()
                                                 .toLowerCase(Locale.ROOT);
            return (! next.equals("q")) && statistics.add(next);
        });
        return new SubmittedData(statistics, player1, player2);
    }

    private record SubmittedData(
            ArrayList<String> statistics,
            Player player1,
            Player player2
    ) {}
}
