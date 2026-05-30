
const a = 4

console.log("the number is "+a)

let marks = [34, 45, 56, 67, 78, 11]

for(let i=0; i<marks.length; i++){
    console.log("the marks are "+marks[i])
}

const totalMarks = marks.reduce((prev, curr) => prev + curr, 0)
console.log("the total marks are "+totalMarks)

const averageMarks = totalMarks / marks.length
console.log("the average marks are "+averageMarks)

const findEvenMarks = marks.filter(mark => mark % 2 ===0)
console.log("the even marks are "+findEvenMarks)

//returning an updated array from an array using map function
const addMarksBy10 = marks.map(mark => mark + 10)
console.log("the marks after adding 10 are "+addMarksBy10)

marks.forEach((mark, index) => {
    console.log(`Mark ${index + 1}: ${mark}`);
});


let marksOrder = marks.sort((a, b) => a - b)
console.log("the marks in ascending order are "+marksOrder)

let marksOrderDescending = marks.sort((a, b) => b - a)
console.log("the marks in descending order are "+marksOrderDescending)



function capitalizeNames(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
let names=["aliCe", "johN", "mark"]
const newNames = names.map(capitalizeNames)

console.log(newNames)