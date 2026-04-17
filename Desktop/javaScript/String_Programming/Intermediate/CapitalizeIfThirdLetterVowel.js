// CapitalizeIfThirdLetterVowel.js
let s = "welcome to coding beauty";
s =s.toLocaleLowerCase();
let ans = s.split(" ").map(x => {
    let ch = x.charAt(2);
    if("aeiou".includes(ch)){
       x=  x.charAt(0).toUpperCase().concat(x.slice(1));
    }
    return x;
}).join(" ");
console.log(ans);
