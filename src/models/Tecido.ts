export class Tecido {
    nome: string
    tipo: string
    cor: string
    quantidade: number

    constructor(
        nome: string,
        tipo: string,
        cor: string,
        quantidade: number
    ) {
        this.nome = nome
        this.tipo = tipo
        this.cor = cor
        this.quantidade = quantidade
    }
}