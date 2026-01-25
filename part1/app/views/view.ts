export abstract class View<T> {

    protected element: HTMLElement;

    constructor(seletor: string) {
        this.element = document.querySelector(seletor);
    }

    update(model: T): void {
        this.element.innerHTML = this.template(model);

        setTimeout(() => {
            this.element.innerHTML = '';
        }, 3000);
    }

    abstract template(model: T): string;


    

}