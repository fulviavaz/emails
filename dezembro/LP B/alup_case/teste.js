<script>
  document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os botões de fechar pop-ups
    const closeButtons = document.querySelectorAll('.slide-close-butn'); // Ajuste o seletor conforme necessário
    const targetSection = document.getElementById('target-section-fr'); // Seção de destino

    // Adiciona o evento de clique para todos os botões de fechar
    closeButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Fecha o pop-up (se for necessário) e rola até a seção
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth', // Rola suavemente
            block: 'start' // Alinha ao topo
          });
        }
      });
    });
  });
</script>
