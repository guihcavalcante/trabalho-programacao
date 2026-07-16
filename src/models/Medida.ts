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

    public solicitarMedidas(): void{
        console.log("===Medidas===")
        console.log(`Busto: ${this.busto}`)
        console.log(`Cintura: ${this.cintura}`)
        console.log(`Quadril: ${this.quadril}`)
        console.log(`Altura: ${this.altura}`)
        console.log(`observações: ${this.observacoes}`)
    }

}