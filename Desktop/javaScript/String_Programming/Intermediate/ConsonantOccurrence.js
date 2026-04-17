// ConsonantOccurrence.js
let s = "maharashtra";
let fre = {};
s.split("").forEach(x => {
    if(!"aeiou".includes(x)){
        if(fre[x]){
            fre[x]++;
        }
        else{
            fre[x] = 1;
        }
    }
});
console.log(fre);
