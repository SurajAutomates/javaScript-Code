let arr = [1,2,0,4,0,5];
let unique = [...new Set(arr)]
console.log(unique);

// using loop
let uni = [];
for(let i of arr){
    if( ! uni.includes(i)){
        uni.push(i);
    }
}
console.log(uni);
