export abstract class Usuario{
    private _nome: string
    private _email: string
    private _telefone: string
    private _senha: string

    constructor(nome:string, email:string, telefone:string, senha:string){
        this._nome = nome
        this._email = email
        this._telefone = telefone
        this._senha = senha
    }
    public exibirDados(): void {
        console.log("=== DADOS DO USUÁRIO ===");
        console.log(`Nome: ${this._nome}`);
        console.log(`Email: ${this._email}`);
        console.log(`Telefone: ${this._telefone}`);
    }

    public get nome(): string {
        return this._nome
    }

    public get email(): string {
        return this._email
    }

    public set senha(novaSenha: string) {
        this._senha = novaSenha;
        console.log("Senha alterada com sucesso!");
    }

    public set telefone(novoTelefone: string) {
        this._telefone = novoTelefone;
        console.log("Telefone atualizado com sucesso!");
    }

}