import { VComponent } from "../core/index";

class AppComponent extends VComponent {
    constructor(config) {
        super(config);
    }
}

export const appComponent = new AppComponent({ 
    selector: 'app-root',
    template: `
        <div>
            App component
        </div>
    `
});