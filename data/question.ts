export type DifficultyType = "easy" | "medium" | "hard";

export type QuestionType = {
    id: number;
    question: string;
    options: string[];
    answer: string;
    difficulty: DifficultyType;
    topic: string;
}

const questions: QuestionType[] = [
    {
        id: 1,
        question: "What does 'let' do in JavaScript?",
        options: ["Declares a variable", "Declares a constant", "Declares a function", "Nothing"],
        answer: "Declares a variable",
        difficulty: "easy",
        topic: "Variables"
    },
    {
        id: 2,
        question: "Which method converts a JSON string into a JavaScript object?",
        options: ["JSON.stringify", "JSON.parse", "JSON.object", "JSON.convert"],
        answer: "JSON.parse",
        difficulty: "medium",
        topic: "JSON"
    },
    {
        id: 3,
        question: "What is a closure in JavaScript?",
        options: ["A private function", "A function with preserved scope", "An event listener", "None of the above"],
        answer: "A function with preserved scope",
        difficulty: "hard",
        topic: "Closures"
    },
    {
        id: 4,
        question: "Which keyword is used to declare a constant variable?",
        options: ["const", "let", "var", "constant"],
        answer: "const",
        difficulty: "easy",
        topic: "Variables"
    },
    {
        id: 5,
        question: "What does the 'this' keyword refer to in a regular function (non‑arrow) called in the global context?",
        options: ["The function itself", "The global object (or undefined in strict mode)", "The parent function", "The window object only"],
        answer: "The global object (or undefined in strict mode)",
        difficulty: "medium",
        topic: "this keyword"
    },
    {
        id: 6,
        question: "Which of the following is a primitive data type in JavaScript?",
        options: ["Object", "Array", "Symbol", "Function"],
        answer: "Symbol",
        difficulty: "easy",
        topic: "Data Types"
    },
    {
        id: 7,
        question: "What does the '===' operator do?",
        options: ["Compares values only", "Compares values and types", "Assigns a value", "None of these"],
        answer: "Compares values and types",
        difficulty: "easy",
        topic: "Operators"
    },
    {
        id: 8,
        question: "How do you create a promise in JavaScript?",
        options: ["new Promise()", "Promise.create()", "Promise.new()", "create.Promise()"],
        answer: "new Promise()",
        difficulty: "medium",
        topic: "Promises"
    },
    {
        id: 9,
        question: "What will 'typeof null' return?",
        options: ["null", "undefined", "object", "number"],
        answer: "object",
        difficulty: "medium",
        topic: "Data Types"
    },
    {
        id: 10,
        question: "Which method adds one or more elements to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()",
        difficulty: "easy",
        topic: "Array Methods"
    },
    {
        id: 11,
        question: "What is the output of 'console.log(2 + '2')'?",
        options: ["4", "22", "NaN", "undefined"],
        answer: "22",
        difficulty: "easy",
        topic: "Type Coercion"
    },
    {
        id: 12,
        question: "Which statement correctly declares a variable that cannot be reassigned?",
        options: ["let x = 5;", "const x = 5;", "var x = 5;", "static x = 5;"],
        answer: "const x = 5;",
        difficulty: "easy",
        topic: "Variables"
    },
    {
        id: 13,
        question: "What does the 'map()' method return?",
        options: ["A new array", "The original array modified", "A boolean", "A single value"],
        answer: "A new array",
        difficulty: "medium",
        topic: "Array Methods"
    },
    {
        id: 14,
        question: "How can you check if an object has a property 'name'?",
        options: ["obj.hasProperty('name')", "'name' in obj", "obj.contains('name')", "obj.exists('name')"],
        answer: "'name' in obj",
        difficulty: "medium",
        topic: "Objects"
    },
    {
        id: 15,
        question: "What is the purpose of the 'finally' block in a try…catch statement?",
        options: ["It runs only if there is an error", "It runs only if there is no error", "It always runs after try/catch", "It is used to handle errors"],
        answer: "It always runs after try/catch",
        difficulty: "medium",
        topic: "Error Handling"
    },
    {
        id: 16,
        question: "Which symbol is used for the rest parameter in a function?",
        options: ["...", "&", "*", "#"],
        answer: "...",
        difficulty: "easy",
        topic: "Functions"
    },
    {
        id: 17,
        question: "What does the 'bind()' method do?",
        options: ["Creates a new function with a fixed 'this' value", "Executes a function immediately", "Binds two objects together", "None of the above"],
        answer: "Creates a new function with a fixed 'this' value",
        difficulty: "hard",
        topic: "Functions"
    },
    {
        id: 18,
        question: "Which statement is true about arrow functions?",
        options: ["They have their own 'this' binding", "They cannot be used as constructors", "They have an 'arguments' object", "They require a return statement always"],
        answer: "They cannot be used as constructors",
        difficulty: "medium",
        topic: "Functions"
    },
    {
        id: 19,
        question: "What is the event loop?",
        options: ["A loop that iterates over events", "A mechanism that handles asynchronous callbacks", "A way to bind events to DOM elements", "A loop that never ends"],
        answer: "A mechanism that handles asynchronous callbacks",
        difficulty: "hard",
        topic: "Asynchronous"
    },
    {
        id: 20,
        question: "How do you create an array in JavaScript?",
        options: ["let arr = {}", "let arr = []", "let arr = ()", "let arr = <>"],
        answer: "let arr = []",
        difficulty: "easy",
        topic: "Arrays"
    },
    {
        id: 21,
        question: "What will 'Boolean(0)' return?",
        options: ["true", "false", "0", "undefined"],
        answer: "false",
        difficulty: "easy",
        topic: "Type Coercion"
    },
    {
        id: 22,
        question: "Which method removes the last element from an array?",
        options: ["pop()", "push()", "shift()", "slice()"],
        answer: "pop()",
        difficulty: "easy",
        topic: "Array Methods"
    },
    {
        id: 23,
        question: "What does the 'new' keyword do?",
        options: ["Creates a new variable", "Creates an instance of a user-defined object", "Declares a new function", "Allocates memory manually"],
        answer: "Creates an instance of a user-defined object",
        difficulty: "medium",
        topic: "Objects"
    },
    {
        id: 24,
        question: "What is the difference between 'null' and 'undefined'?",
        options: ["They are exactly the same", "null is an assigned value, undefined means no value assigned", "undefined is an object, null is a primitive", "null means not declared"],
        answer: "null is an assigned value, undefined means no value assigned",
        difficulty: "medium",
        topic: "Data Types"
    },
    {
        id: 25,
        question: "Which of the following is not a valid JavaScript data type?",
        options: ["Number", "String", "Boolean", "Character"],
        answer: "Character",
        difficulty: "easy",
        topic: "Data Types"
    },
    {
        id: 26,
        question: "What does the 'reduce()' method do?",
        options: ["Reduces the array to a single value", "Reduces the size of the array", "Removes duplicates", "None"],
        answer: "Reduces the array to a single value",
        difficulty: "hard",
        topic: "Array Methods"
    },
    {
        id: 27,
        question: "How do you write an 'if' statement in JavaScript?",
        options: ["if i == 5 then", "if (i == 5)", "if i = 5", "if i == 5 :"],
        answer: "if (i == 5)",
        difficulty: "easy",
        topic: "Conditionals"
    },
    {
        id: 28,
        question: "What is a prototype in JavaScript?",
        options: ["A blueprint for objects", "A function template", "An object from which other objects inherit properties", "None"],
        answer: "An object from which other objects inherit properties",
        difficulty: "hard",
        topic: "Prototypes"
    },
    {
        id: 29,
        question: "Which statement is used to export a module in ES6?",
        options: ["module.exports =", "export default", "exports.", "require()"],
        answer: "export default",
        difficulty: "medium",
        topic: "Modules"
    },
    {
        id: 30,
        question: "What will 'console.log(typeof NaN)' output?",
        options: ["NaN", "number", "undefined", "object"],
        answer: "number",
        difficulty: "medium",
        topic: "Data Types"
    },
    {
        id: 31,
        question: "What is the result of 'typeof []'?",
        options: ["array", "object", "undefined", "list"],
        answer: "object",
        difficulty: "easy",
        topic: "Data Types"
    },
    {
        id: 32,
        question: "Which method is used to round a number to the nearest integer?",
        options: ["Math.ceil()", "Math.floor()", "Math.round()", "Math.trunc()"],
        answer: "Math.round()",
        difficulty: "easy",
        topic: "Math"
    },
    {
        id: 33,
        question: "What does the 'Array.isArray()' method do?",
        options: ["Checks if an object is an array", "Creates a new array", "Converts an object to an array", "Returns the length of an array"],
        answer: "Checks if an object is an array",
        difficulty: "medium",
        topic: "Array Methods"
    },
    {
        id: 34,
        question: "Which loop will always execute at least once?",
        options: ["for", "while", "do...while", "for...in"],
        answer: "do...while",
        difficulty: "easy",
        topic: "Loops"
    },
    {
        id: 35,
        question: "What will 'console.log(0.1 + 0.2 === 0.3)' output?",
        options: ["true", "false", "undefined", "Error"],
        answer: "false",
        difficulty: "medium",
        topic: "Type Coercion"
    },
    {
        id: 36,
        question: "What is the purpose of the 'use strict' directive?",
        options: ["Enforces stricter parsing and error handling", "Enables new JavaScript features", "Disables deprecated features", "All of the above"],
        answer: "Enforces stricter parsing and error handling",
        difficulty: "medium",
        topic: "Strict Mode"
    },
    {
        id: 37,
        question: "How do you access the first element of an array 'arr'?",
        options: ["arr[0]", "arr.first()", "arr[1]", "arr.start()"],
        answer: "arr[0]",
        difficulty: "easy",
        topic: "Arrays"
    },
    {
        id: 38,
        question: "What does the 'splice()' method do?",
        options: ["Adds/removes elements from an array", "Extracts a section of an array", "Joins arrays", "Sorts an array"],
        answer: "Adds/removes elements from an array",
        difficulty: "medium",
        topic: "Array Methods"
    },
    {
        id: 39,
        question: "Which operator returns the remainder of a division?",
        options: ["/", "%", "//", "%%"],
        answer: "%",
        difficulty: "easy",
        topic: "Operators"
    },
    {
        id: 40,
        question: "What will 'console.log(!!'false')' output?",
        options: ["false", "true", "undefined", "NaN"],
        answer: "true",
        difficulty: "medium",
        topic: "Type Coercion"
    },
    {
        id: 41,
        question: "What is a callback function?",
        options: ["A function passed as an argument to another function", "A function that calls itself", "A function that returns a function", "A built‑in method"],
        answer: "A function passed as an argument to another function",
        difficulty: "medium",
        topic: "Functions"
    },
    {
        id: 42,
        question: "Which method creates a new array with all elements that pass a test?",
        options: ["map()", "filter()", "reduce()", "forEach()"],
        answer: "filter()",
        difficulty: "medium",
        topic: "Array Methods"
    },
    {
        id: 43,
        question: "What is the correct way to write a comment in JavaScript?",
        options: ["<!-- comment -->", "// comment", "/* comment */", "Both // and /* */"],
        answer: "Both // and /* */",
        difficulty: "easy",
        topic: "Basics"
    },
    {
        id: 44,
        question: "What does the 'Date.now()' method return?",
        options: ["The current date as a string", "The number of milliseconds since 1970", "A Date object", "The current year"],
        answer: "The number of milliseconds since 1970",
        difficulty: "medium",
        topic: "Date"
    },
    {
        id: 45,
        question: "Which statement is used to handle errors in JavaScript?",
        options: ["try...catch", "if...else", "switch", "error()"],
        answer: "try...catch",
        difficulty: "easy",
        topic: "Error Handling"
    },
    {
        id: 46,
        question: "What is the output of 'console.log(3 > 2 > 1)'?",
        options: ["true", "false", "undefined", "Error"],
        answer: "false",
        difficulty: "hard",
        topic: "Operators"
    },
    {
        id: 47,
        question: "How can you add a property to an object?",
        options: ["obj.property = value", "obj.add(property, value)", "obj[property] = value", "Both A and C"],
        answer: "Both A and C",
        difficulty: "easy",
        topic: "Objects"
    },
    {
        id: 48,
        question: "What does the 'setTimeout()' function do?",
        options: ["Executes a function after a delay", "Executes a function repeatedly", "Stops a timer", "Sets a time limit"],
        answer: "Executes a function after a delay",
        difficulty: "easy",
        topic: "Asynchronous"
    },
    {
        id: 49,
        question: "What is the value of 'undefined' in JavaScript?",
        options: ["A primitive value indicating no value", "An object", "A reference error", "null"],
        answer: "A primitive value indicating no value",
        difficulty: "easy",
        topic: "Data Types"
    },
    {
        id: 50,
        question: "Which method returns a string representation of an array?",
        options: ["toString()", "toArray()", "stringify()", "convert()"],
        answer: "toString()",
        difficulty: "easy",
        topic: "Array Methods"
    },
    {
        id: 51,
        question: "What does the 'isNaN()' function do?",
        options: ["Checks if a value is NaN", "Checks if a value is a number", "Checks if a value is not a number", "Converts to number"],
        answer: "Checks if a value is NaN",
        difficulty: "medium",
        topic: "Type Coercion"
    },
    {
        id: 52,
        question: "What is the result of 'typeof function(){}'?",
        options: ["function", "object", "undefined", "callable"],
        answer: "function",
        difficulty: "easy",
        topic: "Data Types"
    },
    {
        id: 53,
        question: "Which statement correctly throws an error?",
        options: ["throw new Error('message')", "throw 'message'", "Both A and B", "error('message')"],
        answer: "Both A and B",
        difficulty: "medium",
        topic: "Error Handling"
    },
    {
        id: 54,
        question: "What does the 'shift()' method do to an array?",
        options: ["Removes the first element", "Adds an element to the beginning", "Removes the last element", "Sorts the array"],
        answer: "Removes the first element",
        difficulty: "easy",
        topic: "Array Methods"
    },
    {
        id: 55,
        question: "How do you define a class in ES6?",
        options: ["class MyClass {}", "function MyClass {}", "MyClass = class {}", "Both A and C"],
        answer: "Both A and C",
        difficulty: "medium",
        topic: "Classes"
    },
    {
        id: 56,
        question: "What is a promise?",
        options: ["An object representing eventual completion/failure", "A callback function", "A synchronous operation", "An event handler"],
        answer: "An object representing eventual completion/failure",
        difficulty: "medium",
        topic: "Promises"
    },
    {
        id: 57,
        question: "What will 'console.log(1 === true)' output?",
        options: ["true", "false", "undefined", "Error"],
        answer: "false",
        difficulty: "easy",
        topic: "Operators"
    },
    {
        id: 58,
        question: "Which method is used to join all elements of an array into a string?",
        options: ["concat()", "join()", "merge()", "combine()"],
        answer: "join()",
        difficulty: "easy",
        topic: "Array Methods"
    },
    {
        id: 59,
        question: "What does the 'delete' operator do?",
        options: ["Removes a property from an object", "Deletes a variable", "Clears memory", "Removes an array element"],
        answer: "Removes a property from an object",
        difficulty: "medium",
        topic: "Objects"
    },
    {
        id: 60,
        question: "What is the output of 'console.log(parseInt('10.5'))'?",
        options: ["10.5", "10", "11", "NaN"],
        answer: "10",
        difficulty: "easy",
        topic: "Type Coercion"
    },
    {
        id: 61,
        question: "How can you create a new object with a specified prototype?",
        options: ["Object.create(proto)", "new Object(proto)", "Object.setPrototypeOf()", "Object.assign()"],
        answer: "Object.create(proto)",
        difficulty: "hard",
        topic: "Prototypes"
    },
    {
        id: 62,
        question: "What is the difference between 'var' and 'let'?",
        options: ["var is function‑scoped, let is block‑scoped", "let can be redeclared, var cannot", "var is used for constants", "No difference"],
        answer: "var is function‑scoped, let is block‑scoped",
        difficulty: "medium",
        topic: "Variables"
    },
    {
        id: 63,
        question: "What does the 'forEach()' method return?",
        options: ["A new array", "undefined", "The original array", "A boolean"],
        answer: "undefined",
        difficulty: "medium",
        topic: "Array Methods"
    },
    {
        id: 64,
        question: "Which symbol is used for strict inequality?",
        options: ["!==", "!=", "<>", "!=="],
        answer: "!==",
        difficulty: "easy",
        topic: "Operators"
    },
    {
        id: 65,
        question: "What is a higher‑order function?",
        options: ["A function that takes another function as argument or returns a function", "A function with multiple parameters", "A recursive function", "A built‑in function"],
        answer: "A function that takes another function as argument or returns a function",
        difficulty: "hard",
        topic: "Functions"
    },
    {
        id: 66,
        question: "How do you write a multiline string in JavaScript?",
        options: ["Using backticks ` `", "Using quotes with \\n", "Using double quotes", "Both A and B"],
        answer: "Both A and B",
        difficulty: "easy",
        topic: "Strings"
    },
    {
        id: 67,
        question: "What does the 'Math.random()' method return?",
        options: ["A random integer", "A random number between 0 and 1", "A random number between 0 and 100", "A random boolean"],
        answer: "A random number between 0 and 1",
        difficulty: "easy",
        topic: "Math"
    },
    {
        id: 68,
        question: "What is the purpose of the 'spread' operator?",
        options: ["Expands an iterable into individual elements", "Combines objects", "Copies arrays", "All of the above"],
        answer: "All of the above",
        difficulty: "medium",
        topic: "ES6 Features"
    },
    {
        id: 69,
        question: "How can you prevent an object from being modified?",
        options: ["Object.freeze()", "Object.seal()", "Object.preventExtensions()", "All of the above"],
        answer: "All of the above",
        difficulty: "hard",
        topic: "Objects"
    },
    {
        id: 70,
        question: "What will 'console.log(2 ** 3)' output?",
        options: ["6", "8", "9", "5"],
        answer: "8",
        difficulty: "easy",
        topic: "Operators"
    },
    {
        id: 71,
        question: "Which method returns the index of the first occurrence of a value in an array?",
        options: ["findIndex()", "indexOf()", "search()", "find()"],
        answer: "indexOf()",
        difficulty: "easy",
        topic: "Array Methods"
    },
    {
        id: 72,
        question: "What does the 'global' object refer to in Node.js?",
        options: ["window", "global", "self", "root"],
        answer: "global",
        difficulty: "medium",
        topic: "Node.js"
    },
    {
        id: 73,
        question: "How do you import a module in Node.js using CommonJS?",
        options: ["import x from 'module'", "require('module')", "include('module')", "load('module')"],
        answer: "require('module')",
        difficulty: "medium",
        topic: "Node.js"
    },
    {
        id: 74,
        question: "What is the output of 'console.log([] + [])'?",
        options: ["[]", "'' (empty string)", "undefined", "Error"],
        answer: "'' (empty string)",
        difficulty: "hard",
        topic: "Type Coercion"
    },
    {
        id: 75,
        question: "What does the 'charAt()' method do?",
        options: ["Returns the character at a specified index", "Returns the ASCII code", "Changes a character", "None"],
        answer: "Returns the character at a specified index",
        difficulty: "easy",
        topic: "String Methods"
    },
    {
        id: 76,
        question: "Which operator is used for logical AND?",
        options: ["&&", "||", "!", "&"],
        answer: "&&",
        difficulty: "easy",
        topic: "Operators"
    },
    {
        id: 77,
        question: "What is the result of 'typeof null === 'object''?",
        options: ["true", "false", "undefined", "Error"],
        answer: "true",
        difficulty: "medium",
        topic: "Data Types"
    },
    {
        id: 78,
        question: "How do you create a symbol in JavaScript?",
        options: ["Symbol()", "Symbol('desc')", "Both A and B", "new Symbol()"],
        answer: "Both A and B",
        difficulty: "medium",
        topic: "Data Types"
    },
    {
        id: 79,
        question: "What does the 'some()' method do?",
        options: ["Checks if at least one element passes a test", "Checks if all elements pass a test", "Creates a new array", "None"],
        answer: "Checks if at least one element passes a test",
        difficulty: "medium",
        topic: "Array Methods"
    },
    {
        id: 80,
        question: "What is the purpose of 'event.preventDefault()'?",
        options: ["Prevents the default action of an event", "Stops event propagation", "Prevents further event listeners", "All of the above"],
        answer: "Prevents the default action of an event",
        difficulty: "medium",
        topic: "DOM"
    },
    {
        id: 81,
        question: "How do you convert a string to a number?",
        options: ["Number()", "parseInt()", "parseFloat()", "All of the above"],
        answer: "All of the above",
        difficulty: "easy",
        topic: "Type Coercion"
    },
    {
        id: 82,
        question: "What does the 'trim()' method do?",
        options: ["Removes whitespace from both ends", "Removes whitespace from the start", "Removes whitespace from the end", "Truncates a string"],
        answer: "Removes whitespace from both ends",
        difficulty: "easy",
        topic: "String Methods"
    },
    {
        id: 83,
        question: "What is the output of 'console.log(1 + 2 + '3')'?",
        options: ["33", "123", "6", "3"],
        answer: "33",
        difficulty: "medium",
        topic: "Type Coercion"
    },
    {
        id: 84,
        question: "Which method returns a shallow copy of a portion of an array?",
        options: ["slice()", "splice()", "copy()", "subarray()"],
        answer: "slice()",
        difficulty: "medium",
        topic: "Array Methods"
    },
    {
        id: 85,
        question: "What does the 'Object.keys()' method return?",
        options: ["An array of an object's own enumerable property names", "An array of an object's values", "An array of both keys and values", "None"],
        answer: "An array of an object's own enumerable property names",
        difficulty: "medium",
        topic: "Objects"
    },
    {
        id: 86,
        question: "How do you define a getter in an object?",
        options: ["get property() {}", "get: function() {}", "property: get() {}", "Both A and B"],
        answer: "Both A and B",
        difficulty: "hard",
        topic: "Objects"
    },
    {
        id: 87,
        question: "What is the output of 'console.log(!!'')'?",
        options: ["true", "false", "undefined", "''"],
        answer: "false",
        difficulty: "easy",
        topic: "Type Coercion"
    },
    {
        id: 88,
        question: "What does the 'setInterval()' function do?",
        options: ["Executes a function repeatedly with a fixed time delay", "Executes a function once after a delay", "Clears a timer", "None"],
        answer: "Executes a function repeatedly with a fixed time delay",
        difficulty: "easy",
        topic: "Asynchronous"
    },
    {
        id: 89,
        question: "What is the purpose of the 'super' keyword?",
        options: ["Calls the parent class constructor", "Refers to the parent object", "Both A and B", "None"],
        answer: "Both A and B",
        difficulty: "hard",
        topic: "Classes"
    },
    {
        id: 90,
        question: "Which method checks if an array includes a certain value?",
        options: ["includes()", "contains()", "has()", "indexOf()"],
        answer: "includes()",
        difficulty: "easy",
        topic: "Array Methods"
    },
    {
        id: 91,
        question: "What will 'console.log(3 + 4 * 5)' output?",
        options: ["35", "23", "27", "20"],
        answer: "23",
        difficulty: "easy",
        topic: "Operators"
    },
    {
        id: 92,
        question: "How do you create a template literal?",
        options: ["Using backticks `", "Using single quotes", "Using double quotes", "Using parentheses"],
        answer: "Using backticks `",
        difficulty: "easy",
        topic: "Strings"
    },
    {
        id: 93,
        question: "What does the 'every()' method return?",
        options: ["true if all elements pass a test", "false if any element fails", "A new array", "Both A and B"],
        answer: "Both A and B",
        difficulty: "medium",
        topic: "Array Methods"
    },
    {
        id: 94,
        question: "What is a pure function?",
        options: ["A function that always returns the same output for same input and has no side effects", "A function that does not use global variables", "A recursive function", "A built‑in function"],
        answer: "A function that always returns the same output for same input and has no side effects",
        difficulty: "hard",
        topic: "Functions"
    },
    {
        id: 95,
        question: "Which statement is used to iterate over the properties of an object?",
        options: ["for...in", "for...of", "forEach", "map"],
        answer: "for...in",
        difficulty: "medium",
        topic: "Loops"
    },
    {
        id: 96,
        question: "What does the 'Math.max()' method do?",
        options: ["Returns the largest of zero or more numbers", "Returns the maximum value in an array", "Rounds a number up", "None"],
        answer: "Returns the largest of zero or more numbers",
        difficulty: "easy",
        topic: "Math"
    },
    {
        id: 97,
        question: "How can you check if a variable is an array?",
        options: ["Array.isArray()", "typeof variable === 'array'", "variable instanceof Array", "Both A and C"],
        answer: "Both A and C",
        difficulty: "medium",
        topic: "Array Methods"
    },
    {
        id: 98,
        question: "What is the output of 'console.log(1 < 2 < 3)'?",
        options: ["true", "false", "undefined", "Error"],
        answer: "true",
        difficulty: "hard",
        topic: "Operators"
    },
    {
        id: 99,
        question: "What does the 'toFixed()' method do?",
        options: ["Formats a number with a specified number of decimals", "Rounds a number", "Converts to string", "All of the above"],
        answer: "All of the above",
        difficulty: "medium",
        topic: "Number Methods"
    },
    {
        id: 100,
        question: "How do you stop an interval created with setInterval?",
        options: ["clearInterval(id)", "stopInterval(id)", "clearTimeout(id)", "interval.stop()"],
        answer: "clearInterval(id)",
        difficulty: "easy",
        topic: "Asynchronous"
    },
    {
        id: 101,
        question: "What does `typeof undefined` return?",
        options: ["undefined", "object", "null", "number"],
        answer: "undefined",
        difficulty: "easy",
        topic: "Data Types"
    },
    {
        id: 102,
        question: "Which array method adds one or more elements to the beginning of an array?",
        options: ["push()", "pop()", "unshift()", "shift()"],
        answer: "unshift()",
        difficulty: "easy",
        topic: "Array Methods"
    },
    {
        id: 103,
        question: "What does the `Array.from()` method do?",
        options: [
            "Creates a new array from an array-like or iterable object",
            "Converts an array to a string",
            "Creates a new array with a given length",
            "None"
        ],
        answer: "Creates a new array from an array-like or iterable object",
        difficulty: "medium",
        topic: "Array Methods"
    },
    {
        id: 104,
        question: "Which method returns the first element in an array that satisfies a provided testing function?",
        options: ["find()", "filter()", "map()", "some()"],
        answer: "find()",
        difficulty: "medium",
        topic: "Array Methods"
    },
    {
        id: 105,
        question: "What is the result of `'hello'.charAt(1)`?",
        options: ["h", "e", "l", "o"],
        answer: "e",
        difficulty: "easy",
        topic: "String Methods"
    },
    {
        id: 106,
        question: "Which method returns a new string with a specified number of copies of the original string?",
        options: ["repeat()", "copy()", "duplicate()", "times()"],
        answer: "repeat()",
        difficulty: "easy",
        topic: "String Methods"
    },
    {
        id: 107,
        question: "What does the `Object.assign()` method do?",
        options: [
            "Copies the values of all enumerable own properties from one or more source objects to a target object",
            "Creates a new object with a specified prototype",
            "Merges objects deeply",
            "None"
        ],
        answer: "Copies the values of all enumerable own properties from one or more source objects to a target object",
        difficulty: "medium",
        topic: "Objects"
    },
    {
        id: 108,
        question: "How can you get an array of a given object's own enumerable property values?",
        options: ["Object.values()", "Object.entries()", "Object.keys()", "Object.getOwnPropertyNames()"],
        answer: "Object.values()",
        difficulty: "medium",
        topic: "Objects"
    },
    {
        id: 109,
        question: "What is the output of `console.log(0 == false)`?",
        options: ["true", "false", "undefined", "Error"],
        answer: "true",
        difficulty: "easy",
        topic: "Type Coercion"
    },
    {
        id: 110,
        question: "What is the output of `console.log(0 === false)`?",
        options: ["true", "false", "undefined", "Error"],
        answer: "false",
        difficulty: "easy",
        topic: "Operators"
    },
    {
        id: 111,
        question: "What is the purpose of the `++` operator?",
        options: ["Increments a variable by 1", "Adds two numbers", "Concatenates strings", "None"],
        answer: "Increments a variable by 1",
        difficulty: "easy",
        topic: "Operators"
    },
    {
        id: 112,
        question: "What does `typeof x` return if `x` is not declared?",
        options: ["undefined", "null", "ReferenceError", "object"],
        answer: "undefined",
        difficulty: "medium",
        topic: "Data Types"
    },
    {
        id: 113,
        question: "What is the result of `[] == ![]`?",
        options: ["true", "false", "undefined", "Error"],
        answer: "true",
        difficulty: "hard",
        topic: "Type Coercion"
    },
    {
        id: 114,
        question: "Which method is used to parse a string as an integer?",
        options: ["parseInt()", "parseFloat()", "Number()", "Integer()"],
        answer: "parseInt()",
        difficulty: "easy",
        topic: "Type Coercion"
    },
    {
        id: 115,
        question: "What does the `Math.floor()` method do?",
        options: [
            "Rounds a number down to the nearest integer",
            "Rounds a number up",
            "Rounds to the nearest integer",
            "Truncates decimal part"
        ],
        answer: "Rounds a number down to the nearest integer",
        difficulty: "easy",
        topic: "Math"
    },
    {
        id: 116,
        question: "How do you generate a random integer between 1 and 10 inclusive?",
        options: [
            "Math.floor(Math.random() * 10) + 1",
            "Math.ceil(Math.random() * 10)",
            "Math.round(Math.random() * 10)",
            "Math.random(1,10)"
        ],
        answer: "Math.floor(Math.random() * 10) + 1",
        difficulty: "medium",
        topic: "Math"
    },
    {
        id: 117,
        question: "How do you create a Date object representing the current date and time?",
        options: ["new Date()", "Date.now()", "Date.today()", "new Date.now()"],
        answer: "new Date()",
        difficulty: "easy",
        topic: "Date"
    },
    {
        id: 118,
        question: "Which method returns the day of the month (1-31) for a specified date?",
        options: ["getDate()", "getDay()", "getMonth()", "getFullYear()"],
        answer: "getDate()",
        difficulty: "easy",
        topic: "Date"
    },
    {
        id: 119,
        question: "What is the purpose of the `JSON.stringify()` method?",
        options: [
            "Converts a JavaScript object to a JSON string",
            "Parses a JSON string into an object",
            "Validates JSON",
            "None"
        ],
        answer: "Converts a JavaScript object to a JSON string",
        difficulty: "easy",
        topic: "JSON"
    },
    {
        id: 120,
        question: "What does the `Promise.all()` method do?",
        options: [
            "Waits for all promises to resolve or any to reject",
            "Waits for the first promise to settle",
            "Returns a promise that resolves with an array of results",
            "Both A and C"
        ],
        answer: "Both A and C",
        difficulty: "medium",
        topic: "Promises"
    },
    {
        id: 121,
        question: "What is the output of `Promise.race()`?",
        options: [
            "Returns a promise that resolves/rejects as soon as one of the promises settles",
            "Returns a promise that resolves with all results",
            "Returns a promise that rejects if any reject",
            "None"
        ],
        answer: "Returns a promise that resolves/rejects as soon as one of the promises settles",
        difficulty: "medium",
        topic: "Promises"
    },
    {
        id: 122,
        question: "How do you handle errors in an async/await function?",
        options: ["try...catch", ".catch()", "Both A and B", "Error handling is automatic"],
        answer: "Both A and B",
        difficulty: "medium",
        topic: "Asynchronous"
    },
    {
        id: 123,
        question: "What is the purpose of the `finally` block in a promise?",
        options: [
            "Executes after the promise settles, regardless of outcome",
            "Executes only on rejection",
            "Executes only on resolution",
            "None"
        ],
        answer: "Executes after the promise settles, regardless of outcome",
        difficulty: "medium",
        topic: "Promises"
    },
    {
        id: 124,
        question: "How do you extend a class in ES6?",
        options: [
            "class Child extends Parent",
            "class Child inherits Parent",
            "class Child : Parent",
            "class Child = Parent"
        ],
        answer: "class Child extends Parent",
        difficulty: "medium",
        topic: "Classes"
    },
    {
        id: 125,
        question: "What is the purpose of the `super()` call in a child class constructor?",
        options: [
            "Calls the parent class constructor",
            "Calls a parent method",
            "Creates a super object",
            "None"
        ],
        answer: "Calls the parent class constructor",
        difficulty: "medium",
        topic: "Classes"
    },
    {
        id: 126,
        question: "What is a static method in a class?",
        options: [
            "A method that belongs to the class itself, not instances",
            "A method that cannot be overridden",
            "A method that is called automatically",
            "None"
        ],
        answer: "A method that belongs to the class itself, not instances",
        difficulty: "medium",
        topic: "Classes"
    },
    {
        id: 127,
        question: "How do you define a static method in a class?",
        options: [
            "static methodName() {}",
            "methodName.static()",
            "class methodName()",
            "static: methodName()"
        ],
        answer: "static methodName() {}",
        difficulty: "medium",
        topic: "Classes"
    },
    {
        id: 128,
        question: "What is the output of `console.log(1 + '2' - 1)`?",
        options: ["11", "2", "12", "NaN"],
        answer: "11",
        difficulty: "medium",
        topic: "Type Coercion"
    },
    {
        id: 129,
        question: "What does the `Array.prototype.flat()` method do?",
        options: [
            "Creates a new array with all sub-array elements concatenated up to a specified depth",
            "Flattens an array into a string",
            "Removes empty slots",
            "None"
        ],
        answer: "Creates a new array with all sub-array elements concatenated up to a specified depth",
        difficulty: "medium",
        topic: "Array Methods"
    },
    {
        id: 130,
        question: "What is the result of `[1, 2, 3].flatMap(x => [x, x * 2])`?",
        options: [
            "[1, 2, 2, 4, 3, 6]",
            "[[1,2], [2,4], [3,6]]",
            "[1,2,3]",
            "Error"
        ],
        answer: "[1, 2, 2, 4, 3, 6]",
        difficulty: "hard",
        topic: "Array Methods"
    },
    {
        id: 131,
        question: "Which method returns the index of the first element in an array that passes a test?",
        options: ["findIndex()", "indexOf()", "find()", "search()"],
        answer: "findIndex()",
        difficulty: "medium",
        topic: "Array Methods"
    },
    {
        id: 132,
        question: "What does the `Object.entries()` method return?",
        options: [
            "An array of a given object's own enumerable string-keyed property [key, value] pairs",
            "An array of keys",
            "An array of values",
            "An object"
        ],
        answer: "An array of a given object's own enumerable string-keyed property [key, value] pairs",
        difficulty: "medium",
        topic: "Objects"
    },
    {
        id: 133,
        question: "How can you prevent adding new properties to an object while allowing existing ones to be modified?",
        options: ["Object.seal()", "Object.freeze()", "Object.preventExtensions()", "Object.lock()"],
        answer: "Object.seal()",
        difficulty: "hard",
        topic: "Objects"
    },
    {
        id: 134,
        question: "What does `Object.freeze()` do?",
        options: [
            "Prevents adding, removing, or modifying properties",
            "Prevents adding new properties only",
            "Makes object immutable",
            "Both A and C"
        ],
        answer: "Both A and C",
        difficulty: "medium",
        topic: "Objects"
    },
    {
        id: 135,
        question: "What is a generator function?",
        options: [
            "A function that can be paused and resumed, defined with function*",
            "A function that generates random numbers",
            "A function that returns multiple values",
            "None"
        ],
        answer: "A function that can be paused and resumed, defined with function*",
        difficulty: "hard",
        topic: "ES6 Features"
    },
    {
        id: 136,
        question: "How do you create a generator function?",
        options: [
            "function* name() {}",
            "function name*() {}",
            "generator function name() {}",
            "function name() * {}"
        ],
        answer: "function* name() {}",
        difficulty: "hard",
        topic: "ES6 Features"
    },
    {
        id: 137,
        question: "What is the purpose of the `yield` keyword?",
        options: [
            "Pauses a generator function and returns a value",
            "Returns a value from a function",
            "Creates a new generator",
            "None"
        ],
        answer: "Pauses a generator function and returns a value",
        difficulty: "hard",
        topic: "ES6 Features"
    },
    {
        id: 138,
        question: "What is a Set in JavaScript?",
        options: [
            "A collection of unique values",
            "A collection of key-value pairs",
            "An ordered list",
            "None"
        ],
        answer: "A collection of unique values",
        difficulty: "easy",
        topic: "Data Structures"
    },
    {
        id: 139,
        question: "How do you add an element to a Set?",
        options: ["set.add(value)", "set.push(value)", "set.insert(value)", "set.append(value)"],
        answer: "set.add(value)",
        difficulty: "easy",
        topic: "Data Structures"
    },
    {
        id: 140,
        question: "What is a Map in JavaScript?",
        options: [
            "A collection of key-value pairs where keys can be any type",
            "An object with string keys only",
            "An array of pairs",
            "None"
        ],
        answer: "A collection of key-value pairs where keys can be any type",
        difficulty: "easy",
        topic: "Data Structures"
    },
    {
        id: 141,
        question: "How do you get a value from a Map?",
        options: ["map.get(key)", "map[key]", "map.retrieve(key)", "map.value(key)"],
        answer: "map.get(key)",
        difficulty: "easy",
        topic: "Data Structures"
    },
    {
        id: 142,
        question: "What is the difference between `localStorage` and `sessionStorage`?",
        options: [
            "localStorage persists until cleared, sessionStorage is cleared when the page session ends",
            "sessionStorage persists forever",
            "localStorage is for local files only",
            "No difference"
        ],
        answer: "localStorage persists until cleared, sessionStorage is cleared when the page session ends",
        difficulty: "medium",
        topic: "Web Storage"
    },
    {
        id: 143,
        question: "How do you store an object in localStorage?",
        options: [
            "localStorage.setItem('key', JSON.stringify(obj))",
            "localStorage.setItem('key', obj)",
            "localStorage.store('key', obj)",
            "localStorage.put('key', obj)"
        ],
        answer: "localStorage.setItem('key', JSON.stringify(obj))",
        difficulty: "medium",
        topic: "Web Storage"
    },
    {
        id: 144,
        question: "What does `document.getElementById('myId')` return?",
        options: [
            "The element with id 'myId'",
            "A list of elements",
            "null if not found",
            "Both A and C"
        ],
        answer: "Both A and C",
        difficulty: "easy",
        topic: "DOM"
    },
    {
        id: 145,
        question: "Which method creates a new HTML element?",
        options: [
            "document.createElement('div')",
            "document.newElement('div')",
            "document.makeElement('div')",
            "document.addElement('div')"
        ],
        answer: "document.createElement('div')",
        difficulty: "easy",
        topic: "DOM"
    },
    {
        id: 146,
        question: "How do you add a class to a DOM element?",
        options: [
            "element.classList.add('className')",
            "element.className += ' className'",
            "element.addClass('className')",
            "Both A and B"
        ],
        answer: "Both A and B",
        difficulty: "medium",
        topic: "DOM"
    },
    {
        id: 147,
        question: "What is event bubbling?",
        options: [
            "The event propagates from the target element up to the root",
            "The event propagates from root down to target",
            "The event is handled only at the target",
            "None"
        ],
        answer: "The event propagates from the target element up to the root",
        difficulty: "medium",
        topic: "Events"
    },
    {
        id: 148,
        question: "How do you stop an event from bubbling?",
        options: [
            "event.stopPropagation()",
            "event.preventDefault()",
            "event.stopImmediatePropagation()",
            "Both A and C"
        ],
        answer: "Both A and C",
        difficulty: "medium",
        topic: "Events"
    },
    {
        id: 149,
        question: "What is the difference between `event.target` and `event.currentTarget`?",
        options: [
            "target is the element that triggered the event, currentTarget is the element the listener is attached to",
            "They are the same",
            "target is the current element",
            "None"
        ],
        answer: "target is the element that triggered the event, currentTarget is the element the listener is attached to",
        difficulty: "hard",
        topic: "Events"
    },
    {
        id: 150,
        question: "How do you remove an event listener?",
        options: [
            "removeEventListener(type, listener)",
            "detachEvent(type, listener)",
            "off(type, listener)",
            "Both A and C (in some libraries)"
        ],
        answer: "removeEventListener(type, listener)",
        difficulty: "medium",
        topic: "Events"
    },
    {
        id: 151,
        question: "What does the `window.location` object provide?",
        options: [
            "Information about the current URL",
            "The browser history",
            "The document object",
            "None"
        ],
        answer: "Information about the current URL",
        difficulty: "easy",
        topic: "BOM"
    },
    {
        id: 152,
        question: "How do you redirect to another page using JavaScript?",
        options: [
            "window.location.href = 'url'",
            "window.location.assign('url')",
            "window.location.replace('url')",
            "All of the above"
        ],
        answer: "All of the above",
        difficulty: "easy",
        topic: "BOM"
    },
    {
        id: 153,
        question: "What is the purpose of `console.time()` and `console.timeEnd()`?",
        options: [
            "Measure the time taken between the two calls",
            "Log the current time",
            "Create a timer",
            "None"
        ],
        answer: "Measure the time taken between the two calls",
        difficulty: "medium",
        topic: "Debugging"
    },
    {
        id: 154,
        question: "What does the `debugger` statement do?",
        options: [
            "Pauses execution if a debugger is available",
            "Logs a debug message",
            "Throws an error",
            "None"
        ],
        answer: "Pauses execution if a debugger is available",
        difficulty: "medium",
        topic: "Debugging"
    },
    {
        id: 155,
        question: "In JavaScript, what will the following code output? `for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 100); }`",
        options: ["0 1 2", "3 3 3", "undefined", "Error"],
        answer: "3 3 3",
        difficulty: "hard",
        topic: "Closures"
    },
    {
        id: 156,
        question: "How can you fix the above issue to print 0,1,2?",
        options: [
            "Use let instead of var",
            "Use an IIFE",
            "Bind i",
            "All of the above"
        ],
        answer: "All of the above",
        difficulty: "hard",
        topic: "Closures"
    },
    {
        id: 157,
        question: "What is the output of `console.log(1 + 2 + '3' + 4)`?",
        options: ["334", "1234", "6", "33"],
        answer: "334",
        difficulty: "medium",
        topic: "Type Coercion"
    },
    {
        id: 158,
        question: "Which operator is used for nullish coalescing?",
        options: ["??", "||", "&&", "?"],
        answer: "??",
        difficulty: "medium",
        topic: "Operators"
    },
    {
        id: 159,
        question: "What does the optional chaining operator (`?.`) do?",
        options: [
            "Allows reading a property without throwing an error if the reference is null/undefined",
            "Chains method calls",
            "Creates optional parameters",
            "None"
        ],
        answer: "Allows reading a property without throwing an error if the reference is null/undefined",
        difficulty: "medium",
        topic: "Operators"
    },
    {
        id: 160,
        question: "What is the result of `null ?? 'default'`?",
        options: ["null", "default", "undefined", "Error"],
        answer: "default",
        difficulty: "easy",
        topic: "Operators"
    },
    {
        id: 161,
        question: "What is the result of `0 ?? 'default'`?",
        options: ["0", "default", "undefined", "Error"],
        answer: "0",
        difficulty: "medium",
        topic: "Operators"
    },
    {
        id: 162,
        question: "How do you destructure an object in JavaScript?",
        options: [
            "const {a, b} = obj",
            "const [a, b] = obj",
            "const a = obj.a, b = obj.b",
            "Both A and C"
        ],
        answer: "Both A and C",
        difficulty: "medium",
        topic: "ES6 Features"
    },
    {
        id: 163,
        question: "What is the output of `const {x, y} = {x:1, y:2, z:3}; console.log(y);`?",
        options: ["1", "2", "3", "undefined"],
        answer: "2",
        difficulty: "easy",
        topic: "ES6 Features"
    },
    {
        id: 164,
        question: "How do you swap two variables using destructuring?",
        options: ["[a, b] = [b, a]", "a = b; b = a", "swap(a,b)", "None"],
        answer: "[a, b] = [b, a]",
        difficulty: "medium",
        topic: "ES6 Features"
    },
    {
        id: 165,
        question: "What is a rest parameter?",
        options: [
            "Collects remaining arguments into an array",
            "Spreads an array",
            "Pauses a function",
            "None"
        ],
        answer: "Collects remaining arguments into an array",
        difficulty: "easy",
        topic: "Functions"
    },
    {
        id: 166,
        question: "How do you define a rest parameter in a function?",
        options: [
            "function f(...args) {}",
            "function f(args...) {}",
            "function f(args) {}",
            "function f(*args) {}"
        ],
        answer: "function f(...args) {}",
        difficulty: "easy",
        topic: "Functions"
    },
    {
        id: 167,
        question: "What is the difference between `arguments` object and rest parameters?",
        options: [
            "arguments is array-like, rest is a real array",
            "rest captures only named parameters",
            "arguments is not available in arrow functions",
            "All of the above"
        ],
        answer: "All of the above",
        difficulty: "hard",
        topic: "Functions"
    },
    {
        id: 168,
        question: "What does the `call()` method do?",
        options: [
            "Calls a function with a given `this` value and arguments provided individually",
            "Creates a new function",
            "Binds `this` permanently",
            "None"
        ],
        answer: "Calls a function with a given `this` value and arguments provided individually",
        difficulty: "medium",
        topic: "Functions"
    },
    {
        id: 169,
        question: "What is the difference between `call()` and `apply()`?",
        options: [
            "call() takes arguments as a list, apply() takes an array",
            "apply() takes arguments as a list, call() takes an array",
            "They are identical",
            "None"
        ],
        answer: "call() takes arguments as a list, apply() takes an array",
        difficulty: "medium",
        topic: "Functions"
    },
    {
        id: 170,
        question: "What does `bind()` return?",
        options: [
            "A new function with bound `this`",
            "The original function",
            "undefined",
            "An object"
        ],
        answer: "A new function with bound `this`",
        difficulty: "medium",
        topic: "Functions"
    },
    {
        id: 171,
        question: "What is the output of `console.log(2 + true)`?",
        options: ["2", "3", "true", "NaN"],
        answer: "3",
        difficulty: "easy",
        topic: "Type Coercion"
    },
    {
        id: 172,
        question: "What is the output of `console.log(2 + false)`?",
        options: ["2", "3", "false", "NaN"],
        answer: "2",
        difficulty: "easy",
        topic: "Type Coercion"
    },
    {
        id: 173,
        question: "What is the output of `console.log(!!0)`?",
        options: ["true", "false", "0", "undefined"],
        answer: "false",
        difficulty: "easy",
        topic: "Type Coercion"
    },
    {
        id: 174,
        question: "Which values are considered falsy in JavaScript?",
        options: [
            "false, 0, '', null, undefined, NaN",
            "false, 0, '', null, undefined",
            "false, 0, '', null",
            "All of the above including empty array"
        ],
        answer: "false, 0, '', null, undefined, NaN",
        difficulty: "medium",
        topic: "Type Coercion"
    },
    {
        id: 175,
        question: "What is the difference between `isNaN()` and `Number.isNaN()`?",
        options: [
            "isNaN coerces the value to a number, Number.isNaN does not",
            "They are the same",
            "Number.isNaN is older",
            "isNaN is strict"
        ],
        answer: "isNaN coerces the value to a number, Number.isNaN does not",
        difficulty: "hard",
        topic: "Type Coercion"
    },
    {
        id: 176,
        question: "What does `parseInt('10', 2)` return?",
        options: ["10", "2", "NaN", "Error"],
        answer: "2",
        difficulty: "medium",
        topic: "Type Coercion"
    },
    {
        id: 177,
        question: "What is the output of `console.log(3 * '3')`?",
        options: ["9", "33", "NaN", "Error"],
        answer: "9",
        difficulty: "easy",
        topic: "Type Coercion"
    },
    {
        id: 178,
        question: "Which operator checks if an object is an instance of a class?",
        options: ["instanceof", "typeof", "isInstance", "in"],
        answer: "instanceof",
        difficulty: "easy",
        topic: "Operators"
    },
    {
        id: 179,
        question: "What is the output of `[] instanceof Array`?",
        options: ["true", "false", "undefined", "Error"],
        answer: "true",
        difficulty: "easy",
        topic: "Operators"
    },
    {
        id: 180,
        question: "What is the output of `{} instanceof Object`?",
        options: ["true", "false", "undefined", "Error"],
        answer: "true",
        difficulty: "easy",
        topic: "Operators"
    },
    {
        id: 181,
        question: "What are the three states of a Promise?",
        options: ["pending, fulfilled, rejected", "start, success, failure", "waiting, done, error", "None"],
        answer: "pending, fulfilled, rejected",
        difficulty: "easy",
        topic: "Promises"
    },
    {
        id: 182,
        question: "What does `Promise.resolve()` do?",
        options: [
            "Returns a Promise object that is resolved with a given value",
            "Creates a new pending promise",
            "Rejects a promise",
            "None"
        ],
        answer: "Returns a Promise object that is resolved with a given value",
        difficulty: "medium",
        topic: "Promises"
    },
    {
        id: 183,
        question: "How do you catch an error in a promise chain?",
        options: [".catch()", "try/catch", ".finally()", ".error()"],
        answer: ".catch()",
        difficulty: "easy",
        topic: "Promises"
    },
    {
        id: 184,
        question: "What is the output of `Promise.reject('error').catch(e => e).then(console.log)`?",
        options: ["error", "undefined", "Promise rejected", "Error"],
        answer: "error",
        difficulty: "medium",
        topic: "Promises"
    },
    {
        id: 185,
        question: "What is the purpose of the `async` keyword?",
        options: [
            "Declares an asynchronous function that returns a promise",
            "Makes a function run in parallel",
            "Waits for a promise",
            "None"
        ],
        answer: "Declares an asynchronous function that returns a promise",
        difficulty: "easy",
        topic: "Asynchronous"
    },
    {
        id: 186,
        question: "What does `await` do?",
        options: [
            "Pauses the execution of an async function until a promise settles",
            "Returns a promise",
            "Throws an error",
            "None"
        ],
        answer: "Pauses the execution of an async function until a promise settles",
        difficulty: "easy",
        topic: "Asynchronous"
    },
    {
        id: 187,
        question: "Can you use `await` outside an async function?",
        options: ["Yes", "No", "Only in modules", "Only in Node.js"],
        answer: "Only in modules",
        difficulty: "hard",
        topic: "Asynchronous"
    },
    {
        id: 188,
        question: "What are microtasks in JavaScript?",
        options: [
            "Tasks that run after the current script and before macrotasks",
            "Tasks that run immediately",
            "Timers",
            "None"
        ],
        answer: "Tasks that run after the current script and before macrotasks",
        difficulty: "hard",
        topic: "Asynchronous"
    },
    {
        id: 189,
        question: "Which of the following is a microtask?",
        options: ["Promise callbacks", "setTimeout", "setInterval", "DOM events"],
        answer: "Promise callbacks",
        difficulty: "hard",
        topic: "Asynchronous"
    },
    {
        id: 190,
        question: "What is the output of `console.log('start'); setTimeout(() => console.log('timeout'), 0); Promise.resolve().then(() => console.log('promise')); console.log('end');`?",
        options: [
            "start, end, promise, timeout",
            "start, end, timeout, promise",
            "start, promise, end, timeout",
            "start, timeout, end, promise"
        ],
        answer: "start, end, promise, timeout",
        difficulty: "hard",
        topic: "Asynchronous"
    },
    {
        id: 191,
        question: "What is a cookie?",
        options: [
            "A small piece of data stored in the browser",
            "A server-side session",
            "A JavaScript object",
            "None"
        ],
        answer: "A small piece of data stored in the browser",
        difficulty: "easy",
        topic: "Web Storage"
    },
    {
        id: 192,
        question: "How do you set a cookie in JavaScript?",
        options: [
            "document.cookie = 'name=value'",
            "cookie.set('name','value')",
            "setCookie('name','value')",
            "window.cookie = 'name=value'"
        ],
        answer: "document.cookie = 'name=value'",
        difficulty: "medium",
        topic: "Web Storage"
    },
    {
        id: 193,
        question: "What is the same-origin policy?",
        options: [
            "A security mechanism that restricts how documents from one origin interact with resources from another",
            "A policy for naming variables",
            "A browser feature for caching",
            "None"
        ],
        answer: "A security mechanism that restricts how documents from one origin interact with resources from another",
        difficulty: "medium",
        topic: "Security"
    },
    {
        id: 194,
        question: "What is CORS?",
        options: [
            "Cross-Origin Resource Sharing, a mechanism to allow restricted resources on a web page to be requested from another domain",
            "A type of HTTP request",
            "A JavaScript library",
            "None"
        ],
        answer: "Cross-Origin Resource Sharing, a mechanism to allow restricted resources on a web page to be requested from another domain",
        difficulty: "medium",
        topic: "Security"
    },
    {
        id: 195,
        question: "What does `JSONP` stand for?",
        options: ["JSON with Padding", "JavaScript Object Notation Protocol", "JSON Parser", "None"],
        answer: "JSON with Padding",
        difficulty: "hard",
        topic: "JSON"
    },
    {
        id: 196,
        question: "What is a polyfill?",
        options: [
            "A piece of code that provides modern functionality on older browsers",
            "A filler for arrays",
            "A CSS technique",
            "None"
        ],
        answer: "A piece of code that provides modern functionality on older browsers",
        difficulty: "medium",
        topic: "Browser Compatibility"
    },
    {
        id: 197,
        question: "What is the purpose of `requestAnimationFrame`?",
        options: [
            "Tells the browser to perform an animation and requests a repaint before the next repaint",
            "Sets a timer for animation",
            "Creates a frame",
            "None"
        ],
        answer: "Tells the browser to perform an animation and requests a repaint before the next repaint",
        difficulty: "hard",
        topic: "Performance"
    },
    {
        id: 198,
        question: "What is debouncing?",
        options: [
            "A technique to limit the rate at which a function is called",
            "A way to combine functions",
            "A method to delay execution",
            "None"
        ],
        answer: "A technique to limit the rate at which a function is called",
        difficulty: "hard",
        topic: "Performance"
    },
    {
        id: 199,
        question: "What is throttling?",
        options: [
            "Ensures a function is called at most once in a specified time period",
            "Limits the number of times a function can be called",
            "Delays function execution",
            "None"
        ],
        answer: "Ensures a function is called at most once in a specified time period",
        difficulty: "hard",
        topic: "Performance"
    },
    {
        id: 200,
        question: "What is the value of a variable declared with `let` that has no initial value?",
        options: ["undefined", "null", "0", "ReferenceError"],
        answer: "undefined",
        difficulty: "easy",
        topic: "Variables"
    }
];

export default questions;