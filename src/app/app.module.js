import { VModule } from "../core/index";

class App extends VModule {
    constructor(config) {
        super(config); // call a parent constructor
    }
}

export const app = new App({  });