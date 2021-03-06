// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(x, y, cb) {
  return cb(x, y)
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = (a, b) => a + b

const multiply = (a, b) => a * b

const greeting = (fName, lName) => `Hello ${fName} ${lName}, nice to meet you!`

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: `nestedFunction` can access the variable `internal` because it closes over the value. A closure is when a variable maintains a reference to another value in a different lexical scope than the one that it's currently in. In this case, nestedFunction is the closure, and by definition (at least on Medium), all closures have access to three scope chains: it has access to its own scope, it has access to the variables of all its enclosing functions, and it has access to all variables defined in the global scope.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
