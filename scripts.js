console.log(document.title);
document.getElementById("gen-1").innerHTML = "Generasión 1 Pokimon";
document.querySelector(".infocard-list.infocard-list-pkmn-lg").style.backgroundColor = "#5A96A4";
console.log(window.location.href);
console.log(window.location.hostname);
const images = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++){
    console.log(images[i])
}
const changeimg = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++){
    images[i].setAttribute("src", "https://media.giphy.com/media/2v170e71aanfi/giphy.gif")
}
const felements = document.querySelectorAll(".infocard-lg-data.text-muted.itype.flying");
for (let i = 0; i < felements.length; i++){ 
    felements[i].style.backgroundColor = "#429B09";
}