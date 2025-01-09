class Person{
    constructor(fname,lname,contact){
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
    }

    getContact(){
        console.log(this.contact);
        
    }

    getName(){
        console.log(this.fname , this.lname);
        
    }
}

const p1 = new Person("prince","munjapara",8383888383);
const p2 = new Person("milan","munjapara",88383839);
const p3 = new Person("vihan","munajapara", 8888777);

console.log(p1);
p1.getContact();
p3.getName();
