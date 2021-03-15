//Array contente i numeri random
var numeriRandom = [];

  //Mantenere visibili i numeri per 30 secondi
  printNumber();
  //Alla fine dei 30 secondi nascondere i numeri



  //Pausa di 30 secondi

//Salvo numeri utente dentro array
var numeriUtente = [];
console.log(numeriUtente);
//Utente inserisce i numeri che ricorda attraverso il prompt
for (var i = 0; i < 5; i++) {
  var numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 50'));
  numeriUtente.push(numeroUtente);
}
  //Stampo i numeri casuali
  //Stampo i numeri inseriti dall'Utente
  //Stampo i numeri ricordati e/o indovinati


// FUNCTIONS

//Numeri casuali
function randomNumber(min, max) {
  var numero = Math.floor(Math.random() * (max) + min);
  return numero;
}

//Creazione numeri casuali e stampa su DOM

function printNumber() {
  // Creare 5 numeri casuali da 1 a 50
  for (var i = 0; i < 5; i++) {
    //Richiamo la funzione e creo i numeri random
    numeri = randomNumber(1, 50)
    //Pusho i numeri dentro l'array
    numeriRandom.push(numeri);
  }
    //Seleziono il p in cui andrò ad inserire i numeri
    //Stampare i numeri dentro un p nel DOM
    $('ul').append('<li>' + numeriRandom + '</li>');
}
