// Test code
const searchInput = document.getElementById('searchInput');
const noResultsMessage = document.getElementById('noResultsMessage');

searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase();
    let anyVisible = false;

    document.querySelectorAll('.products').forEach(game => {
        if(game.textContent.toLowerCase().includes(term)) {
            game.style.display = 'block';
            anyVisible = true;
        } else {
            game.style.display = 'none';
        }
    });

    // Mostrar o ocultar el mensaje
    noResultsMessage.style.display = anyVisible ? 'none' : 'block';
});


// Test code
