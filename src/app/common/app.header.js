import {VComponent} from "../../core/index";

class AppHeader extends VComponent {
    constructor(config) {
        super(config);
    }
}

export const appHeader = new AppHeader({
    selector: 'app-header',
    template: `
        <div class="navbar-fixed">  
          <nav>
            <div class="nav-wrapper">
              <a href="#" class="brand-logo">Vanilla SPA</a>
            </div>
          </nav>
        </div>
    `
});