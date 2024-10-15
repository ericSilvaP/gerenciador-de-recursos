document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o input de data
    const dateInput = document.getElementById('inpdate');

    // Define a data atual no formato dia/mês
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0'); // Adiciona um zero à esquerda, se necessário
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Os meses são indexados a partir de 0

    // Define a data formatada no input
    dateInput.value = `${today.getFullYear()}-${month}-${day}`;

    // Formata o input quando modificado
    dateInput.addEventListener('change', function() {
        const selectedDate = new Date(dateInput.value);
        const formattedDate = `${String(selectedDate.getDate()).padStart(2, '0')}/${String(selectedDate.getMonth() + 1).padStart(2, '0')}`;
        console.log("Data selecionada:", formattedDate); // Para depuração
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('inpdate');

    // Abre o calendário quando o input é clicado
    dateInput.addEventListener('click', function() {
        this.showPicker(); // Isso abrirá o seletor de data
    });
});
