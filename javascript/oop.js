class RegisterStudent{
    constructor(studentName, studentAge, studentRegistrationNumber, nextOfKin){
        this.studentName = studentName
        this.studentAge = studentAge
        this.studentRegistrationNumber = studentRegistrationNumber
        this.nextOfKin = nextOfKin
    }
    getName(){
        console.log(this.studentName)
        
    }
}

let obj = new RegisterStudent("Kilo",34, "338383","Chris")
obj.getName()
console.log(obj.studentAge)