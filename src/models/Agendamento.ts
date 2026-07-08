import { Cliente } from "./Cliente";
import { Encomenda } from "./Encomenda";

export class Agendamento {
    cliente: Cliente
    encomenda: Encomenda
    data: string
    horario: string
    observacoes: string

    constructor(
        cliente: Cliente,
        encomenda: Encomenda,
        data: string,
        horario: string,
        observacoes: string
    ) {
        this.cliente = cliente
        this.encomenda = encomenda
        this.data = data
        this.horario = horario
        this.observacoes = observacoes
    }
}