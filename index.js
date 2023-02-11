window.addEventListener('load', sendUpdates);
window.addEventListener('load', sendTurney);

let updatesCheckLabel = document.getElementById('updates');
let updatesCheckBox = document.getElementById('updatesCheck');

let tourneyCheckLabel = document.getElementById('tourney');
let tourneyCheckBox = document.getElementById('tourneyCheck');

updatesCheckLabel.addEventListener('click', sendUpdates);
tourneyCheckLabel.addEventListener('click', sendTurney);

function sendUpdates() {
    if (updatesCheckLabel.checked == true) {
        console.log('No enviar actualizaciones');
        updatesCheckBox.innerHTML = '';

    } else if (updatesCheckLabel.checked == false) {
        console.log('Sí enviar actualizaciones');
        updatesCheckBox.innerHTML = '';

    } else {
        console.log('Ocurrio un error');
    }
}

function sendTurney() {
    if (tourneyCheckLabel.checked == true) {
        console.log('No enviar información sobre torneos');
        tourneyCheckBox.innerHTML = '';

    } else if (tourneyCheckLabel.checked == false) {
        console.log('Sí enviar información sobre torneos');
        tourneyCheckBox.innerHTML = '';

    } else {
        console.log('Ocurrio un error');
    }
}

