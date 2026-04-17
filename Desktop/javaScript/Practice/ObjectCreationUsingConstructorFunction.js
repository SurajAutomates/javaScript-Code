function Person(name, age) {
    this.name = name;
    this.age = age;
    this.speak = function(){
        console.log("bolne lagiiiiiiiii ")
    }
}

let obj1 = new Person("brahma",27)
console.log(`name is ${obj1.name}`);
console.log(`age is ${obj1.age}`);
obj1.speak()


let obj2 = new Person("shambhu",26)
console.log(`name is ${obj2.name}`);
console.log(`age is ${obj2.age}`);
obj2.speak()

// function constructor for one constructor perform multiple behaviours
function Person2(multipleBehavious){
    this.multipleBehavious = multipleBehavious
}

let obj3 = new Person2("StringData")
let obj4 = new Person2(10)
let obj5 = new Person2(false)
let obj6 = new Person2(10.5)
let obj7 = new Person2([10,20,30])
let obj8 = new Person2(()=>{console.log("Function")
     return 10})

console.log(`behaves like String ${obj3.multipleBehavious}`);
console.log(`behaves like Number ${obj4.multipleBehavious}`);
console.log(`behaves like Boolean ${obj5.multipleBehavious}`);
console.log(`behaves like Double ${obj6.multipleBehavious}`);
console.log(`behaves like Array ${obj7.multipleBehavious}`);
console.log(`behaves like Function ${obj8.multipleBehavious()}`);



