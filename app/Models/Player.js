import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";


export class Player {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.score = 0
    }
    get ListTemplate() {
        return `
    <div class="d-flex justify-content-around btn playerInList p-2"
        onClick="app.playersController.setActivePlayer('${this.id}')">
        <div class="col-4">${this.name}</div>
        <div class="col-4">${this.score}</div>
    </div>`
    }
    get ActivePlayerTemplate() {
        return `
        <div class="d-flex justify-content-around rounded bg-light p-2">
        <div class="col-4"><h4>${this.name}</h4></div>
        <div class="col-4"><h4>${this.score}</h4></div>
    </div>`
    }
}