const nome = "Hugo";
const xp_total = 5001;
let nivel = "";

if (xp_total <= 1000){
    nivel = "Ferro";
}
else if (xp_total <= 2000){
    nivel = "Bronze";
}
else if (xp_total <= 5000){
    nivel = "Prata";
}
else if (xp_total <= 7000){
    nivel = "Ouro";
}
else if (xp_total <= 8000){
    nivel = "Platina";
}
else if (xp_total <= 9000){
    nivel = "Ascendente";
}
else if (xp_total <= 10000){
    nivel = "Imortal";
}
else{
    nivel = "Radiante";
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel + ".");