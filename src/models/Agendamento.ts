import { Cliente } from "./Cliente";
import { Encomenda } from "./Encomenda";

export class Agendamento {
    private _cliente: Cliente
    private _encomenda: Encomenda
    private _data: string
    private _horario: string
    private _observacoes: string

    constructor(
        cliente: Cliente,
        encomenda: Encomenda,
        data: string,
        horario: string,
        observacoes: string
    ) {
        this._cliente = cliente
        this._encomenda = encomenda
        this._data = data
        this._horario = horario
        this._observacoes = observacoes
    }

    public exibirAgendamento(): void {
        console.log("=== AGENDAMENTO ===");
        console.log(`Cliente: ${this._cliente.nome}`);
        console.log(`Data: ${this._data}`);
        console.log(`Horário: ${this._horario}`);
        console.log(`Observações: ${this._observacoes}`);
    }

    public remarcar(data: string, horario: string): void {
        this._data = data;
        this._horario = horario;
        console.log("Agendamento remarcado com sucesso!");
    }

    public cancelar(): void {
        console.log(`O agendamento do dia ${this._data} às ${this._horario} foi cancelado.`);
    }

}