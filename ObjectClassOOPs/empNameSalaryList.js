class employee{
    constructor(name,age,salary){
        this.empName=name;
        this.empAge=age;
        this.empSalary=salary;
        console.log("constructor method created with employee details")
    }
    info(){
        document.write(`<h3> Employee List</h3></br>
                        name:${this.empName}</br>
                        age:${this.empAge}</br>
                        salary:${this.empSalary}`)
    }
}

class manager extends employee{
    
    info(){
        let ta=300;
        let pa=200;
        let totalSalary= this.empSalary+ ta +pa;
        document.write(`<h3> Manager Class</h3></br>
                        name:${this.empName}</br>
                        age:${this.empAge}</br>
                        salary:${totalSalary}`)
    }
}
let a = new employee("Anshu Dubey",25,2000);
let b = new manager("Sattyam",25,40000);
a.info();
b.info();