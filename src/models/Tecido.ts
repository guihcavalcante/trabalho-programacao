export class Tecido {
    private _nome: string
    private _tipo: string
    private _cor: string
    private _quantidade: number

    constructor(
        nome: string,
        tipo: string,
        cor: string,
        quantidade: number
    ) {
        this._nome = nome
        this._tipo = tipo
        this._cor = cor
        this._quantidade = quantidade
    }

    public verificarDisponibilidade(): boolean {
        return this._quantidade > 0;
    }

     public exibirTecido(): void {
        console.log("=== TECIDO ===");
        console.log(`Nome: ${this._nome}`);
        console.log(`Tipo: ${this._tipo}`);
        console.log(`Cor: ${this._cor}`);
        console.log(`Quantidade: ${this._quantidade} metros`);
    }

    public adicionarQuantidade(valor: number): void {
        this._quantidade += valor;
        console.log(`${valor} metros adicionados ao estoque.`);
    }

    public retirarQuantidade(valor: number): void {
        if (valor <= this._quantidade) {
            this._quantidade -= valor;
            console.log(`${valor} metros retirados do estoque.`);
        } else {
            console.log("Quantidade insuficiente no estoque.");
        }
    }
}