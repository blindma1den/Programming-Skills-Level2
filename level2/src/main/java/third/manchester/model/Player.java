package third.manchester.model;

import third.manchester.utils.RequiredData;

import java.util.Comparator;
import java.util.Map;
import java.util.Optional;
import java.util.Scanner;

public record Player(
        String name,
        Integer goals,
        Integer speed,
        Integer assists,
        Integer passingAccuracy,
        Integer defensive,
        Integer jerseyNumber
) {

    public static final Map<String, Comparator<Player>> COMPARATORS = Map.of("goals",
                                                                             Comparator.comparingInt(Player :: goals), "speed", Comparator.comparingInt(Player :: speed), "assists", Comparator.comparingInt(Player :: assists), "passing", Comparator.comparingInt(Player :: passingAccuracy), "defensivePlayer", Comparator.comparingInt(Player :: passingAccuracy));

    public static Player getNewPlayer(Optional<Integer> integer) {

        var jersey = RequiredData.getInfoOf("please give player's jersey number", Scanner :: nextInt);

        while (Team.getMancherster().containsKey(jersey)) {
            jersey = RequiredData.getInfoOf("choose other jersey number",
                                                   Scanner :: nextInt);
        }

        return new Player(RequiredData.getInfoStringOf("please give player's name", Scanner :: next),
                          RequiredData.getInfoOf("please give player's goals",
                                                 Scanner :: nextInt),
                          RequiredData.getInfoOf("please give player's speed",
                                                 Scanner :: nextInt),
                          RequiredData.getInfoOf("please give player's assists",
                                                 Scanner :: nextInt),
                          RequiredData.getInfoOf("please give player's Accuracy " +
                                                 "Accuracy", Scanner :: nextInt),
                          RequiredData.getInfoOf("please give player's defensive " +
                                                 "defensive", Scanner :: nextInt),
                          integer.orElse(jersey));
    }

}
