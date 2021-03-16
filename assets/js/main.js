//Array contenente i numeri random
var numeriRandom = [];
//Array contente i numeri inseriti dall'utente
var numeriUtente = [];


//Creazione numeri casuali e stampa su DOM
  // Creare 5 numeri casuali da 1 a 50
  for (var i = 0; i < 5; i++) {
    //Richiamo la funzione e creo i numeri random
    numeri = randomNumber(1, 50)
    //Pusho i numeri dentro l'array
    numeriRandom.push(numeri);
  }

//Inserisco i numeri random in un elemento del DOM
printNumberRandom();

//Nascondere i numeri dopo 30 secondi
setTimeout(function(){
    $('#num-casuali').hide();
}, 30000);

//Utente inserisce 5 numeri e poi li appendo
setTimeout(function(){
  for (var i = 0; i < 5; i++) {
    //Utente inserisce i numeri che ricorda attraverso il prompt
    numeroU = parseInt(prompt('Inserisci un numero da 1 a 50'));
    //Salvo numeri utente dentro array
    numeriUtente.push(numeroU);
  }
  // console.log(numeriUtente);
  //Stampo i numeri casuali
  $('.list-num-casuali').append('<li>' + numeriRandom + '</li>').show();
  //Stampo i numeri inseriti dall'Utente
  $('.list-num-utente').append('<li>' + numeriUtente + '</li>').show();
  //Stampo i numeri ricordati e/o indovinati
  //Pausa di 30 secondi prima del caricamento dei prompt
  cercaNumeriArray();
  $('.list-num-uguali').append('<li>' + numeriUguali + '</li>').show();
  // console.log(numeriUguali);
}, 60000);


// console.log(numeriRandom);


var numeriUguali = [];

function cercaNumeriArray() {
  for (var i = 0; i < numeriUtente.length; i++) {
    if (numeriRandom.includes(parseInt(numeriUtente[i]))) {
      numeriUguali.push(numeriUtente[i])
    }
  }
}


// FUNCTIONS

//Numeri casuali
function randomNumber(min, max) {
  var numero = Math.floor(Math.random() * (max) + min);
  return numero;
}

//Stampo numeri casuali
function printNumberRandom() {
  //Seleziono il p in cui andrò ad inserire i numeri
  //Stampare i numeri dentro un elemento del DOM
  $('#num-casuali').append('<li>' + numeriRandom + '</li>');
}
