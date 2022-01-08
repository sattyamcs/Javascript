// Inheritance in JS means that a class can use the properties and method of its parent class

class employee{//Base Class
    
    constructor(name){
        this.usedName=name // var inside methods is declares with this.
        console.log("This is the base class " +  this.usedName);
    }
    info(){//Protoype method
        console.log("This is a prototype method" + this.usedName)

    }
}

class manager extends employee{// Derived Class
    // constructor(name){
    //     super(); //used to call constructor of the super class
    //     console.log("This is the derived class " +  name);
    // }
    info(){//Protoype method
        console.log("This is a prototype method" + this.usedName)

    }
}

// let a = new employee();
 let a = new manager("Sattyam Chauhan"); // HEre this object will access the properties and methods of base class
 a.info();


