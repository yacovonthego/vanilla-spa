import { VComponent } from "../core/index";

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