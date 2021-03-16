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
}, 3000);

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
}, 6000);


// console.log(numeriRandom);


var numeriUguali = [];

function cercaNumeriArray() {
  for (var i = 0; i < numeriUtente.length; i++) {
    if (numeriRandom.includes(parseInt(numeriUtente[i]))) {
      numeriUguali.push(numeriUtente[i])
    }
  }
}



// $('.list-num-uguali').text(numeriUguali).show();




// var numeriUguali = [];
//
// for (var i = 0; i < numeriRandom.length; i++) {
//   for (var j = 0; j < numeriUtente.length; j++) {
//     if (numeriRandom[i] == numeriUtente[j]) {
//       numeri = numeriRandom[i];
//       numeriUguali.push(numeri);
//     }
//   }
//
// }
// console.log(numeriUguali);



// var numeriUguali = [];
//
// var risultato = numeriRandom.filter(x => numeriUtente.includes(x));
// numeriUguali.push(risultato);
// console.log(numeriUguali);


// var risultato = numeriRandom.filter(function(x) {
// 	// checking second array contains the element "x"
// 	if(numeriUtente.indexOf(x) != -1)
// 		return true;
// 	else
// 		return false;
// });

// // [3, 4]
// numeriUguali.push(risultato);
// console.log(risultato);

// var numeriUtente = [1, 2, 3, 4];
// var numeriRandom = [3, 4, 5, 6];

// var array_intersection = numeriUtente.filter(function(x) {
// 	// checking second array contains the element "x"
// 	if(numeriRandom.indexOf(x) != -1)
// 		return true;
// 	else
// 		return false;
// });
//
// // [3, 4]
// console.log(array_intersection);


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
