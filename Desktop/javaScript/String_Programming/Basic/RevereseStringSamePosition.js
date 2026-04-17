let str = "hello Brahma";
let ans = str.split(" ").map(x=>x.split("").reverse().join("")).join(" ");
console.log(ans);

