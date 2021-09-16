console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('Testing helloName:', helloName('Mike'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber){
  // return firstNumber + secondNumber;
  let answer = firstNumber + secondNumber;
  return answer;
}

console.log('Testing addNumbers 2+4:', addNumbers(2, 4));


// 4. Function to multiply three numbers & return the result
function multiplyThree(num0, num1, num2){
  answer = num0 * num1 * num2;
  return answer;
}
console.log('Test multiplyThree 4*5*6:', multiplyThree(4, 5, 6));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  if ((array.length) > 0){
    return array[array.length - 1]
  }
  return 'undefined'
}

console.log('Testing getLast w/ array:', getLast(['dog', 'cat', 'fish', 'elephant']));
console.log('Testing getLast w/o array:', getLast([]));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for (let i in array){
    if (array[i] === value){
      return true;
    } //end if
  } //end for loop
  return false;
}


console.log('Testing find with value in array:', find(4, [1, 2, 3, 4, 5, 6]));
console.log('Testing find w/o value in array:', find(99, [1, 2, 3, 4, 5, 6]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string.charAt(0) === letter){
    return true;
  }
  return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0
  // TODO: loop to add items
    for (let number of array){
      sum += number;
    } //end for
  return sum;
}

console.log('Testing sumAll w/ 1,2,3,4,5,6:', sumAll([1, 2, 3, 4, 5, 6]));



// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function onlyPos(array){
  for (i = 0; i < (array.length); i++){
    console.log(array[i], array);
    if (array[i] < 0){
      array.splice(i, 1);
      i--;
    } //end if
  } //end for
  return array;
}
console.log('Testing onlyPos with -2, -1, 0, 1, 2:', onlyPos([-2, -1, 0, 1, 2]));
console.log('Testing onlyPos with -4, -3, -2, -1, 0:', onlyPos([-4, -3, -2, -1, 0]));


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//Find the mean in a set of numbers
function meanNumbers(array){
  let mean = sumAll(array) / array.length;      //Using the sumAll function from above
  return mean;
}

console.log('Testing meanNumbers w/ 321, 123, 756, 98876, 4:', meanNumbers([321, 123, 756, 98876, 4]));
