// -----------------------------------------------------------------------------------
// SECTION 1
// Question 1

const revstr = document.getElementById("oneans");
const inputString = document.getElementById("one");
const reverseButton = document.getElementById("oneButton");

function restr(str) {
    var reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

reverseButton.addEventListener('click', () => {
    const originalString = inputString.value;
    revstr.innerHTML = `Reverse string: <br> ${restr(originalString)}`;
});


// Question 2

const countvo = document.getElementById("twoans");
const inpString = document.getElementById("two");
const countv = document.getElementById("twoButton");

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
}

countv.addEventListener('click', () => {
    const orgString = inpString.value;
    countvo.innerHTML = `String Contain <br> ${countVowels(orgString)} Vowels`;
});


// Question 3

const capital = document.getElementById("threeans");
const tinpString = document.getElementById("three");
const capbtn = document.getElementById("threeButton");

function capitalizeFirstLetter(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

capbtn.addEventListener('click', () => {
    const sentence = tinpString.value;
    capital.innerHTML = `Modified String <br> ${capitalizeFirstLetter(sentence)} `;
});


// Question 4
const fourAns = document.getElementById("fourans");
const fourInput = document.getElementById("four");
const fourButton = document.getElementById("fourButton");

function isPalindrome(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return str === reversed;
}

fourButton.addEventListener('click', () => {
    const str = fourInput.value;
    fourAns.innerHTML = `Palindrome check: <br> ${isPalindrome(str)}`;
});

// Question 5
const fiveAns = document.getElementById("fiveans");
const fiveInput = document.getElementById("five");
const fiveButton = document.getElementById("fiveButton");

function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}

fiveButton.addEventListener('click', () => {
    const arr = fiveInput.value.split(',').map(Number);
    fiveAns.innerHTML = `Sum of positive numbers: <br> ${sumOfPositiveNumbers(arr)}`;
});

// Question 6
const sixAns = document.getElementById("sixans");
const sixInput = document.getElementById("six");
const sixElementInput = document.getElementById("sixElement");
const sixButton = document.getElementById("sixButton");

function findFirstOccurrence(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1; // If the element is not found
}

sixButton.addEventListener('click', () => {
    const arr = sixInput.value.split(',').map(Number);
    const element = Number(sixElementInput.value);
    sixAns.innerHTML = `First occurrence of ${element}: <br> ${findFirstOccurrence(arr, element)}`;
});

// Question 7
const sevenAns = document.getElementById("sevenans");
const sevenInput = document.getElementById("seven");
const sevenButton = document.getElementById("sevenButton");

function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

sevenButton.addEventListener('click', () => {
    const arr = sevenInput.value.split(',').map(Number);
    sevenAns.innerHTML = `Array without duplicates: <br> ${removeDuplicates(arr).join(', ')}`;
});

// Question 8
const eightAns = document.getElementById("eightans");
const eightInput = document.getElementById("eight");
const eightButtonAsc = document.getElementById("eightButtonAsc");
const eightButtonDesc = document.getElementById("eightButtonDesc");

function bubbleSort(arr, ascending = true) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if ((ascending && arr[j] > arr[j + 1]) || (!ascending && arr[j] < arr[j + 1])) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

eightButtonAsc.addEventListener('click', () => {
    const arr = eightInput.value.split(',').map(Number);
    eightAns.innerHTML = `Array sorted in ascending order: <br> ${bubbleSort([...arr]).join(', ')}`;
});

eightButtonDesc.addEventListener('click', () => {
    const arr = eightInput.value.split(',').map(Number);
    eightAns.innerHTML = `Array sorted in descending order: <br> ${bubbleSort([...arr], false).join(', ')}`;
});

// Question 9
const nineAns = document.getElementById("nineans");
const nineButton = document.getElementById("nineButton");

nineButton.addEventListener('click', () => {
    let number = 1;
    let evens = [];
    while (number <= 20) {
        if (number % 2 === 0) {
            evens.push(number);
        }
        number++;
    }
    nineAns.innerHTML = `Even numbers between 1 and 20: <br> ${evens.join(', ')}`;
});

// Question 10
const tenAns = document.getElementById("tenans");
const tenInput = document.getElementById("ten");
const tenButton = document.getElementById("tenButton");

function factorial(n) {
    let result = 1;
    let i = n;
    do {
        result *= i;
        i--;
    } while (i > 0);
    return result;
}

tenButton.addEventListener('click', () => {
    const num = Number(tenInput.value);
    tenAns.innerHTML = `Factorial of ${num}: <br> ${factorial(num)}`;
});

// Question 11
const elevenAns = document.getElementById("elevenans");
const elevenInput = document.getElementById("eleven");
const elevenButton = document.getElementById("elevenButton");

elevenButton.addEventListener('click', () => {
    const entries = elevenInput.value.split(',').map(pair => pair.split(':'));
    const obj = Object.fromEntries(entries);
    let result = '';
    for (let property in obj) {
        result += `${property}: ${obj[property]}<br>`;
    }
    elevenAns.innerHTML = result;
});

// Question 12
const twelveAns = document.getElementById("twelveans");
const twelveInput = document.getElementById("twelve");
const twelveButton = document.getElementById("twelveButton");

twelveButton.addEventListener('click', () => {
    const arr = twelveInput.value.split(',').map(Number);
    let doubledArray = [];
    for (let num of arr) {
        doubledArray.push(num * 2);
    }
    twelveAns.innerHTML = `Doubled elements: <br> ${doubledArray.join(', ')}`;
});

// Question 13
const thirteenAns = document.getElementById("thirteenans");
const thirteenInput = document.getElementById("thirteen");
const thirteenButton = document.getElementById("thirteenButton");

function checkEvenOdd(num) {
    return (num % 2 === 0) ? "Even" : "Odd";
}

thirteenButton.addEventListener('click', () => {
    const num = Number(thirteenInput.value);
    thirteenAns.innerHTML = `${num} is ${checkEvenOdd(num)}`;
});

// Question 14
const fourteenAns = document.getElementById("fourteenans");
const fourteenA = document.getElementById("fourteenA");
const fourteenB = document.getElementById("fourteenB");
const fourteenC = document.getElementById("fourteenC");
const fourteenButton = document.getElementById("fourteenButton");

function maxOfThree(a, b, c) {
    return (a > b) ? (a > c ? a : c) : (b > c ? b : c);
}

fourteenButton.addEventListener('click', () => {
    const a = Number(fourteenA.value);
    const b = Number(fourteenB.value);
    const c = Number(fourteenC.value);
    fourteenAns.innerHTML = `Maximum of ${a}, ${b}, and ${c} is: <br> ${maxOfThree(a, b, c)}`;
});

// Question 15
const fifteenAns = document.getElementById("fifteenans");
const fifteenInput = document.getElementById("fifteen");
const fifteenButton = document.getElementById("fifteenButton");

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

fifteenButton.addEventListener('click', () => {
    const year = Number(fifteenInput.value);
    fifteenAns.innerHTML = `${year} is ${isLeapYear(year) ? 'a leap year' : 'not a leap year'}`;
});


// -----------------------------------------------------------------------------------
// SECTION 2

// Question 1: Ternary operator to determine "Pass" or "Fail"
const scoreResult = document.getElementById("sixteenans");
const scoreButton = document.getElementById("sixteenButton");

scoreButton.addEventListener('click', () => {
    let score = parseInt(document.getElementById("sixteen").value);
    let result = score >= 80 ? "Pass" : "Fail";
    scoreResult.innerHTML = `Result: ${result}`;
});


// Question 2: Optional chaining operator (?.)
const objResult = document.getElementById("seventeenans");
const objButton = document.getElementById("seventeenButton");

objButton.addEventListener('click', () => {
    let obj = {
        property1: {
            property2: {
                property3: "Hello"
            }
        }
    };
    let value = obj?.property1?.property2?.property3;
    objResult.innerHTML = `Value: ${value}`;
});


// Question 3: for...in loop vs for...of loop
const loopResult = document.getElementById("eighteenans");
const loopButton = document.getElementById("eighteenButton");

loopButton.addEventListener('click', () => {
    let arr = [1, 2, 3];

    // for...in loop
    let indexOutput = "";
    for (let index in arr) {
        indexOutput += `${index}, `;
    }

    // for...of loop
    let valueOutput = "";
    for (let value of arr) {
        valueOutput += `${value}, `;
    }

    loopResult.innerHTML = `Index output: ${indexOutput}<br>Value output: ${valueOutput}`;
});


// Question 4: Function to calculate average
const averageResult = document.getElementById("ninteenans");
const averageButton = document.getElementById("ninteenButton");

function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

averageButton.addEventListener('click', () => {
    let numbers = document.getElementById("four").value.split(',').map(Number);
    let average = calculateAverage(numbers);
    averageResult.innerHTML = `Average: ${average}`;
});


// Question 5: Closures in JavaScript
const closureResult = document.getElementById("twentyans");
const closureButton = document.getElementById("twentyButton");

function outerFunction() {
    let outerVariable = "I'm outer!";
    function innerFunction() {
        closureResult.innerHTML = outerVariable;
    }
    return innerFunction;
}

closureButton.addEventListener('click', () => {
    let closureExample = outerFunction();
    closureExample();
});


// Question 6: Object with method to calculate average grades
const studentResult = document.getElementById("twentyoneans");
const studentButton = document.getElementById("twentyoneButton");

let student = {
    name: "John",
    age: 20,
    grades: [85, 90, 75],
    calculateAverage: function() {
        if (this.grades.length === 0) return 0;
        let sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }
};

studentButton.addEventListener('click', () => {
    let average = student.calculateAverage();
    studentResult.innerHTML = `Average grade: ${average}`;
});


// Question 7: Cloning objects in JavaScript
const cloneResult = document.getElementById("twentytwoans");
const cloneButton = document.getElementById("twentytwoButton");

let originalObject = { a: 1, b: { c: 2 } };

cloneButton.addEventListener('click', () => {
    // Deep copy example
    let deepCopy = JSON.parse(JSON.stringify(originalObject));
    
    // Shallow copy example
    let shallowCopy = Object.assign({}, originalObject);
    
    // Reference copy example
    let referenceCopy = originalObject;

    cloneResult.innerHTML = `Deep copy: ${JSON.stringify(deepCopy)}<br>Shallow copy: ${JSON.stringify(shallowCopy)}<br>Reference copy: ${JSON.stringify(referenceCopy)}`;
});


// Question 8: Iterating over an array of numbers to log even or odd using ternary operator
const evenOddResult = document.getElementById("twentythreetans");
const evenOddButton = document.getElementById("twentythreeButton");

let numbers = [1, 2, 3, 4, 5];

evenOddButton.addEventListener('click', () => {
    let output = "";
    numbers.forEach(num => {
        let message = num % 2 === 0 ? "even" : "odd";
        output += `${num} is ${message}<br>`;
    });
    evenOddResult.innerHTML = output;
});


// Question 9: Differences between for, while, and do...while loops
const loopTypeResult = document.getElementById("twentyfourans");
const loopTypeButton = document.getElementById("twentyfourButton");

loopTypeButton.addEventListener('click', () => {
    let output = `for loop: Used for iterating a specific number of times, like arrays.<br>`;
    output += `while loop: Used when you want to iterate based on a condition.<br>`;
    output += `do...while loop: Similar to while loop, but ensures the loop executes at least once before checking the condition.`;
    loopTypeResult.innerHTML = output;
});


// Question 10: Example of optional chaining within a loop
const optionalChainingResult = document.getElementById("twentyfiveans");
const optionalChainingButton = document.getElementById("twentyfiveButton");

let users = [
    { name: "Alice", address: { city: "New York" } },
    { name: "Bob" }
];

optionalChainingButton.addEventListener('click', () => {
    let output = "";
    users.forEach(user => {
        output += `${user.name}'s city: ${user.address?.city}<br>`;
    });
    optionalChainingResult.innerHTML = output;
});


// Question 11: for...in loop to iterate over object properties
const objectPropertiesResult = document.getElementById("twentysixans");
const objectPropertiesButton = document.getElementById("twentysixButton");

let person = {
    name: "John",
    age: 30,
    gender: "male"
};

objectPropertiesButton.addEventListener('click', () => {
    let output = "";
    for (let prop in person) {
        output += `${prop}: ${person[prop]}<br>`;
    }
    objectPropertiesResult.innerHTML = output;
});


// Question 12: break and continue statements
const breakContinueResult = document.getElementById("twentysevenans");
const breakContinueButton = document.getElementById("twentysevenButton");

breakContinueButton.addEventListener('click', () => {
    let output = `break: Terminates the loop completely when encountered.<br>`;
    output += `continue: Skips the current iteration and proceeds to the next iteration.`;
    breakContinueResult.innerHTML = output;
});


// Question 13: Function to calculate tax using ternary operator
const taxResult = document.getElementById("twentyeightans");
const taxButton = document.getElementById("twentyeightButton");

function calculateTax(income) {
    let taxRate = income > 10000 ? 0.2 : 0.1;
    return income * taxRate;
}

taxButton.addEventListener('click', () => {
    let income = parseFloat(document.getElementById("twentyeight").value);
    let tax = calculateTax(income);
    taxResult.innerHTML = `Tax amount: ${tax}`;
});


// Question 14: Object with method
const carResult = document.getElementById("twentynineans");
const carButton = document.getElementById("twentynineButton");

let car = {
    make: "Toyota",
    model: "Camry",
    startEngine: function() {
        carResult.innerHTML = `Engine started for ${this.make} ${this.model}.`;
    }
};

carButton.addEventListener('click', () => {
    car.startEngine();
});


// Question 15: Differences between regular functions and arrow functions
const arrowFunctionResult = document.getElementById("thirtyans");
const arrowFunctionButton = document.getElementById("thirtyButton");

arrowFunctionButton.addEventListener('click', () => {
    let output = `Regular functions:
                    - Have their own 'this' context, which is determined by how they are called.
                    - Can be used as object methods.
                    - Have their own 'arguments' object.
                  <br>`;
    output += `Arrow functions:
                    - Inherit 'this' from their parent scope.
                    - Cannot be used as object methods due to lack of 'this' binding.
                    - Do not have their own 'arguments' object (can use rest parameters instead).`;
    arrowFunctionResult.innerHTML = output;
});

// -----------------------------------------------------------------------------------
// SECTION 3

$(document).ready(function () {
    // Question 1: Map Transformation
    $('#q1Button').click(function () {
        let input = $('#q1Input').val().split(',').map(num => parseInt(num));
        let squared = input.map(num => num * num);
        $('#q1Output').html(`Squared Elements: ${squared}`);
    });

    // Question 2: Filter and Map Combination
    $('#q2Button').click(function () {
        let input = $('#q2Input').val().split(',');
        let filteredAndCapitalized = input.filter(str => str.trim().length >= 5)
                                          .map(str => str.trim().toUpperCase());
        $('#q2Output').html(`Filtered and Capitalized: ${filteredAndCapitalized}`);
    });

    // Question 3: Sorting Objects
    $('#q3Button').click(function () {
        let products = [
            { name: 'Laptop', price: 1200 },
            { name: 'Phone', price: 800 },
            { name: 'Tablet', price: 600 }
        ];
        products.sort((a, b) => b.price - a.price);
        let sortedProducts = products.map(product => `${product.name}: $${product.price}`);
        $('#q3Output').html(`Sorted Products: ${sortedProducts}`);
    });

    // Question 4: Reduce for Aggregation
    $('#q4Button').click(function () {
        let input = $('#q4Input').val().split(',').map(num => parseInt(num));
        let sumEven = input.reduce((acc, num) => num % 2 === 0 ? acc + num : acc, 0);
        $('#q4Output').html(`Sum of Even Numbers: ${sumEven}`);
    });

    // Question 5: Find and Modify
    $('#q5Button').click(function () {
        let objects = [
            { id: 1, status: 'pending' },
            { id: 2, status: 'in progress' },
            { id: 3, status: 'pending' }
        ];
        let targetId = 2;
        let foundObject = objects.find(obj => obj.id === targetId);
        if (foundObject) {
            foundObject.status = 'completed';
            $('#q5Output').html(`Updated Object: ${JSON.stringify(foundObject)}`);
        } else {
            $('#q5Output').html(`Object with ID ${targetId} not found.`);
        }
    });

    // Question 6: Chaining Methods
    $('#q6Button').click(function () {
        let input = $('#q6Input').val().split(',').map(num => parseInt(num));
        let positiveNumbers = input.filter(num => num > 0);
        if (positiveNumbers.length > 0) {
            let average = positiveNumbers.reduce((acc, num) => acc + num, 0) / positiveNumbers.length;
            $('#q6Output').html(`Average of Positive Numbers: ${average.toFixed(2)}`);
        } else {
            $('#q6Output').html(`No positive numbers found.`);
        }
    });

    // Question 7: Conditional Filtering
    $('#q7Button').click(function () {
        let persons = [
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 17 },
            { name: 'Charlie', age: 30 }
        ];
        let adults = persons.filter(person => person.age >= 18);
        $('#q7Output').html(`Adults: ${JSON.stringify(adults)}`);
    });

    // Question 8: Advanced Sorting
    $('#q8Button').click(function () {
        let input = $('#q8Input').val().split(',');
        input.sort((a, b) => a.length - b.length);
        $('#q8Output').html(`Sorted by Length: ${input}`);
    });

    // Question 9: Nested Array Operations
    $('#q9Button').click(function () {
        let nestedArrays = [[1, 2], [3, 4], [5, 6]];
        let flattened = nestedArrays.flat();
        let sum = flattened.reduce((acc, num) => acc + num, 0);
        $('#q9Output').html(`Flattened Array Sum: ${sum}`);
    });

    // Question 10: Error Handling with Find
    $('#q10Button').click(function () {
        let objects = [
            { id: 1, status: 'pending' },
            { id: 2, status: 'in progress' },
            { id: 3, status: 'pending' }
        ];
        let targetId = 4;
        let foundObject = objects.find(obj => obj.id === targetId);
        if (foundObject) {
            $('#q10Output').html(`Found Object: ${JSON.stringify(foundObject)}`);
        } else {
            $('#q10Output').html(`Object with ID ${targetId} not found.`);
        }
    });

    // Question 11: Map Method
    $('#q11Button').click(function () {
        let numbers = [1, 2, 3];
        let doubled = numbers.map(num => num * 2);
        $('#q11Output').html(`Doubled Numbers: ${doubled}`);
    });

    // Question 12: Filter Method
    $('#q12Button').click(function () {
        let numbers = [1, 2, 3, 4, 5];
        let evenNumbers = numbers.filter(num => num % 2 === 0);
        $('#q12Output').html(`Even Numbers: ${evenNumbers}`);
    });

    // Question 13: Sort Method
    $('#q13Button').click(function () {
        let persons = [
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 20 },
            { name: 'Charlie', age: 30 }
        ];
        persons.sort((a, b) => a.age - b.age);
        $('#q13Output').html(`Sorted Persons by Age: ${JSON.stringify(persons)}`);
    });

    // Question 14: Reduce Method
    $('#q14Button').click(function () {
        let numbers = [1, 2, 3, 4, 5];
        let sum = numbers.reduce((acc, num) => acc + num, 0);
        $('#q14Output').html(`Sum of Numbers: ${sum}`);
    });

    // Question 15: Find Method
    $('#q15Button').click(function () {
        let persons = [
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 20 },
            { name: 'Charlie', age: 30 }
        ];
        let person = persons.find(person => person.name === 'Bob');
        $('#q15Output').html(`Found Person: ${JSON.stringify(person)}`);
    });

    // Navigation buttons functionality
    $('.for').click(function () { });
    $('.bck').click(function () { });
});
