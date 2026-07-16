import { Medida } from "./Medida"
import { Usuario } from "./Usuario"

export class Cliente extends Usuario                                                                                                                                 {
    private _medida: Medida

    constructor(
        nome: string,
        email: string,
        telefone: string,
        senha: string,
        medida: Medida
    ) {
        super(nome, email, telefone, senha)
        this._medida = medida
        
    }

    public exibirCliente(): void {
        console.log("=== CLIENTE ===");
        console.log(`Nome: ${this.nome}`);
        console.log(`Email: ${this.email}`);
        console.log(`Telefone: ${this.telefone}`);
    }

    public atualizarMedida(novaMedida: Medida): void {
        this._medida = novaMedida;
        console.log("Medidas atualizadas com sucesso!");
    }
    
    public exibirMedidas(): void {
        console.log(this._medida);
    }
    
}
