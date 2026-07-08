import { Cliente } from "../models/Cliente";
// import { Administrador } from "../models/Administrador";
import { Encomenda } from "../models/Encomenda";
import { Tecido } from "../models/Tecido";
import { Agendamento } from "../models/Agendamento";
// import { Medida } from "../models/Medida";

export class SistemaAtelie {
    clientes: Cliente[] = []
    encomendas: Encomenda[] = []
    tecidos: Tecido[] = []
    agendamentos: Agendamento[] = []

    cadastrarCliente(cliente: Cliente): void {
        this.clientes.push(cliente)
    }

    listarClientes(): Cliente[] {
        return this.clientes
    }

    cadastrarTecido(tecido: Tecido): void {
        this.tecidos.push(tecido)
    }

    listarTecidos(): Tecido[] {
        return this.tecidos
    }

    criarEncomenda(encomenda: Encomenda): void {
        this.encomendas.push(encomenda)
    }

    listarEncomendas(): Encomenda[] {
        return this.encomendas
    }

    criarAgendamento(agendamento: Agendamento): void {
        this.agendamentos.push(agendamento)
    }
    
    listarAgendamentos(): Agendamento[] {
        return this.agendamentos
    }

    alterarStatusEncomenda(encomenda: Encomenda, novoStatus: string): void {
        encomenda.status = novoStatus
    }
}