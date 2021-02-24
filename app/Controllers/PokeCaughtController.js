import { ProxyState } from "../AppState.js"
import { pokeCaughtService } from "../Services/PokeCaughtService.js"

function _drawMyPoke(){
    let poke = ProxyState.caughtPoke
    let template = ''
    poke.forEach(p => template += `<li onclick="app.pokeCaughtController.setActivePokemon('${p.id}')"><span class="badge badge-light">${p.name}</span></li>`)
    document.getElementById('my-poke').innerHTML = template
}
export default class PokeCaughtController{
    constructor(){
        console.log("Hello from caught pokemon controller.")
        ProxyState.on("caughtPoke", _drawMyPoke)
    }

    getCaughtPoke(){
        pokeCaughtService.getCaughtPoke()
    }

    setActivePokemon(id){
        pokeCaughtService.setActivePokemon(id)
    }

    releasePoke(){
        pokeCaughtService.releasePoke()
    }
}