import { ProxyState } from "../AppState.js";
import { sandApi } from "./AxiosService.js";
import Poke from "../Models/Poke.js";


class PokeCaughtService{
    constructor(){
        console.log('Hello from caught pokemon service.')
        this.getMyPoke()
    }
    
    async getMyPoke(){
        try {
            const res = await sandApi.get('')
            ProxyState.caughtPoke = res.data.map(p => new Poke(p))
            console.log(ProxyState.caughtPoke)
        } catch (error) {
            console.error(error)
        }
    }
    
    async getCaughtPoke(){
        try {
            const res = await sandApi.post("", ProxyState.activePoke)
            ProxyState.caughtPoke = [...ProxyState.caughtPoke, new Poke(res.data)]
            console.log(ProxyState.caughtPoke)
        } catch (error) {
            console.error(error)
        }
    }
    
    setActivePokemon(id){
    let activePoke = ProxyState.caughtPoke.find(p => p.id == id)
    ProxyState.activePoke = activePoke
}

    async releasePoke(){
        try {
            await sandApi.delete(ProxyState.activePoke.id)
            this.getMyPoke()
            ProxyState.activePoke = null
        } catch (error) {
            console.error(error)
        }
    }


}

export const pokeCaughtService = new PokeCaughtService();