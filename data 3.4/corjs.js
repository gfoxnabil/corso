// // // // // // // // let x = "italia                  c  ";
// // // // // // // // let y = "g  ";

// // // // // // // // if (x.trim().length > y.length) {
// // // // // // // //     console.log(x)
// // // // // // // // } else if (x.trim().length < y.length) {
// // // // // // // //     console.log(y)
// // // // // // // // }



// // // // // // // var x = 10;
// // // // // // // var y = 9;
// // // // // // // var z = 8;
// // // // // // //  const somma = x + y + z;


// // // // // // // console.log(somma)
// // // // // // // console.log(x - y - z)



// // // // // // // operatore MOD 

// // // // // // var x = 11;
// // // // // // var y = 2;
// // // // // // var z = null

// // // // // // z = x % y;

// // // // // // if (z === 0) {
// // // // // //     console.log("si!")
// // // // // // } else {
// // // // // //     console.log("no!")
// // // // // // }


// // // // // // string 

// // // // // var x = "ciao"
// // // // // var y = "mamma"

// // // // // z = x + " " + y;
// // // // // console.log(z)

// // // // // 
// // // // var x = 10;
// // // // var y = "ciao"

// // // // console.log(y - x)
// // // // debug (non) perche non e un numero



// // // var x = 10;
// // // var y = 20;
// // // var z = 30;

// // // var w = x;


// // // x = z;
// // // z = y;
// // // y = w;

// // // console.log(x)
// // // console.log(y)
// // // console.log(z)
// // // // 


// // // var x = 2;
// // // var y = 7;
// // // var z = null
// // // var q = null


// // // z = y + x;

// // // if (z >= 100) {
// // //     console.log("evai")

// // // }

// // // q = y % x;

// // // if (q === 0) {
// // //     console.log("yeee")

// // // } else if (q === 1) {
// // //     console.log("ciao")


// // // } else {
// // //     console.log("no")

// // // }


// // //stampare tutti i valori dell array A

// // // let A = [3, 56, 3, 2, 56, 34, 4, 2, 3, 1, 5, 532, 432];

// // // for (var x = 0; x < A.length; x = x + 1) {
// // //     var resto = A[x] % 2;
// // //     if (resto === 0) {
// // //         console.log(A[x])

// // //     }

// // // }

// // //stampare i numeri pari in pozisione pari 

// // // let A = [3, 56, 3, 2, 56, 34, 4, 2, 3, 1, 5, 532, 432];

// // // for (var x = 0; x < A.length; x = x + 1) {
// // //     var resto = A[x] % 2;
// // //     if (resto !== 0) {
// // //         console.log(A[x])

// // //     }

// // // }
// // // // tutti i numeri divizibili per tre 
// // // let A = [3, 56, 3, 2, 56, 34, 4, 2, 3, 1, 5, 532, 432];

// // // for (var x = 0; x < A.length; x = x + 1) {
// // //     var resto = A[x] % 3;
// // //     if (resto === 0) {
// // //         console.log(A[x])

// // //     }

// // // }

// // // // stamopa tutti i numeri al contrario 

// // // let A = [3, 56, 3, 2, 56, 34, 4, 2, 3, 1, 5, 532, 432];

// // // for (var x = A.length - 1; x >= 0; x = x - 1) {
// // //     console.log(A[x])
// // // }

// // // // stampa solo le parole ciao

// // // const A = ["ciao", "Lupo", "Tigre", "ciao", "cane", "gatto", "ciao", "civetta"]

// // // for (let x = 0; x < A.length; x = x + 1) {
// // //     if (A[x] === "ciao") {
// // //         console.log(A[x]);

// // //     }

// // // }


// // // // // stampa la somma di tutti i numeri

// // // let A = [3, 56, 3, 2, 56, 34, 4, 2, 3, 1, 5, 532, 432];

// // // for (let x = 0; x < A.length; x++) {
// // //     somma = somma + A[x];

// // // }
// // // console.log(somma);

// // /// somma i numeri pari e le pozi pari
// let A = [3, 56, 3, 2, 56, 34, 4, 2, 3, 1, 5, 532, 432];
// let somma = 0;

// for (let x = 0; x < A.length; x = x + 2) {
//     var resto = A[x] % 2;
//     if (resto === 0) {
//         somma = somma + A[x];
//     }

// }
// console.log(somma)

// multiplica i numeri 

// let A = [3, 56, 3, 2, 56, 34, 4, 2, 3, 1, 5, 532, 432];
// let somma = 1;

// for (let x = 0; x < A.length; x = x + 1) {

//     somma = somma * A[x];
// }


// console.log(somma)



/// stamppare il numero massimo e il numero minimo due blocchi diversi 
// let A = [3, 56, 3, 5, 56, 34, 4, 5, 3, 6, 5, 532, 432];
// let v = A[1];

// for (let x = 1; x < A.length; x = x + 2) {
//     if (A[x] < v) {
//         v = A[x]
//     }
// }

// console.log("Il numero massimo nell'array e' :", v);


/// stampare numero che compare piu volte
//let A = [3, 56, 3, 2, 56, 34, 4, 2, 3, 1, 5, 532, 432];

// let valore = null;
// let contatoreValoreMassimo = Infinity;


// for (let index = 0; index < A.length; index++) {

//     let contatore = 0;

//     for (let index1 = 0; index1 < A.length; index1++) {

//         if(A[index] == A[index1]){
//             contatore++;
//         }
//     }

//     if(contatoreValoreMassimo > contatore){
//         valore = A[index];
//         contatoreValoreMassimo = contatore;
//     }
// }

// console.log(valore)

// copiami tutti i numeri di questo array in un altro array ma dal ultimo al primo
let A = [3, 56, 3, 2, 56, 34, 4, 2, 3, 1, 5, 532, 432];