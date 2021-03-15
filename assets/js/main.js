//Array contente i numeri random
var numeriRandom = [];

// Creare 5 numeri casuali da 1 a 50
for (var i = 0; i < 5; i++) {
  //Richiamo la funzione e creo i numeri random
  numeri = randomNumber(1, 50)
  //Pusho i numeri dentro l'array
  numeriRandom.push (numeri);
}
  //Seleziono il p in cui andrò ad inserire i numeri
  $('ul').append('<li>' + numeriRandom + '</li>');
  //Stampare i numeri dentro un p nel DOM

  //Mantenere visibili i numeri per 30 secondi
  //Alla fine dei 30 secondi nascondere i numeri
  //Pausa di 30 secondi

//Utente inserisce i numeri che ricorda attraverso il prompt
  //Stampo i numeri casuali
  //Stampo i numeri inseriti dall'Utente
  //Stampo i numeri ricordati e/o indovinati


// FUNCTIONS

//Numeri casuali

function randomNumber(min, max) {
  var numero = Math.floor(Math.random() * (max) + min);
  return numero;
}
