export class MensagemView {
    constructor(seletor) {
        this.element = document.querySelector(seletor);
    }
    template(model, tipoMensagem) {
        return `
        <p class="alert alert-${tipoMensagem}">${model}</p>
        `;
    }
    update(model, tipoMensagem) {
        this.element.innerHTML = this.template(model, tipoMensagem);
        setTimeout(() => {
            this.element.innerHTML = '';
        }, 3000);
    }
}
