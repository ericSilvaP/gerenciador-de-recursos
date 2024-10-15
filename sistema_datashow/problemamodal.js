// Seleciona os elementos das modais
let problemModal = document.getElementById("problemModal");
let confirmationModal = document.getElementById("confirmationModal");
let closeProblemModalButton = document.getElementById("closeProblemModal");
let submitProblemButton = document.getElementById("submitProblem");
let closeConfirmationModalButton = document.getElementById("closeConfirmationModal");
let updateStatusButton = document.querySelector("input[type='button'][value='Atualizar Status']");
let problemInput = document.getElementById("problemInput");
let selectedRow = null; // Variável para armazenar a linha selecionada
let pro = document.getElementById("pro"); // Certifique-se de que este ID existe no HTML

// Seleciona as linhas da tabela
const rows = document.querySelectorAll('#tabledisplayresources tbody tr');
rows.forEach(row => {
    row.addEventListener('click', function() {
        // Remove a classe 'selected' de todas as linhas e adiciona à linha clicada
        rows.forEach(r => r.classList.remove('selected'));
        this.classList.add('selected');
        selectedRow = this; // Atualiza a linha selecionada
    });
});

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

// Função para abrir a modal de confirmação
function openConfirmationModal() {
    confirmationModal.classList.remove("hide");  // Remove classe hide
    confirmationModal.classList.add("show");     // Adiciona classe show para fade-in
}

// Função para fechar a modal de confirmação
function closeConfirmationModal() {
    confirmationModal.classList.remove("show");  // Remove classe show
    confirmationModal.classList.add("hide");     // Adiciona classe hide
    setTimeout(() => {
        confirmationModal.style.display = "none";  // Após a transição, esconde a modal completamente
    }, 500); // Aguardar o tempo da transição para esconder a modal
}

// Abre a modal de problema se "Em Manutenção" estiver selecionado
updateStatusButton.addEventListener('click', function() {
    const selectedStatus = document.getElementById("selStatus").value;

    // Verifica se há uma linha selecionada
    if (!selectedRow) {
        naosel.style.display = "block"
        naosel.innerText = "Nenhum datashow selecionado!"; // Mensagem de alerta
        return; // Não faz nada se nenhuma linha estiver selecionada
    }

    if (selectedStatus === "b") { // Se "Em manutenção" estiver selecionado
        naosel.style.display = "none";
        problemModal.style.display = "block"; // Torna a modal visível imediatamente
        setTimeout(openProblemModal, 10); // Aguarda um pequeno intervalo para garantir que a transição funcione
    } else {
        // Se não for "Em manutenção", você pode adicionar outra lógica aqui, se necessário
        // Para a lógica atual, não alteramos o estado da tabela
        updateResourceStatus(selectedStatus); // Chame essa função com o status apropriado
    }
});

// Fecha a modal de problema quando o botão "Fechar" for clicado
closeProblemModalButton.addEventListener('click', closeProblemModal);

// Envia a descrição do problema e fecha a modal
submitProblemButton.addEventListener('click', function() {
    const problemDescription = problemInput.value.trim(); // Remove espaços em branco

    // Verifica se o campo de descrição do problema não está vazio
    if (!problemDescription) {
        pro.innerText = "Digite antes de enviar";
        pro.style.color = "red"; // Mensagem de alerta
        return; // Não faz nada se o campo estiver vazio
    }

    // Limpa o campo de entrada
    problemInput.value = "";
    closeProblemModal(); // Fecha a janela modal de problema com fade-out
    openConfirmationModal(); // Abre a janela modal de confirmação
});

// Fecha a modal de confirmação quando o botão "OK" for clicado
closeConfirmationModalButton.addEventListener('click', function() {
    closeConfirmationModal(); // Fecha a modal de confirmação
});

// Esconde a modal se clicar fora da janela modal
window.addEventListener('click', function(event) {
    if (event.target == problemModal) {
        closeProblemModal(); // Fecha a janela modal de problema se clicar fora dela
    }
    if (event.target == confirmationModal) {
        closeConfirmationModal(); // Fecha a janela modal de confirmação se clicar fora dela
    }
});
