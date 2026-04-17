let s = "brahma";
let ans = s.split("").filter(x=>{
    if(!"aeiou".includes(x)){
        return x;
    }
}).join("");
console.log(ans);
