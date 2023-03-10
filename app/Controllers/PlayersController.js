import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";
import { playersService } from "../Services/PlayersService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawPlayers() {
    const players = appState.players
    console.log('_drawPlayers', players)
    let template = ''
    players.forEach(p => template += p.ListTemplate)
    setHTML('list', template)
}

function _drawActivePlayer(playerId) {
    console.log('_drawActivePlayer playerId: ', playerId)
    setHTML('activePlayerScoreBoard', appState.activePlayer.ActivePlayerTemplate)
}



export class PlayersController {
    constructor() {
        console.log('player loaded');
        appState.on('activePlayer', _drawPlayers)

    }

    createPlayer() {
        window.event.preventDefault()
        console.log('player added');
        let form = event.target
        let newPlayer = getFormData(form)
        console.log(newPlayer);
        playersService.createPlayer(newPlayer)
        document.getElementById("playerForm").reset(); // clears/resets the form
        _drawPlayers()
    }

    setActivePlayer(playerId) {
        console.log('set active player', playerId)
        playersService.setActivePlayer(playerId)
        _drawActivePlayer(playerId)

    }

}