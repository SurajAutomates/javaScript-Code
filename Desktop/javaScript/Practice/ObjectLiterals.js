let obj = {
    name : "Shambhu",
    age : 26,
    job : {
        companyName : "TestYantra",
        designation : "QA Engineer",
        location : ["Mumbai","Pune","Bangaluru","Chennai"],
        experience : 3.6
    },
    native : "Bidar",
    state : "Karnataka",
    behaviour(){
        console.log("Chill vibe only...");
    }
}
// To print object 
console.log(obj);
// To print object data one by one
console.log(`name is : ${obj.name}`);
console.log(`age is : ${obj.age}`);
console.log(`native is : ${obj.native}`);
console.log(`state is : ${obj.state}`);
obj.behaviour()
// to print job details
console.log();
console.log("---job details---");
console.log(`company name is: ${obj.job.companyName}`);
console.log(`Designation is: ${obj.job.designation}`);
console.log(`location is: ${obj.job.location}`);
console.log(`experience is: ${obj.job.experience}`);

// To modify Experience
obj.job.experience = 4.2
console.log(`experience is: ${obj.job.experience}`);

// To delete state information

delete obj.state

console.log(obj);

console.log(obj.job.location[0]);

console.log();


// To print all the keys one by one
for (let key in obj) {
    console.log(key);
}

// To print All key-values one by one 
for(let key in obj){
    console.log(key +" : "+ obj[key]);
    
}
