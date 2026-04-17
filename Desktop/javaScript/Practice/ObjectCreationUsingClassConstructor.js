class Employee {
    constructor(name,age,salary){
        this.name = name
        this.age = age
        this.salary = salary
    }

    employeeDetails(){
        console.log(`name is ${this.name}`);
        console.log(`age is ${this.age}`);
        console.log(`salary is ${this.salary}`);
    }
}

let obj1 = new Employee("brahma",27,574638937)
obj1.employeeDetails()

console.log();


let obj2 = new Employee("Shambhu",26,328937)
obj2.employeeDetails()