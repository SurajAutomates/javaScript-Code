function add(x,y,cbSub,cbResult){
    let addAns = x+y
    cbSub(x,y,cbResult,addAns); 
}

function sub(x,y,cbResult,addAns){
    let subAns = y-x
    cbResult(addAns,subAns)
}

function result(addAns , subAns){
    console.log("Addition ans: "+ addAns);
    console.log("Sub ans: "+ subAns); 
}

add(10,20,sub,result);