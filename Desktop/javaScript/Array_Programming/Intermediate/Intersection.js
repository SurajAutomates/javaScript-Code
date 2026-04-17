let arr1 = [1,2,3,4];
let arr2 = [3,4,5,6];

/*
let ans = [];
for(let i of arr1){
    if(arr2.includes(i)){
       ans.push(i);
    }
}
console.log(ans);
*/

let ans = arr1.filter(ele => arr2.includes(ele))
console.log(ans);


