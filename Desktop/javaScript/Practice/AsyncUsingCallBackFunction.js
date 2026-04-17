function launchURL(cbSelectElement,cbCart,cbLogout,cbcloseBrowser){
    setTimeout(() => {
        console.log("open browser and launch url");
        cbSelectElement(cbCart,cbLogout,cbcloseBrowser);
    }, 2000);
}
function selectElement(cbCart,cbLogout,cbcloseBrowser){
    setTimeout(()=> {
        console.log("identify element and select");
        cbCart(cbLogout,cbcloseBrowser);
    },1000);
}
function cart(cbLogout,cbcloseBrowser){
    setTimeout(() => {
        console.log("add to cart");
        cbLogout(cbcloseBrowser);
    }, 3000);
}
function logout(cbcloseBrowser){
    setTimeout(()=> {
        console.log("logout from account");
        cbcloseBrowser();
    },1000)
}
function closeBrowser(){
    setTimeout(() => {
        console.log("close browserr");
    }, 2000);
}
launchURL(selectElement,cart,logout,closeBrowser);