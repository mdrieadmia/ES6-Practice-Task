// 1. Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result
const multiply = (x, y, z) => x * y * z;
// console.log(multiply(5, 2, 3));

// 2. Write the following sentence in three lines and print the result : I am a web developer. I love to code. I love to eat briyani
const intro =  `I am a web developer. 
I love to code. 
I love to eat briyani.`;
// console.log(intro);

// 3. Write an arrow function that will take 2 parameters. One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and returns the result.
const sum = (a, b=5) => a + b;
console.log(sum(15));