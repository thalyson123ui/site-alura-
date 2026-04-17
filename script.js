// Criamos um observador que vigia os elementos na tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Adiciona a classe quando o elemento aparece
        }
    });
}, {
    threshold: 0.1 // O elemento precisa estar 10% visível para animar
});

// Selecionamos todos os elementos que queremos animar
const elements = document.querySelectorAll('.container, .download, .dispositivos');

elements.forEach((el) => {
    el.classList.add('hidden'); // Começam invisíveis
    observer.observe(el);       // Começam a ser vigiados
});