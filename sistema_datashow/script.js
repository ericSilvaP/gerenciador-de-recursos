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

function clickTr() {
    let p = document.querySelectorAll("tr")
    for (let c = 2; c <= 9; c++) {
        
        if (p[3].value){
            window.alert("c")
            p[3].value.value = 0
            p[3].value.style.backgroundColor = "lightgreen"
        } else {
            p[3].value.value = 1
            p[3].value.style.backgroundColor = "green"
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Seu código JavaScript aqui
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

let removeButton = document.querySelector("input#rm")
let negarButton = document.querySelector("input#rm1")
let afirmButton = document.querySelector("input#rm2")

removeButton.addEventListener('click', remove);
negarButton.addEventListener('click', remove);
afirmButton.addEventListener('click', remove);
