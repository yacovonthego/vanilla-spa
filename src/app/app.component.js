import { VComponent } from "../core/index";
import './css/main.css'
import '../../node_modules/materialize-css/dist/css/materialize.min.css'


class AppComponent extends VComponent {
    constructor(config) {
        super(config);
    }
}

export const appComponent = new AppComponent({ 
    selector: 'app-root',
    template: `
        <app-header></app-header>
        <div>
            App component
        </div>
    `
});