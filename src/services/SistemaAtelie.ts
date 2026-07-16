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

    cadastrarCliente(cliente: Cliente): void {
        this._clientes.push(cliente)
    }

    listarClientes(): Cliente[] {
        return this._clientes
    }

    cadastrarTecido(tecido: Tecido): void {
        this._tecidos.push(tecido)
    }

    listarTecidos(): Tecido[] {
        return this._tecidos
    }

    criarEncomenda(encomenda: Encomenda): void {
        this._encomendas.push(encomenda)
    }

    listarEncomendas(): Encomenda[] {
        return this._encomendas
    }

    criarAgendamento(agendamento: Agendamento): void {
        this._agendamentos.push(agendamento)
    }
    
    listarAgendamentos(): Agendamento[] {
        return this._agendamentos
    }
}