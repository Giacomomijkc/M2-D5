// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let array = [];
let n = 10;

function giveMeRandom(n){
    for (let i = 0; i < n; i++) {
        let number = Math.floor(Math.random()*11);
        array.push(number);
    }
    return array;
}

function checkArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            console.log(true);
            sum += array[i];
        } else {
            console.log(false);
        }
    }
    return sum;
}

let randomArray = giveMeRandom(n);
console.log(randomArray);

let sum = checkArray(randomArray);
console.log(sum);*/


/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let orders = [
    {
        Price: 100,
        Name: "Giacomo",
        Id: 01,
        Quantity: 2,
    },
    {
        Price: 200,
        Name: "Giovanni",
        Id: 02,
        Quantity: 1,
    },
    {
        Price: 300,
        Name: "Aldo",
        Id: 03,
        Quantity: 4,
    },
]

function shoppingCartTotal(cart){
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].Price * cart[i].Quantity;
    }
    return total;
}

console.log(shoppingCartTotal(orders));*/


/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let orders = [
    {
        Price: 100,
        Name: "Giacomo",
        Id: 01,
        Quantity: 2,
    },
    {
        Price: 200,
        Name: "Giovanni",
        Id: 02,
        Quantity: 1,
    },
    {
        Price: 300,
        Name: "Aldo",
        Id: 03,
        Quantity: 4,
    },
]

obj = {
    Price: 150,
    Name: "Michele",
    Id: 04,
    Quantity: 5,
};

function addToshoppingCartTotal(obj){
    orders.push(obj);
    return orders.length;
}

console.log(addToshoppingCartTotal(obj));*/


/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let shoppingCart = [
    {
        Price: 100,
        Name: "Giacomo",
        Id: 01,
        Quantity: 2,
    },
    {
        Price: 200,
        Name: "Giovanni",
        Id: 02,
        Quantity: 1,
    },
    {
        Price: 300,
        Name: "Aldo",
        Id: 03,
        Quantity: 4,
    },
]


function maxShoppingCart(shoppingCart){
    let prices = shoppingCart.map(item => item.Price);
    let maxPrice = Math.max.apply(null, prices);
    let expensiveItem = shoppingCart.find(item => item.Price === maxPrice);
    return expensiveItem;
}

console.log(maxShoppingCart(shoppingCart));*/



/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let shoppingCart = [
    {
        Price: 100,
        Name: "Giacomo",
        Id: 01,
        Quantity: 2,
    },
    {
        Price: 200,
        Name: "Giovanni",
        Id: 02,
        Quantity: 1,
    },
    {
        Price: 300,
        Name: "Aldo",
        Id: 03,
        Quantity: 4,
    },
]

function latestShoppingCart(shoppingCart) {
    return shoppingCart[shoppingCart.length - 1];
}

console.log(latestShoppingCart(shoppingCart));*/



/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/  

/* SCRIVI QUI LA TUA RISPOSTA */

// non funziona, to fix
/*function loopUntil(x) {
    let count = 0;
    let num;
    do {
      num = Math.floor(Math.random() * 10);
      console.log(num);
      if (num > x) {
        count++;
      } else {
        count = 0;
      }
    } while (count < 3);
  }*/

/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
let count = 0;
function average(array){
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        count++;
    }
    return sum / count;
}

let result = average(array);
console.log(result);*/

/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
