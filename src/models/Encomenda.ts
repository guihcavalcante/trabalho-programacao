import { Cliente } from "./Cliente";
import { Tecido } from "./Tecido";

export class Encomenda {
    private _cliente: Cliente
    private _tecido: Tecido
    private _tipoDePeca: string
    private _prazo: string
    private _status: string
    private _observacao: string

    constructor(
        cliente: Cliente,
        tecido: Tecido,
        tipoDePeca: string,
        prazo: string,
        status: string,
        observacao: string
    ) {
        this._cliente = cliente
        this._tecido = tecido
        this._tipoDePeca = tipoDePeca
        this._prazo = prazo
        this._status = status
        this._observacao = observacao
    }

    public get cliente(): Cliente {
        return this._cliente
    }

    public get tecido(): Tecido {
        return this._tecido
    }

    public get tipoDePeca(): string {
        return this._tipoDePeca
    }

    public get prazo(): string {
        return this._prazo
    }

    public get status(): string {
        return this._status
    }

    public get observacao(): string {
        return this._observacao
    }

    public set cliente(novoCliente: Cliente) {
        this._cliente = novoCliente
    }

    public set tecido(novoTecido: Tecido) {
        this._tecido = novoTecido
    }

    public set tipoDePeca(novoTipoDePeca: string) {
        this._tipoDePeca = novoTipoDePeca
    }

    public set prazo(novoPrazo: string) {
        this._prazo = novoPrazo
    }

    public set status(novoStatus: string) {
        this._status = novoStatus
    }

    public set observacao(novaObservacao: string) {
        this._observacao = novaObservacao
    }

    public exibirEncomenda():void{
        console.log("===Encomenda===")
        console.log(`Cliente: ${this._cliente}`)
        console.log(`tipo de tecido: ${this._tipoDePeca}`)
        console.log(`Tecido: ${this._tecido}`)
        console.log(`Prazo: ${this._prazo}`)
        console.log(`status da encomenda: ${this._status}`)
        console.log(`observação que deseja colocar no pedido: ${this._observacao}`)

                                                                                    
    }
}