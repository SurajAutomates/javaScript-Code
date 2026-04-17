// IMP NOTE : We can not write multiple type of functions


// (function (){
//     console.log("First method")
// })()

//----------------------------
(function (a){
    if(a%2==0){
        console.log(a+" is a even number");
    }
    else {
        console.log(a+" is a odd number")
    }
})((10))

//----------------------------
let fun3 = ((a,b) => a+b)(10,20)
console.log(fun3);

//----------------------------

let fun4 = (function(a,b){
    console.log(a-b)
})(20,5)

//----------------------------

let fun5 = (function demo(){
    console.log("Function 5 start");
})()
