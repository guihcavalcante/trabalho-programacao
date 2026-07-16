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

    public exibirEncomenda():void{
        console.log("===Encomenda===")
        console.log(`Cliente: ${this._cliente}`)
        console.log(`tipo de tecido: ${this._tipoDePeca}`)
        console.log(`Tecido: ${this._tecido}`)
        console.log(`Prazo: ${this._prazo}`)
        console.log(`status da encomenda: ${this._status}`)
        console.log(`observação que deseja colocar no pedido: ${this._observacao}`)

                                                                                    
    }
    public atualizarStatus(novoStatus:string):void{
        this._status = novoStatus
        console.log(`Novo status: ${this._status}`)
    }
    public set prazo(novoPrazo:string){
        this._prazo = novoPrazo
        console.log(`Novo prazo: ${this._prazo}`)
    }
}