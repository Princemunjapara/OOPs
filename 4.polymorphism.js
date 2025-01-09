class Animal {
    speck(){
        console.log("animal sound");
        
    }
}

class Cat extends Animal {
    speck(){
        console.log("cat sound");
        
    }
}

class Dog extends Animal {
    speck(){
        console.log("dog sound");
        
    }
}

var cat = new Cat();
var dog = new Dog();

cat.speck();
dog.speck();