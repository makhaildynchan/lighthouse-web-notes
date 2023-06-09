//BASE CASE
// function sumToOne(n) {
//   if (n === 1) {
//     return 1;
//   }
// }

// console.log(sumToOne(1));

//RECURSIVE_CASE
// sumToOne(1) = 1
// sumToOne(2) = 2 + 1
// sumToOne(3) = 3 + 2 + 1
// sumToOne(4) = 4 + 3 + 2 + 1
function sumToOne(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumToOne(n - 1);
}

console.log(sumToOne(9));