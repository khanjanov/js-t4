//! 2 eded yer deyis
// var a = prompt("enter a number");
// var b = prompt("enter a number");
// [a, b] = [b, a];
// console.log(`a=${a},b=${b}`);

//! n-e qeder 1 12 123 so on...
// let a = +prompt("enter a number");
// let b = "";
// for (let i = 1; i <= a; i++) {
//   for (let k = 1; k <= i; k++) {
//     b += k + " ";
//   }
//   b += "\n";
// }
// console.log(`${b}`);

//! a row b column *
// let a = prompt("enter a number");
// let b = prompt("enter a number");
// let c = "";
// for (let i = 0; i < a; i++) {
//   for (let k = 0; k < b; k++) {
//     c += "* ";
//   }
//   c += "\n";
// }
// console.log(`${c}`);

//! *dan cercive
// let a = "";
// for (let i = 0; i < 5; i++) {
//   for (let k = 0; k < 4; k++) {
//     if (i == 0 || i == 4 || k == 0 || k == 3) {
//       a += "* ";
//     } else {
//       a += "  ";
//     }
//   }
//   a += "\n";
// }
// console.log(a);

//! 2 array ferqli olani goster 2 array olsun 1 dovr, 1 sert ile arraylerdeki diff elementleri tapin

// let arr1 = [1, 2, 3, 4];
// let arr2 = [1, 2, 3, 4, 5];

// for (let i = 0; i <= arr2.length; i++) {
//   if (arr1[i] != arr2[i]) console.log(arr2[i]);
// }

//! if n - 5
//   X
//  XXX
// XXXXX
//  XXX
//   X
// let n = +prompt("Enter number:");
// function createRomb(n) {
//   var a = "",
//     countX = 1;
//   if (n % 2 == 0 || n < 1) return false;
//   for (let row = 1; row <= n; row++) {
//     for (var space = 0; space < (n - countX) / 2; space++) {
//       a += " ";
//     }
//     for (let x = 0; x < countX; x++) {
//       a += "x";
//     }
//     if (row <= Math.floor(n / 2)) {
//       countX += 2;
//     } else {
//       countX -= 2;
//     }
//     a += "\n";
//   }
//   return a;
// }
// console.log(createRomb(n));

//! factorial
let a = +prompt("enter a number to find factorial");
function factorial() {
  if (a <= 1) return false;
  let result = 1;
  for (let i = 2; i <= a; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial());
