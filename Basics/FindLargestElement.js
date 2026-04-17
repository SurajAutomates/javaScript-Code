let arr = [5,3,8,2,9];
// with inbuilt method
let large = Math.max(...arr);
console.log(large);

console.log();
// without inbuilt method
let max = -Infinity;
for (let i of arr) {
    if(i>max){    
        max = i;
    }
}
console.log(max);


