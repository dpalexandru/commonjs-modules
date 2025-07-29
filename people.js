//Importa la tua funzione da names.js
//Importa la tua funzione da hobbies.js
//Crea una funzione che non ha parametri.
//La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies.
// All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

// importo le due funzioni manes e hobbies
const nomeCompleto = require('./names');
const hobbies = require('./hobbies');

//creo la funzione che unisce le due funzioni funzioni precedenti e resituisce un oggetto 

const persone = () => {
    return {
        fullName: nomeCompleto("Alex", "Dessanai"),
        hobbies: hobbies("calcio", "sviluppo web", "scacchi")
    }
}

console.log(persone())