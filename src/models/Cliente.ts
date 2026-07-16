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
    public exibirCliente(): void {
        console.log("=== CLIENTE ===");
        console.log(`Nome: ${this.nome}`);
        console.log(`Email: ${this.email}`);
        console.log(`Telefone: ${this.telefone}`);
    }

    public atualizarMedida(novaMedida: Medida): void {
        this.medida = novaMedida;
        console.log("Medidas atualizadas com sucesso!");
    }
    
    public exibirMedidas(): void {
        console.log(this.medida);
    }
    
}
