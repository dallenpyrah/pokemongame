import { ProxyState } from "../AppState.js"


export default class Poke{
    constructor(data){
        this.name = data.name
        this.img = data.img || data.sprites.front_default
        this.backImg = data.img || data.sprites.back_default
        this.dreamImg = data.img || data.sprites.other.dream_world.front_default
        this.weight = data.weight
        this.height = data.height
        this.user = data.user
        this.id = data.id || data._id
    }

    get Template(){
        return /*html*/ `
        <div class="text-center">
        ${this.Title}
                <h3 class="mt-3"><span class="badge badge-dark"> Name: ${this.name} </span></h3>
                <img src="${this.img}" class="mt-2 mb-2" width="200px" height="200px">
                <img src="${this.dreamImg}" class="mt-2 mb-2" width="200px" height="200px">
                <img src="${this.backImg}" class="mt-2 mb-2" width="200px" height="200px">
                <h5 class="mt-3"><span class="badge badge-dark"> Weight: ${this.weight}</span></h5>
                <h5 class="mt-3"><span class="badge badge-dark"> Height: ${this.height}</span></h5>
                ${this.Buttons}
    </div>
        `
    }

    get Buttons(){
        if(this.user){
            return /*html*/ `
             <button class="btn btn-danger mb-3 mt-3" onclick="app.pokeCaughtController.releasePoke()">Release POKEMON</button>
            `
        }
        return /*html*/ `<button class="btn btn-success mb-3 mt-3" onclick="app.pokeCaughtController.getCaughtPoke()">CATCH POKEMON</button>
        `
    }

    get Title(){
        if(this.user){
            return /*html*/ `
            <h1 class="mt-3 text-danger text-center">MY POKEMON</h1>
            `
        }
        return /*html*/ `
        <h1 class="mt-3 text-success text-center">NEW POKEMON</h1>
        `
    }
    }

