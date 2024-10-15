// Seleciona os elementos da modal e os botões
let cancelModal = document.getElementById("cancelModal");
let confirmCancelButton = document.getElementById("confirmCancel");
let closeModalButton = document.getElementById("closeModal");
let acceptButton = document.querySelector('input[value="Aceitar"]');
let denyButton = document.querySelector('input[value="Negar"]');

// Função para abrir a modal com animação fade-in
function openModal() {
    cancelModal.style.display = "block"; // Torna a modal visível
    setTimeout(() => {
        cancelModal.classList.remove("hide");
        cancelModal.classList.add("show"); // Adiciona classe para fade-in
    }, 10);
}

// Função para fechar a modal com animação fade-out
function closeModal() {
    cancelModal.classList.remove("show");
    cancelModal.classList.add("hide");
    setTimeout(() => {
        cancelModal.style.display = "none"; // Esconde completamente após a transição
    }, 500); // Tempo da transição (0.5s)
}

// Função para verificar se há uma linha selecionada
function getSelectedRow() {
    return document.querySelector('tbody tr.selected');
}

// Função para abrir o modal quando o botão de aceitar ou negar for clicado
function handleOpenModal(buttonType) {
    const selectedRow = getSelectedRow();
    if (selectedRow) {
        openModal(); // Abre o modal de confirmação
    } else {
        alert('Selecione um recurso antes de tentar ' + buttonType + '.');
    }
}

// Event listeners para os botões "Aceitar" e "Negar"
acceptButton.addEventListener('click', () => handleOpenModal('aceitar'));
denyButton.addEventListener('click', () => handleOpenModal('negar'));

// Fecha a modal quando o botão "Fechar" for clicado
closeModalButton.addEventListener('click', closeModal);

// Confirma o cancelamento, fecha a modal e reseta a seleção
confirmCancelButton.addEventListener('click', function () {
    const selectedRow = getSelectedRow();
    if (selectedRow) {
        // Aqui, você pode adicionar a lógica para cancelar ou confirmar a ação com base no contexto
        remove()
        selectedRow.classList.remove('selected'); // Remove a seleção
        closeModal(); // Fecha a modal de confirmação
    }
});

// Esconde a modal se clicar fora dela
window.addEventListener('click', function (event) {
    if (event.target == cancelModal) {
        closeModal(); // Fecha a modal se clicar fora dela
    }
});