let arr = [5,3,8,2,9];
// with inbuilt method
let small = Math.min(...arr);
console.log(small);

// without Inbuilt method
let min = Infinity;
for(let i of arr){
    if(i<min){
        min = i;
    }
}
console.log(min);

