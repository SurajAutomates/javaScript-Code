let arr = [1,2,3,4,5];
let k = 2;

// let ans = [];
// for(let i = k;i<arr.length;i++){
//     ans.push(arr[i]);
// }

// for(let i = 0;i<k;i++){
//     ans.push(arr[i]);
// }
// console.log(ans);

let ans = arr.slice(k).concat(arr.slice(0,k));
console.log(ans);



