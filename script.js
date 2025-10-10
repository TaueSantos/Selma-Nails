// Espera todo o conteúdo HTML da página ser carregado antes de executar o código
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona todos os links <a> que estão dentro do <nav> do <header>
    // e cujo atributo "href" começa com '#'
    const linksDoMenu = document.querySelectorAll('header nav a[href^="#"]');

    // Para cada um dos links encontrados...
    linksDoMenu.forEach(link => {
        
        // Adiciona um "ouvinte" que espera por um evento de clique
        link.addEventListener('click', function(e) {
            
            // 1. Previne o comportamento padrão do link (o "pulo" instantâneo)
            e.preventDefault();

            // 2. Pega o destino do link do atributo href (ex: "#servicos")
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // 3. Se o elemento de destino realmente existir na página...
            if (targetElement) {
                // 4. Rola a página suavemente até ele
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});