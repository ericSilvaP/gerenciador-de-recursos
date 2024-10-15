// Seleciona os elementos da modal e os botões
let cancelModal = document.getElementById("cancelModal");
let confirmCancelButton = document.getElementById("confirmCancel");
let closeModalButton = document.getElementById("closeModal");
let cancelButton = document.getElementById("cancel");

// Função para abrir a modal com animação fade-in
function openModal() {
  cancelModal.classList.remove("hide");  // Remove classe hide (se houver)
  cancelModal.classList.add("show");     // Adiciona classe show para fade-in
}

// Função para fechar a modal com animação fade-out
function closeModal() {
  cancelModal.classList.remove("show");  // Remove classe show
  cancelModal.classList.add("hide");     // Adiciona classe hide para fade-out
  setTimeout(() => {
    cancelModal.style.display = "none";  // Após a transição, esconde a modal completamente
  }, 500); // Aguardar o tempo da transição para esconder a modal (0.5s)
}

// Abre a modal quando o botão de cancelar for clicado
cancelButton.addEventListener('click', function() {
  
  cancelModal.style.display = "block"; // Torna a modal visível imediatamente
  setTimeout(openModal, 10); // Aguarda um pequeno intervalo para garantir que a transição funcione
});

// Fecha a modal quando o botão "Fechar" for clicado
closeModalButton.addEventListener('click', closeModal);


function remove() {
  const selectedRow = document.querySelector('tbody tr.selected');
  if (selectedRow) {
      naosel.style.display = "none";
      selectedRow.remove(); // Remove a linha selecionada
  } else {
      naosel.innerText = "Nenhum datashow selecionado!"
      naosel.style.display = "block";
      naosel.style.color = "red"; 
  }
}

// Confirma o cancelamento e chama a função remove
confirmCancelButton.addEventListener('click', function() {
  remove(); // Chama a função remove
  closeModal(); // Fecha a janela modal com fade-out após confirmação
});

// Esconde a modal se clicar fora da janela modal
window.addEventListener('click', function(event) {
  if (event.target == cancelModal) {
    closeModal(); // Fecha a janela modal se clicar fora dela
  }
});
