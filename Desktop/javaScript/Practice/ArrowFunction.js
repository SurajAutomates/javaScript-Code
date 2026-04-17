let fun1 = ()=>console.log("Function 1 start");

let fun2 = a => console.log("The value of variable is "+ a);

/*
    function fun2(a){
        console.log("The value of variable is "+ a);
    }
*/

let fun3 = (a,b) => a+b // automatically used return statement here
/*
    function fun3(a,b){
        return a+b
    }
 */

let fun4 = (a,b) => console.log(a+b);

let fun5 = a => {
    if(a%2==0){
        console.log(a+" is a even number")
    }
    else {
        console.log(a+" is a odd number");
    }
}

let fun6 = (a,b) => {return a-b}


fun1()

fun2(5)

console.log(fun3(5,10));

fun4(3,6)

fun5(6)

let ans = fun6(10,5)
console.log(ans);



