let s = "sairaj";
let freq = {};
s =s.toLocaleLowerCase();
s.split("").forEach(x=>{
    if("aeiou".includes(x)){
        if(freq[x]){
            freq[x]++;
        }
        else {
            freq[x] = 1;
        }
    }
})
console.log(freq);

