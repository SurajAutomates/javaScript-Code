let fun1 = function(){
    console.log("function start")
}

let fun2 = function(a,b){
    return a+b;
}

let fun3 = function(a,b){
    console.log(a-b);
}

fun1();
let ans = fun2(10,20);  
console.log(ans);
console.log(fun2(10,34))
fun3(10,20);

console.log(fun1());

