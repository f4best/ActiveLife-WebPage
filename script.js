//zmiana na tryb ciemny
function changeMode(){
    var element = document.body;

    element.classList.toggle("dark_mode");
}

//skrypt do dodawania liczb obok znaku koszyka
let counter = 0;

function addElement() {
    var amount = document.getElementById("counter");

    counter++;
    amount.textContent = counter;
}