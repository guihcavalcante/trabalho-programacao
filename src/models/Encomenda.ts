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
}