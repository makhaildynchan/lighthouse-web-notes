const findWaldo = function(names, found) {
  names.forEach((item, index) => {
    if (item === "Waldo") {
      return found([index]);
    }
  }
  );
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Found Waldo at index " + index);
});