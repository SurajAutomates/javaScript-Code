let arr = [1,2,3,4,5];
let k = 2;
/*
IMP :
let ans = arr.slice(arr.length-k,arr.length).concat(arr.slice(0,arr.length-k));
console.log(ans);
*/
let ans =[];
let val = arr.length-k;
for(let i = val ; i<arr.length ; i++){
    ans.push(arr[i]);
}
for(let i =0; i<val ;i++){
    ans.push(arr[i]);
}
console.log(ans);

