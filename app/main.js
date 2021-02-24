import PokeApiController from "./Controllers/PokeApiController.js";
import PokeCaughtController from "./Controllers/PokeCaughtController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  pokeApiController = new PokeApiController();

  pokeCaughtController = new PokeCaughtController();
}

window["app"] = new App();
