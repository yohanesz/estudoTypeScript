export type tipoMensagem = 'danger' | 'warning' | 'success';

export class MensagemView {

    private element: HTMLElement;

    

    constructor(seletor: string) {
        this.element = document.querySelector(seletor);
    }

    template(model: string, tipoMensagem: tipoMensagem): string {
        return `
        <p class="alert alert-${tipoMensagem}">${model}</p>
        `;
    }

    update(model: string, tipoMensagem: tipoMensagem): void {
        this.element.innerHTML = this.template(model, tipoMensagem);

        setTimeout(() => {
            this.element.innerHTML = '';
        }, 3000);
    }

}