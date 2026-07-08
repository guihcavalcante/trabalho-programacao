export class Medida {
    busto: number
    cintura: number
    quadril: number
    altura: number
    observacoes: string

    constructor(
        busto: number,
        cintura: number,
        quadril: number,
        altura: number,
        observacoes: string
    ) {
        this.busto = busto
        this.cintura = cintura
        this.quadril = quadril
        this.altura = altura
        this.observacoes = observacoes
    }
}