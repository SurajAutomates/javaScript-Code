let arr1 = [1,2,3];
let arr2 = [3,4,5];

let ans = [...arr1];
arr2.forEach(ele => {
    if(!ans.includes(ele)){
        ans.push(ele);
    }
})
console.log(ans);


// let ans = [...new Set([...arr1, ...arr2])];

