import { Usuario } from "./Usuario"

export class Administrador extends Usuario {
    constructor(
        nome: string,
        email: string,
        telefone: string,
        senha: string
    ) {
        super(nome, email, telefone, senha)
    }
}