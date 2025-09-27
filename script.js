document.addEventListener('DOMContentLoaded', () => {
    // Lógica para abrir e fechar o modal da carta
    const openLetterBtn = document.getElementById('openLetterBtn');
    const letterModal = document.getElementById('letterModal');
    const closeButton = document.querySelector('.close-button');

    openLetterBtn.addEventListener('click', () => {
        letterModal.style.display = 'flex'; // Usamos flex para centralizar
    });

    closeButton.addEventListener('click', () => {
        letterModal.style.display = 'none';
    });

    // Fechar modal clicando fora dele
    window.addEventListener('click', (event) => {
        if (event.target == letterModal) {
            letterModal.style.display = 'none';
        }
    });

    // Função para criar elementos caindo (corações e flores)
    const fallingElementsContainer = document.querySelector('.falling-elements');
    const elements = ['❤️', '💖', '🌸', '🌹', '✨']; // Corações e emojis de flores

    function createFallingElement() {
        const element = document.createElement('span');
        element.classList.add('falling-element');
        element.textContent = elements[Math.floor(Math.random() * elements.length)];

        // Aleatoriza a classe para flores
        if (element.textContent === '🌸' || element.textContent === '🌹') {
            element.classList.add('flower');
        }

        element.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória
        element.style.animationDuration = `${Math.random() * 3 + 5}s`; // Duração da queda aleatória (5 a 8s)
        element.style.animationDelay = `${Math.random() * 5}s`; // Atraso para aparecerem em momentos diferentes
        element.style.opacity = '0'; // Começa invisível

        fallingElementsContainer.appendChild(element);

        // Remove o elemento após a animação para não sobrecarregar o DOM
        element.addEventListener('animationend', () => {
            element.remove();
        });
    }

    // Cria um novo elemento caindo a cada X milissegundos
    setInterval(createFallingElement, 500); // A cada 0.5 segundo

});

