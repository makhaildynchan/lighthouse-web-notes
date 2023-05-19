let args = process.argv;
//console.log(args); prints program, file path, args

//slice allows t only print the arguments
//console.log(args.slice(2));

//adding numbers
args = args.slice(2);
console.log(Number(args[0]) + Number(args[1]));

// secret gist
// https://gist.github.com/makhaildynchan/bf4c942356139d2b15b3f8e3f03b6cf6