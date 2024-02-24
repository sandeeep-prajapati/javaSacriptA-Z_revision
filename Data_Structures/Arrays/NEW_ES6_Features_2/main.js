let numbers = [2,4,7,9]

let numbers2 = Array.from(numbers)
console.log(numbers2)

let numbers3 = [2,3,4,5,6,7]
numbers3.fill(0)
console.log(numbers3)
// we can pass in the starting index as a second parameter
let tuna = [1,2,3,4,5]
tuna.fill(68,2)
console.log(tuna)