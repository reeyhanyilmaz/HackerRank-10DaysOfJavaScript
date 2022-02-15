/************** Day 0: Hello, World! **************/

function greeting(parameterVariable) {
  // This line prints 'Hello, World!' to the console:
  console.log("Hello, World!");

  // Write a line of code that prints parameterVariable to stdout using console.log:
  console.log(parameterVariable);
}


/************** Day 0: Data Types **************/
/* Method 1 */
const firstString =('HackerRank ');
// Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
console.log(firstInteger + Number(secondInteger));

// Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.

console.log(firstDecimal + Number(secondDecimal)); 
// Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
console.log(firstString+ secondString);




/* Method 2 */
const firstString =('HackerRank ');
// Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
console.log(firstInteger + parseInt(secondInteger));

// Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.

console.log(firstDecimal + parseFloat(secondDecimal)); // Number'da kullanılabilir.
// Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
console.log(firstString.concat(secondString));



/************** Day 1: Arithmetic Operators **************/

function getArea(length, width) {
  let area;
  // Write your code here
  area = length * width;
  return area;
}

function getPerimeter(length, width) {
  let perimeter;
  // Write your code here
  perimeter = 2 * (length + width);
  return perimeter;
}

/************** Day 1: Functions **************/
/* Method 1 */

/*
 * Create the function factorial here
 */
function factorial(n) {
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}

/* Method 2*/
/*
 * Create the function factorial here
 */
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

/************** Day:2 Conditional Statements: If-Else **************/

function getGrade(score) {
  let grade;
  // Write your code here
  if (score >= 25 && score <= 30) {
    return (grade = "A");
  } else if (score >= 20 && score <= 25) {
    return (grade = "B");
  } else if (score >= 15 && score <= 20) {
    return (grade = "C");
  } else if (score >= 10 && score <= 15) {
    return (grade = "D");
  } else if (score >= 5 && score <= 10) {
    return (grade = "E");
  } else if (score >= 0 && score <= 5) {
    return (grade = "F");
  }
  return grade;
}

function main() {
  const score = +readLine();

  console.log(getGrade(score));
}

/************** Day 2: Conditional Statements: Switch **************/

/* Hint: You can get the letter at some index  in  using the syntax s[i] or s.charAt(i). */

/*  Method 1: s.charAt(i)*/

function getLetter(s) {
  let letter;
  // Write your code here
  switch (s.charAt(0)) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      letter = "A";
      break;

    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      letter = "B";
      break;

    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
      letter = "C";
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
      letter = "D";
      break;
  }
  return letter;
}

/* Method 2: s[i] */

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
}

/************** Day 2: Loops **************/

/* Method 1 */

var vowels = ["a", "e", "i", "o", "u"];
function vowelsAndConsonants(s) {
  for (var index = 0; index < s.length; index++) {
    if (vowels.includes(s[index])) {
      console.log(s[index]);
    }
  }

  for (var index = 0; index < s.length; index++) {
    if (!vowels.includes(s[index])) {
      console.log(s[index]);
    }
  }
}

/* Method 2 */
var vowels = ["a", "e", "i", "o", "u"];
function vowelsAndConsonants(s) {
  for (var i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) > -1) {
      console.log(s[i]);
    }
  }

  for (var j = 0; j < s.length; j++) {
    if (vowels.indexOf(s[j]) < 0) {
      console.log(s[j]);
    }
  }
}

/* Method 3 */

function vowelsAndConsonants(s) {
  const vowels = "aeiou";
  var consonants = "";

  for (var i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      console.log(s[i]);
    } else {
      consonants += s[i] + "\n";
    }
  }
  console.log(consonants.trim());
}

/**************  Day 3: Arrays **************/

/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/

function getSecondLargest(nums) {
  // Complete the function
  nums.sort(function (x, y) {
    return y - x; //buyukten kucuge sıralandı
  });
  let results = [...new Set(nums)];
  return results[1];
}

/************ Day 3: Try, Catch, and Finally ************/

/* Method 1 */

function reverseString(s) {
  try {
    let splitString = s.split(""); //split array'i bölmek  için kullanılır
    let reverseArray = splitString.reverse(); //reverse alfabetik ters sıralar
    let joinArray = reverseArray.join(""); //join string yapar (4321)
    console.log(joinArray);
  } catch (error) {
    //error sembolik burada
    //Yeni bir satıra s yazdırın. Herhangi bir özel durum oluşturulmadıysa, bu, ters çevrilmiş dize olmalıdır; bir istisna atıldıysa, bu orijinal dize olmalıdır.
    console.log(error.message);
    console.log(s);
  }
}

/* Method 2 */

function reverseString(s) {
  try {
    s = s.split("").reverse().join(""); //try ve catch arasına çalışacak kodlar yazılır.
  } catch (error) {
    //error sembolik burada
    console.log("s.split not a function"); //catch ile finally arasına hata yakalandığında çalışacak kodlar yazılır.
  } finally {
    console.log(s); //finally'den sonra ise try tamamlandıktan sonra hata olsada olmasada çalışacak kodlar yazılır.
  }
}

/* Method 3 */

function reverseString(s) {
  typeof s !== "string"
    ? console.log("s.split is not a function")
    : (s = s.split("").reverse().join(""));
  console.log(s);
}
