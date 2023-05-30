// Arrow functions provide a new syntax for declaring anonymous functions, as show below.

// BEFORE: anonymous callback as function expression
[1,2,3].forEach(function (num) {
  console.log('num: ', num);
});

// AFTER: anonymous callback as arrow function
[1,2,3].forEach((num) => {
  console.log('num: ', num);
});

// In fact, for one liners JS allows us to further remove some characters:

[1,2,3].forEach(num => console.log('num: ', num));

x => x * 2;
(x) => {
  return (x * 2);
};
let x = function () {
  return (x * 2);
};