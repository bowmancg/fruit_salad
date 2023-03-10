import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";


export class Player {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.score = 0
    }
    get ListTemplate() {
        return `<div class="card" id="list">
        <p>${this.name}</p>
        <p>${this.score}</p>
        </div>`
    }
}