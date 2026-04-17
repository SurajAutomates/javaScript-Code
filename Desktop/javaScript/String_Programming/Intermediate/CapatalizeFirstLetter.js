// CapatalizeFirstLetter.js
let s = "wELCOME to coding beauty";
s = s.toLocaleLowerCase();
let ans = s.split(" ").map(x=>x.charAt(0).toUpperCase().concat(x.slice(1))).join(" ");
console.log(ans);

