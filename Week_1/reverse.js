let input = process.argv[2];

if (input)
  console.log(reverse(input));

let reverse = function(original) {
  return original.split('').reverse().join('');
};