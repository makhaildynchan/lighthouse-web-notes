const raisinAlarm = function(cookie) {
  for (const item of cookie) {
    if (item === "🍇") {
      return "Raisin alert!";
    }
  }
  return "All good!";
};
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

// *** Stretch *** //
const raisinAlarmArray = function(cookies) {
  // Put your solution here
  let result = [];
  for (let cookie of cookies) {
    result.push(raisinAlarm(cookie));
  }
  return result;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));
