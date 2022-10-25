let pc = Math.floor(Math.random() * 6) + 1;
console.log(pc)

let player = Math.floor(Math.random() * 6) + 1;
console.log(player)

if (pc > player) {
    console.log("enemy wins")
}
else if (pc < player) {
    console.log("player wins")
}
else {
    console.log("Draw")
}
