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

    public gerenciadorUsuario():void{
        console.log(`${this.nome} está gerenciando o usuario`)
    }
    public removerUsuario():void{
        console.log(`O administrador remove o usuario ${this.gerenciadorUsuario}`)
    }

}