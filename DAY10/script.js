// conditional statements

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// switch case
let dayNumber = 3;

switch (dayNumber) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day number. Please enter a number from 1 to 7.");
}


// loops
console.log("loops");
console.log("for loop");
for (let i = 1; i <= 5; i++) {
  console.log("Hello! This is loop number " + i);
}

console.log("while loop");
let count = 1;

while (count <= 5) {
  console.log("Count is: " + count);
  count++;
}

console.log("do while loop");
let num = 1;

do {
  console.log("This runs at least once: " + num);
  num++;
} while (num <= 5);