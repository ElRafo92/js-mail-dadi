// creazione array
let listaMail = ["rafael@gmial.it", "derian@gmial.it", "cala@gmial.it", "massi@gmial.it", "gaddini@gmial.it", "vale@gmial.it",];
let richiestaMail = prompt("Prego inserire mail:");
let found = false;

for (let i = 0; i < listaMail.length; i++) {
    if (richiestaMail === listaMail[i]) {
        found = true;
        console.log(i)
    }
}

if (found == true) {
    alert("Welcome");
}
else {
    alert("You are not registerde");
}

