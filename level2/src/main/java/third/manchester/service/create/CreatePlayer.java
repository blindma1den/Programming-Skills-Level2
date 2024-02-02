package third.manchester.service.create;

import third.manchester.model.Player;
import third.manchester.model.Team;

import java.util.Map;
import java.util.Optional;

public class CreatePlayer {
    static public Map<Integer, Player> createPlayer(){
        return Team.setNewbie(Player.getNewPlayer(Optional.empty()));
    }

}
