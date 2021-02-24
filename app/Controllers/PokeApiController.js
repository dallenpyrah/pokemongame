import { ProxyState } from "../AppState.js"
import { pokeApiService } from "../Services/PokeApiService.js"

function _drawPokeApi(){
    let poke = ProxyState.pokeApi
    let template = ''
    poke.forEach(p => template += `<li onclick="app.pokeApiController.setActivePokemon('${p.name}')"><span class="badge badge-light">${p.name}</span></li>`)
    document.getElementById('poke-api').innerHTML = template
}

function _drawActivePoke(){
    if(ProxyState.activePoke){
        document.getElementById('new-poke').innerHTML = ProxyState.activePoke.Template
    }else{
        document.getElementById('new-poke').innerHTML = ""
    }
}

export default class PokeApiController{
    constructor(){
        console.log("Hello from PokeApi Controller!")
        ProxyState.on('pokeApi', _drawPokeApi)
        ProxyState.on('activePoke', _drawActivePoke)
    }

    setActivePokemon(name){
        pokeApiService.setActivePokemon(name)
    }

    nextPokemonSet(){
        pokeApiService.nextPokemonSet()
    }
}