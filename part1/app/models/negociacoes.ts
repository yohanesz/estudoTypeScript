import { Negociacao } from "./negociacao.js";

export class Negociacoes {

    private negociacoes: Negociacao[] = [];

    constructor() {

    }

    adicionar(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

    

    
}


