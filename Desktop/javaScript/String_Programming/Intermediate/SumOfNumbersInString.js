// SumOfNumbersInString.js

let s = "AxB5#*eZ45jhjhh40gcg2000";
let num = s.match(/\d+/g);
let ans = num.map(x => Number(x)).reduce((acc,val) => acc + val);
console.log(ans);

