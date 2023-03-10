import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";
import { saveState } from "../Utils/Store.js";

class PlayersService {

    setActivePlayer(playerId) {
        let foundPlayer = appState.players.find(p => p.id == playerId)
        appState.activePlayer = foundPlayer
    }

    createPlayer(formData) {
        let player = new Player(formData)
        appState.players.push(player)
        console.log('player service', appState.players);
        appState.emit('players')
        appState.activePlayer = appState.players.find(p => p.id == player.id)
        console.log('active player: ', appState.activePlayer)
    }
}

export const playersService = new PlayersService()