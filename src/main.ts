import { SistemaAtelie } from "./services/SistemaAtelie";
import { Cliente } from "./models/Cliente";
import { Administrador } from "./models/Administrador";
import { Tecido } from "./models/Tecido";
import { Encomenda } from "./models/Encomenda";
import { Medida } from "./models/Medida";

const sistema = new SistemaAtelie();

console.log("=== INICIANDO SIMULAÇÃO DO ATELIÊ ===\n");

const linho = new Tecido("Linho Rústico", "Linho", "Cru", 10);
const seda = new Tecido("Seda Pura", "Seda", "Vermelho", 5);

sistema.cadastrarTecido(linho);
sistema.cadastrarTecido(seda);

const medidasGuilherme = new Medida(95, 80, 100, 1.75, "Sem observações adicionais"); 
const cliente1 = new Cliente("Guilherme", "gui@email.com", "79999999999", "senha123", medidasGuilherme);

sistema.cadastrarCliente(cliente1);

const novaEncomenda = new Encomenda(cliente1, linho, "Camisa Manga Longa", "25/05/2026", "Recebido", "Sem observações adicionais"); 

sistema.criarEncomenda(novaEncomenda);

sistema.listarEncomendas();