let arr = [1,2,0,4,0,5];
let count = 0;
arr.forEach(ele => {
    if(ele==0){
        count++;
    }
})

let ans = arr.filter(ele => ele!=0);
for(let i = 1;i<=count;i++){
    ans.push(0);
}
console.log(ans);

