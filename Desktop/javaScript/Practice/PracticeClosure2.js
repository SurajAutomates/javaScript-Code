var a = 10
let b = 20
function shambhu(){
    let shambuVar = 30
    console.log("variable access from shambu function: "+ a +" "+b+" "+shambuVar);
    function brahma(){
        let brahmaVar = 40
        console.log("variable access from brahma function: "+ a +" "+b+" "+shambuVar+" "+ brahmaVar);
        function kp() {
          let kpVar = 50
          console.log("variable access from kp function: "+ a +" "+b+" "+shambuVar+" "+ brahmaVar+" "+ kpVar);
            
        }
        return kp
    }
    let innerCall = brahma();
    innerCall()
    //  return brahma();
}
let ans = shambhu()

//console.log(ans);


