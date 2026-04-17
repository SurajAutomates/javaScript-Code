let arr = [11, 12,13,15,17];
arr.forEach(x=> {
    let flag = true;
    for(let i =2;i<=x/2;i++){
        if(x%i==0){
            flag = false;
            break;
        }
    }
    if(flag){
        console.log(x);
    }
})