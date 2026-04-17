// NonRepeatingCharacters.js
let s = "programming";

for(let ch of s){
    if (s.indexOf(ch)===s.lastIndexOf(ch)) {
        console.log(ch);
        
    }
}



// let fre = {};
// s = s.toLocaleLowerCase();
// s.split("").forEach(x => {
//     if(fre[x]){
//         fre[x]++;
//     }
//     else {
//         fre[x] = 1;
//     }
// });

// for(let ele in fre){
//    if(fre[ele]==1){
//     console.log(ele);
//    }
// }



