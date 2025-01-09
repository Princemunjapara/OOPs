// console.log("Abstraction js example'");

// class employee{
//     constructor(name,age,salary){
//         this.name = name
//         this.age = age
//         this.salary = salary

//         this.getuserdetails = function(){
//             console.log(this.name+"age is"+this.age);
            
//         }
//         this.bonus = 5000;
//         this.finalsalary = function(){
//             let final = this.salary+this.bonus;
//             console.log("final salary is "+final)
//         }
//     }
// }

// const emp1 = new employee("prince",21,18000);

// console.log(emp1);
// emp1.getuserdetails();
// emp1.finalsalary();


// with Abstraction

console.log("Abstraction js example'");

class employee{
    constructor(name,age,salary){
        this.name = name
        this.age = age
        this.salary = salary

        this.getuserdetails = function(){
            console.log(this.name+"age is"+this.age);
            
        }
        let bonus = 5000;
        let finalsalary = function(){
            let final = salary + bonus;
            console.log("final salary is "+final)
        }
    }
}

const emp1 = new employee("prince",21,18000);

console.log(emp1);
