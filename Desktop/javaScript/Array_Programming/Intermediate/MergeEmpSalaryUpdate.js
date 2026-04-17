// MergeEmpSalaryUpdate.js
let empNames = ["Brahma","Shambhu","Kp","Suraj"];
let empSalary = [30000, 40000, 50000, 60000];

let searchName = "Shambhu";

let res = empNames.map((name,index)=>{
    let sal = empSalary[index];

    if(searchName === name ){
        sal = sal + sal *0.30;
    }
    return {
        name : name,
        sal : sal
    }
});

console.log(res);
