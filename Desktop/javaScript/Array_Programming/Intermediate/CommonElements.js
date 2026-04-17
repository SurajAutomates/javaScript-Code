let arr1 = [1,2,3,4,5];
let arr2 = [3,4,5,6,7];

for(let i of arr1){
    if(arr2.includes(i)){
        console.log(i);
    }
}
