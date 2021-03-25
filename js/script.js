// Snack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while


// var request = 5;
// var sum = 0;

// 1. for

// for (var i = 1; i <= request; i++) {
//     var numbers = parseInt(prompt('Inserisci un numero ' + i + ' di ' + request));
//     console.log(numbers);
//     sum += numbers;
// }

// console.log('Tot - ', sum);

// 2. while 

// var counter = 1;
// while (counter <= request) {

//     var numbers = parseInt(prompt('Inserisci un numero ' + counter + ' di ' + request));
//     console.log(numbers);

//     sum += numbers;
//     counter++;
// }

// console.log('Tot - ', sum);


// Snack 2
// Inserisci un numero, 
// se è pari stampa il numero, se è dispari stampa il numero successivo

// var numero = parseInt(prompt('Inserisci un numero'));
//     console.log('Numero inserito: ' + numero);

// if (numero % 2 === 0) {
//     console.log(numero);
// } else {
//     console.log(numero++); // oppure numero + 1
// }

// Snack 3
// Generatore di “nomi cognomi” casuali:
// prendendo una lista di nomi e una lista di cognomi,
// Gatsby vuole generare una falsa lista di 3 invitati.

//  var firstNames = ['Stan', 'Kyle', 'Eric', 'Kenny'];
//  console.log(firstNames);


//  var lastNames = ['Marsh', 'Broslovski', 'Cartman', 'McCormick'];
//  console.log(lastNames);

//  var fullNames = [];

//  // for (var i = 0; i < 3; i++) {
//     while (fullNames.length < 3) {
//      // random first name
//         var randomNames = Math.floor(Math.random() * firstNames.length);
//         console.log(randomNames);

//      // random last name
//         var randomLastNames = Math.floor(Math.random() * lastNames.length);
//         console.log(randomLastNames);   

//      // generated full name
//         var newName = firstNames[randomNames] + ' ' + lastNames[randomLastNames];
        
//      //  add new name
//      fullNames.push(newName);
//  }

//  console.log(fullNames);







// Snack 4
// Crea un array di numeri interi
// // e fai la somma di tutti gli elementi che sono in posizione dispari

// var numbers = [4, 8, 15, 16, 23, 42]
// var sum = 0;

// for (var i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);

//     if (i % 2 !== 0) {
//         sum+=numbers[i]
//     }
// }

// console.log('Execute order ',sum);



// Snack 5 - Bonus
// Crea due array di numeri che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
console.log(array1);
var array2 = [1, 2, 3, 4, 5, 6, 7];
console.log(array2);


