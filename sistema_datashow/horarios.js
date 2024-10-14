
document.getElementById('selhorini').addEventListener('change', function () {
    const inicioSelect = document.getElementById('selhorini');
    const fimSelect = document.getElementById('selhorfim');
    
    // Pega o valor selecionado no horário de início
    const inicioValue = inicioSelect.value;

    // Se não tiver horário selecionado no início, não faz nada
    if (!inicioValue) return;

    // Converte o valor para horas e minutos
    const [inicioHoras, inicioMinutos] = inicioValue.split(':').map(Number);

    // Desabilita todas as opções que são menores ou iguais ao horário de início
    for (let option of fimSelect.options) {
        const [fimHoras, fimMinutos] = option.value.split(':').map(Number);

        // Desabilita se o horário de fim for menor ou igual ao horário de início
        if (fimHoras < inicioHoras || (fimHoras === inicioHoras && fimMinutos <= inicioMinutos)) {
            option.disabled = true;
        } else {
            option.disabled = false;
        }
    }

    // Reseta a seleção do horário de fim, caso a opção selecionada não seja mais válida
    if (fimSelect.value && fimSelect.options[fimSelect.selectedIndex].disabled) {
        fimSelect.selectedIndex = 0; // Reseta para a primeira opção válida
    }
});
