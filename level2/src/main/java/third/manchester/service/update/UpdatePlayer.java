package third.manchester.service.update;

import third.manchester.model.Player;
import third.manchester.model.Team;
import third.manchester.utils.RequiredData;

import java.util.Map;
import java.util.Scanner;

import static third.manchester.model.Team.getPlayerByJersey;

public class UpdatePlayer {
    public static Map<Integer, Player> updatePlayer() {
        Integer infoOf = RequiredData.getInfoOf("Jersey Number of palyer to update",
                                                Scanner :: nextInt);
        while (getPlayerByJersey(infoOf.toString()) == null) {
            infoOf = RequiredData.getInfoOf("Select a valid id", Scanner :: nextInt);
        }
        return Team.updateTeamMember(infoOf);
    }

}
