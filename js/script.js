//constantes
const fotogrande = document.getElementById('fotogrande')
const desc = document.getElementById('desc')

//funçao para trocar a foto
function trocaimag(value) {
    fotogrande.src = "assets/" + value
}