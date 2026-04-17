let arr = [1,2,4,6,7];
let max = Math.max(...arr);
for(let i = 1 ;i<=max;i++){
    if (!arr.includes(i)) {
        console.log(i);
    }
}

/*
let arr = [1,2,4,6,7];

let set = new Set(arr);
let max = Math.max(...arr);

for(let i = 1; i <= max; i++){
    if(!set.has(i)){
        console.log(i);
    }
}
*/