// Should print out passing grades to the console. Passing grades for this scenario can be those that are 70 or above.

const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const passingGrades = grades.filter((num) => num >= 70);

console.log(passingGrades);