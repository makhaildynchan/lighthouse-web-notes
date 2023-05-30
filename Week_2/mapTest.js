const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

const returnLength = function(element) {
  return element.length;
};

console.log(lighthouses.map((element) => returnLength(element)));
console.log(lighthouses.map((element) => {
  return element.length;
}));
console.log(lighthouses.map(element => element.length));