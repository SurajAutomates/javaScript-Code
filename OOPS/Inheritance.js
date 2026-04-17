class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person {
    #sal;
    constructor(id,name,age,sal){
        super(name,age);
        this.id = id;
        this.#sal = sal;
    }
    getSal(){
        return this.#sal;
    }
    employeeDetails(){
        console.log(`the name of employee is ${this.name} `);
        console.log(`the age of employee is ${this.age}`);
        console.log(`the id of employee is ${this.id}`);
        console.log(`the sal of employee is ${this.getSal()}`);
    }
}

let emp1 = new Employee(1,"Brahma",26,98765);
emp1.employeeDetails();