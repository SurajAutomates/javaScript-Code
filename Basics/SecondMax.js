let arr = [5,3,8,2,9];
// with sorting 
arr.sort().reverse();
console.log(arr[1]);

// Without Sorting 
let max = -Infinity;
let second_max = -Infinity;
for(let i of arr){
    if(i>max){
        second_max = max;
        max = i;
    }
    else if(i>second_max && i!=max){
        second_max = i;
    }
}
console.log(second_max);
