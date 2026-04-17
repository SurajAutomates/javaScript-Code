let arr1 = [1,2,3];
let arr2 = [4,5,6];

let ans = [];
for(let i of arr1){
    ans.push(i);
}
for(let i of arr2){
    ans.push(i);
}
console.log(ans);

/**
 * let ans = [...arr1, ...arr2];
 * 
 * let ans = arr1.concat(arr2);
 * 
 */
