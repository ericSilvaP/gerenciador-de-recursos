document.addEventListener('DOMContentLoaded', function() {
    const statusCells = document.querySelectorAll('td.status');
    const updateStatusButton = document.querySelector('input[value="Atualizar Status"]');
    const selectStatus = document.getElementById('selStatus');

    // Função para atualizar a exibição do status
    function updateStatusDisplay() {
        statusCells.forEach(cell => {
            let statusValue = cell.getAttribute('value');
            switch (statusValue) {
                case "0":
                    cell.textContent = "Disponível";
                    cell.parentElement.style.backgroundColor = "green";
                    break;
                case "1":
                    cell.textContent = "Indisponível";
                    cell.parentElement.style.backgroundColor = "red";
                    break;
                case "2":
                    cell.textContent = "Em manutenção";
                    cell.parentElement.style.backgroundColor = "orange";
                    break;
                default:
                    cell.textContent = "Desconhecido";
                    cell.parentElement.style.backgroundColor = "gray";
                    break;
            }
        });
    }

    // Chama a função para definir o status inicial ao carregar a página
    updateStatusDisplay();

    // Adiciona o evento de clique nas linhas da tabela
    const tableRows = document.querySelectorAll('#tabledisplayresources tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('click', function() {
            // Remove a seleção de outras linhas
            tableRows.forEach(r => r.classList.remove('selected'));
            // Adiciona a classe 'selected' à linha clicada
            this.classList.add('selected');
        });
    });

    // Atualiza o status da linha selecionada ao clicar no botão
    updateStatusButton.addEventListener('click', function() {
        const selectedRow = document.querySelector('#tabledisplayresources tbody tr.selected');
        if (selectedRow) {
            const selectedStatus = selectStatus.value;

            // Atualiza o atributo 'value' da célula de status
            const statusCell = selectedRow.querySelector('td.status');
            if (selectedStatus === 'a') {
                statusCell.setAttribute('value', '0'); // Disponível
            } else if (selectedStatus === 'b') {
                statusCell.setAttribute('value', '1'); // Indisponível
            } else if (selectedStatus === 'c') {
                statusCell.setAttribute('value', '2'); // Em manutenção
            }

            // Atualiza a exibição do status na tabela
            updateStatusDisplay();
        } else {
            alert("Selecione uma linha para atualizar o status!");
        }
    });
});
