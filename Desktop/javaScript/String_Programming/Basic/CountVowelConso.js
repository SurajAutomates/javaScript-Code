let s = "Hello World";
let vowelCount = 0;
let consonantCount = 0;
s = s.toLocaleLowerCase();
s.split("").forEach(x => {
    if(x>='a'&&x<='z'){
        if(x=='a'||x=='e'||x=='i'||x=='o'||x=='u'){
            vowelCount++;
        }
        else{
            consonantCount++;
        }
    }
});
console.log("VowelCount: "+ vowelCount);
console.log("ConsonantCount: "+ consonantCount);

