let arr = [5,3,8,2,9];
// with sorting 
arr.sort();
console.log(arr[1]);

// without sorting
let min = Infinity;
let second_min = Infinity;

for(let i of arr){
    if(i<min){
        second_min = min;
        min = i;
    }
    else if(i<second_min && i != min){
        second_min = i;
    }
}
console.log(second_min);
