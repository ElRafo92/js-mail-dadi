// creazione array
let listaMail = ["rafael@gmial.it", "derian@gmial.it", "cala@gmial.it", "massi@gmial.it", "gaddini@gmial.it", "vale@gmial.it",];

let richiestaMail = prompt("Prego inserire mail:");

for (let i = 0; i < listaMail.length; i++) {
    const element = listaMail[i];
    if (richiestaMail == element) {
        alert("Welcome");
        console.log(i)
    }
}
