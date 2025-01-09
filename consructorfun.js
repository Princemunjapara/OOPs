function Person (fname , lname , contact){

    this.fname = fname;
    this.lname = lname;
    this.contact = contact;

    this.getName = function(){
        console.log(this.fname , this.lname);
        
    }

    this.getContact = function(){
        console.log(this.contact);
        
    }
}

const p1 = new Person("prince","munjapara",98989898);
const p2 = new Person("milan","munjapara", 13131363);
const p3 = new Person("vihan","munjapara",77452584);


console.log(p1);
console.log(p2);
console.log(p3);

p1.getContact();
p2.getName();