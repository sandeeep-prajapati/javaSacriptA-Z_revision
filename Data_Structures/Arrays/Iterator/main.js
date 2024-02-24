let a = [-5, -4, -3];
let b = 0;
let c = [12, 13, 14];

let result = a.concat(b,c)
console.log(result)

console.log('-------------')
let numbers = [2,3,4,5,6,7,8]
let isEven =(num)=>{
    if(num%2 ==0){
        console.log(`number ${num} is even`)
        return true
    }
    else{
        console.log(`number ${num} is odd`)
        return false
    }
}

// loop until function returns "false"
numbers.every(isEven);
console.log('+++++++++++++++++++++++++++')

numbers.forEach(isEven)
console.log('-------------------')
numbers.some(isEven);
console.log('-------------------')

var buckysMap = numbers.map(isEven);
console.log(buckysMap);
console.log('-------------------')

var buckysFilter = numbers.filter(isEven);
console.log(buckysFilter);