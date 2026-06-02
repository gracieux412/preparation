let data = ["101", "Kitsa", 3000]
let [id, name, cost] = data

console.log(id)
console.log(name)
console.log(cost)

let studentDetails = {
    "studentId":"101012",
    "studentName":"Allan",
    "age":34
}
let {studentId, studentName, age} = studentDetails
console.log(studentId)
console.log(studentName)
console.log(age)

console.log(studentDetails.age)

// ===================================================
// using the spreading operator (updating status and merge arrays and objects)

const init = {
    "due": 500,
    "isCreditSale": true
}

const paidRecords = {
    ...init,
    "isCreditSale":false,
    "location": "soroti"
}

console.log(paidRecords)

// merging arrays

let array1 = [23, 45, 23, 53, 55]
let array2 = [34, 68, 23, 57, 90]

let newArray = [...array1, ...array2, 890]
console.log(newArray)
console.log(newArray.length)
console.log("the last item in the new array is "+newArray.pop())
console.log(`the appended item in the new array ${newArray.push(34)}`)
console.log("array new length is "+newArray.length)
console.log(newArray)