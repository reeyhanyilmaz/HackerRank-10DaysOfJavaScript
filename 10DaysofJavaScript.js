/******** Day 0: Hello, World! ********/

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable);
}



/******** Day 1: Arithmetic Operators ********/

function getArea(length, width) {
    let area;
    // Write your code here
    area= (length*width)
    return area;
}

function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter= 2* (length+width)
    return perimeter;
}



/******** Day 1: Functions ********/
 /* 1.Method*/

 /*
 * Create the function factorial here
 */
function factorial (n) {
    if (n<2) {
        return 1;
    }
    return n* factorial(n-1);
}

/* 2.Method */ 
 /*
 * Create the function factorial here
 */
function factorial (n) {
    if (n===0) {
        return 1;
    } else {
        return n* factorial(n-1);
    }
}



/******** Day:2 Conditional Statements: If-Else ********/

function getGrade(score) {
    let grade;
    // Write your code here
    if (score>=25 && score<=30) { return grade="A"}
    else if (score>=20 && score<=25) { return grade="B"}
    else if (score>=15 && score<=20) { return grade="C"}
    else if (score>=10 && score<=15) { return grade="D"}
    else if (score>=5 && score<=10) {return grade="E"}
    else if (score>=0 && score<=5) {return grade="F"}
    return grade;
}

function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}



/******** Day 2: Conditional Statements: Switch ********/

/* Hint: You can get the letter at some index  in  using the syntax s[i] or s.charAt(i). */ 

/* 1. method : s.charAt(i)*/ 

function getLetter(s) {
    let letter;
    // Write your code here
    switch(s.charAt (0)) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        letter = "A"
        break;
        
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
        letter = "B"
        break;
        
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
         letter = "C"
         break;
         
         case "n":
         case "p":
         case "q":
         case "r":
         case "s":
         case "t":
         case "v":
         case "w":
         case "x":
         case "y":
         case "z":
         letter = "D"
         break;      
    }
    return letter;
}


/* 2. Method s[i] */

function getLetter(s) {
    let letter;
    // Write your code here
    switch (true) {
        case "aeiou".includes(s[0]):
        letter = "A";
        break;
        case "bcdfg".includes(s[0]):
        letter = "B";
        break;
        case "hjklm".includes(s[0]):
        letter = "C";
        break;
        case "npqrstvwxyz".includes(s[0]):
        letter = "D";
        break;
    }


    /* Day 3: Arrays */


    /**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/

function getSecondLargest(nums) {
    // Complete the function
    nums.sort(function(x,y){
      return y-x //buyukten kucuge sıralandı
  });
   let results = [...new Set(nums)];
   return results[1];
}
