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

    public exibirAgendamento(): void {
        console.log("=== AGENDAMENTO ===");
        console.log(`Cliente: ${this.cliente.nome}`);
        console.log(`Data: ${this.data}`);
        console.log(`Horário: ${this.horario}`);
        console.log(`Observações: ${this.observacoes}`);
    }

    public remarcar(data: string, horario: string): void {
        this.data = data;
        this.horario = horario;
        console.log("Agendamento remarcado com sucesso!");
    }

    public cancelar(): void {
        console.log(`O agendamento do dia ${this.data} às ${this.horario} foi cancelado.`);
    }

}