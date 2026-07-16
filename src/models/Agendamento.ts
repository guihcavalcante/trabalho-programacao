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

    public get cliente(): Cliente {
        return this._cliente
    }

    public get encomenda(): Encomenda {
        return this._encomenda
    }

    public get data(): string {
        return this._data
    }

    public get horario(): string {
        return this._horario
    }

    public get observacoes(): string {
        return this._observacoes
    }

    public set cliente(novoCliente: Cliente) {
        this._cliente = novoCliente
    }

    public set encomenda(novaEncomenda: Encomenda) {
        this._encomenda = novaEncomenda
    }

    public set data(novaData: string) {
        this._data = novaData
    }

    public set horario(novoHorario: string) {
        this._horario = novoHorario
    }

    public set observacoes(novasObservacoes: string) {
        this._observacoes = novasObservacoes
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