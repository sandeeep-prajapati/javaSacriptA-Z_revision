let numbers = [2, 4, 7, 9];
numbers.forEach(x => console.log(x));
console.log('----------------')

numbers.forEach(x=>console.log((x%2 ==0)))
console.log('++++++++++++++++++++++')
//iterator
let iter = numbers[Symbol.iterator]();
console.log(iter.next().value);
console.log(iter.next().value);

console.log('-------------------------')

// entries (return position and value of each item)
let ent = numbers.entries();
console.log(ent.next().value);
console.log(ent.next().value);
console.log(ent.next().value);

console.log('++++++++++++++++++++++++++++++')
// keys (return keys of array and done which will be true when iteration is complete)
let keys = numbers.keys();
console.log(keys.next())
console.log(keys.next())
console.log(keys.next())
console.log(keys.next())
console.log(keys.next())
console.log(keys.next())
