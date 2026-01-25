export class templateView {
    constructor(elemento) {
        this.elemento = document.querySelector(elemento);
    }
    templateMsg(model, tipoMensagem) {
        return `
        <p class="alert alert-${tipoMensagem}">${model}</p>
        `;
    }
    templateNegociacao(model) {
        return `
             <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
            return `
                    <tr>
                        <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                    </tr>
                    `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    updateMsg() {
    }
    updateNegociacao() {
    }
}
