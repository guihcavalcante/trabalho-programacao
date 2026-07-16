import { Cliente } from "../models/Cliente";
// import { Administrador } from "../models/Administrador";
import { Encomenda } from "../models/Encomenda";
import { Tecido } from "../models/Tecido";
import { Agendamento } from "../models/Agendamento";
// import { Medida } from "../models/Medida";

export class SistemaAtelie {
    private _clientes: Cliente[] = []
    private _encomendas: Encomenda[] = []
    private _tecidos: Tecido[] = []
    private _agendamentos: Agendamento[] = []

    mostrarResumoSistema(): void {
        console.log(`==RESUMO DO SISTEMA==\n 
        -Quantidade de clientes: ${this._clientes.length}\n 
        -Quantidade de encomendas: ${this._encomendas.length}\n 
        -Quantidade de tecidos: ${this._tecidos.length}\n 
        -Quantidade de agendamentos: ${this._agendamentos.length}`)
    }

    public get cliente(): Cliente[] {
        return this._clientes
    }

    public get encomenda(): Encomenda[] {
        return this._encomendas
    }

    public get tecido(): Tecido[] {
        return this._tecidos
    }

    public get agendamento(): Agendamento[] {
        return this._agendamentos
    }

    public cadastrarCliente(cliente: Cliente): void {
        this._clientes.push(cliente)
    }

    public listarClientes(): Cliente[] {
        return this._clientes
    }

    public atualizarCliente(cliente: Cliente, novoCliente: Cliente): void {
        const index = this._clientes.indexOf(cliente)
        this._clientes[index] = novoCliente
    }

    public removerCliente(cliente: Cliente): void {
        const index = this._clientes.indexOf(cliente)
        this._clientes.splice(index, 1)
    }

    public cadastrarTecido(tecido: Tecido): void {
        this._tecidos.push(tecido)
    }

    public listarTecidos(): Tecido[] {
        return this._tecidos
    }

    public atualizarTecido(tecido: Tecido, novoTecido: Tecido): void {
        const index = this._tecidos.indexOf(tecido)
        this._tecidos[index] = novoTecido
    }

    public removerTecido(tecido: Tecido): void {
        const index = this._tecidos.indexOf(tecido)
        this._tecidos.splice(index, 1)
    }

    public criarEncomenda(encomenda: Encomenda): void {
        this._encomendas.push(encomenda)
    }

    public listarEncomendas(): Encomenda[] {
        return this._encomendas
    }

    public removerEncomenda(encomenda: Encomenda): void {
        const index = this._encomendas.indexOf(encomenda)
        this._encomendas.splice(index, 1)
    }

    public criarAgendamento(agendamento: Agendamento): void {
        this._agendamentos.push(agendamento)
    }
    
    public listarAgendamentos(): Agendamento[] {
        return this._agendamentos
    }

    public cancelarAgendamento(agendamento: Agendamento): void {
        const index = this._agendamentos.indexOf(agendamento)
        this._agendamentos.splice(index, 1)
    }
}