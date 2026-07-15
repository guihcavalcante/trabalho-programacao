import { Medida } from "./Medida"
import { Usuario } from "./Usuario"

export class Cliente extends Usuario                                                                                                                                 {
    medida: Medida

    constructor(
        nome: string,
        email: string,
        telefone: string,
        senha: string,
        medida: Medida
    ) {
        super(nome, email, telefone, senha)
        this.medida = medida
        
    }

    
}
