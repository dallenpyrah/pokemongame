import { ProxyState } from "../AppState.js";
import { pokeApi } from "./AxiosService.js";
import Poke from "../Models/Poke.js";


class PokeApiService{
    constructor(){
        console.log("Hello from the Poke Api Service")
        this.getPokeApi()
    }

    async getPokeApi(){
        try {
            const res = await pokeApi.get('')
            ProxyState.pokeApi = res.data.results
            console.log(res)
        } catch (error) {
            console.error(error)
        }
    }

    async setActivePokemon(name){
        try {
            const res = await pokeApi.get(name)
            console.log(res)
            ProxyState.activePoke = new Poke(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    async nextPokemonSet(){
        try {
            const res = await pokeApi.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
            ProxyState.pokeApi = res.data.results
        } catch (error) {
            
        }
    }

}

export const pokeApiService = new PokeApiService();