export class Component {
    constructor(config) {
        this.template = config.template;
        this.selector = config.selector;
        this.el = null;
    }

    render() {
        this.el = document.querySelector(this.selector);
        if (!this.el) throw new Error(`No element with selector ${this.selector}`);
        else this.el.innerHTML = this.template;
    }
}