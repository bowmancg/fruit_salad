import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";
import { playersService } from "../Services/PlayersService.js";
import { fruitsService } from "../Services/FruitsService.js";
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

function _drawCurrentFruit() {
    setHTML("current-fruit", appState.currentFruit)
    console.log('current fruit');
}


export class PlayersController {
    constructor() {
        console.log('player loaded');
        
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

    findFruit(fruits) {
        
        return fruits[Math.floor(Math.random() * fruits.length)]
    }

    setActiveFruit() {

    }

    getRandomFruit() {
        let fruit = appState.fruits[Math.floor(Math.random() * appState.fruits.length)]
        fruitsService.setActiveFruit(fruit)
        console.log(`current-fruit, ${appState.currentFruit}`);
    }

    setActivePlayer(playerId) {
        console.log('set active player', playerId)
        playersService.setActivePlayer(playerId)
        // TODO - redraw the players to show/highlight the active player
        
    }

}