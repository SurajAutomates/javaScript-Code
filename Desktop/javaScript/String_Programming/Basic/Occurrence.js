let s = "maharashtra";
let freq = {};
s.split("").forEach(x=>{
    if(freq[x]){
        freq[x]++;
    }
    else{
        freq[x] = 1;
    }
})
console.log(freq);

