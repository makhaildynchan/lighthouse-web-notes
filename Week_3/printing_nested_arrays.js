// const printItems = function(array) {
//   for (let item of array) {
//     console.log(item);
//   }
// }

const printItems = function(array) {
  while (array.length > 0) {
    const element = array.shift();

    if (Array.isArray(element)) {
      element.reverse().forEach((newElement)=> {
        array.unshift(newElement);
      });
    } else {
      console.log(element);
    }
  }
};
const array = ["A", ["B", "C"], "D", "E"];
printItems(array);

