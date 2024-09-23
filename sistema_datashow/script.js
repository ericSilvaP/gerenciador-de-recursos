let tabRec = document.querySelector("table")
let linhaRec = document.querySelector("table > tr")
let celRec = document.querySelector("table > tr > td")

function atual(){
    for (let c = 1; c <= 11; c++) {
        /*if (document.querySelector(`linha${c} > td`).innerText == "Disponível") {
            document.querySelector(`linha${c} > td`).style.backgroundColor = "green"
        }*/
       document.querySelector(`linha${c} > td`).style.backgroundColor = "green"
       document.querySelector("main").style.backgroundColor = "green"
    }
}
