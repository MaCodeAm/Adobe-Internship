/*

1. Given an array of numbers. Print frequency of each unique number. (Frequency is the
count of particular element divided by the count of all elements)

*/

function printFrequency(arr){

    let count = 1;
    let length = arr.length;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === undefined){
            continue;
        }
        for(let j= i; j < arr.length; j++){

            if(arr[j] !== undefined &&  arr[i] === arr[j] && i!== j){
                count++;
                arr[j]  = undefined;
            }

        }
        console.log(arr[i] + ": " + count / length);
        arr[i] = undefined;
        count = 1;
    }
}


/*
2. Write a function that accepts a string(a sentence) as a parameter and finds the longest
word within the string․ If there are several words which are the longest ones, print the
last word(words can be separated by space, comma or hyphen).
*/

function longestWord(str){
    let result = "";
    let arr = str.split(/[\s.,.-]+/);

    for(let i = 0; i < arr.length; i++){
        if(arr[i].length >= result.length){{
            result = arr[i];
        }}
    }
    

    console.log(result);
}

/*
3. Write a function to find longest substring in a given a string without repeating characters
except space character.
If there are several, return the last one. Consider that all letters are lowercase.
*/

function longestSubstring(str){

   
    let temp = "";
    let longest = temp;
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) === " "){
            continue;
        }
      for(let j =i+1; j < str.length; j++){
       temp = str.substring(i, j);

        if(temp.includes(str.charAt(j)) && str.charAt(j) !== " "){
           
            break;
        }
        if(temp.length >= longest.length-1){
            longest = str.substring(i, j+1);
        }
      } 

    }

    console.log(longest);

}


/*
4. Write a function to compute a new string from the given one by moving the first char to
come after the next two chars, so &quot;abc&quot; yields &quot;bca&quot;. Repeat this process for each
subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.
*/

function movingChars(str){

    let result = "";

    for(let i = 0; i < str.length; i+=3){
       
        if(i+2 < str.length){
        result+=str.charAt(i+1) + str.charAt(i+2) + str.charAt(i);

        }else  result+=str.substring(i);

    }

    console.log(result)
}

/*
5. Write a function, which receives an array as an argument which elements arrays of
numbers. Find biggest negative number of each array. Return product of that numbers.If
there is not any negative number in an array, ignore that one. Check that items of the
given array are arrays.
*/

function productOfNegativeNumbers(arr){
    for(let i = 0; i < arr.length; i++){
        if(!Array.isArray(arr[i])){
            console.log("Invalid argument");
            return;
        }
    }

let temp = [];
let index = 0;
let tempValue = undefined;

    for(let i = 0; i < arr.length; i++){
       
        for(let j = 0; j <arr[i].length ; j++){
            if(arr[i][j] < 0 && (tempValue === undefined || arr[i][j] > tempValue)){
                tempValue = arr[i][j];
            } 
                if(tempValue !== undefined &&  j === arr[i].length-1){
                    temp[index] = tempValue;
                    tempValue = undefined;
                    index++;
                    temp[index] =1;
                }
          }
    }

    let result = 1;

    for(let i = 0; i < temp.length; i++){
        result *= temp[i];
    }

    if(index > 0 && temp[0] !== undefined){
        console.log(result);
    } else console.log("No negatives");
   
}


/*
6. Write a JavaScript function to get all possible subsets of length 3 of the given array.
Assume that all elements in the array are unique.
*/

function generateSubsets(arr){

    if(arr.length <= 3){
        console.log(arr);
        return;
    }
    
  let temp = [3];
  let result = [];
  let index = 0;

  for(let a = 0; a < arr.length - 2; a++){
      
      for(let b = a+1; b < arr.length - 1; b++ ){
          for(let c = b+1; c < arr.length; c++){
              temp[0] = arr[a];
              temp[1] = arr[b];
              temp[2] = arr[c];
             result[index++] = temp;
             temp = [];

          }
      }
  } 
  
  console.log(result);
}


