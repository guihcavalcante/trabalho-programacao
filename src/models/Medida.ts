export class Medida {
    private _busto: number
    private _cintura: number
    private _quadril: number
    private _altura: number
    private _observacoes: string

    constructor(
        busto: number,
        cintura: number,
        quadril: number,
        altura: number,
        observacoes: string
    ) {
        this._busto = busto
        this._cintura = cintura
        this._quadril = quadril
        this._altura = altura
        this._observacoes = observacoes
    }

    public solicitarMedidas(): void{
        console.log("===Medidas===")
        console.log(`Busto: ${this._busto}`)
        console.log(`Cintura: ${this._cintura}`)
        console.log(`Quadril: ${this._quadril}`)
        console.log(`Altura: ${this._altura}`)
        console.log(`observações: ${this._observacoes}`)
    }

    public atualizarMedidas(busto: number, cintura: number, quadril: number, altura: number, observacoes: string): void{
        this._busto = busto
        this._cintura = cintura
        this._quadril = quadril
        this._altura = altura
        this._observacoes = observacoes
    }

}