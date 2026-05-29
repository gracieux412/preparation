const a = 4

console.log("the number is "+a)

let marks = [34, 45, 56, 67, 78]

for(let i=0; i<marks.length; i++){
    console.log("the marks are "+marks[i])
}

const totalMarks = marks.reduce((prev, curr) => prev + curr, 0)
console.log("the total marks are "+totalMarks)