function hideLoading() {
  // Adicione um atraso de 2 segundos antes de ocultar o elemento de carregamento
  setTimeout(function() {
    var loadingContainer = document.getElementById('loading-container');
    loadingContainer.style.display = 'none';

    // Exibir o conteúdo da página após o término da animação de carregamento
    var contentContainer = document.getElementById('content-container');
    contentContainer.style.display = 'block';
  }, 2000); // 2000 milissegundos = 2 segundos
}

// Adicionar um ouvinte de evento para chamar hideLoading quando a página estiver completamente carregada
window.addEventListener('load', hideLoading);