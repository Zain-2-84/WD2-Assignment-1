// Question 1
let sampleNumber = 5;

let checkingForEvenOrOdd = sampleNumber / 2;

if (checkingForEvenOrOdd = 0) { 
console.log(`The number ${sampleNumber} is even.`); 
} else { 
console.log(`The number ${sampleNumber} is odd.`); 
}

// Question 2
let citizenAge = 19; 
if (citizenAge >= 18) { 
console.log("Eligible to vote."); 
} else { 
console.log("Not eligible.");
}


// Question 3
for (let i = 1; i <= 10; i++) 
{ console.log(i); 
}

// Question 4
let numbers = [];
let newNumbers = [];

for (let i = 1; i <= 20; i++) {
  numbers.push(i);
}

for (let number of numbers) {
  if (number % 2 === 0) {
    newNumbers.push(number);
  }
}

console.log(newNumbers);

// Question 5
let name = "Khalid";
let reversedName = [];
let convertedReversedName;

for (const letter of name) {
  reversedName.unshift(letter);
}

console.log(reversedName);

let regex = /,/g;

convertedReversedName =  reversedName.toString();

console.log(convertedReversedName.replace(regex, ""));

// Question 6
let result;

function addTwoNumbers (num1, num2) {
  result = num1 + num2;
  return result;
}

addTwoNumbers(23, 34);

// Question 7
let number = 11;
let numberResult = 1;

function factorialNumber (number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  
  for (let i = 2; i <= number; i++) {
        numberResult *= i;
  }
  return numberResult;
}

console.log(`The factorial of ${number} is ${factorialNumber(number)}`);

// Question 8
let palindrome = "madam";
let palindromeFixed = palindrome.split("");

let palindromeDraft = palindromeFixed.reverse();

function palindromeResult(palindromeDraft) {
    if (palindromeFixed === palindromeDraft) {
  console.log(`The ${palindrome} is a     palindrome`);
}
};

// Question 9
let student = {
  name: "Zain",
    rollNo: 78689,
      marks: 50,
        isPassed: true
};

console.log(student);

// Question 10
let student = {
  name: "Zain",
    rollNo: 78689,
      marks: 50,
        isPassed: true
};

let studentName = student.name;
let studentIsPassed = student["isPassed"];

console.log(`The student name is ${studentName} and he is ${studentIsPassed}.`);

// Question 11
let student = {
    name: "Zain",
    rollNo: 78689,
    marks: 50,
    isPassed: true,
    message: function () {
        console.log(`Hello, I am ${this.name}`);
    }
}

student.message();

// Question 12
let someObject = {
    name: "Zain",
    age: 23
}

function printSomeObject () {
    let secondObject = "";
    for (const item in someObject) {
        secondObject += `${item}: ${someObject[item]}\n`;
    }
    return secondObject;
}

console.log(printSomeObject( someObject ));

// Question 13
let fruits = ["mango", "banana", "orange", "watermelon"];
console.log(fruits);

// Question 14
let newLastFruit = fruits.push("kiwi");
console.log(newLastFruit);

// Question 15
let removedLastFruit = fruits.pop();
console.log(removedLastFruit);

// Question 16
let isBananaPresent = fruits.includes("Banana", 0);
console.log(isBananaPresent);

// Question 17
let numbers = [6, 8, 9, 10];
function multiply (numbers) {
    let result = [];
    for (const item of numbers) {
        let multiply = item * 2;
        result.push(multiply);
    }
    return result;
}

console.log(multiply(numbers));

// Question 18
let ages = [12, 34, 23, 1, 6, 59];
let approvedAges = [];

function checkAge (ages) {
  for (const item of ages) {
    if (item >= 18) {
      approvedAges.push(item);
    }
  }
      return approvedAges;
}

console.log(checkAge(ages));

// Question 19
let ages = [12, 34, 23, 1, 6, 59];
let firstGreaterThan10 = ages.find(age => age >= 10);

console.log(firstGreaterThan10);

// Question 20
const students = [
  {name: "Ali", marks: 80},
  {name: "Zara", marks: 95},
  {name: "Umar", marks: 45}
];

students.forEach(element => console.log(element.name));

// Question 21
const students = [
  {name: "Ali", marks: 80},
  {name: "Zara", marks: 95},
  {name: "Umar", marks: 45}
];

let mappedStudents = students.map( (item) => item.name );

console.log(mappedStudents);

// Question 22
const students = [
  {name: "Ali", marks: 80},
  {name: "Zara", marks: 95},
  {name: "Umar", marks: 45}
];

let filteredStudents = students.filter( (student) => student.marks > 50 );

console.log(filteredStudents);

// Question 23
const students = [
  {name: "Ali", marks: 80},
  {name: "Zara", marks: 95},
  {name: "Umar", marks: 45}
  ];


let foundZara = students.find( (student) => student.name === "Zara" );

console.log(foundZara);

// Question 24
const students = [
  {name: "Ali", marks: 80},
  {name: "Zara", marks: 95},
  {name: "Umar", marks: 45}
  ];

let allStudentsData = students.forEach( (student) => console.log(student) );

// Question 25
let numbers = [2, 4, 6, 8];
let squaredNumbers = [];

numbers.forEach( (number) => {
  squaredNumbers.push(number * number);
});

console.log(squaredNumbers);

// Question 26
let people = ["Ali", "Zara", "Umar", "Ahmed"];

let printedPeople = people.forEach( function (person) {
  console.log(`${person} \n`);
});

printedPeople;

// Question 27
let numbers = [12, 25, 17, 20, 16, 30];

let above18 = numbers.filter( function(number){
  return number > 18;
} );

console.log(above18);

// Question 28
let fruits = ["banana", "mango", "grapes", "apple"];

let foundFruit = fruits.find( function (fruit) {
  return fruit.includes("apple");
} );

console.log(foundFruit);

// Question 29
let students = [
  {name: "Ali", marks: 75},
  {name: "Zara", marks: 92},
  {name: "Umar", marks: 85}
];

let foundStudent = students.find( function (student){
  return student.marks > 90;
} );

console.log(foundStudent);

// Question 30
let money = [200, 150, 300, 100];

let totalMoney = money.reduce( function (sum, item) {
  return sum + item;
}, 0 );

console.log(totalMoney);

// Question 31
let onlineUsers = [
  {id: 1, username: "ali123"},
  {id: 2, username: "zara88"},
  {id: 3, username: "umar_01"}
];

let userNameOnly = onlineUsers.map( function (item) {
  return item.username;
} );

console.log(userNameOnly);

// Question 32
let numbers = [1, 2, 3, 4, 5, 6];

let oddNumbers = numbers.filter( function (item) {
  if (item % 2 !== 0) {
    return item;
  }
} );

console.log(oddNumbers);

// Question 33
let word = "javascript";
let vowels = ["a", "e", "i", "o", "u"];

let wordSplitted = word.split("");
// console.log(wordSplitted);

let vowelCount = wordSplitted.filter(function(item) {
  return vowels.includes(item);
});

console.log(vowelCount);
console.log(vowelCount.length);

// Question 34
let object = [
  {task: "Assignment", status: true},
  {task: "Homework", status: false}
];

let printObject = object.forEach( function (item) {
  console.log(`Task: ${item.task} - Status: ${item.status}`);
} );

printObject;