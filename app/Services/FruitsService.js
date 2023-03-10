import { appState } from "../AppState.js"
import { saveState } from "../Utils/Store.js"

class FruitsService {

    setActiveFruit(fruit) {
        appState.activeFruit = fruit

    }

    findFruit() {
        
        return appState.fruits[Math.floor(Math.random() * appState.fruits.length)]
    }
}

export const fruitsService = new FruitsService()