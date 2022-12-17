const robotron = document.querySelector('#robotron')
contadorDeClique = 0
function reclama() {
    contadorDeClique++
    if (contadorDeClique <= 3) {
        console.log('O Robotron foi clicado ' + contadorDeClique + ' vezes e não gostou...')
        alert('Não gosto que clique em mim!')
    } else if(contadorDeClique <= 4){
        console.log('O Robotron foi clicado ' + contadorDeClique + ' vezes e está prestes a te matar...')
        alert('Estou ficando com raiva')
    } else {
        console.log('O Robotron foi clicado ' + contadorDeClique + ' vezes e você está morto na mão dele...')
        alert('Eu vou destruir a humanidade!!!')
    }
}

robotron.addEventListener('click', reclama)
