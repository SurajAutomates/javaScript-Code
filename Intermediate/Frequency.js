let arr = [1,2,0,4,0,5];
let freq1 = {};

for(let i of arr){
    if(freq1[i]) {
        freq1[i]++;
    }
    else {
        freq1[i] = 1;
    }
}
console.log(freq1);
