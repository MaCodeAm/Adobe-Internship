/*
 1. Given an array of nested arrays. Write a recursive function that flattens it. 
 (Hint create function that concats arrays).

*/

function flatten(arr){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            res = res.concat(flatten(arr[i]));
        } else res.push(arr[i]);
    }
    return res;
}

console.log(flatten(    [1, [3, 4, [1, 2]], 10]));
console.log( flatten(  [14,[1,[[[ 3, []]]], 1], 0]));

/*

2. Given a number. Write a function that calculates its sum of the digits and if that 
sum has more than 1 digit find the sum of digits of that number. Repeat that process
 if needed and return the result.
*/

function sumOfTheDigits(num){
    if(num < 10) return  num;
    return sumOfTheDigits(calculateSum(num));
  }
 
 function calculateSum(num, sum = 0){
     if(num < 10) return sum + num;
      sum += num % 10;
     return calculateSum(Math.floor(num / 10), sum);
 }

 console.log(sumOfTheDigits(14));
 console.log(sumOfTheDigits(29));
 console.log(sumOfTheDigits(999999999999));

 /*
 3. Given an object. Invert it (keys become values and values become keys). If there 
 is more than key for that given value create an array.

 */

 function invert(obj){
    let result = {};
    for(let [key, value] of Object.entries(obj)){
         if(result.hasOwnProperty(value)) {
             result[value] = [...result[value], key];
         } else result[value] = key;
         }
     return result;   
     }
 
 console.log(invert({ a: '1', b: '2' ,  c: '2' }));

 /*
  4. Given a string of digits, output all the contiguous substrings of length n in that string.
 */
  function createSubStrings(str, len){
    let result = "";
    for(let i = 0; i <= str.length - len; i++){
        result+=", ";
        result+=str.slice(i, (i + len));
        }
    return result.slice(2);
}

console.log(createSubStrings("495215", 3));
console.log(createSubStrings("abcdfghz", 7));

/*
 5. Given an array of integers. All numbers are unique. Find the count of missing 
 numbers between minimum and maximum elements to make integers sequence.
*/
function countOfMIssingNumbers(arr){
    let min = arr[0];
    let max = min;
    for(let i = 0; i < arr.length; i++){
        if(min > arr[i]) min = arr[i];
        if(max < arr[i]) max = arr[i];
    }
    return max - min - arr.length + 1;
}

console.log(countOfMIssingNumbers([8,7,1,3, 15]));
