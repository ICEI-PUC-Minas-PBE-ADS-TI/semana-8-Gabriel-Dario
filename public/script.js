// ============================================
// B.1 - DEFINIÇÃO DOS DADOS (JSON)
// ============================================

const catalogo = [
    {
        id: 1,
        titulo: "Naruto",
        tipo: "serie",
        ano: 2002,
        generos: ["ação", "aventura", "fantasia"],
        nota: 8.5,
        assistido: true
    },
    {
        id: 2,
        titulo: "One Piece",
        tipo: "serie",
        ano: 1999,
        generos: ["ação", "aventura"],
        nota: 9.0,
        assistido: true
    },
    {
        id: 3,
        titulo: "Inception",
        tipo: "filme",
        ano: 2010,
        generos: ["ficção científica", "ação"],
        nota: 8.8,
        assistido: true
    },
    {
        id: 4,
        titulo: "The Shawshank Redemption",
        tipo: "filme",
        ano: 1994,
        generos: ["drama"],
        nota: 9.3,
        assistido: false
    },
    {
        id: 5,
        titulo: "Attack on Titan",
        tipo: "serie",
        ano: 2013,
        generos: ["ação", "fantasia", "drama"],
        nota: 8.7,
        assistido: false
    },
    {
        id: 6,
        titulo: "Interstellar",
        tipo: "filme",
        ano: 2014,
        generos: ["ficção científica", "drama"],
        nota: 8.6,
        assistido: true
    },
    {
        id: 7,
        titulo: "Death Note",
        tipo: "serie",
        ano: 2006,
        generos: ["suspense", "sobrenatural"],
        nota: 8.9,
        assistido: false
    },
    {
        id: 8,
        titulo: "The Dark Knight",
        tipo: "filme",
        ano: 2008,
        generos: ["ação", "crime", "drama"],
        nota: 9.0,
        assistido: true
    }
];

console.log("=== CATÁLOGO COMPLETO ===");
console.log(catalogo);

// ============================================
// B.2 - ACESSO E LEITURA DOS DADOS
// ============================================

console.log("\n=== ACESSO E LEITURA ===");

// Título do primeiro item
console.log("Primeiro título:", catalogo[0].titulo);

// Ano do último item
console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

// Segundo gênero do terceiro item
if (catalogo[2].generos.length >= 2) {
    console.log("Segundo gênero do terceiro item:", catalogo[2].generos[1]);
} else {
    console.log("O terceiro item tem apenas", catalogo[2].generos.length, "gênero(s)");
}

// ============================================
// B.3 - ITERAÇÕES COM ITERATORS
// ============================================

console.log("\n=== ITERAÇÕES COM ITERATORS ===");

// A) Listagem com forEach
console.log("\nA) LISTAGEM COM FOREACH:");
catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

// B) Transformação com map
console.log("\nB) TÍTULOS EM CAIXA ALTA (MAP):");
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log(titulosEmCaixaAlta);

// C) Seleção com filter
console.log("\nC) ITENS NÃO ASSISTIDOS (FILTER):");
const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log(`Total de não assistidos: ${naoAssistidos.length}`);
naoAssistidos.forEach(item => {
    console.log(`- ${item.titulo}`);
});

// D) Busca com find
console.log("\nD) PRIMEIRO ITEM COM NOTA >= 9 (FIND):");
const itemComNotaAlta = catalogo.find(item => item.nota >= 9);
if (itemComNotaAlta) {
    console.log(`Encontrado: ${itemComNotaAlta.titulo} (nota: ${itemComNotaAlta.nota})`);
} else {
    console.log("Nenhum item com nota >= 9 encontrado");
}

// E) Agregação com reduce
console.log("\nE) MÉDIA DE NOTAS (REDUCE):");
const somaNotas = catalogo.reduce((total, item) => total + item.nota, 0);
const mediaGeral = (somaNotas / catalogo.length).toFixed(2);
console.log(`Média geral: ${mediaGeral}`);

const assistidos = catalogo.filter(item => item.assistido);
const somaNotasAssistidos = assistidos.reduce((total, item) => total + item.nota, 0);
const mediaAssistidos = (somaNotasAssistidos / assistidos.length).toFixed(2);
console.log(`Média dos assistidos: ${mediaAssistidos}`);

// F) Checagens com some e every
console.log("\nF) CHECAGENS (SOME E EVERY):");
const temItemAntigo = catalogo.some(item => item.ano < 2000);
console.log(`Existe item com ano < 2000? ${temItemAntigo}`);

const todosTemGenero = catalogo.every(item => item.generos.length >= 1);
console.log(`Todos têm pelo menos 1 gênero? ${todosTemGenero}`);

// ============================================
// B.4 - SAÍDA NA TELA (DOM)
// ============================================

console.log("\n=== EXIBINDO NA PÁGINA ===");

// Calcular dados para o resumo
const totalItens = catalogo.length;
const totalFilmes = catalogo.filter(item => item.tipo === "filme").length;
const totalSeries = catalogo.filter(item => item.tipo === "serie").length;
const totalNaoAssistidos = catalogo.filter(item => item.assistido === false).length;

// Top 3 maiores notas
const top3 = catalogo
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

// Montar HTML do resumo
let resumoHTML = "<h2>Resumo do Catálogo</h2>";
resumoHTML += "<div class='info'>";
resumoHTML += "<strong>Total de itens:</strong> " + totalItens;
resumoHTML += "</div>";

resumoHTML += "<div class='info'>";
resumoHTML += "<strong>Filmes:</strong> " + totalFilmes + " | <strong>Séries:</strong> " + totalSeries;
resumoHTML += "</div>";

resumoHTML += "<div class='info'>";
resumoHTML += "<strong>Não assistidos:</strong> " + totalNaoAssistidos;
resumoHTML += "</div>";

resumoHTML += "<div class='info'>";
resumoHTML += "<strong>Média geral de notas:</strong> " + mediaGeral;
resumoHTML += "</div>";

resumoHTML += "<div class='info'>";
resumoHTML += "<strong>Top 3 Maiores Notas:</strong><br>";
top3.forEach(item => {
    resumoHTML += item.titulo + " - " + item.nota + "<br>";
});
resumoHTML += "</div>";

// Inserir no DOM
document.getElementById("output").innerHTML = resumoHTML;
