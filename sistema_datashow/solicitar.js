// Seleciona os elementos da modal e os botões
let confirmModal = document.getElementById("confirmModal");
let confirmButton = document.getElementById("confirmButton");
let closeConfirmModalButton = document.getElementById("closeConfirmModal");
let requestButton = document.getElementById("requestButton");

// Função para abrir a modal com animação fade-in
function openConfirmModal(message) {
    document.getElementById("confirmationMessage").textContent = message; // Define a mensagem
    confirmModal.classList.remove("hide");
    confirmModal.classList.add("show");
}

// Função para fechar a modal com animação fade-out
function closeConfirmModal() {
    confirmModal.classList.remove("show");
    confirmModal.classList.add("hide");
    setTimeout(() => {
        confirmModal.style.display = "none"; // Esconde a modal completamente
    }, 500); // Tempo da transição
}

// Abre a modal quando o botão de solicitar for clicado
requestButton.addEventListener('click', function() {
    const selectedRow = document.querySelector('tbody tr.selected');

    if (selectedRow) {
        const datashowName = selectedRow.cells[0].textContent; // Obtém o nome do datashow
        const statusCell = selectedRow.cells[1]; // Obtém a célula de status
        // Verifica se o status é "Disponível"
        if (statusCell.textContent === "Disponível") {
            pro.style.display = "none"
            const confirmationMessage = `Quer agendar o ${datashowName}?`;
            confirmModal.style.display = "block"; // Torna a modal visível
            setTimeout(() => openConfirmModal(confirmationMessage), 10); // Abre a modal
        } else {
            pro.innerText = `${datashowName} já foi solicitado!`; // Alerta caso o datashow já esteja solicitado
        }
    } else {
        pro.style.display = "block"
        pro.style.color = "red"
        pro.innerText = 'Nenhum datashow selecionado!'; // Alerta caso nenhum datashow esteja selecionado
    }
});

// Fecha a modal quando o botão "Cancelar" for clicado
closeConfirmModalButton.addEventListener('click', closeConfirmModal);

// Confirma o agendamento e fecha a modal
confirmButton.addEventListener('click', function() {
    const selectedRow = document.querySelector('tbody tr.selected');
    if (selectedRow) {
        const datashowa = selectedRow.cells[0]
        const datashowName = datashowa.textContent; // Obtém o nome do datashow
        const statusCell = selectedRow.cells[1]; // Obtém a célula de status

        // Muda o status para "Solicitado"
        statusCell.textContent = "Solicitado"; 

        // Desabilita a linha para que não possa ser solicitado novamente
        selectedRow.classList.add("disabled");
        selectedRow.classList.remove("selected");

        alert(`${datashowName} agendado com sucesso!`); // Simulação de agendamento
    }
    closeConfirmModal(); // Fecha a janela modal
});

// Esconde a modal se clicar fora da janela modal
window.addEventListener('click', function(event) {
    if (event.target == confirmModal) {
        closeConfirmModal(); // Fecha a janela modal se clicar fora dela
    }
});
