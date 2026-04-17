let arr = [1,2,3,4];

let res1 = arr.filter(x => x>2).map(x => x*2);
console.log(res1);

let res2 = arr.map(x => x*2).filter( x=> x>5);
console.log(res2);

