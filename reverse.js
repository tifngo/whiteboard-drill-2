/* 
Parameters, Return, Example, Pseudocode (PREP)

P: string input
R: returns the same string but reversed
E: "Hello" & "Greetings from Earth"
P: 
    1. variable arr and assign to split string - .join("")
    2. create new array (reversedArr) and assign to arr.reverse()
    3. join reversedArray (reversedStr) and assign to str
    4. return str
*/

function reverseString(str) {
  let arr = str.split("");
  let reversedArr = arr.reverse();
  str = reversedArr.join("");
  return str;
}

reverseString("hello");
reverseString("Greetings from Earth");

// Approach not using the built-in reverse array method

function reverseString2(str) {
  const original_array = str.split("");
  const reversed_array = [];
  for (let i = original_array.length - 1; i >= 0; i--) {
    reversed_array.push(original_array[i]);
  }
  str = reversed_array.join("");
  console.log(str);
}

reverseString2("hello");
reverseString2("Greetings from Earth");
