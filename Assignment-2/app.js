// Qestion 1 
let sentence = "I have to get six questions done at all costs";
// console.log(sentence);

let words = sentence.split(" ");
// console.log(words);

let wordCount = {};
words.forEach(  word => {
  if (wordCount[word]) {
    wordCount[word] += 1;
  } else {
    wordCount[word] = 1;
  }
  
  return wordCount;
} );

// console.log(wordCount);

// Question 2
let students = [
  {
    name: "Omar", class: "10th"
  },
  {
    name: "Fatima", class: "9th"
  },
  {
    name: "Yahya", class: "9th"
  }
  ];
  
  function groupByClass (students) {
    let grouped = {};
    
    let studentsForEach = students.forEach( (item) => {
      let className = item.class;
      
      if (!grouped[className]) {
        grouped[className] = [];
      }
      
      grouped[className].push(item);
      
    } );
    return grouped;
    
  };
  
  
  
  console.log(groupByClass(students));
  
  // Question 3
  let products = [
    {name: "Detergent", price: 550}, 
    {name: "butter", price: 320},
    {name: "toothbrush", price: 110}
    ];
    
    function filterByPrice (products, min, max) {
      return products.filter( item => 
        item.price >= min && item.price <= max
      );
    };
    
    console.log(filterByPrice(products, 100, 400));

// Question 4
let randomWord = "madam";
let reversedRandomWord = randomWord.split("").reverse().join("");

if (randomWord === reversedRandomWord) {
  console.log(`Both ${randomWord} and ${reversedRandomWord} are same. Thus, it is a palindrome.`);
} else {
  console.log(`Sorry, ${randomWord} is not a palindrome.`);
}

// Question 5
let multipleArray = [1, [2, [3, 4]], 5];

function flatten(multipleArray) {
  let result = [];

  multipleArray.forEach( item => {
    if (Array.isArray(item)) {
      result = result.concat( flatten(item) );
    } else {
      result.push(item);
    }
  } );

  return result;
}

console.log(flatten(multipleArray));

// Question 6
let employee = [
  { name: "Zaynab", salary: 50000},
  { name: "Haris", salary: 40000},
  { name: "Zaqiullah", salary: 30000}
];

let employeeSalaries = employee.map(item => item.salary);
let totalSalary = employeeSalaries.reduce( (accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(totalSalary);

// Question 7
let nestedArray = [1, 2, [4, 5, [6, 8]], 10];

function flattenTwo (nestedArray) {
  let sum = 0;

  nestedArray.forEach( item => {
    if (Array.isArray(item)) {
      sum += flattenTwo(item);
    } else if (item % 2 === 0) {
      sum += item;
    }

  } );
  return sum;
}

console.log(flattenTwo(nestedArray));

// Question 8
function average(...nums) {
  if (nums.length === 0) {
    return 0;
  }

  let sum = nums.reduce((a, b) => a + b, 0);
  return sum / nums.length;
}

console.log(average(10, 15, 30));

// Question 9
let fruits = ["kiwi", "banana", "apple", "orange", "apple"];

function countFruits(fruits) {
  return fruits.reduce((accumulator, currentValue) => {
    return {
      ...accumulator, [currentValue]: (accumulator[currentValue] || 0) + 1
    };
  }, {});
}

console.log(countFruits(fruits));

// Question 10
let tasks = [
  { id: 1, title: "Wake up", done: true},
  { id: 2, title: "Pray", done: true},
  { id: 3, title: "Homework", done: false}
];

function toggleDone(tasks, id) {
  return tasks.map(task => {
    if (task.id === id) {
      return { ...task, done: !task.done};
    }
    return task;
  });
}

console.log(toggleDone(tasks, 3));

// Question 11
let names = ["Subhan", "Ramiz", "Danish", "Laiba", "Hiba"];

function sortByLength(names) {
  return [...names].sort( (a, b) => a.length - b.length );
}

console.log(sortByLength(names));