//Crea una funzione che accetta due parametri: firstName, lastName. 
//La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
//Esporta la funzione dal file.

//Creo la funzione che restituisce un oggetto

const nomeCompleto = (firstName, lastName) => {
    return {
        firstName,
        lastName,
    }
};

module.exports = nomeCompleto;