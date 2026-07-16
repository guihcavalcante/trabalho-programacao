import { Cliente } from "./Cliente";
import { Tecido } from "./Tecido";

export class Encomenda {
    cliente: Cliente
    tecido: Tecido
    tipoDePeca: string
    prazo: string
    status: string
    observacao: string

    constructor(
        cliente: Cliente,
        tecido: Tecido,
        tipoDePeca: string,
        prazo: string,
        status: string,
        observacao: string
    ) {
        this.cliente = cliente
        this.tecido = tecido
        this.tipoDePeca = tipoDePeca
        this.prazo = prazo
        this.status = status
        this.observacao = observacao
    }

    public exibirEncomenda():void{
        console.log("===Encomenda===")
        console.log(`Cliente: ${this.cliente}`)
        console.log(`tipo de tecido: ${this.tipoDePeca}`)
        console.log(`Tecido: ${this.tecido}`)
        console.log(`Prazo: ${this.prazo}`)
        console.log(`status da encomenda: ${this.status}`)
        console.log(`observação que deseja colocar no pedido: ${this.observacao}`)

                                                                                    
    }
    public atualizarStatus(novoStatus:string):void{
        this.status = novoStatus
        console.log(`Novo status: ${this.status}`)
    }
    public alterarPrazo(novoPrazo:string){
        this.prazo = novoPrazo
        console.log(`Novo prazo: ${this.prazo}`)
    }
}