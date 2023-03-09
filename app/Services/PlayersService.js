import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";
import { saveState } from "../Utils/Store.js";

class PlayersService {
createPlayer(formData) {
    let player = new Player(formData)
    
}
}

export const playersService = new PlayersService()