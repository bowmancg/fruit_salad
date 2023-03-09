import { generateId } from "../Utils/generateId.js";


export class Player {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.score = 0
    }
    get ListTemplate() {
        return `<li>${this.name}</li>`
    }
}