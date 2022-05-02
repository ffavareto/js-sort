const numeros = [1, 2, 3, 101, 23, 45, 23, 3, 300];

// const numerosOrdenados = numeros.sort((a, b) => {
//     if (a == b) {
//         return 0;
//     }

//     if (a < b) {
//         return -1;
//     }

//     if (a > b) {
//         return 1;
//     }
// });

const numerosOrdenados = numeros.sort((a, b) => a - b);

console.log(numerosOrdenados);