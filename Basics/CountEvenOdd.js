let arr = [5,3,8,2,9];
let evenCount = 0;
let oddCount = 0;
for(let i of arr){
    if (i%2==0) {
        evenCount++;
    } else {
        oddCount++;
    }
}
console.log("even numbers count: "+ evenCount);
console.log("odd numbers count: "+ oddCount);

