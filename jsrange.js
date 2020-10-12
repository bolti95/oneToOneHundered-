//three ways to print 1 to 100 in JavaScript

let numbers = []
for (let i = 1; i <= 100; i++) {
    numbers.push(i)
}
console.log(numbers)


let numbersTwo = Array(100).fill().map(function(v, i) { return i + 1; })
console.log(numbersTwo)


let numbersThree = Array(100).fill().map((v, i) => i + 1)
console.log(numbersThree)