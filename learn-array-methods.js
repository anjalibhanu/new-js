//PUSH AND POP
// let arr = ["India", "Srilanka"];
// console.log(arr);
// arr.push("Australia"); //ADDING THE ELEMENT INTO UR ARRAY(At tale end)
// console.log(arr);
// arr.pop();     //REMOVING AN ELEMENT FROM UR ARRAY(At tale end)
// console.log(arr);

// let arr = ["India", "Srilanka"];
// console.log(arr);
// arr.unshift("Zimbavae"); //ADDING ELEMENT IN FIRST(at first/head)
// console.log(arr);
// arr.shift();   //REMOVING THE ELEMENT(at first)
// console.log(arr);

// let arr=['a','z','e','b','h'];
// console.log(arr);
// console.log(arr.sort()); //Helps to rearrange in alphabetical order
// console.log(arr.sort().reverse());
// console.log(arr.join(""));

// Write a js program
// Input arr=[1,2,3,4,5,6];
// final=7;
// o/p=[[0,5][1,4][2,3]];
//ans-
// let op = [];
// let arr = [1, 2, 3, 4, 5, 6];
// let final = 7;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === final) {
//       op.push([i, j]);
//     }
//   }
// }
// console.log("o/p is", op);

//Another  example
// var indexPairs = function (nums, target) {
//   let op = [];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         op.push([i, j]);
//       }
//     }
//   }
//   returnop;
// };
// let output = indexPairs([1, 2, 3, 4, 5]);
// console.log("output", output);

//Write a js program to find out whether ur input string is a palindrome
//split,reverse,join

// let str = "Madam";
// let op = str.split("").reverse().join("");
// if (str === op) {
//   console.log("It's a palindrome");
// }
// let str = "gadag";
// const reversedStr = str.split("").reverse().join("");
// console.log("is the string palindrome", str === reversedStr);

let arr = [1, 2, 3, 4, 5, 6, 7];
let final = 9;
let result = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    for (let k = j + 1; k < arr.length; i++) {
      if (arr[i] + arr[j] + arr[k] === 9) {
      }
      result.push([i, j, k]);
    }   
  }
}
console.log("result");
