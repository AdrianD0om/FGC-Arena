const paginasFGC = [
    { nome: "1. Início", url: "index.html" },
    { nome: "2. Street Fighter 6", url: "street-fighter.html" },
    { nome: "3. Tekken 8", url: "tekken.html" },
    { nome: "4. Guilty Gear", url: "guilty-gear.html" },
    { nome: "5. Mortal Kombat", url: "mortal-kombat.html" },
    { nome: "6. Controles", url: "controles.html" },
    { nome: "7. Glossário FGC", url: "glossario.html" },
    { nome: "8. Frame Data", url: "frame-data.html" },
    { nome: "9. Torneios (EVO)", url: "torneios.html" },
    { nome: "10. Lendas", url: "lendas.html" },
    { nome: "11. Arquétipos", url: "arquetipos.html" },
    { nome: "12. Combo Trainer", url: "combo-trainer.html" },
    { nome: "13. API Desafiante", url: "api-personagem.html" },
    { nome: "14. API Torneio Local", url: "api-torneio-cep.html" },
    { nome: "15. API Prêmio EVO", url: "api-premiacao.html" }
];

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("menu-fgc");
    if (nav) {
        paginasFGC.forEach(p => {
            const link = document.createElement("a");
            link.href = p.url;
            link.textContent = p.nome;
            nav.appendChild(link);
        });
    }
});
