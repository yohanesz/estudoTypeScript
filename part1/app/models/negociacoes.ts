import { Negociacao } from "./negociacao.js";

export class Negociacoes {

    private negociacoes: Array<Negociacao> = [];

    constructor() {

    }

    adicionar(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): Array<Negociacao> {
        return this.negociacoes;
    }


    
}