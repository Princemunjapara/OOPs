
// Step 1 

const p1 = {
    fname: 'prince',
    lname: 'munjapara',

    getFullname(){
        return `${this.fname} ${this.lname}`;
    },
}

const p2 = Object.create(p1);

console.log(p1.fname);
console.log(p2.lname);
console.log(p2.getFullname());


// step 2 inheritance with proto

const d1 = {
    xp1: "i am inside p1",
}

const d2 = {
    xp2: "i am inside p2",
    __proto__: d1,
};

const d3 = {
    xp3: "i am inside p3",
    __proto__:d2,
}


console.log(d3.xp1);
console.log(d2.xp1)


// step 3 use class prototype


class Student {
    constructor(){

    }
    getName(){
       console.log("hello prototype");
       
    }
}

const s1 = new Student();
const s2 = {__proto__ : Student.prototype};

console.log(s2.getName);


