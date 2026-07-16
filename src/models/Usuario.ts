export abstract class Usuario{
    nome: string
    email: string
    telefone: string
    senha: string

    constructor(nome:string, email:string, telefone:string, senha:string){
        this.nome = nome
        this.email = email
        this.telefone = telefone
        this.senha = senha
    }
    public exibirDados(): void {
        console.log("=== DADOS DO USUÁRIO ===");
        console.log(`Nome: ${this.nome}`);
        console.log(`Email: ${this.email}`);
        console.log(`Telefone: ${this.telefone}`);
    }

    public alterarSenha(novaSenha: string): void {
        this.senha = novaSenha;
        console.log("Senha alterada com sucesso!");
    }

    public atualizarTelefone(novoTelefone: string): void {
        this.telefone = novoTelefone;
        console.log("Telefone atualizado com sucesso!");
    }

}