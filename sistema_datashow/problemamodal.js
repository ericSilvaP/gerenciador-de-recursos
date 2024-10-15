// Seleciona os elementos da modal de problema
let problemModal = document.getElementById("problemModal");
let closeProblemModalButton = document.getElementById("closeProblemModal");
let submitProblemButton = document.getElementById("submitProblem");
let updateStatusButton = document.querySelector("input[type='button'][value='Atualizar Status']");

// Função para abrir a modal de problema
function openProblemModal() {
    problemModal.classList.remove("hide");  // Remove classe hide
    problemModal.classList.add("show");     // Adiciona classe show para fade-in
}

// Função para fechar a modal de problema
function closeProblemModal() {
    problemModal.classList.remove("show");  // Remove classe show
    problemModal.classList.add("hide");     // Adiciona classe hide
    setTimeout(() => {
        problemModal.style.display = "none";  // Após a transição, esconde a modal completamente
    }, 500); // Aguardar o tempo da transição para esconder a modal
}

// Abre a modal de problema se "Em Manutenção" estiver selecionado
updateStatusButton.addEventListener('click', function() {
    const selectedStatus = document.getElementById("selStatus").value;
    if (selectedStatus === "b") { // Se "Em manutenção" estiver selecionado
        problemModal.style.display = "block"; // Torna a modal visível imediatamente
        setTimeout(openProblemModal, 10); // Aguarda um pequeno intervalo para garantir que a transição funcione
    } else {
        // Lógica para atualizar o status se não for "Em manutenção"
        updateResourceStatus(selectedStatus);
    }
});

// Fecha a modal quando o botão "Fechar" for clicado
closeProblemModalButton.addEventListener('click', closeProblemModal);

// Envia o problema informado e fecha a modal
submitProblemButton.addEventListener('click', function() {
    const problemDescription = document.getElementById("problemInput").value;
    if (problemDescription) {
        // Aqui você pode adicionar a lógica para processar a descrição do problema
        console.log("Problema informado:", problemDescription);
        // Lógica para atualizar a linha selecionada
        updateResourceStatus("b", problemDescription); // Mudar o status para "Em Manutenção"
    }
    closeProblemModal(); // Fecha a janela modal com fade-out
});

// Esconde a modal se clicar fora da janela modal
window.addEventListener('click', function(event) {
    if (event.target == problemModal) {
        closeProblemModal(); // Fecha a janela modal se clicar fora dela
    }
});

function updateResourceStatus(status, problemDescription) {
    const selectedRow = document.querySelector('tbody tr.selected');
    if (selectedRow) {
        const statusCell = selectedRow.querySelector('.status');
        if (status === "b") {
            statusCell.textContent = "Em manutenção"; // Atualiza o texto do status
            statusCell.setAttribute("value", "2"); // Altera o valor para 2 (ou o que você quiser)
            // Você pode adicionar lógica para lidar com a descrição do problema, se necessário
            const problemCell = selectedRow.cells[4]; // Supondo que o problema está na 5ª coluna
            problemCell.textContent = problemDescription; // Adiciona a descrição do problema
        } else {
            // Atualiza para "Disponível" ou outra lógica se necessário
            statusCell.textContent = status === "a" ? "Disponível" : "Indisponível"; // Exemplo
            statusCell.setAttribute("value", status === "a" ? "0" : "1"); // Altera o valor
        }
    }
}
