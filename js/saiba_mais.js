// Esse código cria uma animação suave ao rolar para as seções
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    const checkPosition = () => {
        sections.forEach(section => {
            const position = section.getBoundingClientRect();
            if (position.top < window.innerHeight - 150) {
                section.classList.add('in-view');
            }
        });
    };

    window.addEventListener('scroll', checkPosition);
    checkPosition(); // Verifica se as seções estão visíveis inicialmente
});