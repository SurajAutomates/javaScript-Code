function Employee (id , name , salary){
    this.id = id;
    this.name = name;
    this.salary =  salary;
}
function employeeDetails(designation , location) {
    console.log("id: "+ this.id);
    console.log("name: "+ this.name);
    console.log("salary: "+ this.salary);
    console.log("designation: "+ designation);
    console.log("location: "+ location);
}

let emp1 = new Employee(1,"brahma",987653);
let emp2 = new Employee(2,"shambhu",356272);
let emp3 = new Employee(3,"kp",425615);

employeeDetails.call(emp1,"CEO","Bangaluru");
console.log();
employeeDetails.apply(emp2,["QA tester","Bidar"]);
console.log();
let bindFunction = employeeDetails.bind(emp3,"Developer","Kolhapur");
bindFunction();



