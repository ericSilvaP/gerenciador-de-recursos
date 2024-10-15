var a = document.getElementsByClassName("alt")

a[0].dataset.content = "▲"
a[1].dataset.content = "▲"
a[2].dataset.content = "▲"

function altTitle01() {
    if (altItems01.style.display == "block") {
        altItems01.style.display = "none"
        a[0].dataset.content = "▼"
    } else {
        altItems01.style.display = "block"
        a[0].dataset.content = "▲"
    }
}

function altTitle02() {
    if (altItems02.style.display == "block") {
        altItems02.style.display = "none"
        a[1].dataset.content = "▼"
    } else {
        altItems02.style.display = "block"
        a[1].dataset.content = "▲"
    }
}

function altTitle03() {
    if (altItems03.style.display == "block") {
        altItems03.style.display = "none"
        a[2].dataset.content = "▼"
    } else {
        altItems03.style.display = "block"
        a[2].dataset.content = "▲"
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('tbody tr');

    rows.forEach(row => {
        row.addEventListener('click', function() {
            rows.forEach(r => r.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});


function remove() {
    const selectedRow = document.querySelector('tbody tr.selected');
    if (selectedRow) {
        selectedRow.remove(); // Remove a linha selecionada
    } else {
        alert('Nenhuma linha selecionada!');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todas as células com a classe 'status'
    const statusCells = document.querySelectorAll('td.status');
    
    // Loop através de cada célula de status
    statusCells.forEach(cell => {
        let statusValue = cell.getAttribute('value'); // Pega o valor do atributo 'value' da célula
        
        // Atualiza o texto e a cor da linha com base no valor do 'value'
        switch(statusValue) {
            case "0":
                cell.textContent = "Disponível";
                cell.parentElement.style.backgroundColor = "green"; // Muda a cor da linha para verde
                break;
            case "1":
                cell.textContent = "Indisponível";
                cell.parentElement.style.backgroundColor = "red"; // Muda a cor da linha para vermelho
                break;
            case "2":
                cell.textContent = "Em manutenção";
                cell.parentElement.style.backgroundColor = "orange"; // Muda a cor da linha para laranja
                break;
            default:
                cell.textContent = "Desconhecido";
                cell.parentElement.style.backgroundColor = "gray"; // Muda a cor da linha para cinza
                break;
        }
        
        // Adiciona os eventos de mouseover e mouseout para as linhas
        cell.parentElement.addEventListener('mouseover', () => {
            switch(statusValue) {
                case '0': // Disponível
                    cell.parentElement.style.backgroundColor = 'rgb(3, 97, 3)';
                    break;
                case '1': // Indisponível
                    cell.parentElement.style.backgroundColor = 'rgb(218, 17, 17)';
                    break;
                case '2': // Em manutenção
                    cell.parentElement.style.backgroundColor = 'rgb(197, 129, 3)';
                    break;
                default:
                    cell.parentElement.style.backgroundColor = ''; // Reseta a cor
            }
        });

        cell.parentElement.addEventListener('mouseout', () => {
            // Restaura a cor original baseada no status
            switch(statusValue) {
                case "0":
                    cell.parentElement.style.backgroundColor = "green";
                    break;
                case "1":
                    cell.parentElement.style.backgroundColor = "red";
                    break;
                case "2":
                    cell.parentElement.style.backgroundColor = "orange";
                    break;
                default:
                    cell.parentElement.style.backgroundColor = "gray";
                    break;
            }
        });
    });
});

