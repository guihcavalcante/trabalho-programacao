export class Tecido {
    nome: string
    tipo: string
    cor: string
    quantidade: number

    constructor(
        nome: string,
        tipo: string,
        cor: string,
        quantidade: number
    ) {
        this.nome = nome
        this.tipo = tipo
        this.cor = cor
        this.quantidade = quantidade
    }

     public exibirTecido(): void {
        console.log("=== TECIDO ===");
        console.log(`Nome: ${this.nome}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Quantidade: ${this.quantidade} metros`);
    }

    public adicionarQuantidade(valor: number): void {
        this.quantidade += valor;
        console.log(`${valor} metros adicionados ao estoque.`);
    }

    public retirarQuantidade(valor: number): void {
        if (valor <= this.quantidade) {
            this.quantidade -= valor;
            console.log(`${valor} metros retirados do estoque.`);
        } else {
            console.log("Quantidade insuficiente no estoque.");
        }
    }
}