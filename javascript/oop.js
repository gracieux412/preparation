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

// a class that handles principal interest and compound interest
//compound interest is used when the interest is calculated on the initial principal and also on the accumulated interest of previous periods of a deposit or loan. Simple interest is used when the interest is calculated only on the initial principal amount, and it does not take into account any interest that has been added to the principal over time.
// compound interest is calculated using the formula A = P(1 + r/n)^(nt) where A is the amount, P is the principal, r is the annual interest rate, n is the number of times that interest is compounded per year, and t is the time the money is invested for in years. The simple interest is calculated using the formula I = P * r * t where I is the interest, P is the principal, r is the annual interest rate, and t is the time the money is invested for in years.
class Interest{
    constructor(principal, rate, time){
        this.principal = principal
        this.rate = rate
        this.time = time
    }  
    calculateSimpleInterest(){
        return (this.principal * this.rate * this.time) / 100
    }          
    calculateCompoundInterest(){
        return this.principal * (Math.pow((1 + this.rate / 100), this.time)) - this.principal
    }
}
//object creation
let interestObj = new Interest(1000, 5, 2)
console.log("the simple interest is "+interestObj.calculateSimpleInterest())
console.log("the compound interest is "+interestObj.calculateCompoundInterest())