 /* 

1. Write a function which receives an array and a number as arguments and returns a new array
from the elements of the given array which are larger than the given number.

*/

function largerThan(arr, number){
    let result = [];
    for(let i =0; i < arr.length; i++){
        if(arr[i] > number){
         result.push(arr[i]);
        }
    }
    return result.length > 0 ? result : console.log("Such values do not exist");
}


console.log(largerThan([10,25,16,-5,30,15,24], 16));
console.log(largerThan([1, 1, 2, -3, 0, 8, 4, 0], 9));


/*

2. Write a function, which receives two numbers as arguments and finds all numbers between
them such that each digit of the number is even. The numbers obtained should be printed in a
comma-separated sequence on a single line.

*/

function evenNumbers(start, end){
    let result = [];
    for(let i = start; i <= end; i++){
        if(areAllDigitsEven(i)){
            result.push(i);
        }
    }
    result.length > 0 ? console.log(result) : console.log("Such numbers do not exist.");

}

function areAllDigitsEven(number){
      while(number != 0){
        if( (number % 10) % 2 === 0){
            number = Math.floor(number / 10);
        }else return false;
    }
    return true;
}

evenNumbers(19, 42);
evenNumbers(99, 199);


/*

3. Write a recursive function to determine whether all digits of the number are odd or not.

*/

function arrOdd(digit){
    if(digit < 10 || digit % 2 === 0) return digit % 2 !== 0;
    return arrOdd(Math.floor(digit / 10));
}

console.log(arrOdd(4211133));
console.log(arrOdd(7791));
console.log(arrOdd(5));

/*

4. Given an array of numbers. Write a recursive function to find its minimal positive element. (if such
element does not exist, return -1)․

*/

function minimalPositiveNumber(arr, min = -1 ){
    
    if(arr.length === 1) return arr[0] >= 0 ? arr[0] : min;
    min = arr[0] >= 0 ? arr[0] : -1;
    if(min !== -1){
    return Math.min(min, minimalPositiveNumber(arr.slice(1), min));
    } else return minimalPositiveNumber(arr.slice(1), min);
}


console.log(minimalPositiveNumber([56,-9, 87, -23, 0, -105, 55, 1]));
console.log(minimalPositiveNumber([45, -9, 15, 5, -78]));
console.log(minimalPositiveNumber([-5,-9,-111,-1000,-7 ]));


/*
 5. Create a function that builds a tree like object given an array with object which
contains parent and id properties.

*/

function createTree(arr, root = null, newObj = {}){
    if(arr.length === 0) return {};
    let parentsArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].parent == root){
            parentsArray.push(arr[i]);
        }
    }
    for(let i = 0; i < parentsArray.length; i++){
        newObj[parentsArray[i].id] = {};
        createTree(arr, parentsArray[i].id, newObj[parentsArray[i].id]);
    }
    return newObj;
}

var treeNodes = [
    {parent: null, id: 0},
    {parent: 0, id: 1},
    {parent: 0, id: 2},
    {parent: 1, id: 3},
    {parent: 1, id: 4},
    {parent: 2, id: 5},
    {parent: 4, id: 6}
];


