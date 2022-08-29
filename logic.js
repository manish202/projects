//[Q-1] find odd and even number
// const getNumber = (num) => num % 2 === 0 ? "even":"odd";
// console.log(getNumber(2));

//[Q-2] get factorial
// FIRST METHOD
// const getFactorial = (num) => {
//     let f = 1;
//     for(let i=num;i>=1;i--){
//         f *= i;
//     }
//     return f;
// }
// SECOND METHOD
// const getFactorial = (num) => {
//     if(num == 0 || num == 1){
//         return 1;
//     }else{
//         return num * getFactorial(num - 1);
//     }
// }
// console.log(getFactorial(5));

//[Q-3] get first pair from array which sum is 0
// FIRST METHOD
// const arr = [-5,-4,-3,-2,0,2,4,6,8];
// const getSum = () => {
//     const ans = [];
//     for(let i in arr){
//         let index = arr.indexOf(-arr[i]);
//         if(index == -1){
//             continue;
//         }else{
//             ans.push(arr[i],arr[index]);
//             break;
//         }
//     }
//     return ans;
// }
// SECOND METHOD
// const getSum = () => {
//     const ans = [];
//     for(let val of arr){
//         for(let i=1;i<arr.length;i++){
//             if(val + arr[i] == 0){ans.push(val,arr[i]); break;}
//         }
//         if(ans.length > 0){break;}
//     }
//     return ans;
// }
// THIRD METHOD
// const getSum = () => {
//     let left = 0;
//     let right = arr.length - 1;
//     while(left < right){
//         let sum = arr[left] + arr[right];
//         if(sum === 0){
//             return [arr[left] , arr[right]];
//         }else if(sum > 0){
//             right--;
//         }else{
//             left++;
//         }
//     }
// }
// console.log(getSum());


// [Q-4] get first pair from array which substraction is 0;
// const arr = [-5,-4,-3,-2,0,2,4,6,-3,8];
// const getSub = () => {
//     const ans = [];
//     for(let i in arr){
//         let index = arr.indexOf(arr[i],Number(i)+1);
//         if(index == -1){
//             continue;
//         }else{
//             ans.push(arr[i],arr[index]);
//             break;
//         }
//     }
//     return ans;
// }
// console.log(getSub());

//[Q-5] check string anagram
// let str1 = "hello";
// let str2 = "elolh";
// const is_anagram = () => {
//     if(str1.length !== str2.length){
//         return false;
//     }else{
//         //FIRST METHOD
//         // let x = str1.split("").sort().join("");
//         // let y = str2.split("").sort().join("");
//         // return x == y ;

//         //SECOND METHOD
//         // let counter = {};
//         // for(let val of str1){
//         //     counter[val] = ((counter[val]) || 0) + 1;
//         // }
//         // for(let val of str2){
//         //     if(!counter[val]){
//         //         return false;
//         //     }
//         //     counter[val] -= 1;
//         // }
//         // return true;
//     }
// }
// console.log(is_anagram());

//[Q-6] count unique numbers
// FIRST METHOD
// const arr = [1,1,2,2,3,3,3,4,4,5,6,7,8];
// console.log([...new Set(arr)].length);
// SECOND METHOD
// let myarr = arr.filter((val,ind,arr2) => {
//     return arr2.indexOf(val) == ind;
// });
// console.log(myarr.length);
//THIRD METHOD
// let myarr = [];
// for(let val of arr){
//     if(!myarr.includes(val)){myarr.push(val)}
// }
// console.log(myarr.length);
// FOURTH METHOD
// let i = 0;
// for(let j=1;j<arr.length;j++){
//     if(arr[i] !== arr[j]){
//         i++;
//         arr[i] = arr[j];
//     }
// }
// console.log(i+1);

//[Q-7] largest sum of arrays 4 digits
// let arr = [1,2,3,4,3,5,4,6,7,8];
// const getSum = () => {
//     arr = arr.sort();
//     let nums = [];
//     let start = arr.length - 4;
//     for(let i=start;i<arr.length;i++){
//         nums.push(arr[i]);
//     }
//     return nums.reduce((prev,cur) => prev + cur);
// }
// console.log(getSum());

//[Q-8] checking square in another array
// let arr1 = [1,2,3,4];
// let arr2 = [1,9,4,16];
// FIRST METHOD
// let ans = arr1.every((val) => {
//     return arr2.includes(val*val);
// });
// console.log(ans);
//SECOND METHOD
// const getAnswer = () => {
//     let results = [];
//     for(let val of arr1){
//         for(let val2 of arr2){
//             if(val*val == val2){results.push(true)}
//         }
//     }
//     return results.length == 4;
// }
// console.log(getAnswer());
// THIRD METHOD
// const getAnswer = () => {
//     let statement = [];
//     for(let i=0;i<arr1.length;i++){
//         statement.push(arr2.includes(arr1[i]*arr1[i]));
//     }
//     return !statement.includes(false);
// }
// console.log(getAnswer());

//[Q-9] 